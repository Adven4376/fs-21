from rest_framework import serializers
from .models import Course, Lecture, Assignment, UserProgress

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class LectureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture
        fields = '__all__'

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = '__all__'

class UserProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProgress
        fields = '__all__'

# class RegisterUser_create(serializers.ModelSerializer):
#     class Meta:
#         model = RegisterUser
#         fields = ['name','email','password','course']