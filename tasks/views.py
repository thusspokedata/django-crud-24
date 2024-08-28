from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# This viewset automatically provides `list`, `create`, `retrieve`, `update`, and `destroy` actions for the Task model.
class TaskViewSet(viewsets.ModelViewSet):
    # `queryset` defines the set of data that will be returned by this view. In this case, it retrieves all Task objects from the database.
    queryset = Task.objects.all()
    
    # `serializer_class` specifies the serializer that should be used to convert the Task objects to and from JSON format.
    serializer_class = TaskSerializer