<?php
session_start();
require('checkUser.php');
$user = $_SESSION['user'];
$dpme = 'none';
$me = '';
if (isset($_POST['updateChange'])) {
    if ($_POST['passcurrent'] == $user['Password']) {
        if ($_POST['passnew'] == $_POST['passnewconfirm']) {
            require('connectDb.php');
            $sql = "update users set Password=? where Id=?";
            $stmt = $conn->prepare($sql);
            $update = $stmt->execute([$_POST['passnew'], $user['Id']]);
            if ($update == true) {
                header('Location: login.php');
            }
        } else {
            $dpme = 'block';
            $me = 'Xác nhận mật khẩu mới không đúng!';
        }
    } else {
        $dpme = 'block';
        $me = 'Mật khẩu không đúng!';
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
                        <div class="right__title">Thông tin cá nhân</div>
                        <p class="right__desc">Cập nhật mật khẩu</p>
                        <div class="right__formWrapper">
                            <form action="" method="post" enctype="multipart/form-data">
                                <div class="right__inputWrapper">
                                    <label for="passcurrent">Mời nhập mật khẩu cũ</label>
                                    <input required name="passcurrent" type="password">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="passnew">Mật khẩu mới</label>
                                    <input required name="passnew" type="password">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="passnewconfirm">Xác nhận mật khẩu mới</label>
                                    <input required name="passnewconfirm" type="password">
                                </div>
                                <p style="display: <?php echo $dpme ?>;color: red;"><?php echo $me ?></p>
                                <button class="btn" name="updateChange" type="submit" value="change">Cập nhật</button>
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