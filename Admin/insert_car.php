<?php
session_start();
require('checkUser.php');
require('connectDb.php');

$disp = 'none';
$mes = '';
$brands = $conn->query("select * from brands")->fetchAll();
if (isset($_POST['btnAdd'])) {
    $allcar = $conn->query('select Id,LicenseCar from cars')->fetchAll();
    $checkus = false;
    for ($i = 0; $i < count($allcar); $i++) {
        if ($_POST['licensecar'] == $allcar[$i]['LicenseCar']) {
            $checkus = true;
        }
    }
    if ($checkus == false) {
        $path = "imagecar/";
        if ($_FILES['imagecar']['tmp_name'] == null) {
            $path .= "defaultcar.jpg";
        } else {
            $imagename = str_replace(' ', '', $_POST['licensecar']);
            $path .= $imagename . '.jpg';
            move_uploaded_file($_FILES['imagecar']['tmp_name'], $path);
        }
        $sql = "insert into `cars`(`CarName`, `Seat`, `Price`, `LicenseCar`, `CarImage`, `YearCar`, `StatusCar`, `Description`, `BrandId`) values (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $insert = $stmt->execute([$_POST['carname'], (int)$_POST['seat'], (float)$_POST['price'], $_POST['licensecar'], $path, (int)$_POST['yearcar'], 'Chưa thuê', $_POST['description'], $_POST['brandid']]);
        if ($insert == true) {
            header('Location: show_car.php');
        }
    } else {
        // $brandname = $conn->query("select BrandName from brands where Id=" + (int)$_POST['brandid'])->fetch();
        $brandname = '';
        foreach ($brands as $item) {
            if ($item['Id'] == $_POST['brandid']) {
                $brandname = $item['BrandName'];
                break;
            }
        }
        $disp = 'block';
        $mes = 'Xe ' . $brandname . ' ' . $_POST['carname'] . ' cùng với biển số là ' . $_POST['licensecar'] . ' đã tồn tại!';
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
                        <div class="right__title">Quản lý xe</div>
                        <p class="right__desc">Thêm mới xe</p>
                        <div class="right__formWrapper">
                            <form action="" method="post" enctype="multipart/form-data">
                                <div class="right__inputWrapper">
                                    <label for="carname">Tên xe</label>
                                    <input type="text" required name="carname" placeholder="Tên xe">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="seat">Số chỗ</label>
                                    <select name="seat" required>
                                        <option value="" selected>---Mời chọn số chỗ xe---</option>
                                        <option value="2" >Xe máy - 2 chỗ</option>
                                        <option value="4" >Xe ô tô - 4 chỗ</option>
                                        <option value="7" >Xe ô tô - 7 chỗ</option>
                                    </select>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="price">Giá xe/1 ngày</label>
                                    <input type="number" required min="100000" name="price" placeholder="Giá xe nhập bằng số">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="licensecar">Biển số</label>
                                    <input type="text" required name="licensecar" placeholder="Biển số xe">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="yearcar">Năm sản xuất</label>
                                    <input type="number" required min="1990" max="2200" name="yearcar" placeholder="Năm sản xuất xe thấp nhất là 1990">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="b_car">Hãng xe</label>
                                    <select name="brandid" required>
                                        <option value="" selected>---Mời chọn hãng xe---</option>
                                        <?php for ($i = 0; $i < count($brands); $i++) { ?>
                                            <option value="<?php echo $brands[$i]['Id'] ?>"><?php echo $brands[$i]['BrandName'] ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="imagecar">Hình ảnh</label>
                                    <input name="imagecar" type="file" accept="image/*">
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