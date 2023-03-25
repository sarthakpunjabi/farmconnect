from django.urls import path
from .views import HomeView

urlpatterns = [
    path('h1/',HomeView,name='home'),
    
]