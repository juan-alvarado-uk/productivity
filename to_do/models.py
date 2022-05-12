from django.db import models


# Create your models here.
class Category(models.Model):
    category_name = models.CharField(max_length=200)

    def __str__(self):
        return self.category_name


class Task(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    task_name = models.CharField(max_length=200)
    task_description = models.CharField(max_length=800)
    task_due_time_date = models.DateTimeField()

    def __str__(self):
        return self.task_name
