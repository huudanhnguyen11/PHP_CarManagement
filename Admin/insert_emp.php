<?php
session_start();
require('checkUser.php');
require('connectDb.php');

$disp = 'none';
$mes = '';
if (isset($_POST['btnAdd'])) {

    if (isset($_POST['pass']) && isset($_POST['repass']) && isset($_POST['phone']) && isset($_POST['user'])) {
        $allemp = $conn->query('select UserName from users')->fetchAll();
        $checkus = false;
        for ($i = 0; $i < count($allemp); $i++) {
            if ($_POST['user'] == $allemp[$i]['UserName']) {
                $checkus = true;
            }
        }
        if ($checkus == false) {
            if ($_POST['pass'] == $_POST['repass']) {
                if (strlen($_POST['phone']) < 11 && is_numeric($_POST['phone'])) {
                    $path = "avatar/";
                    if ($_FILES['avatar']['tmp_name'] == null) {
                        $path .= "default.jpg";
                    } else {
                        $path .= $_POST['user'] . '.jpg';
                        move_uploaded_file($_FILES['avatar']['tmp_name'], $path);
                    }
                    $sql = "insert into `users`(`UserName`, `Password`, `FullName`, `Phone`, `Address`, `Birthday`, `RoleName`, `Avatar`) values (?, ?, ?, ?, ?, ?, ?, ?)";
                    $stmt = $conn->prepare($sql);
                    $insert = $stmt->execute([$_POST['user'], $_POST['pass'], $_POST['name'], $_POST['phone'], $_POST['address'], $_POST['birthday'], $_POST['rolename'], $path]);
                    if ($insert == true) {
                        header('Location: show_emp.php');
                    }
                } else {
                    $disp = 'block';
                    $mes = 'Định dạng số điện thoại không đúng!';
                }
            } else {
                $disp = 'block';
                $mes = 'Xác thực mật khẩu không đúng!';
            }
        } else {
            $disp = 'block';
            $mes = 'Tài khoản đã tồn tại!';
        }
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
                        <div class="right__title">Quản lý nhân viên</div>
                        <p class="right__desc">Thêm mới nhân viên</p>
                        <div class="right__formWrapper">
                            <form action="" method="post" enctype="multipart/form-data">
                                <div class="right__inputWrapper">
                                    <label for="username">Tài khoản</label>
                                    <input type="text" required name="user" placeholder="Tên tài khoản">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="password">Mật khẩu</label>
                                    <input type="password" required name="pass" placeholder="Mật khẩu">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="repass">Xác thực mật khẩu</label>
                                    <input type="password" required name="repass" placeholder="Xác thực mật khẩu">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="name">Tên đầy đủ</label>
                                    <input type="text" required name="name" placeholder="Tên nhân viên">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="phone">Số điện thoại</label>
                                    <input type="text" required name="phone" placeholder="Số điện thoại bao gồm 10 số">
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
                                    <label for="p_category">Nhiệm vụ</label>
                                    <select name="rolename">
                                        <option value="sale" selected>Bán hàng</option>
                                        <option value="marketing">Quảng cáo</option>
                                        <option value="admin">Quản trị</option>
                                    </select>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="avatar">Hình ảnh</label>
                                    <input name="avatar" type="file" accept="image/*">
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