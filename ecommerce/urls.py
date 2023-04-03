from django.urls import path
from .views import *

urlpatterns = [
    path('',landing_page,name='home'),
    path('shop/',shop_page,name="shop"),
    path('aboutus/',aboutus_page,name="aboutus"),
    path('cart/',cart_page,name="cart"),
    path('contact/',contact_page,name="contact"),
    path("product/<int:pk>/",product_description_page,name="product"),
    path("checkout/",checkout_page,name="checkout"),
    path("placed/",order_placed_page,name="placed"),
    path('store/add-to-cart/<int:product_id>/', add_to_cart, name='add_to_cart'),
    path('update_item/',updateItem,name="updateItem")
     
]