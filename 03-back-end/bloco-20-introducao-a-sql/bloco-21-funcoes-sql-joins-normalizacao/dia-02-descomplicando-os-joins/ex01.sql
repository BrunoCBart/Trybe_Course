SELECT * FROM BoxOffice;

SELECT * FROM Movies;

USE Pixar;

SELECT
    m.title, b.domestic_sales, b.international_sales
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id;


SELECT m.title,
 (b.domestic_sales + b.international_sales)
FROM Movies AS m
INNER JOIN BoxOffice as b
ON b.movie_id = m.id
WHERE b.domestic_sales < b.international_sales;

USE Pixar;

SELECT
    m.title, 
    (b.domestic_sales + b.international_sales) AS "Vendas"
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.international_sales > b.domestic_sales;

SELECT title, id, domestic_sales,
international_sales
FROM Movies
INNER JOIN BoxOffice;


SELECT m.title, b.rating FROM Movies as m
INNER JOIN BoxOffice AS b
ON b.movie_id = m.id
ORDER BY rating DESC;


SELECT
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Theater t
        LEFT JOIN
    Movies m ON t.id = m.theater_id
ORDER BY t.name;

SELECT t.id, t.`name`, t.location
 FROM Theater t
	LEFT JOIN
		Movies m
        ON t.id = m.theater_id
        ORDER BY t.`name`;
        
SELECT m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id
 FROM Theater t
RIGHT JOIN Movies m
ON t.id = m.theater_id
ORDER BY m.title;

        



