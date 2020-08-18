CREATE DATABASE IF NOT EXISTS YEGOH;

USE YEGOH;

CREATE TABLE USUARIO(
id INT(11) NOT NULL auto_increment,
    nombre VARCHAR(45) NOT NULL ,
    apellido VARCHAR(45) NOT NULL,
    login VARCHAR(45) NOT NULL,
    clave VARCHAR(45) NOT NULL,
    estado VARCHAR(45) NOT NULL,
    fcreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fupdate TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (id)
);

/*Insert into usuario values
(1,'Alejandro','Huamani', 'alejo','alejo123','activo',null ,null);
*/


