USE c9;

/* DROP TABLES if exist - only use if restarting fresh */
DROP TABLE IF EXISTS users;

CREATE TABLE users 
(
   /* id int AUTO_INCREMENT, */
    id int,
    firstname VARCHAR(15),
    secondname  VARCHAR(15),
    age int,
    username VARCHAR(60),
    password VARCHAR(120),
    email VARCHAR(60),
    token VARCHAR(265),
    attempts int
   /* PRIMARY KEY(id) */
);


INSERT INTO users (id,firstname,secondname,age,username,password,email) VALUES(0,'stephen','k','12','ste','password1','random@fakeemail.com',);