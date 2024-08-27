from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__' # this is to serialize all fields [id, title, description, completed, created_at, updated_at]
        