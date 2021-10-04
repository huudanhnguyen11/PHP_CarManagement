-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 08, 2020 lúc 08:44 AM
-- Phiên bản máy phục vụ: 5.7.31
-- Phiên bản PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `cars_management_db`
--
CREATE DATABASE IF NOT EXISTS `cars_management_db` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `cars_management_db`;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brands`
--

CREATE TABLE `brands` (
  `Id` int(11) NOT NULL,
  `BrandName` varchar(50) NOT NULL,
  `Description` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `brands`
--

INSERT INTO `brands` (`Id`, `BrandName`, `Description`) VALUES
(3, 'Toyota', ''),
(4, 'Kia', 'Xe hàn giá mềm'),
(5, 'Suzuki', ''),
(6, 'Mitsubishi', ''),
(7, 'Honda', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cars`
--

CREATE TABLE `cars` (
  `Id` int(11) NOT NULL,
  `CarName` varchar(100) NOT NULL,
  `Seat` int(11) NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `LicenseCar` varchar(30) NOT NULL,
  `CarImage` varchar(255) DEFAULT NULL,
  `YearCar` year(4) NOT NULL,
  `StatusCar` varchar(100) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `Description` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci,
  `BrandId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `cars`
--

INSERT INTO `cars` (`Id`, `CarName`, `Seat`, `Price`, `LicenseCar`, `CarImage`, `YearCar`, `StatusCar`, `Description`, `BrandId`) VALUES
(1, 'Innova', 7, '650000.00', '43k1 - 0044', 'imagecar/43k1-0044.jpg', 2007, 'Đã thuê', 'Xe chạy còn tốt', 3),
(2, 'Morning', 4, '530000.00', '43h1 - 5544', 'imagecar/defaultcar.jpg', 2013, 'Đã thuê', '', 4),
(3, 'Soluto', 4, '580000.00', '43k1 - 00412', 'imagecar/43k1-00412.jpg', 2010, 'Đã thuê', '', 4),
(4, 'Carrent', 7, '600000.00', '43f1 - 44112', 'imagecar/43f1-44112.jpg', 2010, 'Đã thuê', '', 4),
(5, 'Ertiga', 7, '590000.00', '43f2 - 11233', 'imagecar/43f2-11233.jpg', 2019, 'Đã thuê', '', 5),
(6, 'Xpander', 7, '620000.00', '43f3 - 44221', 'imagecar/43f3-44221.jpg', 2020, 'Đã thuê', '', 6),
(7, 'Sh 125i', 2, '150000.00', '43k5 - 8030', 'imagecar/43k5-8030.jpg', 2012, 'Chưa thuê', '', 7),
(8, 'Air Blade', 2, '125000.00', '43k5 - 11232', 'imagecar/43k5-11232.jpg', 2020, 'Chưa thuê', '', 7);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customers`
--

CREATE TABLE `customers` (
  `Id` int(11) NOT NULL,
  `CustomerName` varchar(100) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `CustomerPhone` varchar(10) NOT NULL,
  `IdentityCard` varchar(9) NOT NULL,
  `Address` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `Birthday` date NOT NULL,
  `Notes` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `customers`
--

INSERT INTO `customers` (`Id`, `CustomerName`, `CustomerPhone`, `IdentityCard`, `Address`, `Birthday`, `Notes`) VALUES
(1, 'Nguyễn ngọc trung', '0905994411', '123456789', 'Đà nẵng', '1990-08-15', 'Khách hàng chuyên nợ tiền lâu trả'),
(3, 'Lê Anh Tuấn', '0905112233', '112233445', 'Đà Nẵng', '1994-08-15', ''),
(4, 'Nguyễn văn hùng', '0954994312', '014322314', 'Đà nẵng', '1991-05-04', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orderdetails`
--

CREATE TABLE `orderdetails` (
  `Id` int(11) NOT NULL,
  `OrderId` int(11) NOT NULL,
  `CarId` int(11) NOT NULL,
  `NumberDay` decimal(10,1) NOT NULL,
  `UnitPrice` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `orderdetails`
--

INSERT INTO `orderdetails` (`Id`, `OrderId`, `CarId`, `NumberDay`, `UnitPrice`) VALUES
(6, 11, 3, '1.5', '870000.00'),
(7, 12, 1, '1.5', '975000.00'),
(10, 15, 1, '1.0', '650000.00'),
(11, 16, 3, '0.5', '290000.00'),
(12, 17, 2, '2.0', '1060000.00'),
(13, 18, 4, '1.0', '600000.00'),
(14, 19, 5, '4.0', '2360000.00'),
(15, 20, 6, '3.0', '1860000.00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `Id` int(11) NOT NULL,
  `CreatedDate` date NOT NULL,
  `StatusOrder` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `StatusPayment` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `UserId` int(11) NOT NULL,
  `CustomerId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`Id`, `CreatedDate`, `StatusOrder`, `StatusPayment`, `UserId`, `CustomerId`) VALUES
(11, '2020-12-02', 'Hoàn thành', 'Đã thanh toán', 1, 3),
(12, '2020-12-02', 'Hoàn thành', 'Đã thanh toán', 1, 1),
(15, '2020-12-03', 'Đặt xe', 'Đã đặt cọc', 1, 1),
(16, '2020-12-03', 'Đặt xe', 'Đã đặt cọc', 1, 3),
(17, '2020-12-03', 'Đặt xe', 'Đã đặt cọc', 1, 3),
(18, '2020-12-03', 'Đặt xe', 'Đã đặt cọc', 1, 1),
(19, '2020-12-03', 'Đặt xe', 'Đã đặt cọc', 1, 3),
(20, '2020-12-03', 'Đặt xe', 'Đã thanh toán', 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
--

CREATE TABLE `posts` (
  `Id` int(11) NOT NULL,
  `Title` varchar(150) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `Category` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `CreatedDate` date DEFAULT NULL,
  `CreatedBy` varchar(50) NOT NULL,
  `Content` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `CarId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `posts`
--

INSERT INTO `posts` (`Id`, `Title`, `Category`, `Image`, `CreatedDate`, `CreatedBy`, `Content`, `CarId`) VALUES
(2, 'Kinh nghiệm thuê xe ô tô khi đi du lịch Đà Nẵng tiết kiệm', 'Tin tức', 'images/post_2.jpg', '2020-12-05', 'admin', '<p><strong>Hiểu r&otilde; c&aacute;c c&ocirc;ng ty thu&ecirc; xe &ocirc; t&ocirc; du lịch Đ&agrave; Nẵng uy t&iacute;n</strong><br />\r\nTrước khi bắt đầu chuyến du lịch Đ&agrave; Nẵng, bạn n&ecirc;n l&ecirc;n internet v&agrave; t&igrave;m hiểu c&aacute;c c&ocirc;ng ty thu&ecirc; xe du lịch Đ&agrave; Nẵng uy t&iacute;n. Sau đ&oacute;, bạn n&ecirc;n gọi điện tham khảo gi&aacute; cả v&agrave; c&aacute;c loại xe để tiện so s&aacute;nh v&agrave; lựa chọn trước chuyến đi. Nếu c&oacute; người quen tại Đ&agrave; Nẵng, bạn cũng n&ecirc;n hỏi &yacute; kiến để được hỗ trợ, g&oacute;p &yacute; trong việc lựa chọn chổ thu&ecirc; xe ưng &yacute;. Du kh&aacute;ch tới Đ&agrave; Nẵng v&agrave; tham gia v&agrave;o c&aacute;c tour kh&aacute;c như du lịch C&ugrave; Lao Ch&agrave;m 1 ng&agrave;y, du lịch Hội An hay du lịch Huế đều c&oacute; thể lựa chọn c&ocirc;ng ty thu&ecirc; xe uy t&iacute;n để tự tin kh&aacute;m ph&aacute; th&ecirc;m những điểm mới n&agrave;y.<br />\r\nChuẩn bị đầy đủ giấy tờ thu&ecirc; xe du lịch Đ&agrave; Nẵng<br />\r\nKhi thu&ecirc; xe du lịch Đ&agrave; Nẵng, c&ocirc;ng ty cho thu&ecirc; đều y&ecirc;u cầu bạn tr&igrave;nh giấy ph&eacute;p l&aacute;i xe v&agrave; CMND. Chủ xe sẽ giữ lại sổ hộ khẩu v&agrave; y&ecirc;u cầu bạn cọc lại một số tiền từ 10-30 triệu t&ugrave;y loại xe hoặc gi&aacute; trị tương đương giấy đăng k&yacute; xe.</p>\r\n\r\n<p><strong>Gi&aacute; cả thu&ecirc; xe du lịch Đ&agrave; Nẵng tiết kiệm</strong><br />\r\nNhững bạn đi du lịch Đ&agrave; Nẵng trong dịp lễ tết th&igrave; n&ecirc;n c&acirc;n nhắc v&igrave; lượng kh&aacute;ch đ&ocirc;ng v&agrave; gi&aacute; thu&ecirc; xe du lịch c&oacute; thể tăng từ 10-30%. Bạn n&ecirc;n hỏi trước giới hạn thời gian thu&ecirc; xe cũng như yếu tố ph&aacute;t sinh kh&aacute;c như thời gian v&agrave; tiền trả th&ecirc;m cho số km vượt qu&aacute;&hellip; Người thu&ecirc; xe sẽ l&agrave;m hợp đồng r&otilde; r&agrave;ng, chi tiết. Kinh nghiệm du lịch Đ&agrave; Nẵng tự t&uacute;c khuy&ecirc;n bạn n&ecirc;n xem x&eacute;t cẩn thận về gi&aacute; cả, sau đ&oacute; đặt cọc để đảm bảo chắc chắn chiếc xe cần thu&ecirc;. T&ugrave;y v&agrave;o thời điểm, nh&atilde;n hiệu, chủng loại cũng như đời xe m&agrave; chi ph&iacute; thu&ecirc; xe &ocirc; t&ocirc; du lịch Đ&agrave; Nẵng sẽ kh&aacute;c nhau. Đa phần c&aacute;c c&ocirc;ng ty dịch vụ thu&ecirc; xe &ocirc; t&ocirc; Đ&agrave; Nẵng t&iacute;nh tiền theo giờ hoặc ng&agrave;y, dao động trong khoảng từ 1.000.000 &ndash; 3.000.000/8 tiếng, hoặc 2.000.000 &ndash; 4000.000/ng&agrave;y. Gi&aacute; thu&ecirc; xe du lịch Đ&agrave; Nẵng cũng phụ thuộc v&agrave;o h&igrave;nh thức thu&ecirc;, nếu bạn c&oacute; thể tự l&aacute;i v&agrave; th&iacute;ch di chuyển tự do th&igrave; chỉ cần thu&ecirc; xe để đi du lịch gi&aacute; rẻ, nếu ưa th&iacute;ch sự tiện lợi th&igrave; n&ecirc;n thu&ecirc; theo dạng trọn g&oacute;i, trong đ&oacute; sẽ bao gồm cả chi ph&iacute; thu&ecirc; xe, chi ph&iacute; t&agrave;i xế ri&ecirc;ng v&agrave; xăng xe&hellip;</p>\r\n', NULL),
(3, 'Toyota Innova 2007', 'Xe', 'imagecar/43k1-0044.jpg', '2020-12-05', 'admin', '<p>Ch&uacute;ng t&ocirc;i chuy&ecirc;n cho thu&ecirc; xe du lịch tại Đ&agrave; Nẵng, Cho thu&ecirc; xe tự l&aacute;i tại Đ&agrave; Nẵng, Cho thu&ecirc; xe c&aacute;c loại 4 chỗ, 7 chỗ.</p>\r\n\r\n<p>C&aacute;c loại xe đời mới, cao cấp v&agrave; chất lượng với gi&aacute; rẻ, qu&yacute; kh&aacute;ch ho&agrave;n to&agrave;n c&oacute; thể y&ecirc;n t&acirc;m với dịch vụ cho thu&ecirc; xe du lịch, xe tự l&aacute;i tại Đ&agrave; Nẵng.</p>\r\n\r\n<p>Bạn đến du lịch tại th&agrave;nh phố biển Đ&agrave; Nẵng xinh đẹp c&ugrave;ng gia đ&igrave;nh v&agrave; người th&acirc;n nhưng bạn chưa c&oacute; phương tiện đi lại thuận tiện.&nbsp;Đừng lo lắng h&atilde;y gọi ngay cho Đ&Igrave;NH AUTO chuy&ecirc;n cho thu&ecirc; xe &ocirc; t&ocirc; tự l&aacute;i từ 4 đến 7 chỗ:</p>\r\n\r\n<ul>\r\n	<li>Xe đời mới</li>\r\n	<li>Thủ tục thu&ecirc; xe đơn giản</li>\r\n	<li>Giao xe tận nh&agrave;</li>\r\n	<li>Giao v&agrave; nhận trả xe tại s&acirc;n bay, nh&agrave; ga , kh&aacute;ch sạn</li>\r\n</ul>\r\n\r\n<p><em><strong>Bảng gi&aacute; thu&ecirc; xe c&oacute; sẵn tại Đ&igrave;nh Auto:</strong></em></p>\r\n\r\n<ul>\r\n	<li><strong>Camry 2015:</strong>&nbsp;1200k/ ng&agrave;y.&nbsp;</li>\r\n	<li><strong>Mazda cx 5 2016:</strong>&nbsp;900k/ ng&agrave;y</li>\r\n	<li><strong>Ford Escape 2009 2.3AT:</strong>&nbsp;500k/ng&agrave;y</li>\r\n	<li><strong>Spark LTZ 2016 :</strong>&nbsp;500k/ ng&agrave;y</li>\r\n	<li><strong>Ford Ranger XLS 2.2 MT sx 2015 :</strong>&nbsp;600k/ ng&agrave;y</li>\r\n	<li><strong>Kia Carens 2.0AT 2015 :</strong>&nbsp;700k/ ng&agrave;y</li>\r\n	<li><strong>Fortuner 2.7AT sx 2016:</strong>&nbsp;900k/ ng&agrave;y</li>\r\n	<li><strong>Kia Sorento 2.4AT 2016 :</strong>&nbsp;800k/ ng&agrave;y</li>\r\n</ul>\r\n\r\n<p><em><strong>Xe c&oacute; xuất ho&aacute; đơn</strong></em></p>\r\n\r\n<p>Qu&yacute; kh&aacute;ch lưu &yacute;, xe thu&ecirc; theo th&aacute;ng/năm sẽ c&oacute; gi&aacute; kh&aacute;c, qu&yacute; kh&aacute;ch vui l&ograve;ng li&ecirc;n hệ hotline:&nbsp;<strong>0931 52 52 58</strong></p>\r\n\r\n<p>Địa chỉ: L&ocirc; 30-31 Đường 2-9 - Quận Hải Ch&acirc;u - TP.Đ&agrave; Nẵng</p>\r\n\r\n<p>TEST THU NE</p>\r\n', 1),
(4, 'Chọn phương án thuê xe ô tô đi du lịch Bà Nà', 'Tin tức', 'images/defaultnew.jpg', '2020-12-05', 'admin', '<p><strong>Thu&ecirc; xe &ocirc; t&ocirc; du lịch l&aacute;i đi B&agrave; N&agrave; c&oacute; n&ecirc;n hay kh&ocirc;ng?</strong></p>\r\n\r\n<p>Bạn kh&ocirc;ng phải l&agrave; người địa phương v&agrave; muốn một lần đến B&agrave; N&agrave; để tận mắt tr&ocirc;ng thấy nơi được v&iacute; von như xứ sở ch&acirc;u &Acirc;u giữa l&ograve;ng th&agrave;nh phố Đ&agrave; Nẵng. B&agrave; N&agrave; nằm tr&ecirc;n đỉnh n&uacute;i vậy phương tiện g&igrave; ph&ugrave; hợp đi đến nơi đ&acirc;y.</p>\r\n\r\n<p>Nếu bạn l&agrave; du kh&aacute;ch phương xa th&igrave; ch&uacute;ng t&ocirc;i khuy&ecirc;n bạn n&ecirc;n lựa chọn thu&ecirc; xe du lịch Đ&agrave; Nẵng v&agrave; c&oacute; t&agrave;i xế nh&eacute;, bởi bạn kh&ocirc;ng phải l&agrave; d&acirc;n địa phương n&ecirc;n kh&ocirc;ng th&ocirc;ng thuộc địa h&igrave;nh khiến cho việc điều khiển xe &ocirc; t&ocirc; sẽ c&oacute; ch&uacute;t kh&oacute; khăn. Chưa kể đến bạn vừa thực hiện một chuyến bay kh&aacute; d&agrave;i cần thời gian để cơ thể nghĩ ngơi th&igrave; việc lựa chọn thu&ecirc; xe c&oacute; t&agrave;i xế l&agrave; quyết định ho&agrave;n to&agrave;n ph&ugrave; hợp.</p>\r\n\r\n<p>Khi xe di chuyển đến ch&acirc;n n&uacute;i B&agrave; N&agrave; bạn sẽ phải đi bằng c&aacute;p treo l&ecirc;n chứ kh&ocirc;ng c&oacute; bất k&igrave; phương tiện n&agrave;o kh&aacute;c di chuyển được. Thường c&oacute; rất nhiều bạn lựa chọn cho m&igrave;nh đi xe m&aacute;y, nhưng phải chăng l&agrave; chuyến vui chơi kh&aacute;m ph&aacute; của bạn c&oacute; ch&uacute;t vấn đề phải kh&ocirc;ng. Khi bạn muốn ở lại qua đ&ecirc;m tr&ecirc;n n&uacute;i th&igrave; phải l&agrave;m sao trong khi đ&oacute; xe m&aacute;y bạn đi thu&ecirc; v&agrave; phải chăng bạn sẽ mất một khoảng tiền kh&ocirc;ng hề nhỏ với thời gian bạn thu&ecirc; nh&eacute;.</p>\r\n\r\n<p>Bạn n&ecirc;n đến c&aacute;c c&ocirc;ng ty cho thu&ecirc; xe tại Đ&agrave; Nẵng chọn dịch vụ thu&ecirc; xe du lịch c&oacute; t&agrave;i để tiết kiệm phần lớn chi ph&iacute; cho chuyến đi của m&igrave;nh. Đến&nbsp;<strong>Đ&igrave;nh Auto - Trung T&acirc;m Mua B&aacute;n, Thu&ecirc; Xe &ocirc; t&ocirc; tại Đ&agrave; Nẵng&nbsp;</strong>bạn sẽ được thoải m&aacute;i lựa chọn những d&ograve;ng xe mới với đầy đủ kiểu d&aacute;ng v&agrave; mẫu m&atilde;. Gi&aacute; th&agrave;nh thu&ecirc; phải chăng cạnh tranh tất cả c&aacute;c dịch vụ kh&aacute;c tại Đ&agrave; Nẵng.</p>\r\n', NULL),
(5, 'Du lịch ngày hè với thuê xe ô tô tự lái', 'Tin tức', 'images/post_5.jpg', '2020-12-05', 'admin', '<p>V&agrave;o thời điểm ng&agrave;y h&egrave;, m&ugrave;a nhộn nhịp nhất trong năm. Thời điểm để bạn di chuyển về th&agrave;nh phố biển để tận hưởng c&aacute;i gi&oacute; m&aacute;t mang lại, đẩy xa hơi n&oacute;ng v&agrave; sự ngột ngạt đến kh&oacute; tả của ng&agrave;y h&egrave;. H&agrave;ng loạt dịch vụ thu&ecirc; xe tự l&aacute;i Đ&agrave; Nẵng đua nhau hỗ trợ kh&aacute;ch du lịch phương tiện đi lại.</p>\r\n\r\n<p>Thời gian gần đ&acirc;y, h&igrave;nh thức thu&ecirc; xe tự l&aacute;i li&ecirc;n tục thu h&uacute;t được sự quan t&acirc;m kh&ocirc;ng chỉ du kh&aacute;ch m&agrave; cả người d&acirc;n địa phương. Bởi bạn dễ d&agrave;ng thu&ecirc; được con xe m&agrave; dưới sự điều khiển của bản th&acirc;n, kh&aacute;c th&iacute;ch th&uacute; phải kh&ocirc;ng n&agrave;o. Đ&oacute; l&agrave; chưa t&iacute;nh đến trường hợp bạn vừa học xong bằng l&aacute;i xe &ocirc; t&ocirc; m&agrave; kh&ocirc;ng c&oacute; cơ hội thử nghiệm.</p>\r\n\r\n<p>Quả thật khi chọn thu&ecirc; xe tự l&aacute;i bạn tự do, thoải m&aacute;i m&agrave; thăm th&uacute; Đ&agrave; Th&agrave;nh m&agrave; kh&ocirc;ng sợ ảnh hưởng tới bất k&igrave; ai. Bạn c&oacute; cảm thấy phiền đối với việc đi xe c&oacute; t&agrave;i hay chưa, n&oacute;i chuyện cũng kh&ocirc;ng được tự nhi&ecirc;n khi c&oacute; người lạ xuất hiện. Hằng ng&agrave;y bạn phải đi sớm để ngắm b&igrave;nh m&igrave;nh, hay đ&ecirc;m xuống lượn dọc bờ biển, quả thật rất phiền khi phải gọi t&agrave;i xế v&agrave;o những khoản thời gian n&agrave;y.</p>\r\n\r\n<p>Giờ đ&acirc;y, mọi thứ bạn đều c&oacute; thể l&agrave;m được chỉ với v&agrave;i thủ tục đơn giản: CMND, hộ khẩu, bằng l&aacute;i xe v&agrave; số tiền đặt cọc hay c&oacute; thể sử dụng xe m&aacute;y với gi&aacute; trị tr&ecirc;n 15 triệu đồng, th&igrave; chi ph&iacute; bỏ ra để thu&ecirc; một chiếc xe tự l&aacute;i qu&aacute; rẻ, chỉ dao động từ 500- 700 ng&agrave;n đồng cho thu&ecirc; xe &ocirc; t&ocirc; 4 chỗ.</p>\r\n\r\n<p>L&agrave;m chủ được to&agrave;n bộ h&agrave;nh tr&igrave;nh du lịch của m&igrave;nh l&agrave; điều m&agrave; bất k&igrave; ai cũng muốn. Biết được thời gian đi, điểm đến tiếp theo. G&oacute;p phần tạo chuyến đi của bạn th&ecirc;m ho&agrave;n hảo.</p>\r\n\r\n<p>Bạn c&ograve;n đợi chờ g&igrave; nữa, h&atilde;y nhanh ch&oacute;ng li&ecirc;n hệ đến trung t&acirc;m cho&nbsp;<strong>thu&ecirc; xe &ocirc; t&ocirc; du lịch Đ&agrave; Nẵng</strong>&nbsp;để chọn cho m&igrave;nh chiếc xe ph&ugrave; hợp với h&agrave;nh tr&igrave;nh của m&igrave;nh. Để bạn tiết kiệm được chi ph&iacute; th&igrave; n&ecirc;n đến nhờ nh&acirc;n vi&ecirc;n tư vấn hỗ trợ bạn, chọn chiếc xe hợp với t&agrave;i ch&iacute;nh v&agrave; tiện với mục đ&iacute;ch sử dụng. Tr&aacute;nh trường hợp số lượng người đi &iacute;t b&agrave; bạn thu&ecirc; chiếc xe nhiều chỗ.</p>\r\n', NULL),
(6, 'Kia Morning 2013', 'Xe', 'imagecar/defaultcar.jpg', '2020-12-07', 'admin', '<p><strong>NHẤC M&Aacute;Y ALO&nbsp;0931525258 - 0919190975 DỊCH VỤ CHO THU&Ecirc; XE &Ocirc; T&Ocirc; TỰ L&Aacute;I UY T&Iacute;N - CHẤT LƯỢNG NHẤT TẠI Đ&Agrave; NẴNG</strong></p>\r\n\r\n<p><strong>Đ&igrave;nh Auto - Cho thu&ecirc; xe &ocirc; t&ocirc; tự l&aacute;i Đ&agrave; Nẵng</strong>&nbsp;xin tr&acirc;n trọng gửi tới Qu&yacute; kh&aacute;ch lời ch&agrave;o, lời ch&uacute;c sức khỏe v&agrave; th&agrave;nh c&ocirc;ng.</p>\r\n\r\n<p>Ch&uacute;ng t&ocirc;i chuy&ecirc;n cho thu&ecirc; xe du lịch tại Đ&agrave; Nẵng, Cho thu&ecirc; xe tự l&aacute;i tại Đ&agrave; Nẵng, Cho thu&ecirc; xe c&aacute;c loại 4 chỗ, 7 chỗ.</p>\r\n\r\n<p>C&aacute;c loại xe đời mới, cao cấp v&agrave; chất lượng với gi&aacute; rẻ, qu&yacute; kh&aacute;ch ho&agrave;n to&agrave;n c&oacute; thể y&ecirc;n t&acirc;m với dịch vụ cho thu&ecirc; xe du lịch, xe tự l&aacute;i tại Đ&agrave; Nẵng.</p>\r\n\r\n<p>Bạn đến du lịch tại th&agrave;nh phố biển Đ&agrave; Nẵng xinh đẹp c&ugrave;ng gia đ&igrave;nh v&agrave; người th&acirc;n nhưng bạn chưa c&oacute; phương tiện đi lại thuận tiện.&nbsp;Đừng lo lắng h&atilde;y gọi ngay cho Đ&Igrave;NH AUTO chuy&ecirc;n cho thu&ecirc; xe &ocirc; t&ocirc; tự l&aacute;i từ 4 đến 7 chỗ:</p>\r\n\r\n<ul>\r\n	<li>Xe đời mới</li>\r\n	<li>Thủ tục thu&ecirc; xe đơn giản</li>\r\n	<li>Giao xe tận nh&agrave;</li>\r\n	<li>Giao v&agrave; nhận trả xe tại s&acirc;n bay, nh&agrave; ga , kh&aacute;ch sạn</li>\r\n</ul>\r\n\r\n<p><em><strong>Bảng gi&aacute; thu&ecirc; xe c&oacute; sẵn tại Đ&igrave;nh Auto:</strong></em></p>\r\n\r\n<ul>\r\n	<li><strong>Camry 2015:</strong>&nbsp;1200k/ ng&agrave;y.&nbsp;</li>\r\n	<li><strong>Mazda cx 5 2016:</strong>&nbsp;900k/ ng&agrave;y</li>\r\n	<li><strong>Ford Escape 2009 2.3AT:</strong>&nbsp;500k/ng&agrave;y</li>\r\n	<li><strong>Spark LTZ 2016 :</strong>&nbsp;500k/ ng&agrave;y</li>\r\n	<li><strong>Ford Ranger XLS 2.2 MT sx 2015 :</strong>&nbsp;600k/ ng&agrave;y</li>\r\n	<li><strong>Kia Carens 2.0AT 2015 :</strong>&nbsp;700k/ ng&agrave;y</li>\r\n	<li><strong>Fortuner 2.7AT sx 2016:</strong>&nbsp;900k/ ng&agrave;y</li>\r\n	<li><strong>Kia Sorento 2.4AT 2016 :</strong>&nbsp;800k/ ng&agrave;y</li>\r\n</ul>\r\n\r\n<p><em><strong>Xe c&oacute; xuất ho&aacute; đơn</strong></em></p>\r\n\r\n<p>Qu&yacute; kh&aacute;ch lưu &yacute;, xe thu&ecirc; theo th&aacute;ng/năm sẽ c&oacute; gi&aacute; kh&aacute;c, qu&yacute; kh&aacute;ch vui l&ograve;ng li&ecirc;n hệ hotline:&nbsp;<strong>0931 52 52 58</strong></p>\r\n\r\n<p>Địa chỉ: L&ocirc; 30-31 Đường 2-9 - Quận Hải Ch&acirc;u - TP.Đ&agrave; Nẵng</p>\r\n', 2),
(7, 'Kia Soluto 2010', 'Xe', 'imagecar/43k1-00412.jpg', '2020-12-07', 'admin', '<p><strong>NHẤC M&Aacute;Y ALO&nbsp;0931525258 - 0919190975 DỊCH VỤ CHO THU&Ecirc; XE &Ocirc; T&Ocirc; TỰ L&Aacute;I UY T&Iacute;N - CHẤT LƯỢNG NHẤT TẠI Đ&Agrave; NẴNG</strong></p>\r\n\r\n<p><strong>Đ&igrave;nh Auto - Cho thu&ecirc; xe &ocirc; t&ocirc; tự l&aacute;i Đ&agrave; Nẵng</strong>&nbsp;xin tr&acirc;n trọng gửi tới Qu&yacute; kh&aacute;ch lời ch&agrave;o, lời ch&uacute;c sức khỏe v&agrave; th&agrave;nh c&ocirc;ng.</p>\r\n\r\n<p>Ch&uacute;ng t&ocirc;i chuy&ecirc;n cho thu&ecirc; xe du lịch tại Đ&agrave; Nẵng, Cho thu&ecirc; xe tự l&aacute;i tại Đ&agrave; Nẵng, Cho thu&ecirc; xe c&aacute;c loại 4 chỗ, 7 chỗ.</p>\r\n\r\n<p>C&aacute;c loại xe đời mới, cao cấp v&agrave; chất lượng với gi&aacute; rẻ, qu&yacute; kh&aacute;ch ho&agrave;n to&agrave;n c&oacute; thể y&ecirc;n t&acirc;m với dịch vụ cho thu&ecirc; xe du lịch, xe tự l&aacute;i tại Đ&agrave; Nẵng.</p>\r\n\r\n<p>Bạn đến du lịch tại th&agrave;nh phố biển Đ&agrave; Nẵng xinh đẹp c&ugrave;ng gia đ&igrave;nh v&agrave; người th&acirc;n nhưng bạn chưa c&oacute; phương tiện đi lại thuận tiện.&nbsp;Đừng lo lắng h&atilde;y gọi ngay cho Đ&Igrave;NH AUTO chuy&ecirc;n cho thu&ecirc; xe &ocirc; t&ocirc; tự l&aacute;i từ 4 đến 7 chỗ:</p>\r\n\r\n<ul>\r\n	<li>Xe đời mới</li>\r\n	<li>Thủ tục thu&ecirc; xe đơn giản</li>\r\n	<li>Giao xe tận nh&agrave;</li>\r\n	<li>Giao v&agrave; nhận trả xe tại s&acirc;n bay, nh&agrave; ga , kh&aacute;ch sạn</li>\r\n</ul>\r\n\r\n<p><em><strong>Bảng gi&aacute; thu&ecirc; xe c&oacute; sẵn tại Đ&igrave;nh Auto:</strong></em></p>\r\n\r\n<ul>\r\n	<li><strong>Camry 2015:</strong>&nbsp;1200k/ ng&agrave;y.&nbsp;</li>\r\n	<li><strong>Mazda cx 5 2016:</strong>&nbsp;900k/ ng&agrave;y</li>\r\n	<li><strong>Ford Escape 2009 2.3AT:</strong>&nbsp;500k/ng&agrave;y</li>\r\n	<li><strong>Spark LTZ 2016 :</strong>&nbsp;500k/ ng&agrave;y</li>\r\n	<li><strong>Ford Ranger XLS 2.2 MT sx 2015 :</strong>&nbsp;600k/ ng&agrave;y</li>\r\n	<li><strong>Kia Carens 2.0AT 2015 :</strong>&nbsp;700k/ ng&agrave;y</li>\r\n	<li><strong>Fortuner 2.7AT sx 2016:</strong>&nbsp;900k/ ng&agrave;y</li>\r\n	<li><strong>Kia Sorento 2.4AT 2016 :</strong>&nbsp;800k/ ng&agrave;y</li>\r\n</ul>\r\n\r\n<p><em><strong>Xe c&oacute; xuất ho&aacute; đơn</strong></em></p>\r\n\r\n<p>Qu&yacute; kh&aacute;ch lưu &yacute;, xe thu&ecirc; theo th&aacute;ng/năm sẽ c&oacute; gi&aacute; kh&aacute;c, qu&yacute; kh&aacute;ch vui l&ograve;ng li&ecirc;n hệ hotline:&nbsp;<strong>0931 52 52 58</strong></p>\r\n\r\n<p>Địa chỉ: L&ocirc; 30-31 Đường 2-9 - Quận Hải Ch&acirc;u - TP.Đ&agrave; Nẵng</p>\r\n', 3),
(8, 'Honda Sh 125i 2012', 'Xe', 'imagecar/43k5-8030.jpg', '2020-12-08', 'admin', '<p><strong>Đ&igrave;nh Auto - Cho thu&ecirc; xe &ocirc; t&ocirc; tự l&aacute;i Đ&agrave; Nẵng</strong>&nbsp;xin tr&acirc;n trọng gửi tới Qu&yacute; kh&aacute;ch lời ch&agrave;o, lời ch&uacute;c sức khỏe v&agrave; th&agrave;nh c&ocirc;ng.</p>\r\n\r\n<p>Ch&uacute;ng t&ocirc;i chuy&ecirc;n cho thu&ecirc; xe du lịch tại Đ&agrave; Nẵng, Cho thu&ecirc; xe tự l&aacute;i tại Đ&agrave; Nẵng, Cho thu&ecirc; xe c&aacute;c loại 4 chỗ, 7 chỗ.</p>\r\n\r\n<p>C&aacute;c loại xe đời mới, cao cấp v&agrave; chất lượng với gi&aacute; rẻ, qu&yacute; kh&aacute;ch ho&agrave;n to&agrave;n c&oacute; thể y&ecirc;n t&acirc;m với dịch vụ cho thu&ecirc; xe du lịch, xe tự l&aacute;i tại Đ&agrave; Nẵng.</p>\r\n\r\n<p>Bạn đến du lịch tại th&agrave;nh phố biển Đ&agrave; Nẵng xinh đẹp c&ugrave;ng gia đ&igrave;nh v&agrave; người th&acirc;n nhưng bạn chưa c&oacute; phương tiện đi lại thuận tiện.&nbsp;Đừng lo lắng h&atilde;y gọi ngay cho Đ&Igrave;NH AUTO chuy&ecirc;n cho thu&ecirc; xe &ocirc; t&ocirc; tự l&aacute;i từ 4 đến 7 chỗ:</p>\r\n\r\n<ul>\r\n	<li>Xe đời mới</li>\r\n	<li>Thủ tục thu&ecirc; xe đơn giản</li>\r\n	<li>Giao xe tận nh&agrave;</li>\r\n	<li>Giao v&agrave; nhận trả xe tại s&acirc;n bay, nh&agrave; ga , kh&aacute;ch sạn</li>\r\n</ul>\r\n\r\n<p><em><strong>Bảng gi&aacute; thu&ecirc; xe c&oacute; sẵn tại Đ&igrave;nh Auto:</strong></em></p>\r\n\r\n<ul>\r\n	<li><strong>Camry 2015:</strong>&nbsp;1200k/ ng&agrave;y.&nbsp;</li>\r\n	<li><strong>Mazda cx 5 2016:</strong>&nbsp;900k/ ng&agrave;y</li>\r\n	<li><strong>Ford Escape 2009 2.3AT:</strong>&nbsp;500k/ng&agrave;y</li>\r\n	<li><strong>Spark LTZ 2016 :</strong>&nbsp;500k/ ng&agrave;y</li>\r\n	<li><strong>Ford Ranger XLS 2.2 MT sx 2015 :</strong>&nbsp;600k/ ng&agrave;y</li>\r\n	<li><strong>Kia Carens 2.0AT 2015 :</strong>&nbsp;700k/ ng&agrave;y</li>\r\n	<li><strong>Fortuner 2.7AT sx 2016:</strong>&nbsp;900k/ ng&agrave;y</li>\r\n	<li><strong>Kia Sorento 2.4AT 2016 :</strong>&nbsp;800k/ ng&agrave;y</li>\r\n</ul>\r\n\r\n<p><em><strong>Xe c&oacute; xuất ho&aacute; đơn</strong></em></p>\r\n\r\n<p>Qu&yacute; kh&aacute;ch lưu &yacute;, xe thu&ecirc; theo th&aacute;ng/năm sẽ c&oacute; gi&aacute; kh&aacute;c, qu&yacute; kh&aacute;ch vui l&ograve;ng li&ecirc;n hệ hotline:&nbsp;<strong>0931 52 52 58</strong></p>\r\n\r\n<p>Địa chỉ: L&ocirc; 30-31 Đường 2-9 - Quận Hải Ch&acirc;u - TP.Đ&agrave; Nẵng</p>\r\n', 7),
(9, 'Honda Air Blade 2020', 'Xe', 'imagecar/43k5-11232.jpg', '2020-12-08', 'dungn', '<p><strong>Đ&igrave;nh Auto - Cho thu&ecirc; xe &ocirc; t&ocirc; tự l&aacute;i Đ&agrave; Nẵng</strong>&nbsp;xin tr&acirc;n trọng gửi tới Qu&yacute; kh&aacute;ch lời ch&agrave;o, lời ch&uacute;c sức khỏe v&agrave; th&agrave;nh c&ocirc;ng.</p>\r\n\r\n<p>Ch&uacute;ng t&ocirc;i chuy&ecirc;n cho thu&ecirc; xe du lịch tại Đ&agrave; Nẵng, Cho thu&ecirc; xe tự l&aacute;i tại Đ&agrave; Nẵng, Cho thu&ecirc; xe c&aacute;c loại 4 chỗ, 7 chỗ.</p>\r\n\r\n<p>C&aacute;c loại xe đời mới, cao cấp v&agrave; chất lượng với gi&aacute; rẻ, qu&yacute; kh&aacute;ch ho&agrave;n to&agrave;n c&oacute; thể y&ecirc;n t&acirc;m với dịch vụ cho thu&ecirc; xe du lịch, xe tự l&aacute;i tại Đ&agrave; Nẵng.</p>\r\n\r\n<p>Bạn đến du lịch tại th&agrave;nh phố biển Đ&agrave; Nẵng xinh đẹp c&ugrave;ng gia đ&igrave;nh v&agrave; người th&acirc;n nhưng bạn chưa c&oacute; phương tiện đi lại thuận tiện.&nbsp;Đừng lo lắng h&atilde;y gọi ngay cho Đ&Igrave;NH AUTO chuy&ecirc;n cho thu&ecirc; xe &ocirc; t&ocirc; tự l&aacute;i từ 4 đến 7 chỗ:</p>\r\n\r\n<ul>\r\n	<li>Xe đời mới</li>\r\n	<li>Thủ tục thu&ecirc; xe đơn giản</li>\r\n	<li>Giao xe tận nh&agrave;</li>\r\n	<li>Giao v&agrave; nhận trả xe tại s&acirc;n bay, nh&agrave; ga , kh&aacute;ch sạn</li>\r\n</ul>\r\n\r\n<p><em><strong>Bảng gi&aacute; thu&ecirc; xe c&oacute; sẵn tại Đ&igrave;nh Auto:</strong></em></p>\r\n\r\n<ul>\r\n	<li><strong>Camry 2015:</strong>&nbsp;1200k/ ng&agrave;y.&nbsp;</li>\r\n	<li><strong>Mazda cx 5 2016:</strong>&nbsp;900k/ ng&agrave;y</li>\r\n	<li><strong>Ford Escape 2009 2.3AT:</strong>&nbsp;500k/ng&agrave;y</li>\r\n	<li><strong>Spark LTZ 2016 :</strong>&nbsp;500k/ ng&agrave;y</li>\r\n	<li><strong>Ford Ranger XLS 2.2 MT sx 2015 :</strong>&nbsp;600k/ ng&agrave;y</li>\r\n	<li><strong>Kia Carens 2.0AT 2015 :</strong>&nbsp;700k/ ng&agrave;y</li>\r\n	<li><strong>Fortuner 2.7AT sx 2016:</strong>&nbsp;900k/ ng&agrave;y</li>\r\n	<li><strong>Kia Sorento 2.4AT 2016 :</strong>&nbsp;800k/ ng&agrave;y</li>\r\n</ul>\r\n\r\n<p><em><strong>Xe c&oacute; xuất ho&aacute; đơn</strong></em></p>\r\n\r\n<p>Qu&yacute; kh&aacute;ch lưu &yacute;, xe thu&ecirc; theo th&aacute;ng/năm sẽ c&oacute; gi&aacute; kh&aacute;c, qu&yacute; kh&aacute;ch vui l&ograve;ng li&ecirc;n hệ hotline:&nbsp;<strong>0931 52 52 58</strong></p>\r\n\r\n<p>Địa chỉ: L&ocirc; 30-31 Đường 2-9 - Quận Hải Ch&acirc;u - TP.Đ&agrave; Nẵng</p>\r\n', 8);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `UserName` varchar(100) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `FullName` varchar(100) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `Phone` varchar(10) NOT NULL,
  `Address` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `Birthday` date NOT NULL,
  `RoleName` varchar(30) NOT NULL,
  `Avatar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`Id`, `UserName`, `Password`, `FullName`, `Phone`, `Address`, `Birthday`, `RoleName`, `Avatar`) VALUES
(1, 'admin', '123123', 'Hoàng Văn Kiệt', '0905223311', 'Nghệ An', '1995-08-31', 'admin', 'avatar/admin.jpg'),
(4, 'tuanla95', '112233', 'Lê Anh Tuấn', '0905112233', 'Đà Nẵng', '1995-08-15', 'sale', 'avatar/tuanla95.jpg'),
(5, 'dungn', '112233', 'Nguyễn Trung Dũng', '0905999333', 'Hội An', '1990-10-14', 'marketing', 'avatar/dungn.jpg'),
(6, 'honglt', '112233', 'Lê Thị Hồng', '0901223321', 'Thanh Hóa', '1990-02-11', 'sale', 'avatar/default.jpg'),
(7, 'bachh', '123123', 'Hoàng Bách', '0943112233', 'Lâm Đồng', '1984-01-01', 'marketing', 'avatar/default.jpg');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `BrandName` (`BrandName`);

--
-- Chỉ mục cho bảng `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `BrandId` (`BrandId`);

--
-- Chỉ mục cho bảng `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `IdentityCard` (`IdentityCard`);

--
-- Chỉ mục cho bảng `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `OrderId` (`OrderId`),
  ADD KEY `CarId` (`CarId`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `orders_ibfk_1` (`UserId`),
  ADD KEY `orders_ibfk_2` (`CustomerId`);

--
-- Chỉ mục cho bảng `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `CarId` (`CarId`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `brands`
--
ALTER TABLE `brands`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `cars`
--
ALTER TABLE `cars`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `customers`
--
ALTER TABLE `customers`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `posts`
--
ALTER TABLE `posts`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `cars_ibfk_1` FOREIGN KEY (`BrandId`) REFERENCES `brands` (`Id`);

--
-- Các ràng buộc cho bảng `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`OrderId`) REFERENCES `orders` (`Id`),
  ADD CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`CarId`) REFERENCES `cars` (`Id`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`Id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`CustomerId`) REFERENCES `customers` (`Id`);

--
-- Các ràng buộc cho bảng `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`CarId`) REFERENCES `cars` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
