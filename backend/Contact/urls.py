from django.urls import path
from . import views

urlpatterns=[
    path('api/contact/', views.ContactView.as_view()),
    path('api/contact/<int:pk>/', views.ContactUpdateView.as_view())
]