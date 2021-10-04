<?php
session_start();
require('checkUser.php');
require('connectDb.php');

$disp = 'none';
$mes = '';
$order = $conn->query("select * from orders where Id=" . $_GET['Id'])->fetch();
$cus = $conn->query("select * from customers where Id=" . $order['CustomerId'])->fetch();
$orderdetail = $conn->query("select * from orderdetails where OrderId=" . $order['Id'])->fetch();
$car = $conn->query("select c.Id as CarId, c.CarName, c.LicenseCar, c.Price, b.BrandName from cars c join brands b on c.BrandId = b.Id where c.Id=" .$orderdetail['CarId'])->fetch();
$allcus = $conn->query("select Id as CustomerId, CustomerName, IdentityCard from customers")->fetchAll();
$allcar = $conn->query("select c.Id as CarId, c.CarName, c.LicenseCar, c.Price, b.BrandName
from cars c join brands b on c.BrandId = b.Id
WHERE c.StatusCar = 'Chưa thuê'")->fetchAll();
if (isset($_POST['btnUpdate'])) {
    $sqlOrder = "update orders set StatusOrder=?, StatusPayment=? where Id=?";
    $stmt = $conn->prepare($sqlOrder);
    $stmt->execute([$_POST['statusorder'], $_POST['statuspayment'], $order['Id']]);
    if ($_POST['carId'] != $orderdetail['CarId']) {
        $price = $conn->query("select Price from cars where Id=" . $_POST['carId'])->fetch();
        $unitPrice = $_POST['day'] * $price[0];
        $sqlOD = "update orderdetails set CarId=?, NumberDay=?, UnitPrice=? where Id=?";
        $stmt = $conn->prepare($sqlOD);
        $update = $stmt->execute([$_POST['carId'], $_POST['day'], (float)$unitPrice, $orderdetail['Id']]);
        $conn->query("update cars set StatusCar = 'Chưa thuê' where Id=" .$car['CarId'])->execute();
        if ($_POST['statusorder'] == "Đặt xe" || $_POST['statusorder'] == "Đã nhận xe") {
            $conn->query("update cars set StatusCar = 'Đã thuê' where Id=" . (int)$_POST['carId'])->execute();
        }
    }
    if ($_POST['day'] != $orderdetail['NumberDay']) {
        $price = $conn->query("select Price from cars where Id=" . $_POST['carId'])->fetch();
        $unitPrice = $_POST['day'] * $price[0];
        $sqlOD = "update orderdetails set NumberDay=?, UnitPrice=? where Id=?";
        $stmt = $conn->prepare($sqlOD);
        $update = $stmt->execute([$_POST['day'], (float)$unitPrice, $orderdetail['Id']]);
    }
    if ($_POST['statusorder'] == "Hoàn thành") {
        $conn->query("update cars set StatusCar = 'Chưa thuê' where Id=" . (int)$_POST['carId'])->execute();
    }
    header('Location: show_order.php');
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
                        <p class="right__desc">Chỉnh sửa đơn thuê</p>
                        <div class="right__formWrapper">
                            <form action="" method="post">
                                <h3>Order: <?php echo $order['Id'] ?></h3>
                                <div class="right__inputWrapper">
                                    <p for="customer"><b>Khách hàng:</b> <span><?php echo $cus['CustomerName'] ?></span></p>
                                    <p for="customer"><b>CMND:</b> <span><?php echo $cus['IdentityCard'] ?></span></p>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="statusorder">Trạng thái</label>
                                    <select id="statuscbb" name="statusorder">
                                        <option value="Đặt xe" selected>Đặt xe</option>
                                        <option value="Đã nhận xe">Đã nhận xe</option>
                                        <option value="Hoàn thành">Hoàn thành</option>
                                    </select>
                                    <script>
                                        var statusorder = "<?php echo $order['StatusOrder'] ?>";
                                        var selectstatus = document.getElementById("statuscbb");
                                        for (let index = 0; index < 3; index++) {
                                            if (selectstatus.options[index].value == statusorder) {
                                                selectstatus.options[index].selected = 'selected';
                                            }
                                        }
                                        
                                        
                                    </script>
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
                                                    console.log(index);
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
                                                    console.log(index);
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
                                        <!-- <option value="Chưa thanh toán" selected>Chưa thanh toán</option>
                                        <option value="Đã thanh toán">Đã thanh toán</option> -->
                                    </select>
                                    <script>
                                        var statusorder = document.getElementById("statuscbb");
                                        var selectpayment = document.getElementById("paymentcbb");
                                        if (statusorder.value == "Đặt xe") {
                                            var payment1 = document.createElement("option");
                                            payment1.value = "Đã đặt cọc";
                                            payment1.text = "Đã đặt cọc";
                                            var payment2 = document.createElement("option");
                                            payment2.value = "Đã thanh toán";
                                            payment2.text = "Đã thanh toán";
                                            selectpayment.appendChild(payment1);
                                            selectpayment.appendChild(payment2);
                                        }
                                        if (statusorder.value == "Đã nhận xe") {
                                            var payment1 = document.createElement("option");
                                            payment1.value = "Chưa thanh toán";
                                            payment1.text = "Chưa thanh toán";
                                            var payment2 = document.createElement("option");
                                            payment2.value = "Đã thanh toán";
                                            payment2.text = "Đã thanh toán";
                                            selectpayment.appendChild(payment1);
                                            selectpayment.appendChild(payment2);
                                        }
                                        var statuspayment = "<?php echo $order['StatusPayment'] ?>";
                                        for (let index = 0; index < 2; index++) {
                                            if (selectpayment.options[index].value == statuspayment) {
                                                selectpayment.options[index].selected = 'selected';
                                            }
                                        }
                                    </script>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="carId">Xe</label>
                                    <select id="carcbb" name="carId">
                                        <option selected value="<?php echo $car['CarId'] ?>"><?php echo $car['BrandName'] . ' ' . $car['CarName'] . ' - Biển số: ' . $car['LicenseCar'] ?></option>
                                        <?php for ($i = 0; $i < count($allcar); $i++) { ?>
                                            <option value="<?php echo $allcar[$i]['CarId'] ?>"><?php echo $allcar[$i]['BrandName'] . ' ' . $allcar[$i]['CarName'] . ' - Biển số: ' . $allcar[$i]['LicenseCar'] ?></option>
                                        <?php } ?>
                                    </select>
                                    <!-- <script>
                                        var carid = "<?php echo $orderdetail['CarId'] ?>";
                                        var selectcar = document.getElementById("carcbb");
                                        for (let index = 0; index < <?php echo count($allcar) ?>; index++) {
                                            if (selectcar.options[index].value == carid) {
                                                selectcar.options[index].selected = 'selected';
                                            }
                                        }
                                    </script> -->
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="day">Số ngày thuê</label>
                                    <input value="<?php echo $orderdetail['NumberDay'] ?>" required type="number" name="day" min="0.5" step="0.5">
                                </div>

                                <b style="display: <?php echo $disp ?>;color: red;"><?php echo $mes ?></b>
                                <button class="btn" type="submit" name="btnUpdate" value="update">Cập nhật</button>
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