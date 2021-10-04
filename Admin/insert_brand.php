<?php
session_start();
require('checkUser.php');
require('connectDb.php');

$disp = 'none';
$mes = '';
if (isset($_POST['btnAdd'])) {
    $allbrand = $conn->query('select BrandName from brands')->fetchAll();
    $checkbr = false;
    for ($i = 0; $i < count($allbrand); $i++) {
        if ($_POST['brandname'] == $allbrand[$i]['BrandName']) {
            $checkbr = true;
        }
    }
    if ($checkbr == false) {
        $sql = "insert into `brands`(`BrandName`, `Description`) values (?, ?)";
        $stmt = $conn->prepare($sql);
        $insert = $stmt->execute([$_POST['brandname'], $_POST['description']]);
        if ($insert == true) {
            header('Location: show_brand.php');
        }
    } else {
        $disp = 'block';
        $mes = 'Hãng xe này đã tồn tại!';
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
                        <div class="right__title">Quản lý hãng xe</div>
                        <p class="right__desc">Thêm mới hãng xe</p>
                        <div class="right__formWrapper">
                            <form method="post">
                                <div class="right__inputWrapper">
                                    <label for="BrandName">Tên hãng</label>
                                    <input required name="brandname" type="text" placeholder="Tên hãng">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="desc">Mô tả</label>
                                    <textarea style="resize: none;" name="description" cols="30" rows="10" placeholder="Mô tả"></textarea>
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