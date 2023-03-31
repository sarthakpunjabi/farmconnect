from django.shortcuts import render
from .models import Product,Subscribers
# Create your views here.

def landing_page(request):
    if request.method=='POST':
        data = request.POST["email"]
        sub_save = Subscribers(email=data)
        sub_save.save()
        
    featured_products = Product.objects.order_by('numReviews')[:4]
    best_selling_products = Product.objects.order_by('rating')[:15]
    limited_products = Product.objects.filter(countInStock__lt=10)
    context = {
        'featured':featured_products,
        'bestsellers':best_selling_products,
        'limitedtime':limited_products
    }

    return render(request,'home/index.html',context)

def shop_page(request):
    fruits = Product.objects.filter(category="fruits")
    vegetables = Product.objects.filter(category="vegetables")
    crops = Product.objects.filter(category="crops")
    sales = Product.objects.filter(category="sales")
    context = {
        'fruits':fruits,
        'vegetables':vegetables,
        'crops':crops,
        'sales':sales
    }
    return render(request,'home/shop.html',context)

def aboutus_page(request):
    return render(request,'home/aboutus.html')

def cart_page(request):
    return render(request,'home/cart.html')

def contact_page(request):
    return render(request,'home/contact.html')


def product_description_page(request,pk):
    product = Product.objects.get(pk=pk)
    print(product)
    context = {
        "product":product
    }
    return render(request,'home/description.html')