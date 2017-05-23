from django.shortcuts import render

def index(request):
    return render(request, 'dissapear_app/index.html')# Create your views here.

def ninjas(request):
    return render(request, 'dissapear_app/ninjas.html')

def show(request,color):
    context = {
    'blue': 'Leonardo',
    'red': 'Raphael',
    'purple': 'Donatello',
    'orange':'Michelangelo'
    }


    if color not in context:

        dictionary = {
        'turtle' : 'notapril'
        }
    else:
        dictionary = {
        'turtle' : context[color]
        }

    return render(request, 'dissapear_app/show_ninjas.html', dictionary)
