from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def greeting():
    return render_template('index.html')

@app.route('/ninjas')
def ninjas():
    return render_template('ninjas.html')

@app.route('/dojos/new')
def dojos_new():
    return render_template('dojos.html')

app.run(debug=True)
# @app.route('/return', methods = ['POST'])
# def return_():
#     print "Got Post Info"
#     name = request.form['name']
#     email = request.form['email']
#     return redirect('dojos/new')
