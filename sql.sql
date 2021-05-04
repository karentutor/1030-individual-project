-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: nanoosebaydev
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accomplishments`
--

DROP TABLE IF EXISTS `accomplishments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accomplishments` (
  `_id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` varchar(250) NOT NULL,
  `completed` varchar(50) DEFAULT NULL,
  `type` int DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `postedBy` varchar(45) NOT NULL,
  `role` enum('subscriber','admin') NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accomplishments`
--

LOCK TABLES `accomplishments` WRITE;
/*!40000 ALTER TABLE `accomplishments` DISABLE KEYS */;
INSERT INTO `accomplishments` VALUES (6,'Karen is Funny!','Karen is oh so funny -- she is a funny bunny that can be very very punny...','2021-05-12',1,'2021-05-04 02:11:18','2021-05-04 02:11:18','10','admin'),(7,'Karen is an awesome coder','She is so awesome that she finishes all her work yesterday!  Hire her  - dial and be done -- yesterday!','2021-05-16',1,'2021-05-04 02:12:03','2021-05-04 02:12:03','10','admin');
/*!40000 ALTER TABLE `accomplishments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `_id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` varchar(250) NOT NULL,
  `type` varchar(10) NOT NULL,
  `completed` varchar(50) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `postedBy` varchar(45) NOT NULL,
  `role` enum('subscriber','admin') NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (16,'Delightful Website','A feast for the senses! Vibrant for the eyes ... a luscious delightful wondrous experience that will leave you utterly breathless!\r\nCompleted yesterday... of course!','1','2021-05-09','2021-05-04 02:13:14','2021-05-04 02:13:14','10','admin'),(17,'Gorgoues Thing a Mah Jig','Another delightful project completed ----- yes,,,, you guessed it yesterday!','1','2021-05-11','2021-05-04 02:15:14','2021-05-04 02:15:14','10','admin'),(19,'The Social Webstie','The most social website ever! You will improve your confidence ...be giddy with job .. and become more attractive ... and of course this website was completed ... yup! Yesterday!','2','2021-05-12','2021-05-04 02:18:01','2021-05-04 02:18:01','10','admin');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `types` (
  `_id` int unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(30) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'static website'),(2,'social media website');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `_id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` char(128) NOT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `role` varchar(30) NOT NULL DEFAULT 'subscriber',
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (9,'karen','karen@karen.com','7c39bfe7489a48b29257f702443a4a4fe7cf6c8216e2df043c33d0f5b8db867fabe37f93095e3fa7c04d9c5ac2760bd33585b136b65c21288e7254ce0d328239','2021-04-27 20:07:17','subscriber'),(10,'admin','admin@admin.com','7c39bfe7489a48b29257f702443a4a4fe7cf6c8216e2df043c33d0f5b8db867fabe37f93095e3fa7c04d9c5ac2760bd33585b136b65c21288e7254ce0d328239','2021-05-03 16:42:56','admin'),(11,'jack','jack@jack.com','7c39bfe7489a48b29257f702443a4a4fe7cf6c8216e2df043c33d0f5b8db867fabe37f93095e3fa7c04d9c5ac2760bd33585b136b65c21288e7254ce0d328239','2021-05-03 21:46:10','subscriber');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-03 19:20:04
