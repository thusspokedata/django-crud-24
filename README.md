
This repository was created for practice purposes. It utilizes Python and Django for the backend, and TypeScript, React, Tailwind, Shadcn, and React Hook Form for the frontend.

Technologies Used

	•	Backend: Python, Django
	•	Frontend: TypeScript, React, Tailwind CSS, Shadcn, React Hook Form

-------

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

# Create a superuser account for accessing the Django admin interface.
python manage.py createsuperuser

# Install CoreAPI, which is used for generating and interacting with APIs in Django.
pip install coreapi
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
- [Continuing to use CoreAPI](https://www.django-rest-framework.org/community/3.10-announcement/)