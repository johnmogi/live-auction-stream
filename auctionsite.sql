-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 18, 2020 at 07:27 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auctionsite`
--
CREATE DATABASE IF NOT EXISTS `auctionsite` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `auctionsite`;

-- --------------------------------------------------------

--
-- Table structure for table `bids`
--

CREATE TABLE `bids` (
  `bidID` int(10) NOT NULL,
  `productID` int(10) NOT NULL,
  `bidOffer` int(30) NOT NULL,
  `bidStart` datetime(6) NOT NULL,
  `BidEnd` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bids`
--

INSERT INTO `bids` (`bidID`, `productID`, `bidOffer`, `bidStart`, `BidEnd`) VALUES
(1, 1, 2, '2020-08-18 16:55:18.000000', '2020-08-19 16:55:18.000000'),
(2, 2, 3, '2020-08-18 16:55:18.000000', '2020-08-19 16:55:18.000000'),
(7, 3, 3, '2020-08-18 16:55:00.000000', '2020-08-19 16:55:00.000000'),
(8, 3, 3, '2020-08-18 16:55:00.000000', '2020-08-19 16:55:00.000000');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(10) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `category` varchar(35) NOT NULL,
  `price` decimal(9,6) NOT NULL,
  `SKU` varchar(10) NOT NULL,
  `salePrice` decimal(9,6) NOT NULL,
  `stock` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `productName`, `category`, `price`, `SKU`, `salePrice`, `stock`) VALUES
(1, 'lcd 32 flat TV', 'lcd', '999.999999', 'lgTV32', '999.999999', 60),
(2, 'lcd 38 flat TV', 'lcd', '4.000000', 'lgTV38', '4.000000', 40),
(3, 'Mixer', 'Magimix', '5.000000', 'MGMX2020', '4.000000', 30);

-- --------------------------------------------------------

--
-- Table structure for table `specialoffers`
--

CREATE TABLE `specialoffers` (
  `offerID` int(10) NOT NULL,
  `productID` int(10) NOT NULL,
  `bidID` int(10) NOT NULL,
  `offerPrice` decimal(9,6) NOT NULL,
  `limitedStock` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `specialoffers`
--

INSERT INTO `specialoffers` (`offerID`, `productID`, `bidID`, `offerPrice`, `limitedStock`) VALUES
(1, 1, 1, '2.000000', ''),
(2, 2, 2, '3.000000', '6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bids`
--
ALTER TABLE `bids`
  ADD PRIMARY KEY (`bidID`),
  ADD KEY `productID` (`productID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- Indexes for table `specialoffers`
--
ALTER TABLE `specialoffers`
  ADD PRIMARY KEY (`offerID`),
  ADD KEY `productID` (`productID`,`bidID`),
  ADD KEY `bidID` (`bidID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bids`
--
ALTER TABLE `bids`
  MODIFY `bidID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `specialoffers`
--
ALTER TABLE `specialoffers`
  MODIFY `offerID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bids`
--
ALTER TABLE `bids`
  ADD CONSTRAINT `bids_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `products` (`productID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `specialoffers`
--
ALTER TABLE `specialoffers`
  ADD CONSTRAINT `specialoffers_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `products` (`productID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `specialoffers_ibfk_2` FOREIGN KEY (`bidID`) REFERENCES `bids` (`bidID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
