from flask import Flask, request, redirect, render_template, session
import random
app= Flask(__name__)

app.secret_key='lsdkj'

@app.route('/', methods =['GET', 'POST'])
def index():

    if "random_number" in session:
        return render_template("index.html")
    else:
        session["random_number"]= random.randrange(0,101)
    return render_template("index.html")

@app.route("/guess", methods =['POST'])
def guess():
    print "random number is"
    print session["random_number"]


    guess_number = request.form["guess"]
    message = ""
    print "your guess number is"
    print guess_number

    if int(guess_number)> int(session["random_number"]):
        message ="Sorry too high, try again!"
        return render_template("index.html", message = message)


    elif int(session["random_number"]) > int(guess_number):
        message = "too low!"
        return render_template("index.html", message = message)

    elif int(guess_number) == int(session["random_number"]):
        message = "Perfect!"

    return render_template("winner_index.html", message = message)

app.run(debug=True)
