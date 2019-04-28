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

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `name` varchar(255) DEFAULT NULL,
  `book_id` int(10) unsigned DEFAULT NULL AUTO_INCREMENT,
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

LOCK TABLES 'category' WRITE;

INSERT INTO 'category' VALUES ('Fiction',1),('Autobiography',2),('Novel',3);

UNLOCK TABLES;

