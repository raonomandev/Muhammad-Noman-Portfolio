import logging

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from .models import ContactModel
from .serializers import ContactSerializer
from .tasks import send_contact_confirmation_email

logger = logging.getLogger(__name__)


class ContactView(generics.CreateAPIView):
    serializer_class = ContactSerializer

    def perform_create(self, serializer):
        contact = serializer.save()

        try:
            send_contact_confirmation_email.delay(contact.id)
        except Exception:
            logger.exception(
                "Failed to enqueue confirmation email for contact id=%s",
                contact.id,
            )
            try:
                send_contact_confirmation_email(contact.id)
            except Exception:
                logger.exception(
                    "Failed to send confirmation email directly for contact id=%s",
                    contact.id,
                )


class ContactUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactModel.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [IsAdminUser]

