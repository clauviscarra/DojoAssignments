from django.shortcuts import render
from .models import Product

def index(request):
    Product.objects.create(name='Naked3', description='The best eye shadow palette ever.')
    product = Product.objects.all()
    for i in product:
        print i.name, i.description, i.cost

    return render(request, 'products_app/index.html')
# Create your views here.
