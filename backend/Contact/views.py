from django.shortcuts import render

from .models import ContactModel
from .serializers import ContactSerializer
from rest_framework import generics
# Create your views here.

class ContactView(generics.ListCreateAPIView):
    queryset=ContactModel.objects.all()
    serializer_class=ContactSerializer

class ContactUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset=ContactModel.objects.all()
    serializer_class=ContactSerializer

