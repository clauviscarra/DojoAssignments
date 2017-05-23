from flask import Flask, request, redirect, render_template, flash
from mysqlconnection import MySQLConnector

app = Flask(__name__)
app.secret_key="SecretKey!"

mysql = MySQLConnector(app,'sakila')

@app.route('/')
def index():
    # email = mysql.query_db('SELECT LCASE(email) FROM customer')

    return render_template('index.html')

def email_addition():
    query="INSERT INTO new_emails (email, created_at) VALUES (:email, NOW())"
    data={
        'email':request.form['email']
    }
    mysql.query_db(query,data)

@app.route('/email_processing', methods=['POST'])
def email_processing():
    email = mysql.query_db('SELECT LCASE(email) FROM customer')

    if {'LCASE(email)':request.form['email']} in email:
        flash('E-mail is valid!')
        email_addition()
        show_emails = mysql.query_db('SELECT * FROM new_emails' )
        return render_template('success.html', show_emails  =show_emails)

    else:
        email_addition()
        flash('E-mail is not valid!')
        return redirect('/')

# @app.route('/success')
# def success_():
#
#     return render_template('success.html')


app.run(debug=True)
