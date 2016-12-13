DROP TABLE IF EXISTS vape_users CASCADE;
DROP TABLE IF EXISTS recipes CASCADE;
DROP TABLE IF EXISTS ingredients CASCADE;
DROP TABLE IF EXISTS recipes_ingredients CASCADE;

BEGIN;
CREATE TABLE vape_users(
  user_id SERIAL PRIMARY KEY, --user id
  username VARCHAR NOT NULL UNIQUE, --user name
  password VARCHAR NOT NULL UNIQUE --user password
);

CREATE TABLE recipes(
  recipe_id SERIAL PRIMARY KEY, --recipe unique
  user_id INT REFERENCES vape_users, -- refrence user id
  recipe_name TEXT NOT NULL, --recipes name
  nicotine INT NOT NULL, --nicotine input
  soft_deleted CHAR(1) CHECK (soft_deleted IN('1', '2')), --soft deleted or not
  size INT NOT NULL --bottle size
  );

CREATE TABLE ingredients(
  ingredient_id SERIAL PRIMARY KEY, --unique ingredient id
  -- recipe_id INT REFERENCES recipes, --refrenced recipe id
  flavor TEXT NOT NULL --flavor of ingredient
  );

CREATE TABLE recipes_ingredients(
  recipe_id INT REFERENCES recipes, --refrence to recipe id
  ingredient_id INT REFERENCES ingredients, --ingredient id
  measurements TEXT NOT NULL --measurement of ingredient

);

COMMIT;
