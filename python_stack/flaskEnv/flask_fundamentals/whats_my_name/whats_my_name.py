from flask import Flask, render_template, request, redirect
app = Flask(__name__)
@app.route('/')
def form():
    return render_template('process.html')


@app.route('/process', methods = ['POST'])
def process_():
    print "Got Post Info"
    name = request.form['name']

    return render_template('return.html', name = name)

app.run(debug=True)
