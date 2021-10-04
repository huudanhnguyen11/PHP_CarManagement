<?php
session_start();
require('checkUser.php');
require('connectDb.php');

$disp = 'none';
$mes = '';
if (isset($_POST['btnAdd'])) {
    $allemp = $conn->query('select IdentityCard from customers')->fetchAll();
    $checkus = false;
    for ($i = 0; $i < count($allemp); $i++) {
        if ($_POST['identitycard'] == $allemp[$i]['IdentityCard']) {
            $checkus = true;
        }
    }
    if ($checkus == false) {
        if(strlen($_POST['identitycard']) < 10 && is_numeric($_POST['identitycard'])){
            if (strlen($_POST['customerphone']) < 11 && is_numeric($_POST['customerphone'])) {
                $sql = "insert into `customers`(`CustomerName`, `IdentityCard`, `CustomerPhone`, `Address`, `Birthday`, `Notes`) values (?, ?, ?, ?, ?, ?)";
                $stmt = $conn->prepare($sql);
                $insert = $stmt->execute([$_POST['customername'], $_POST['identitycard'], $_POST['customerphone'], $_POST['address'], $_POST['birthday'], $_POST['notes']]);
                if ($insert == true) {
                    header('Location: show_customer.php');
                }
            } else {
                $disp = 'block';
                $mes = 'Định dạng số điện thoại không đúng!';
            }
        } else {
            $disp = 'block';
            $mes = 'Định dạng số chứng minh nhân dân không đúng!';
        }
    } else {
        $disp = 'block';
        $mes = 'Tài khoản đã tồn tại!';
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
                        <div class="right__title">Quản lý khách hàng</div>
                        <p class="right__desc">Thêm mới khách hàng</p>
                        <div class="right__formWrapper">
                            <form action="" method="post">
                                <div class="right__inputWrapper">
                                    <label for="customername">Tên khách hàng</label>
                                    <input type="text" required name="customername" placeholder="Tên khách hàng">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="identitycard">Số chứng minh nhân dân</label>
                                    <input type="text" required name="identitycard" placeholder="Số chứng minh nhân dân">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="customerphone">Số điện thoại</label>
                                    <input type="text" required name="customerphone" placeholder="Số điện thoại">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="address">Địa chỉ</label>
                                    <input type="text" required name="address" placeholder="Địa chỉ">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="birthday">Ngày sinh</label>
                                    <input type="date" required name="birthday" placeholder="Ngày sinh">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="notes">Ghi chú</label>
                                    <textarea style="resize: none;" name="notes" cols="30" rows="10" placeholder="Mô tả"></textarea>
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