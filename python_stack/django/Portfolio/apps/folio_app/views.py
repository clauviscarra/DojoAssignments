from django.shortcuts import render

def index(request):
    return render(request,'folio_app/index.html')
def testimonials(request):
    return render(request,'folio_app/testimonials.html')# Create your views here.
def about(request):
    return render(request,'folio_app/about.html')

def projects(request):
    return render(request,'folio_app/projects.html')
