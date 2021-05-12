-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2021 at 04:55 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phone_catalog`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `networkTechnology` varchar(255) DEFAULT NULL,
  `lanch` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`lanch`)),
  `body` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`body`)),
  `imageFileName` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`imageFileName`)),
  `display` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`display`)),
  `platefrom` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`platefrom`)),
  `memory` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`memory`)),
  `mainCamera` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`mainCamera`)),
  `selfieCamera` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`selfieCamera`)),
  `sound` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`sound`)),
  `comms` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`comms`)),
  `featurs` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`featurs`)),
  `bettery` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`bettery`)),
  `misc` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`misc`)),
  `tests` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tests`)),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `networkTechnology`, `lanch`, `body`, `imageFileName`, `display`, `platefrom`, `memory`, `mainCamera`, `selfieCamera`, `sound`, `comms`, `featurs`, `bettery`, `misc`, `tests`, `createdAt`, `updatedAt`) VALUES
(4, 'Apple iPhone 12 pro', '4G bands', '{\"announced\":\"2021-01-11T15:03:00.000Z\",\"status\":\"Available&Tue Mar 02 2021 20:33:00 GMT+0530 (India Standard Time)\"}', '{\"dimensions\":\"131*64*15\",\"wight\":\"135 g (4.76 oz)\",\"build\":\"Glass front (Gorilla Glass), glass back (Gorilla Glass), aluminum frame\",\"sim\":\"Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM, dual stand-by) - for China\"}', '{\"image\":\"1620650992214.jpg\"}', '{\"type\":\"Super Retina XDR OLED, HDR10, Dolby Vision, 625 nits (typ), 1200 nits (peak)\",\"size\":\"5.4 inches, 71.9 cm2 (~85.1% screen-to-body ratio)\",\"resolution\":\"1080 x 2340 pixels, 19.5:9 ratio (~476 ppi density)\",\"protection\":\"Scratch-resistant ceramic glass, oleophobic coating\"}', '{\"os\":\"iOS 14.1, upgradable to iOS 14.5.1\",\"chipset\":\"Apple A14 Bionic (5 nm)\",\"cpu\":\"Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)\",\"gpu\":\"Apple GPU (4-core graphics)\"}', '{\"cardslote\":\"No\",\"internal\":\"64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM\"}', '{\"quad\":\"12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS 12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6\\\"\",\"video\":\"4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, Dolby Vision HDR (up to 30fps), stereo sound rec.\"}', '{\"dual\":\"12 MP, f/2.2, 23mm (wide), 1/3.6\\\"SL 3D, (depth/biometrics sensor)\",\"video\":\"4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS\"}', '{\"loudspeaker\":\"Yes, with stereo speakers\",\"jack\":\"No\"}', '{\"wlan\":\"Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot\",\"bluetooth\":\"5.0, A2DP, LE\",\"gps\":\"Yes, with A-GPS, GLONASS, GALILEO, QZSS\",\"nfc\":\"No\",\"radio\":\"Yes\",\"usb\":\"Lightning, USB 2.0\"}', '{\"sensors\":\"Face ID, accelerometer, gyro, proximity, compass, barometer\"}', '{\"type\":\"Li-Ion 2227 mAh, non-removable\",\"charging\":\"Fast charging 20W, 50% in 30 min (advertised)\\nUSB Power Delivery 2.0\\nQi magnetic fast wireless charging 12W\",\"musicPlay\":\"Up to 50 h\"}', '{\"color\":\"Black, White, Red, Green, Blue, Purple\",\"model\":\"A2399, A2176, A2398, A2400, A2399, iPhone13,1\",\"sar_eu\":\"0.99 W/kg& 0.99 W/kg\",\"price\":\"₹ 60,900 / $ 699.99 / £ 599.00 / € 666.00\"}', '{\"performance\":\"AnTuTu: 589616 (v8) GeekBench: 4174 (v5.1) GFXBench: 60fps (ES 3.1 onscreen)\",\"display\":\"Contrast ratio: Infinite (nominal)\",\"camera\":\"Photo / Video\",\"loudspeaker\":\"-24.6 LUFS (Very good)\",\"audioQuelity\":\"sgsdgsdg  xddbdh\",\"batteryLife\":\"Endurance rating 69h\"}', '2021-05-10 12:49:52', '2021-05-12 05:36:53'),
(6, 'Apple iPhone 12 mini testing', '5G bands', '{\"announced\":\"2021-05-20T14:05:00.000Z\",\"status\":\"Available&Tue May 18 2021 19:35:00 GMT+0530 (India Standard Time)\"}', '{\"dimensions\":\"121*233*232\",\"wight\":\"135 g (4.76 oz)\",\"build\":\"Glass front (Gorilla Glass), glass back (Gorilla Glass), aluminum frame\",\"sim\":\"Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM, dual stand-by) - for China\"}', '{\"image\":\"1620723747283.jpg\"}', '{\"type\":\"Super Retina XDR OLED, HDR10, Dolby Vision, 625 nits (typ), 1200 nits (peak)\",\"size\":\"5.4 inches, 71.9 cm2 (~85.1% screen-to-body ratio)\",\"resolution\":\"1080 x 2340 pixels, 19.5:9 ratio (~476 ppi density)\",\"protection\":\"Scratch-resistant ceramic glass, oleophobic coating\"}', '{\"os\":\"iOS 14.1, upgradable to iOS 14.5.1\",\"chipset\":\"Apple A14 Bionic (5 nm)\",\"cpu\":\"Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)\",\"gpu\":\"Apple GPU (4-core graphics)\"}', '{\"cardslote\":\"Yes\",\"internal\":\"64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM\"}', '{\"quad\":\"12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS 12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6\\\"\",\"video\":\"4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, Dolby Vision HDR (up to 30fps), stereo sound rec.\"}', '{\"dual\":\"12 MP, f/2.2, 23mm (wide), 1/3.6\\\"SL 3D, (depth/biometrics sensor)\",\"video\":\"4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS\"}', '{\"loudspeaker\":\"Yes, with stereo speakers\",\"jack\":\"No\"}', '{\"wlan\":\"Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot\",\"bluetooth\":\"5.0, A2DP, LE\",\"gps\":\"Yes, with A-GPS, GLONASS, GALILEO, QZSS\",\"nfc\":\"No\",\"radio\":\"Yes\",\"usb\":\"Lightning, USB 2.0\"}', '{\"sensors\":\"wfas s fajsfga h\"}', '{\"type\":\"hasdg as as f\",\"charging\":\"sfaf a sf\",\"musicPlay\":\"assf asjfg\"}', '{\"color\":\"Black, White, Red, Green, Blue, Purple\",\"model\":\"A2399, A2176, A2398, A2400, A2399, iPhone13,1\",\"sar_eu\":\"0.99 W/kg& 0.99 W/kg\",\"price\":\"₹ 60,900 / $ 699.99 / £ 599.00 / € 666.00\"}', '{\"performance\":\"AnTuTu: 589616 (v8) GeekBench: 4174 (v5.1) GFXBench: 60fps (ES 3.1 onscreen)\",\"display\":\"Contrast ratio: Infinite (nominal)\",\"camera\":\"Photo / Video\",\"loudspeaker\":\"-24.6 LUFS (Very good)\",\"audioQuelity\":\"sgsdgsdg  xddbdh\",\"batteryLife\":\"Endurance rating 69h\"}', '2021-05-10 14:30:23', '2021-05-12 05:36:04'),
(8, 'Apple iPhone 12 mini zjhhhcgZ', '2G bands', '{\"announced\":\"2021-05-11T13:29:26.561Z\",\"status\":\"Coming soon&Tue May 11 2021 18:59:26 GMT+0530 (India Standard Time)\"}', '{\"dimensions\":\"0*0*0\",\"wight\":\"135 g (4.76 oz)\",\"build\":\"Glass front (Gorilla Glass), glass back (Gorilla Glass), aluminum frame\",\"sim\":\"Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM, dual stand-by) - for China\"}', '{\"image\":\"1620740405342.jpg\"}', '{\"type\":\"\",\"size\":\"\",\"resolution\":\"\",\"protection\":\"\"}', '{\"os\":\"iOS 14.1, upgradable to iOS 14.5.1\",\"chipset\":\"Apple A14 Bionic (5 nm)\",\"cpu\":\"Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)\",\"gpu\":\"Apple GPU (4-core graphics)\"}', '{\"cardslote\":\"\",\"internal\":\"64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM\"}', '{\"quad\":\"12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS 12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6\\\"\",\"features\":\"ahfgfjas , asfa s\",\"video\":\"asjfsa,jf ashf a sgsgds\"}', '{\"dual\":\"12 MP, f/2.2, 23mm (wide), 1/3.6\\\"SL 3D, (depth/biometrics sensor)\",\"features\":\"sfsa fgas, fasgf aks.f ask.f as\",\"video\":\"zgdgd  a fkaF KSAFG ASK FL.\"}', '{\"loudspeaker\":\"\",\"jack\":\"\"}', '{\"wlan\":\"\",\"bluetooth\":\"\",\"gps\":\"\",\"nfc\":\"\",\"radio\":\"\",\"usb\":\"\"}', '{\"sensors\":\"\"}', '{\"type\":\"\",\"charging\":\"\",\"standby\":\"\",\"musicPlay\":\"\"}', '{\"color\":\"\",\"model\":\"\",\"sar_eu\":\"&\",\"price\":\"\"}', '{\"performance\":\"\",\"display\":\"\",\"camera\":\"\",\"loudspeaker\":\"\",\"audioQuelity\":\"\",\"batteryLife\":\"\"}', '2021-05-11 13:40:05', '2021-05-11 13:40:05'),
(9, 'Apple iPhone new xeomi', '5G bands', '{\"announced\":\"2021-05-29T05:19:00.000Z\",\"status\":\"Coming soon&Fri Sep 24 2021 10:49:00 GMT+0530 (India Standard Time)\"}', '{\"dimensions\":\"0*0*0\",\"wight\":\"135 g (4.76 oz)\",\"build\":\"Glass front (Gorilla Glass), glass back (Gorilla Glass), aluminum frame\",\"sim\":\"Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM, dual stand-by) - for China\"}', '{\"image\":\"1620796926154.jpg\"}', '{\"type\":\"\",\"size\":\"\",\"resolution\":\"\",\"protection\":\"\"}', '{\"os\":\"iOS 14.1, upgradable to iOS 14.5.1\",\"chipset\":\"Apple A14 Bionic (5 nm)\",\"cpu\":\"Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)\",\"gpu\":\"Apple GPU (4-core graphics)\"}', '{\"cardslote\":\"\",\"internal\":\"64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM\"}', '{\"quad\":\"12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS 12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6\\\"\",\"features\":\"I check that the mockedOnChange is called with the 2nd filtered option with right label and value.\",\"video\":\"4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, Dolby Vision HDR (up to 30fps), stereo sound rec.\"}', '{\"dual\":\"12 MP, f/2.2, 23mm (wide), 1/3.6\\\"SL 3D, (depth/biometrics sensor)\",\"features\":\"I check that the mockedOnChange is called with the 2nd filtered option with right label and value.\",\"video\":\"4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS\"}', '{\"loudspeaker\":\"Yes, with stereo speakers\",\"jack\":\"\"}', '{\"wlan\":\"\",\"bluetooth\":\"\",\"gps\":\"\",\"nfc\":\"\",\"radio\":\"\",\"usb\":\"\"}', '{\"sensors\":\"\"}', '{\"type\":\"\",\"charging\":\"\",\"standby\":\"\",\"musicPlay\":\"\"}', '{\"color\":\"\",\"model\":\"\",\"sar_eu\":\"&\",\"price\":\"\"}', '{\"performance\":\"\",\"display\":\"\",\"camera\":\"\",\"loudspeaker\":\"\",\"audioQuelity\":\"\",\"batteryLife\":\"\"}', '2021-05-12 05:22:06', '2021-05-12 05:22:06'),
(11, 'Apple iPhone 12 mini ', '4G bands', '{\"announced\":\"2021-05-12T05:37:48.691Z\",\"status\":\"Coming soon&Wed May 12 2021 11:07:48 GMT+0530 (India Standard Time)\"}', '{\"dimensions\":\"0*0*0\",\"wight\":\"135 g (4.76 oz)\",\"build\":\"Glass front (Gorilla Glass), glass back (Gorilla Glass), aluminum frame\",\"sim\":\"Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM, dual stand-by) - for China\"}', '{\"image\":\"1620798271314.jpg\"}', '{\"type\":\"\",\"size\":\"\",\"resolution\":\"\",\"protection\":\"\"}', '{\"os\":\"iOS 14.1, upgradable to iOS 14.5.1\",\"chipset\":\"Apple A14 Bionic (5 nm)\",\"cpu\":\"Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)\",\"gpu\":\"Apple GPU (4-core graphics)\"}', '{\"cardslote\":\"\",\"internal\":\"64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM\"}', '{\"quad\":\"12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS 12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6\\\"\",\"features\":\"I check that the mockedOnChange is called with the 2nd filtered option with right label and value.\",\"video\":\"4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, Dolby Vision HDR (up to 30fps), stereo sound rec.\"}', '{\"dual\":\"12 MP, f/2.2, 23mm (wide), 1/3.6\\\"SL 3D, (depth/biometrics sensor)\",\"features\":\"I check that the mockedOnChange is called with the 2nd filtered option with right label and value.\",\"video\":\"4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS\"}', '{\"loudspeaker\":\"\",\"jack\":\"\"}', '{\"wlan\":\"\",\"bluetooth\":\"\",\"gps\":\"\",\"nfc\":\"\",\"radio\":\"\",\"usb\":\"\"}', '{\"sensors\":\"\"}', '{\"type\":\"\",\"charging\":\"\",\"standby\":\"\",\"musicPlay\":\"\"}', '{\"color\":\"\",\"model\":\"\",\"sar_eu\":\"&\",\"price\":\"\"}', '{\"performance\":\"\",\"display\":\"\",\"camera\":\"\",\"loudspeaker\":\"\",\"audioQuelity\":\"\",\"batteryLife\":\"\"}', '2021-05-12 05:44:31', '2021-05-12 05:44:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
