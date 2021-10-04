<?php
$disDash = "";
$disEmp = "";
$disCus = "";
$disCar = "";
$disOrder = "";
$disPost = "";
$disDT = "";
$disBra = "";
$disOrdFin = "";
if ($_SESSION['user']['RoleName'] == "admin") {
    $disDash = "list-item";
    $disEmp = "list-item";
    $disCus = "list-item";
    $disCar = "list-item";
    $disOrder = "list-item";
    $disPost = "list-item";
    $disDT = "list-item";
} elseif ($_SESSION['user']['RoleName'] == "marketing") {
    $disDash = "none";
    $disEmp = "none";
    $disCus = "none";
    $disCar = "list-item";
    $disOrder = "none";
    $disPost = "list-item";
    $disDT = "none";
    $disBra = "none";
    $disOrdFin = "none";
} else {
    $disDash = "none";
    $disEmp = "none";
    $disCus = "list-item";
    $disCar = "list-item";
    $disOrder = "list-item";
    $disPost = "none";
    $disDT = "none";
    $disBra = "none";
    $disOrdFin = "none";
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="left__profile">
        <div class="left__image"><img src="<?php echo $_SESSION['user']['Avatar'] ?>" alt=""></div>
        <p class="left__name"><?php echo $_SESSION['user']['FullName'] ?></p>
    </div>
    <ul class="left__menu">
        <li class="left__menuItem" style="display: <?php echo $disDash ?>;">
            <a href="index.php" class="left__title"><img src="assets/icon-dashboard.svg" alt="">Dashboard</a>
        </li>
        <li class="left__menuItem" style="display: <?php echo $disEmp ?>;">
            <a href="show_emp.php" class="left__title"><img src="assets/icon-users.svg" alt="">Quản lý nhân viên</a>
        </li>
        <li class="left__menuItem" style="display: <?php echo $disCus ?>;">
            <a href="show_customer.php" class="left__title"><img src="assets/icon-users.svg" alt="">Quản lý khách hàng</a>
        </li>
        <li class="left__menuItem" style="display: <?php echo $disCar ?>;">
            <div class="left__title"><img src="assets/icon-settings.svg" alt="">Quản lý xe<img class="left__iconDown" src="assets/arrow-down.svg" alt=""></div>
            <div class="left__text">
                <a class="left__link" style="display: <?php echo $disBra ?>;" href="show_brand.php">Quản lý hãng xe</a>
                <a class="left__link" href="show_car.php">Quản lý xe</a>
            </div>
        </li>
        <li class="left__menuItem" style="display: <?php echo $disOrder ?>;">
            <div class="left__title"><img src="assets/icon-book.svg" alt="">Quản lý thuê xe<img class="left__iconDown" src="assets/arrow-down.svg" alt=""></div>
            <div class="left__text">
                <a class="left__link" style="display: <?php echo $disOrdFin ?>;" href="show_order_finish.php">Đơn hoàn thành</a>
                <a class="left__link" href="show_order.php">Quản lý đơn thuê</a>
            </div>
        </li>
        <li class="left__menuItem" style="display: <?php echo $disPost ?>;">
            <a href="show_post.php" class="left__title"><img src="assets/icon-edit.svg" alt="">Quản lý bài đăng</a>
        </li>
        <li class="left__menuItem" style="display: <?php echo $disDT ?>;">
            <a href="report.php" class="left__title"><img src="assets/icon-tag.svg" alt="">Thống kê</a>
        </li>
        <li class="left__menuItem">
            <div class="left__title"><img src="assets/icon-user.svg" alt="">Tài khoản<img class="left__iconDown" src="assets/arrow-down.svg" alt=""></div>
            <div class="left__text">
                <a class="left__link" href="updateprofile.php">Thay đổi thông tin</a>
                <a class="left__link" href="changepassword.php">Đổi mật khẩu</a>
            </div>
        </li>
        <li class="left__menuItem">
            <a href="logout.php" class="left__title"><img src="assets/icon-logout.svg" alt="">Đăng Xuất</a>
        </li>
    </ul>
</body>

</html>