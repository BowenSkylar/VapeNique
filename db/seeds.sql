--dummy user
INSERT INTO vape_users (username, password) VALUES ('Damien Wayne','Robin');

--dummy recipe
INSERT INTO recipes (user_id, recipe_id, recipe_name, nicotine, soft_deleted, size) VALUES (1, 1, 'Lucid',3,'1',10);
INSERT INTO recipes (user_id, recipe_id, recipe_name, nicotine, soft_deleted, size) VALUES (1, 1, 'Mothers Milk',0,'2',100);

--dummy ingredients
INSERT INTO ingredients(recipe_id, flavor, measurements) VALUES(1,'strawberry','0.9');
INSERT INTO ingredients(recipe_id, flavor, measurements) VALUES(1,'peach','0.5');
INSERT INTO ingredients(recipe_id, flavor, measurements) VALUES(1,'guava','0.6');
