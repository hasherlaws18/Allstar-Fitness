DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;

USE user_db;

CREATE TABLE Steps (
     weekly INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     Steps VARCHAR(30) NOT NULL
)