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

DROP TABLE IF EXISTS `title`;
CREATE TABLE `title` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `book_title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

LOCK TABLES 'title' WRITE;

INSERT INTO 'title' VALUES (1,'Harry Potter'),(2,'Game Of Thrones'),(3,'Divergent'),(4,'Rich Dad Poor Dad');

UNLOCK TABLES;

DROP TABLE IF EXISTS `year`;
CREATE TABLE `year` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `published` year(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

LOCK TABLES 'year' WRITE;

INSERT INTO 'year' VALUES (1,2000),(2,2002),(3,2004),(4,2006);

UNLOCK TABLES;

DROP TABLE IF EXISTS `price`;
CREATE TABLE `price` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `amount` double DEFAULT NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

LOCK TABLES 'price' WRITE;

INSERT INTO 'price' VALUES (1,20.00),(2,20.00),(3,20.00),(4,25.00);

UNLOCK TABLES;

