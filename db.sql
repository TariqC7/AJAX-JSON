mysql --user=root --password

DROP TABLE IF EXISTS `author`;
CREATE TABLE `author` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `author_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

LOCK TABLES 'author' WRITE;

INSERT INTO 'author' VALUES (1,'Kit Harington'),(2,'Emilia Clarke'),(3,'Peter Dinklage'),(4,'Jason Momoa');

UNLOCK TABLES;
