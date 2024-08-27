from django.contrib import admin
from .models import Task

# This will make the Task model visible on the admin page
admin.site.register(Task)