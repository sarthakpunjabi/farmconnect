import json
from django.http import JsonResponse
from django.shortcuts import render
from .models import OrderItem, Product,Subscribers,Order
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail

# Create your views here.

def landing_page(request):
    if request.method=='POST':
        data = request.POST["email"]
        send_mail(
            'Thank you for subscribing',
            'Thank you for subscribing we are delighted you join our community discounts are on your way you will be notified via email .',
            'ayushpunjabi77@gmail.com',
            [data],
            fail_silently=False,
        )
        
        sub_save = Subscribers(email=data)
        sub_save.save()
        
    featured_products = Product.objects.order_by('numReviews')[:4]
    best_selling_products = Product.objects.order_by('rating')[:15]
    limited_products = Product.objects.filter(countInStock__lt=10)
    try:
        order_item_count = OrderItem.objects.filter(order__user=request.user).count()
    except:
        order_item_count = 0
    context = {
        'featured':featured_products,
        'bestsellers':best_selling_products,
        'limitedtime':limited_products,
        'order_item_count':order_item_count
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
    if request.user.is_authenticated:
        order,created = Order.objects.get_or_create(user=request.user , isDelivered=False)
        items = order.orderitems.all()
    else:
        items = []
        order = {'get_cart_total':0 , 'get_cart_items':0}
    
    context = {'items':items , 'order':order}
    return render(request,'home/cart.html',context)

def contact_page(request):
    return render(request,'home/contact.html')


def product_description_page(request,pk):
    product = Product.objects.get(pk=pk)
    context = {
        "product":product
    }
    return render(request,'home/description.html',context)

@login_required
def checkout_page(request):
    return render(request,'home/checkout.html')

def order_placed_page(request):
    return render(request,'home/orderplaced.html')

def add_to_cart(request, product_id):
    # product = get_object_or_404(Product, _id=product_id)
    # cart = request.session.get('cart', {})
    # cart[product_id] = cart.get(product_id, 0) + 1
    # request.session['cart'] = cart
    
    # return JsonResponse({'success': True})
    pass


def updateItem(request):
    data = json.loads(request.body)
    productId = data['productID']
    action = data['action']

    product = Product.objects.get(_id=productId)
    order,created = Order.objects.get_or_create(user=request.user , isDelivered=False)
    orderItem, created  = OrderItem.objects.get_or_create(order=order , product=product)

    if action == 'add':
        orderItem.qty = (orderItem.qty + 1)
    elif action == 'remove':
        orderItem.qty = (orderItem.qty - 1)

    orderItem.save()
    
    if orderItem.qty <= 0:
        orderItem.delete()


    return JsonResponse('item was added',safe=False)