<?php
session_start();
require('checkUser.php');
require('connectDb.php');

$disp = 'none';
$mes = '';
$empId = $_GET['Id'];
$emp = $conn->query("select * from users where Id=" . $empId)->fetch();
$checkus = false;
if (isset($_POST['btnUpdate'])) {
    if (isset($_POST['pass']) && isset($_POST['repass']) && isset($_POST['phone']) && isset($_POST['user'])) {
        if ($_POST['user'] == $emp['UserName']) {
            $checkus = false;
        } else {
            $allemp = $conn->query('select UserName from users')->fetchAll();
            for ($i = 0; $i < count($allemp); $i++) {
                if ($_POST['user'] == $allemp[$i]['UserName']) {
                    $checkus = true;
                }
            }
        }
        if ($checkus == false) {
            if ($_POST['pass'] == $_POST['repass']) {
                if (strlen($_POST['phone']) < 11 && is_numeric($_POST['phone'])) {
                    if ($_FILES['avatar']['tmp_name'] != null) {
                        if($emp['Avatar'] != "avatar/default.jpg"){
                            unlink($emp['Avatar']);
                        }

                        $path =  'avatar/'.$_POST['user'] . '.jpg';
                        move_uploaded_file($_FILES['avatar']['tmp_name'], $path);
                        $conn->query("update users set Avatar='".$path."' where Id=".$empId)->execute();
                    }
                    $sql = "update users set UserName=?,Password=?,FullName=?,Phone=?,Address=?,Birthday=?,RoleName=? where Id=?";
                    $stmt = $conn->prepare($sql);
                    $insert = $stmt->execute([$_POST['user'], $_POST['pass'], $_POST['name'], $_POST['phone'], $_POST['address'], $_POST['birthday'], $_POST['rolename'], $empId]);
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
                        <p class="right__desc">Chỉnh sửa nhân viên</p>
                        <div class="right__formWrapper">
                            <form action="" method="post" enctype="multipart/form-data">
                                <div class="right__inputWrapper">
                                    <label for="username">Tài khoản</label>
                                    <input type="text" required name="user" value="<?php echo $emp['UserName'] ?>">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="password">Mật khẩu</label>
                                    <input type="password" required name="pass" value="<?php echo $emp['Password'] ?>">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="repass">Xác thực mật khẩu</label>
                                    <input type="password" required name="repass" value="<?php echo $emp['Password'] ?>">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="name">Tên đầy đủ</label>
                                    <input type="text" required name="name" value="<?php echo $emp['FullName'] ?>">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="phone">Số điện thoại</label>
                                    <input type="text" required name="phone" value="<?php echo $emp['Phone'] ?>">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="address">Địa chỉ</label>
                                    <input type="text" required name="address" value="<?php echo $emp['Address'] ?>">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="birthday">Ngày sinh</label>
                                    <input type="date" required name="birthday" value="<?php echo $emp['Birthday'] ?>">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="p_category">Nhiệm vụ</label>
                                    <select id="cbb" name="rolename">
                                        <option value="sale">Bán hàng</option>
                                        <option value="marketing">Quảng cáo</option>
                                        <option value="admin">Quản trị</option>
                                    </select>
                                    <script>
                                        var roleemp = "<?php echo $emp['RoleName'] ?>";
                                        var select = document.getElementById("cbb");
                                        for (let index = 0; index < 3; index++) {
                                            if (select.options[index].value == roleemp) {
                                                select.options[index].selected = 'selected';
                                            }
                                        }
                                    </script>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="avatar">Hình ảnh</label>
                                    <input name="avatar" type="file" accept="image/*">
                                </div>
                                <b style="display: <?php echo $disp ?>;color: red;"><?php echo $mes ?></b>
                                <button class="btn" type="submit" name="btnUpdate" value="up">Cập nhật</button>
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