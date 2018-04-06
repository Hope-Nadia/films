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
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `idImage` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(300) DEFAULT NULL,
  `idFilm` int(11) DEFAULT NULL,
  PRIMARY KEY (`idImage`),
  KEY `idFilm_idx` (`idFilm`),
  CONSTRAINT `film` FOREIGN KEY (`idFilm`) REFERENCES `films` (`idFilm`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'http://localhost:3000/images/int1.jpg',22),(2,'http://localhost:3000/images/int2.jpg',22),(3,'http://localhost:3000/images/int3.jpg',22),(4,'http://localhost:3000/images/jw1.jpg',23),(5,'http://localhost:3000/images/jw2.jpg',23),(6,'http://localhost:3000/images/jw3.jpg',23),(7,'http://localhost:3000/images/is1.jpg',24),(8,'http://localhost:3000/images/is2.jpg',24),(9,'http://localhost:3000/images/sr1.jpg',25),(10,'http://localhost:3000/images/sr2.PNG',25),(11,'http://localhost:3000/images/sr3.jpg',25),(12,'http://localhost:3000/images/pf1.jpg',26),(13,'http://localhost:3000/images/pf2.jpg',26),(14,'http://localhost:3000/images/st1.jpg',27),(15,'http://localhost:3000/images/st2.jpg',27),(16,'http://localhost:3000/images/fg1.jpg',28),(17,'http://localhost:3000/images/fg2.jpg',28),(18,'http://localhost:3000/images/mm1.jpg',29),(19,'http://localhost:3000/images/mm2.jpg',29),(20,'http://localhost:3000/images/gm1.jpg',30),(21,'http://localhost:3000/images/gm2.jpg',30),(22,'http://localhost:3000/images/bt1.jpg',31),(23,'http://localhost:3000/images/bt2.jpg',31),(24,'http://localhost:3000/images/bs1.jpg',32),(25,'http://localhost:3000/images/bs2.jpg',32),(26,'http://localhost:3000/images/dk1.jpg',33),(27,'http://localhost:3000/images/dk2.jpg',33),(28,'http://localhost:3000/images/gf1.jpg',34),(29,'http://localhost:3000/images/gf2.jpg',34),(30,'http://localhost:3000/images/gc1.jpg',35),(31,'http://localhost:3000/images/fc2.png',35),(32,'http://localhost:3000/images/sl1.png',36),(33,'http://localhost:3000/images/sl2.jpg',36),(34,'http://localhost:3000/images/r1.jpg',37),(35,'http://localhost:3000/images/r2.jpg',37);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
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
