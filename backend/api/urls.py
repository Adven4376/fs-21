from django.urls import path, include

urlpatterns = [
    path('courses/', include('courses.urls')),
    path('register/', include('courses.urls_register')),
]
