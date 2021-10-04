<?php
session_start();
require('checkUser.php');
require('connectDb.php');
$order = $conn->query("select * from orders where Id=" . $_GET['Id'])->fetch();
$cus = $conn->query("select * from customers where Id=" . $order['CustomerId'])->fetch();
$emp = $conn->query("select * from users where Id=" . $order['UserId'])->fetch();
$orderdetail = $conn->query("select * from orderdetails where OrderId=" . $_GET['Id'])->fetch();
$car = $conn->query("select c.CarName, c.CarImage, c.Seat, c.Price, c.LicenseCar, c.YearCar, c.StatusCar, b.BrandName
from cars c join brands b on c.BrandId = b.Id WHERE c.Id = " . $orderdetail['CarId'])->fetch();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
    <div class="wrapper">
        <div class="container">
            <div class="dashboard">
                <div class="left">
                    <span class="left__icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <div class="left__content">
                        <?php include('leftmenu.php'); ?>
                    </div>
                </div>
                <div class="right">
                    <div class="right__content">
                        <div class="right__title">Chi tiết thuê xe</div>
                        <div class="right__table">
                            <div class="right__tableWrapper">
                                <div style="float: left; width: 50%;">
                                    <h3>Thông tin khách hàng:</h3>
                                    <div style="padding-left: 30px;">
                                        <ul style="list-style-type:circle">
                                            <li>Tên khách hàng: <?php echo $cus['CustomerName'] ?></li>
                                            <li>Số CMND: <?php echo $cus['IdentityCard'] ?></li>
                                            <li>Số điện thoại: <?php echo $cus['CustomerPhone'] ?></li>
                                            <li>Ngày sinh: <?php echo date("d-m-Y", strtotime($cus['Birthday'])) ?></li>
                                            <li>Địa chỉ: <?php echo $cus['Address'] ?></li>
                                        </ul>
                                    </div>
                                </div>
                                <div style="float: right; width: 50%;   ">
                                    <h3>Thông tin người tạo:</h3>
                                    <div style="padding-left: 30px;">
                                        <ul style="list-style-type:circle">
                                            <li>Tên nhân viên: <?php echo $emp['FullName'] ?></li>
                                            <li>Tài khoản: <?php echo $emp['UserName'] ?></li>
                                            <li>Chức năng: <?php echo $emp['RoleName'] ?></li>
                                            <li>Ngày tạo: <?php echo date("d-m-Y", strtotime($order['CreatedDate'])) ?></li>
                                        </ul>
                                    </div>
                                </div>
                                <br>
                                <div style="clear: left; font-size: 1.17em;">
                                    <label><b>Trạng thái đơn hàng: </b><?php echo $order['StatusOrder'] ?></label>
                                    <br>
                                    <label><b>Trạng thái thanh toán: </b><?php echo $order['StatusPayment'] ?></label>
                                    <br>
                                    <label><b>Số ngày thuê: </b><?php echo $orderdetail['NumberDay'] ?> Ngày</label>
                                </div>
                                <div>
                                    <h3>Thông tin xe:</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Tên xe</th>
                                                <th>Hình ảnh</th>
                                                <th>Số chỗ</th>
                                                <th>Giá xe/1 ngày</th>
                                                <th>Biển số</th>
                                                <th>Đời xe</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td data-label="Tên"><?php echo $car['BrandName'] . ' ' . $car['CarName'] ?></td>
                                                <td data-label="Hình ảnh"><img width="60px" height="75px" src="<?php echo $car['CarImage'] ?>" alt=""></td>
                                                <td data-label="Số chỗ"><?php echo $car['Seat'] ?></td>
                                                <td data-label="Giá xe/1 ngày"><?php echo $car['Price'] ?></td>
                                                <td data-label="Biển số"><?php echo $car['LicenseCar'] ?></td>
                                                <td data-label="Đời xe"><?php echo $car['YearCar'] ?></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div style="float: right; font-size: 1.17em;">
                                    <label><b>Tổng tiền: </b><label style="color: red;"><?php echo $orderdetail['UnitPrice'] ?> VNĐ</label></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="js/main.js"></script>
</body>

</html>