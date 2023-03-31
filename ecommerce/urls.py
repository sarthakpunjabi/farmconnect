from django.urls import path
from .views import *

urlpatterns = [
    path('',landing_page,name='home'),
    path('shop/',shop_page,name="shop"),
    path('aboutus/',aboutus_page,name="aboutus"),
    path('cart/',cart_page,name="cart"),
    path('contact/',contact_page,name="contact"),
    path("product/<int:pk>/",product_description_page,name="product") 
]