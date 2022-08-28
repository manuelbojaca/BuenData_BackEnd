CREATE DATABASE buendata;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    birthday VARCHAR(40),
);

INSERT INTO users (name, birthday, id_num)
    VALUES 
        ('manuel', '10/04/1992'),
        ('valentina', '01/12/1995');