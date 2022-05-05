from rest_framework import serializers
from .models import Task, Category


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ('pk', 'task_name', 'task_description', 'category', 'task_due_time_date')


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('pk', 'category_name')

