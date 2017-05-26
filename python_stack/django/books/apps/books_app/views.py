from django.shortcuts import render, redirect, HttpResponse
from .models import Book

def index(request):
    context={
    'books': Book.objects.all(),
    }
    return render(request, 'books_app/index.html', context)

def books(request):
    Book.objects.create(title=request.POST['title'], category=request.POST['category'], author=request.POST['author'])

    return redirect('/')

# Create your views here.
