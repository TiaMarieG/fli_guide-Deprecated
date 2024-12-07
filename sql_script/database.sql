CREATE DATABASE fli_guide;

CREATE TABLE crafting_recipes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    craft_skill VARCHAR(255),
    item_name VARCHAR(255) DEFAULT NULL,
    main_resource VARCHAR(255) DEFAULT NULL,
    main_num int DEFAULT 0,
    sec_resource VARCHAR(255) DEFAULT NULL,
    sec_num int DEFAULT 0,
    opt_reagent VARCHAR(255) DEFAULT NULL,
    opt_num int DEFAULT 0
);

CREATE TABLE missing_recipes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    craft_skill VARCHAR(255),
    item_name VARCHAR(255) DEFAULT NULL,
    main_resource VARCHAR(255) DEFAULT NULL,
    main_num int DEFAULT 0,
    sec_resource VARCHAR(255) DEFAULT NULL,
    sec_num int DEFAULT 0,
    opt_reagent VARCHAR(255) DEFAULT NULL,
    opt_num int DEFAULT 0
);

INSERT INTO crafting_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("blacksmithing","iron sword", "iron ingot", 5, "leather", 2, "reflux", 1);

INSERT INTO crafting_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("blacksmithing", "iron gloves", "iron ingot", 2, "leather", 4, "reflux", 1);

INSERT INTO crafting_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("blacksmithing", "iron helmet", "iron ingot", 4, "leather", 3, "reflux", 2);

INSERT INTO crafting_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("blacksmithing", "iron pants", "iron ingot", 8, "leather", 5, "reflux", 3);


INSERT INTO crafting_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("cooking", "fried egg", "egg", 2, "butter", 1, "salt", 2);

INSERT INTO crafting_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("cooking", "carrot soup", "carrot", 3, "broth", 2, "seasoning", 1);

INSERT INTO crafting_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("cooking", "cheesecake", "cheese", 3, "cake", 3, "strawberries", 3);

INSERT INTO crafting_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("cooking", "cheeseburger", "cheese", 1, "hamburger", 2, "lettuce", 1);


INSERT INTO crafting_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("alchemy", "hp potion", "healweed", 1, "springwater", 1);

INSERT INTO crafting_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("alchemy", "sp potion", "vitalweed", 2, "springwater", 1);

INSERT INTO crafting_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("alchemy", "poison antidote", "cureweed", 1, "antidote berries", 1, "springwater", 1);

INSERT INTO crafting_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("alchemy", "stun antidote", "cureweed", 1, "antistun berries", 1, "springwater", 1);


SELECT * FROM crafting_recipes;