SELECT name, percentage 
FROM languages
LEFT JOIN countries
ON countries.id = languages.country_id
WHERE language = 'Slovene'
ORDER BY percentage DESC;

SELECT countries.name, COUNT(cities.name) as city
FROM cities
JOIN countries ON countries.id = cities.country_id
GROUP BY countries.name
ORDER BY COUNT(cities.name) DESC;

SELECT cities.name, cities.population
FROM cities 
JOIN countries ON countries.id= cities.country_id
WHERE countries.name = 'Mexico' AND cities.population > 500000;

SELECT name, language, percentage 
FROM languages
LEFT JOIN countries
ON countries.id = languages.country_id
WHERE percentage >= 89
ORDER BY percentage DESC;

SELECT name, surface_area, population 
FROM countries
WHERE surface_area < 501 AND population > 100000
ORDER BY name;

SELECT name, government_form, capital, life_expectancy 
FROM countries
WHERE government_form = 'Constitutional Monarchy' AND capital > 200 AND life_expectancy > 75
ORDER BY name;

SELECT countries.name, cities.name, cities.district, cities.population
FROM cities 
JOIN countries ON countries.id= cities.country_id
WHERE countries.name = 'Argentina' AND cities.district = 'Buenos Aires' AND cities.population > 500000;

SELECT region, COUNT(name) as countries
FROM countries
GROUP BY region
ORDER BY COUNT(countries.name) DESC;
