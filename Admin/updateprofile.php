<?php
session_start();
require('checkUser.php');
$user = $_SESSION['user'];
if (isset($_POST['updateSubmit'])) {
    require('connectDb.php');
    if ($_FILES['fileToUpload']['tmp_name'] != null) {
        $path = 'avatar/' . $user['UserName'] . '.jpg';
        move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $path);
    }
    $sql = "update users set FullName=?, Phone=?, Address=?, Birthday=? where Id=?";
    $stmt = $conn->prepare($sql);
    $update = $stmt->execute([$_POST['namenew'], $_POST['phonenew'], $_POST['addressnew'], $_POST['birthdaynew'], $user['Id']]);
    if ($update == true) {
        $user = $conn->query("select * from users where Id=" . $user['Id'])->fetch();
        $_SESSION['user'] = $user;
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
                        <p class="right__desc">Cập nhật thông tin cá nhân</p>
                        <div class="right__formWrapper">
                            <form action="" method="post" enctype="multipart/form-data">
                                <div class="right__inputWrapper">
                                    <label for="name">Tên</label>
                                    <input name="namenew" type="text" value="<?php echo $user['FullName'] ?>">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="phone">Số điện thoại</label>
                                    <input name="phonenew" type="text" value="<?php echo $user['Phone'] ?>">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="address">Địa chỉ</label>
                                    <input name="addressnew" type="text" value="<?php echo $user['Address'] ?>">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="birthday">Ngày sinh</label>
                                    <input name="birthdaynew" type="date" value="<?php echo $user['Birthday'] ?>">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="image">Hình ảnh</label>
                                    <input type="file" name="fileToUpload" accept="image/*" />
                                </div>
                                <button class="btn" name="updateSubmit" type="submit" value="update">Cập nhật</button>
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