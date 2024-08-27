from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    # This method will display the title of the Task in the admin interface, 
    # making it easier to identify each task by its title.
    def __str__(self):
        return self.title