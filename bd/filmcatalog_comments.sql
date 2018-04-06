-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: filmcatalog
-- ------------------------------------------------------
-- Server version	5.7.15-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `idComment` int(11) NOT NULL AUTO_INCREMENT,
  `idFilm` int(11) NOT NULL,
  `idUser` int(11) DEFAULT NULL,
  `text` text,
  PRIMARY KEY (`idComment`),
  KEY `idUser_idx` (`idUser`),
  KEY `idFilm_idx` (`idFilm`),
  CONSTRAINT `idFilm` FOREIGN KEY (`idFilm`) REFERENCES `films` (`idFilm`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idUser` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,22,1,'New creation of Christopher Nolan\'s genius, whose name is now known to everyone. His films are waiting with a special look, because it offers something that every day, unfortunately, less and less can be found in the world of mass cinema - an interesting spectacle, filled with meaning, ideas and emotions. At this time, Christopher decided to send us not to the world of dreams, and even not on the dark streets of Gotham City. No, now he send us to the journey to, and perhaps beyond the boundaries of the possible and impossible, through the curvature of space and time, in other worlds. And you won\'t forget this trip, this can be assured. '),(2,22,1,'comment2'),(4,22,2,'comment4'),(8,23,2,'the best film ever!!!!!'),(9,22,2,'goood'),(10,23,2,'good goood goood\n'),(11,25,3,'goood'),(12,26,3,'You want to do something really neat? Take the movie \"Pulp Fiction\" and re-cut it, so that, instead of being out of sequence, it is actually in proper sequence. It can be done. Why do this? Because if you do, you will see what a nothing movie this really is. There is no central plot, there is no real theme, or story or climax. It is just a bunch of tricks and overly snappy dialog, masquerading a piece of fluff that has as much depth as the kiddie pool. Hey, more power to Tarantino, the guy is a Houdini, full of slight of hand. But are we really so simple, that we are ranking this one of the ten greatest movies ever made? Come on! OK, I know that Travolta is cool and Jackson is funny. However, let\'s reserve the greatest films of all-time category for real masterpieces and real stories, and not some overly slick pulp geared towards video store geeks.\n\n'),(17,24,2,'not good'),(18,27,2,'very very good\n'),(22,22,2,'it\'s my comment '),(25,30,2,'comment from admin\\\n');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-06 13:29:05
