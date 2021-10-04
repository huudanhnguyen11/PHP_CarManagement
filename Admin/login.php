<?php
$message = '';
$display = 'none';
if (isset($_POST['username']) && isset($_POST['pass'])) {
    $user = $_POST['username'];
    $pass = $_POST['pass'];
    if ($user != null && $pass != null) {
        require("connectDb.php");
        $string = "select * from users where UserName='" . $user . "'";
        $acc = $conn->query($string)->fetch();
        if ($acc == false) {
            $message = 'Tài khoản không tồn tại!';
            $display = 'block';
        } elseif ($conn->query($string. "and Password='" . $pass . "'")->fetch() == false){
            $message = 'Mật khẩu không đúng!';
            $display = 'block';
        } else {
            $display = 'none';
            $conn = null;
            session_start();
            $_SESSION['user'] = $acc;
            if($_SESSION['user']['RoleName'] == "admin") {
                header('location: index.php');
            } elseif ($_SESSION['user']['RoleName'] == "sale"){
                header('location: show_order.php');
            } else {
                header('location: show_post.php');
            }
        }
    } elseif ($user == null && $pass == null) {
        $message = 'Mời nhập tên tài khoản và mật khẩu!';
        $display = 'block';
    } elseif ($user == null) {
        $message = 'Mời nhập tên tài khoản!';
        $display = 'block';
    } else {
        $message = 'Mời nhập mật khẩu!';
        $display = 'block';
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Login</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="library/bootstrap4/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="library/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="library/Linearicons-Free-v1.0.0/icon-font.min.css">
    <link rel="stylesheet" type="text/css" href="library/util.css">
    <link rel="stylesheet" type="text/css" href="library/main.css">

</head>

<body>
    <div class="limiter">
        <div class="container-login100" style="background-color: #E2DFF2;">
            <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                <form class="login100-form validate-form flex-sb flex-w" method="post">
                    <span class="login100-form-title p-b-32">
                        Đăng nhập
                    </span>
                    <span class="txt1 p-b-11">
                        Tên tài khoản
                    </span>
                    <div class="wrap-input100 validate-input m-b-36" data-validate="Username is required">
                        <input class="input100" type="text" name="username">
                        <span class="focus-input100"></span>
                    </div>
                    <span class="txt1 p-b-11">
                        Mật khẩu
                    </span>
                    <div class="wrap-input100 validate-input m-b-12" data-validate="Password is required">
                        <input class="input100" type="password" name="pass">
                        <span class="focus-input100"></span>
                    </div>
                    <div class="alert" style="display: <?php echo $display ?>; color: red; padding: 0;">
                        <b><?php echo $message ?></b>
                    </div>
                    <div class="flex-sb-m w-full p-b-48">
                        <div class="contact100-form-checkbox">
                            <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
                            <label class="label-checkbox100" for="ckb1">
                                Ghi nhớ
                            </label>
                        </div>
                        <div>
                            <a href="" class="txt3">
                                Quên mật khẩu?
                            </a>
                        </div>
                    </div>
                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn" type="submit">
                            Đăng nhập
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-23581568-13');
    </script>
</body>

</html>