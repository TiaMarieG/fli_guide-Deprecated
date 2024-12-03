CREATE DATABASE fli_guide;

CREATE TABLE alchemy_crafting (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(255),
    main_resource VARCHAR(255),
    main_num INT,
    sec_resource VARCHAR(255),
    sec_num INT,
    opt_reagent VARCHAR(255),
    opt_num INT
);

CREATE TABLE bs_crafting (
	id INT AUTO_INCREMENT PRIMARY KEY,
    craft_name VARCHAR(255),
    main_resource VARCHAR(255),
    main_num int,
    sec_resource VARCHAR(255),
    sec_num int,
    opt_reagent VARCHAR(255),
    opt_num int
);

INSERT INTO bs_crafting (craft_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("iron sword", "iron ingot", 5, "leather", 2, "reflux", 1);

SELECT * FROM bs_crafting;

INSERT INTO bs_crafting (craft_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("iron gloves", "iron ingot", 2, "leather", 4, "reflux", 1);

INSERT INTO bs_crafting (craft_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("iron helmet", "iron ingot", 4, "leather", 3, "reflux", 2);

INSERT INTO bs_crafting (craft_name, main_resource, main_num, sec_resource, sec_num, opt_reagent, opt_num)
VALUES ("iron pants", "iron ingot", 8, "leather", 5, "reflux", 3);

SELECT * FROM bs_crafting;