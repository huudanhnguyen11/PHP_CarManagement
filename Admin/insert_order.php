<?php
session_start();
require('checkUser.php');
require('connectDb.php');

$disp = 'none';
$mes = '';
$allcus = $conn->query("select Id as CustomerId, CustomerName, IdentityCard from customers")->fetchAll();
$allcar = $conn->query("select c.Id as CarId, c.CarName, c.LicenseCar, c.Price, b.BrandName
from cars c join brands b on c.BrandId = b.Id
WHERE c.StatusCar = 'Chưa thuê'")->fetchAll();
if (isset($_POST['btnAdd'])) {
    $sqlOrder = "insert into `orders`(`CreatedDate`, `StatusOrder`, `StatusPayment`, `CustomerId`, `UserId`) values (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sqlOrder);
    $stmt->execute([date("Y-m-d"), $_POST['statusorder'], $_POST['statuspayment'], (int)$_POST['customerId'], (int)$_SESSION['user']['Id']]);
    $orderId = $conn->lastInsertId();
    if ($orderId > 0) {
        $price = $conn->query("select Price from cars where Id=" . $_POST['carId'])->fetch();
        $unitPrice = $_POST['day'] * $price[0];
        $sqlOD = "insert into `orderdetails`(`OrderId`, `CarId`, `NumberDay`, `UnitPrice`) values (?, ?, ?, ?)";
        $stmt = $conn->prepare($sqlOD);
        $insert = $stmt->execute([$orderId, $_POST['carId'], $_POST['day'], (float)$unitPrice]);
        if ($_POST['statusorder'] == "Đã nhận xe" || $_POST['statusorder'] == "Đặt xe") {
            $sqlupcar = "update cars set StatusCar = 'Đã thuê' where Id=" . $_POST['carId'];
            $conn->query($sqlupcar)->execute();
        }
        header('Location: show_order.php');
    }
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
                        <?php include('leftmenu.php') ?>
                    </div>
                </div>
                <div class="right">
                    <div class="right__content">
                        <div class="right__title">Quản lý thuê xe</div>
                        <p class="right__desc">Thêm mới đơn thuê</p>
                        <div class="right__formWrapper">
                            <form action="" method="post">
                                <div class="right__inputWrapper">
                                    <label for="customer">Khách hàng</label>
                                    <select name="customerId" required>
                                        <option value="" selected>---Mời chọn khách hàng---</option>
                                        <?php for ($i = 0; $i < count($allcus); $i++) { ?>
                                            <option value="<?php echo $allcus[$i]['CustomerId'] ?>"><?php echo $allcus[$i]['CustomerName'] . ' - CMND: ' . $allcus[$i]['IdentityCard'] ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="statusorder">Trạng thái</label>
                                    <select id="statuscbb" name="statusorder">
                                        <option value="Đặt xe" selected>Đặt xe</option>
                                        <option value="Đã nhận xe">Đã nhận xe</option>
                                        <!-- <option value="Hoàn thành">Hoàn thành</option> -->
                                    </select>
                                </div>
                                <script>
                                    var statusorder = document.getElementById("statuscbb");
                                    statusorder.onchange = function() {
                                        var value = statusorder.value;
                                        if (value == "Đặt xe") {
                                            var statuspayment = document.getElementById("paymentcbb");
                                            if (statuspayment.options.length > 0) {
                                                var count = statuspayment.options.length;
                                                for (let index = 0; index < count; index++) {
                                                    statuspayment.remove(0);
                                                }
                                            }
                                            var payment1 = document.createElement("option");
                                            payment1.value = "Đã đặt cọc";
                                            payment1.text = "Đã đặt cọc";
                                            var payment2 = document.createElement("option");
                                            payment2.value = "Đã thanh toán";
                                            payment2.text = "Đã thanh toán";
                                            statuspayment.appendChild(payment1);
                                            statuspayment.appendChild(payment2);
                                        }
                                        if (value == "Đã nhận xe") {
                                            var statuspayment = document.getElementById("paymentcbb");
                                            if (statuspayment.options.length > 0) {
                                                var count = statuspayment.options.length;
                                                for (let index = 0; index < count; index++) {
                                                    statuspayment.remove(0);
                                                }
                                            }
                                            var payment1 = document.createElement("option");
                                            payment1.value = "Chưa thanh toán";
                                            payment1.text = "Chưa thanh toán";
                                            var payment2 = document.createElement("option");
                                            payment2.value = "Đã thanh toán";
                                            payment2.text = "Đã thanh toán";
                                            statuspayment.appendChild(payment1);
                                            statuspayment.appendChild(payment2);
                                        }
                                    }
                                </script>
                                <div class="right__inputWrapper">
                                    <label for="statuspayment">Trạng thái</label>
                                    <select id="paymentcbb" name="statuspayment">
                                        <option value="Đã đặt cọc" selected>Đã đặt cọc</option>
                                        <option value="Đã thanh toán">Đã thanh toán</option>
                                    </select>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="carId">Xe</label>
                                    <select name="carId" required>
                                        <option value="" selected>---Mời chọn xe---</option>
                                        <?php for ($i = 0; $i < count($allcar); $i++) { ?>
                                            <option value="<?php echo $allcar[$i]['CarId'] ?>"><?php echo $allcar[$i]['BrandName'] . ' ' . $allcar[$i]['CarName'] . ' - Biển số: ' . $allcar[$i]['LicenseCar'] ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="day">Số ngày thuê</label>
                                    <input required type="number" name="day" min="0.5" step="0.5">
                                </div>

                                <b style="display: <?php echo $disp ?>;color: red;"><?php echo $mes ?></b>
                                <button class="btn" type="submit" name="btnAdd" value="add">Thêm mới</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="js/main.js"></script>
</body>

</html>