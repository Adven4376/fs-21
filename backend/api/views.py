from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from courses.models import Course
from courses.serializers import UserSerializer

@api_view(['POST'])
def register(request):
    try:
        data = request.data
        user = User.objects.create_user(
            username=data['email'],
            password=data['password'],
            email=data['email'],
            first_name=data['name']
        )
        course = Course.objects.get(name=data['course'])
        user.profile.course = course
        user.profile.save()
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
