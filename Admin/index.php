<?php
session_start();
require('checkUser.php');
include('connectDb.php');
if($_SESSION['user']['RoleName'] == "marketing") {
    header('location: show_post.php');
} elseif ($_SESSION['user']['RoleName'] == "sale"){
    header('location: show_order.php');
}

$sqlcar = "select * from cars";
$cars = $conn->prepare($sqlcar);
$cars->execute();
$countcar = $cars->rowCount();

$sqlpost = "select * from posts";
$posts = $conn->prepare($sqlpost);
$posts->execute();
$countpost = $posts->rowCount();

$sqlemp = "select * from users where RoleName != 'admin'";
$emps = $conn->prepare($sqlemp);
$emps->execute();
$countemp = $emps->rowCount();

$sqlord = "select * from orders where StatusOrder != 'Hoàn thành'";
$ords = $conn->prepare($sqlord);
$ords->execute();
$countord = $ords->rowCount();

$sql = "SELECT o.Id as OrderId, b.BrandName, od.NumberDay, od.UnitPrice, ca.CarName, o.CustomerId, o.UserId,c.CustomerPhone ,c.CustomerName, o.CreatedDate, o.StatusOrder, o.StatusPayment, u.UserName, u.FullName
FROM orders o 
join customers c on o.CustomerId = c.Id
join orderdetails od on od.OrderId = o.Id
join cars ca on od.CarId = ca.Id
join brands b on ca.BrandId = b.Id
join users u on o.UserId = u.Id 
where o.StatusOrder != 'Hoàn thành'
ORDER by o.Id DESC LIMIT 0, 6";
$allorder = $conn->query($sql)->fetchAll();

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
                        <?php include('leftmenu.php') ?>
                    </div>
                </div>
                <div class="right">
                    <div class="right__content">
                        <div class="right__title">Dashboard</div>
                        <p class="right__desc">Bảng điều khiển</p>
                        <div class="right__cards">
                            <a class="right__card" href="show_car.php">
                                <div class="right__cardTitle">Tổng xe</div>
                                <div class="right__cardNumber"><?php echo $countcar ?></div>
                                <div class="right__cardDesc">Xem Chi Tiết <img src="assets/arrow-right.svg" alt=""></div>
                            </a>
                            <a class="right__card" href="show_emp.php">
                                <div class="right__cardTitle">Nhân viên</div>
                                <div class="right__cardNumber"><?php echo $countemp ?></div>
                                <div class="right__cardDesc">Xem Chi Tiết <img src="assets/arrow-right.svg" alt=""></div>
                            </a>
                            <a class="right__card" href="show_post.php">
                                <div class="right__cardTitle">Bài đăng</div>
                                <div class="right__cardNumber"><?php echo $countpost ?></div>
                                <div class="right__cardDesc">Xem Chi Tiết <img src="assets/arrow-right.svg" alt=""></div>
                            </a>
                            <a class="right__card" href="show_order.php">
                                <div class="right__cardTitle">Đơn Hàng</div>
                                <div class="right__cardNumber"><?php echo $countord ?></div>
                                <div class="right__cardDesc">Xem Chi Tiết <img src="assets/arrow-right.svg" alt=""></div>
                            </a>
                        </div>
                        <div class="right__table">
                            <p class="right__tableTitle">Đơn hàng mới</p>
                            <div class="right__tableWrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th style="text-align: left;">Tên khách hàng</th>
                                            <th>Số điện thoại</th>
                                            <th>Xe</th>
                                            <th>Số ngày</th>
                                            <th>Giá</th>
                                            <th>Trạng Thái</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <?php if (count($allorder) > 0) { $disp = "flex"; 
                                            for ($i=0; $i < count($allorder); $i++) { ?>
                                            <tr>
                                                <td data-label="STT"><?php echo $i + 1; ?></td>
                                                <td data-label="Tên khách hàng" style="text-align: left;"><?php echo $allorder[$i]['CustomerName']; ?></td>
                                                <td data-label="Số điện thoại"><?php echo $allorder[$i]['CustomerPhone']; ?></td>
                                                <td data-label="Xe"><?php echo $allorder[$i]['BrandName']. ' ' .$allorder[$i]['CarName']; ?></td>
                                                <td data-label="Số ngày"><?php echo $allorder[$i]['NumberDay']; ?></td>
                                                <td data-label="Giá"><?php echo $allorder[$i]['UnitPrice']; ?></td>
                                                <td data-label="Trạng Thái"><?php echo $allorder[$i]['StatusPayment']; ?></td>
                                            </tr>
                                        <?php } } else { $disp = "none"; ?>
                                            <tr><td colspan="7">Chưa có đơn thuê xe nào!</td></tr>
                                        <?php } ?>
                                    </tbody>
                                </table>
                            </div>
                            <a style="display: <?php echo $disp; ?>" href="show_order.php" class="right__tableMore">
                                <p>Xem tất cả các đơn đặt hàng</p> <img src="assets/arrow-right-black.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="js/main.js"></script>
</body>

</html>