DROP TABLE IF EXISTS vape_users;
DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS ingredients;

BEGIN;
CREATE TABLE vape_users(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL UNIQUE
);


CREATE TABLE recipes(
  id SERIAL PRIMARY KEY,
  recipe_name TEXT NOT NULL,
  nicotine INT NOT NULL,
  soft_deleted CHAR(1) CHECK (soft_deleted IN('1', '2')),
  size INT NOT NULL
  );

CREATE TABLE ingredients(
  id SERIAL PRIMARY KEY,
  flavor TEXT NOT NULL,
  ref_id INT REFERENCES recipes(id),
  measurements INT NOT NULL
  );

COMMIT;
