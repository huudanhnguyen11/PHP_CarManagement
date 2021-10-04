<?php
session_start();
require('checkUser.php');
require('connectDb.php');
if ($_SESSION['user']['RoleName'] == "marketing" || $_SESSION['user']['RoleName'] == "sale") {
    header('location: logout.php');
}
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
                        <div class="right__title">Thống kê</div>
                        <div class="right__table">
                            <div class="right__tableWrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Tháng</th>
                                            <th>Doanh thu theo tháng</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <?php for ($i = 1; $i <= date("m"); $i++) { ?>
                                            <tr>
                                                <td data-label="Tháng">Tháng <?php echo $i ?> Năm <?php echo date("Y"); ?></td>
                                                <td data-label="Tên hãng"><?php
                                                                            $stmt = $conn->prepare("select sum(od.UnitPrice) from orders o join orderdetails od on o.Id = od.OrderId WHERE o.StatusPayment = 'Đã thanh toán' and MONTH(o.CreatedDate)=? and YEAR(o.CreatedDate)=?");
                                                                            $stmt->execute([$i, date("Y")]);
                                                                            $dt = $stmt->fetch();
                                                                            echo ($dt[0] == null) ? 0 : (int)$dt[0];
                                                                            ?> VNĐ</td>


                                            </tr>

                                        <?php } ?>
                                    </tbody>
                                </table>
                            </div>
                            <div style="width: 50%; float: left;text-align: center;">
                                <label><h3>TỔNG DOANH THU NĂM <?php echo date("Y"); ?> :</h3></label>
                            </div>
                            <div style="width: 50%; float: right;text-align: center;">
                                <label style="color: red;"><h3><?php $dt = $conn->query("select sum(od.UnitPrice) from orders o join orderdetails od on o.Id = od.OrderId WHERE o.StatusPayment = 'Đã thanh toán' and YEAR(o.CreatedDate) = " .date("Y"))->fetch();
                                                                        echo ($dt[0] == null) ? 0 : (int)$dt[0]  ?> VNĐ</h3></label>
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