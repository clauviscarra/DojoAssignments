from flask import Flask, render_template, request, redirect
app = Flask(__name__)

    #On the default page ('localhost:5000'), it should display a view that says "No ninjas here"
    #When user visits /ninja, it should display all four Ninja Turtles (Leonardo, Michelangelo, Raphael, and Donatello)
    #/ninja/[ninja_color], should display the corresponding Ninja Turtle (grab the color parameter out of the requested URL)
        #If user visits /ninja/blue, it should only display the Ninja Turtle Leonardo.
        #/ninja/orange - Ninja Turtle Michelangelo.
        #/ninja/red - Ninja Turtle Raphael
        #/ninja/purple - Ninja Turtle Donatello
        #If a user tries to hack into your web app by specifying a color or string combination other than the colors (Blue, Orange, Red, and Purple), example: /ninja/black or /ninja/123, then display the image notapril.jpg
    #You'll need to remember how to use static files for this assignment. Take a minute to refresh your memory back to the static files section if you need to :)

@app.route('/')

def index():
    print "No Ninjas Here"



app.run(debug=True)
