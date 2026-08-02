import logging
from typing import Any

from celery import shared_task
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.utils import timezone

from .models import ContactModel

logger = logging.getLogger(__name__)


@shared_task(bind=True, max_retries=3, retry_backoff=True, retry_kwargs={"max_retry": 3})
def send_contact_confirmation_email(self: Any, contact_id: int) -> None:
    """Send a professional HTML confirmation email to the visitor asynchronously."""
    try:
        contact = ContactModel.objects.get(id=contact_id)

        visitor_subject = "Thank You for Contacting Muhammad Noman"
        from_email = settings.DEFAULT_FROM_EMAIL
        visitor_to = [contact.email]

        visitor_context = {
            "name": contact.name,
            "email": contact.email,
            "message": contact.message,
            "submitted_at": timezone.localtime(contact.date).strftime("%B %d, %Y at %I:%M %p"),
        }

        visitor_html_content = render_to_string("emails/contact_confirmation.html", visitor_context)
        visitor_text_content = strip_tags(visitor_html_content)

        visitor_email = EmailMultiAlternatives(
            subject=visitor_subject,
            body=visitor_text_content,
            from_email=from_email,
            to=visitor_to,
        )
        visitor_email.attach_alternative(visitor_html_content, "text/html")
        visitor_email.send(fail_silently=False)

        owner_email_address = getattr(settings, "OWNER_NOTIFICATION_EMAIL", settings.DEFAULT_FROM_EMAIL)
        owner_subject = "New contact form submission"
        owner_context = {
            "name": contact.name,
            "email": contact.email,
            "message": contact.message,
            "submitted_at": timezone.localtime(contact.date).strftime("%B %d, %Y at %I:%M %p"),
        }
        owner_html_content = render_to_string("emails/contact_owner_notification.html", owner_context)
        owner_text_content = strip_tags(owner_html_content)

        owner_email = EmailMultiAlternatives(
            subject=owner_subject,
            body=owner_text_content,
            from_email=from_email,
            to=[owner_email_address],
        )
        owner_email.attach_alternative(owner_html_content, "text/html")
        owner_email.send(fail_silently=False)

        logger.info("Confirmation email sent to %s and owner notification to %s", contact.email, owner_email_address)
    except ContactModel.DoesNotExist:
        logger.exception("Contact with id=%s not found", contact_id)
        return
    except Exception as exc:
        logger.exception("Failed to send confirmation email for contact id=%s", contact_id)
        raise self.retry(exc=exc)
