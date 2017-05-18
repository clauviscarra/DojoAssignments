from flask import Flask, request, redirect, render_template
app = Flask(__name__)

@app.route('/')
def homepage():
    #render
    return render_template('index.html')

@app.route('/ninja')
def ninja():
    #render
    return render_template('ninjas.html')

@app.route('/ninja/<color>')
def ninja_color(color):
    # dictionary = {
    # "blue":"Leonardo",
    # "red":"Raphael",
    # "purple":"Donatello",
    # "orange":"Michelangelo"
    #  }
    # if color in dictionary:
    #     image_url="/static/images/" + dictionary[color] + ".jpg"
    #     actor_name=dictionary[color]
    #     return render_template('showninja.html', view_color=color, image_url=image_url, actor = actor_name)
    #
    # else:
    #     image_url="/static/images/notapril.jpg"
    #     return render_template('showninja.html', view_color = color, image_url = image_url)

    if color == "blue":
        image_url = "/static/images/raphael.jpg"
        actor_name ="Leonardo"
    elif color == "red":
        image_url = "/static/images/donatello.jpg"
        actor_name ="Raphael"
    elif color == "purple":
        image_url = "/static/images/leonardo.jpg"
        actor_name ="Donatello"
    elif color == "orange":
        image_url = "/static/images/michelangelo.jpg"
        actor_name ="Michelangelo"
    else:
        image_url = "/static/images/notapril.jpg"
        actor_name= "Not a ninja Turtle!"

    return render_template('showninja.html', view_color=color, image_url=image_url, actor = actor_name)



app.run(debug=True)
