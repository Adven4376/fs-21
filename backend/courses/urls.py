from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, LectureViewSet, AssignmentViewSet, UserProgressViewSet, register_user

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'lectures', LectureViewSet)
router.register(r'assignments', AssignmentViewSet)
router.register(r'progress', UserProgressViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/',register_user,name='register'),
]
