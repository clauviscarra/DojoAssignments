from django.shortcuts import render
from .models import Book

def index(request):
    return request(render, 'books_app/index.html')

# Create your views here.
