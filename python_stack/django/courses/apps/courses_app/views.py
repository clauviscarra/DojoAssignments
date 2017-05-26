from django.shortcuts import render, redirect
from .models import Course

def index(request):
    context = {
    'course': Course.objects.all()
    }
    return render(request,'courses_app/index.html', context)

def add_course(request):
    Course.objects.create(course_name= request.POST['course_name'], description=request.POST['description'])
    return redirect('/')

def reset(request, id_):

    context = {
        'course' : Course.objects.filter(id=id_)
         }


    return render(request,'courses_app/destroy.html', context)

def destroy(request, id_):

    Course.objects.filter(id=id_).delete()
    return redirect('/')
# Create your views here.
