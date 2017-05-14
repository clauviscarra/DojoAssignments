from flask import Flask, request, redirect, render_template
app = Flask(__name__)

@app.route('/')
def homepage():
    print "afsdfdsfd"
    return "dafsdfasd"

@app.route('/ninja')
def ninja():
    return "ninjas"
#
# @app.route('/ninja/<color>')
# def ninja_color(color):
#     return "ninja_color"


app.run(debug=True)
