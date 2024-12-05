CREATE DATABASE fli_guide;

CREATE TABLE crafting_recipes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    craft_skill VARCHAR(255),
    item_name VARCHAR(255),
    main_resource VARCHAR(255),
    main_num int,
    sec_resource VARCHAR(255),
    sec_num int,
    opt_reagent VARCHAR(255),
    opt_num int
);

CREATE TABLE missing_recipes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    craft_skill VARCHAR(255),
    item_name VARCHAR(255),
    main_resource VARCHAR(255),
    main_num int,
    sec_resource VARCHAR(255),
    sec_num int,
    opt_reagent VARCHAR(255),
    opt_num int
);

INSERT INTO crafting_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("blacksmithing","iron sword", "iron ingot", 5, "leather", 2, "reflux", 1);

INSERT INTO crafting_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("blacksmithing", "iron gloves", "iron ingot", 2, "leather", 4, "reflux", 1);

INSERT INTO crafting_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("blacksmithing", "iron helmet", "iron ingot", 4, "leather", 3, "reflux", 2);

INSERT INTO crafting_recipes (craft_skill, item_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("blacksmithing", "iron pants", "iron ingot", 8, "leather", 5, "reflux", 3);

SELECT * FROM crafting_recipes;