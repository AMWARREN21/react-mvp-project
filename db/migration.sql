DROP DATABASE IF EXISTS todos_db;

CREATE DATABASE todos_db;

\c todos_db

DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
    todo_id SERIAL PRIMARY KEY,
    todo text,
    completed boolean
);