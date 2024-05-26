from django.urls import path
from api.views import register

urlpatterns = [
    path('', register, name='register'),
]
