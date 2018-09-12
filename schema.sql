DROP DATABASE IF EXISTS chilango;

CREATE DATABASE chilango;

USE chilango;

CREATE TABLE comments(
 id int NOT NULL AUTO_INCREMENT,
 description text(100) NOT NULL,
 description2 text(600) NOT NULL,
 PRIMARY KEY (ID)
);
CREATE TABLE likes(
 id int NOT NULL AUTO_INCREMENT,
 likes integer NOT NULL,
 unlikes integer NOT NULL,
 PRIMARY KEY (ID)
);
