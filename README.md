```py
# Create a virtual environment named 'venv' to isolate project dependencies.
python -m venv venv

# Install Django in the virtual environment.
pip install django

# Create a new Django project named 'django_crud_api' in the current directory.
django-admin startproject django_crud_api .

# Start the Django development server to run the application locally.
python manage.py runserver

# Create a new Django app named 'tasks' within the project.
python manage.py startapp tasks

# Apply initial migrations to set up the database schema.
python manage.py migrate

# Upgrade pip to the latest version.
pip install --upgrade pip

# Install Django REST framework for building APIs.
pip install djangorestframework

# Install django-cors-headers to manage CORS (Cross-Origin Resource Sharing) in your Django project.
pip install django-cors-headers

# Create migrations for the 'tasks' app, preparing the database schema based on the models.
python manage.py makemigrations tasks

# Apply the migrations for the 'tasks' app to update the database schema.
python manage.py migrate tasks

python manage.py createsuperuser 
```

panel administrador:
```
http://127.0.0.1:8000/admin/
```

    # To create an API, we often need to serialize our models.
    # Serialization involves converting Django model instances or QuerySets
    # into JSON or other formats that can be sent over the web. 
    # This is typically handled by Django REST Framework serializers, 
    # which need to be defined separately.

- [Django Rest Framework](https://www.django-rest-framework.org/#installation)
- [Django Cors Headers](https://pypi.org/project/django-cors-headers/)