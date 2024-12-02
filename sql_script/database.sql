CREATE DATABASE fli_guide;

CREATE TABLE crafting (
    id INT AUTO_INCREMENT PRIMARY KEY,
    main_resource VARCHAR(255),
    sec_resource VARCHAR(255),
    opt_reagent VARCHAR(255)
);