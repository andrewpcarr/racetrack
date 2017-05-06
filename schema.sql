create database racetrack_db;

use racetrack_db;

CREATE TABLE races (
    raceId INTEGER NOT NULL AUTO_INCREMENT,
    overall_avg INTEGER,
	city VARCHAR (30),
    state VARCHAR (30),
    country VARCHAR (50),
    venue VARCHAR (50),
    distance VARCHAR (50),
    race_month VARCHAR (30),
    water_type VARCHAR (30),
    swim_start VARCHAR (30),
    bike_course VARCHAR(30),
    run_type VARCHAR(30),
    women_only BOOLEAN DEFAULT FALSE
    );


CREATE TABLE reviews (
    id INTEGER NOT NULL AUTO_INCREMENT,
    atmosphere INTEGER(11),
    swag INTEGER (11),
    aid_stations INTEGER(11),
	clarity INTEGER(11),
    sighting INTEGER(11),
    transition INTEGER (11),
    bike_hills  INTEGER(11),
    road_surface INTEGER(11),
    run_hills INTEGER(11),
    run_shade INTEGER(11),
    overall_rating FLOAT,
    race_again BOOLEAN NOT NULL DEFAULT TRUE,
    highlight TINYTEXT,
    comments TEXT,
    PRIMARY KEY (id)
	raceId INTEGER(11)
);

CREATE TABLE users (
	userID INTEGER NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(100) NOT NULL,
    image LONGBLOB,
    );
