from flask import Flask, render_template
# import the Connector function
from mysqlconnection import MySQLConnector
app = Flask(__name__)
# connect and store the connection in "mysql" note that you pass the database name to the function
mysql = MySQLConnector(app, 'sakila')
# an example of running a query
print mysql.query_db("SELECT * FROM actor")

@app.route('/')
def index():
    query = "SELECT film.title, film.description, film.release_year, category.name\
            FROM film\
            LEFT JOIN film_category\
            ON film_category.film_id = film.film_id\
            LEFT JOIN category\
            ON category.category_id = film_category.category_id\
            WHERE category.name = 'Comedy'"

    films = mysql.query_db(query)

    return render_template('index.html', films=films)

app.run(debug=True)
