from django.shortcuts import render, redirect

def index(request):
    return render(request, 'landscape_app/index.html')

def image(request, number):

    if int(number) > 1 and int(number) < 10:
        dictionary ={
        'number': 'snow'
        }
        print number
    elif int(number) > 10 and int(number) <20:
        dictionary ={
        'number': 'desert'
        }
    elif int(number) > 20 and int(number) <30:
        dictionary ={
        'number':'forest'
        }
    else:
        dictionary ={
        'number':'vineyard'
        }
    return render(request,'landscape_app/images.html', dictionary)



# Create your views here.
