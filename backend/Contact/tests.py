from unittest.mock import patch

from django.core import mail
from django.test import override_settings
from rest_framework.test import APITestCase

from .models import ContactModel
from .tasks import send_contact_confirmation_email


@override_settings(
    EMAIL_BACKEND="django.core.mail.backends.locmem.EmailBackend",
    OWNER_NOTIFICATION_EMAIL="owner@example.com",
)
class ContactEmailFlowTests(APITestCase):
    def test_contact_submission_saves_contact_and_enqueues_confirmation_task(self):
        with patch("Contact.views.send_contact_confirmation_email.delay") as mock_delay:
            response = self.client.post(
                "/api/contact/",
                {
                    "name": "Jane Doe",
                    "email": "jane@example.com",
                    "message": "Hello from the test suite.",
                },
                format="json",
            )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(ContactModel.objects.count(), 1)

        contact = ContactModel.objects.get()
        mock_delay.assert_called_once_with(contact.id)

    def test_confirmation_task_sends_professional_email(self):
        contact = ContactModel.objects.create(
            name="Jane Doe",
            email="jane@example.com",
            message="Hello from the test suite.",
        )

        send_contact_confirmation_email(contact.id)

        self.assertEqual(len(mail.outbox), 2)

        visitor_email = mail.outbox[0]
        owner_email = mail.outbox[1]

        self.assertEqual(visitor_email.subject, "Thank You for Contacting Muhammad Noman")
        self.assertEqual(visitor_email.to, [contact.email])
        self.assertIn("Hi Jane Doe", visitor_email.body)
        self.assertIn("I have successfully received your message and will respond within 24–48 hours.", visitor_email.body)

        self.assertEqual(owner_email.to, ["owner@example.com"])
        self.assertIn("New contact form submission", owner_email.subject)
        self.assertIn("Jane Doe", owner_email.body)
        self.assertIn("jane@example.com", owner_email.body)
        self.assertIn("Hello from the test suite.", owner_email.body)
