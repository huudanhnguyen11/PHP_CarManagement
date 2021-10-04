<?php
session_start();
require('checkUser.php');
require('connectDb.php');

$disp = 'none';
$mes = '';
$carId = (int)$_GET['Id'];
$car = $conn->query("select * from cars,brands where cars.BrandId = brands.Id and cars.Id=" . $carId)->fetch();
$brands = $conn->query("select * from brands")->fetchAll();
$checkus = false;
if (isset($_POST['btnUpdate'])) {
    $licCarCurrent = $car['LicenseCar'];
    $checkus = false;
    if ($licCarCurrent != $_POST['licensecar']) {
        $allcar = $conn->query('select Id,LicenseCar from cars where Id!='.$carId)->fetchAll();
        for ($i = 0; $i < count($allcar); $i++) {
            if ($_POST['licensecar'] == $allcar[$i]['LicenseCar']) {
                $checkus = true;
            }
        }
    }
    if ($checkus == false) {
        if ($_FILES['imagecar']['tmp_name'] != null) {
            if($car['CarImage'] != "imagecar/defaultcar.jpg"){
                unlink($car['CarImage']);
            }

            $path = "imagecar/";
            $imagename = str_replace(' ', '', $_POST['licensecar']);
            $path .= $imagename . '.jpg';
            move_uploaded_file($_FILES['imagecar']['tmp_name'], $path);
            $sqlUpImage = "update cars set CarImage=? where Id=?";
            $conn->prepare($sqlUpImage)->execute([$path, $carId]);
        }
        $sql = "update cars set CarName=?, Seat=?, Price=?, LicenseCar=?, YearCar=?, StatusCar=?, Description=?, BrandId=? where Id=?";
        $stmt = $conn->prepare($sql);
        $insert = $stmt->execute([$_POST['carname'], (int)$_POST['seat'], (float)$_POST['price'], $_POST['licensecar'], (int)$_POST['yearcar'], $_POST['statuscar'], $_POST['description'], $_POST['brandid'], $carId]);
        if ($insert == true) {
            header('Location: show_car.php');
        }
    } else {
        $brandname = $conn->query("select BrandName from brands where Id=" + (int)$_POST['brandid'])->fetch();
        $disp = 'block';
        $mes = 'Xe ' . $brandname[0] . ' ' . $_POST['carname'] . ' cùng với biển số là ' . $_POST['licensecar'] . ' đã tồn tại!';
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
                        <p class="right__desc">Chỉnh sửa xe</p>
                        <div class="right__formWrapper">
                            <form action="" method="post" enctype="multipart/form-data">
                                <div class="right__inputWrapper">
                                    <label for="carname">Tên xe</label>
                                    <input type="text" value="<?php echo $car['CarName'] ?>" required name="carname" placeholder="Tên xe">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="seat">Số chỗ</label>
                                    <select id="seatcbb" name="seat">
                                        <option value="2" >Xe máy - 2 chỗ</option>
                                        <option value="4" >Xe ô tô - 4 chỗ</option>
                                        <option value="7" >Xe ô tô - 7 chỗ</option>
                                    </select>
                                    <script>
                                        var seat = "<?php echo $car['Seat'] ?>";
                                        var selectseat = document.getElementById("seatcbb");
                                        for (let index = 0; index < 3; index++) {
                                            if (selectseat.options[index].value == seat) {
                                                selectseat.options[index].selected = 'selected';
                                            }
                                        }
                                    </script>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="price">Giá xe/1 ngày</label>
                                    <input type="number" value="<?php echo (int)$car['Price'] ?>" required min="100000" name="price" placeholder="Giá xe nhập bằng số">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="licensecar">Biển số</label>
                                    <input type="text" value="<?php echo $car['LicenseCar'] ?>" required name="licensecar" placeholder="Biển số xe">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="yearcar">Năm sản xuất</label>
                                    <input type="number" value="<?php echo $car['YearCar'] ?>" required min="1990" max="2200" name="yearcar" placeholder="Năm sản xuất xe thấp nhất là 1990">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="b_car">Hãng xe</label>
                                    <select id="brandcbb" name="brandid">
                                        <?php for ($i = 0; $i < count($brands); $i++) { ?>
                                            <option value="<?php echo $brands[$i]['Id'] ?>"><?php echo $brands[$i]['BrandName'] ?></option>
                                        <?php } ?>
                                    </select>
                                    <script>
                                        var brandid = "<?php echo $car['BrandId'] ?>";
                                        var selectbrand = document.getElementById("brandcbb");
                                        for (let index = 0; index < <?php echo count($brands) ?>; index++) {
                                            if (selectbrand.options[index].value == brandid) {
                                                selectbrand.options[index].selected = 'selected';
                                            }
                                        }
                                    </script>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="statuscar">Trạng thái</label>
                                    <select id="statuscbb" name="statuscar">
                                        <option value="Chưa thuê">Chưa thuê</option>
                                        <option value="Đã thuê">Đã thuê</option>
                                    </select>
                                    <script>
                                        var status = "<?php echo $car['StatusCar'] ?>";
                                        var select = document.getElementById("statuscbb");
                                        for (let index = 0; index < 2; index++) {
                                            if (select.options[index].value == status) {
                                                select.options[index].selected = 'selected';
                                            }
                                        }
                                    </script>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="imagecar">Hình ảnh</label>
                                    <input name="imagecar" type="file" accept="image/*">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="desc">Mô tả</label>
                                    <textarea id="myDes" style="resize: none;" name="description" cols="30" rows="10" placeholder="Mô tả"></textarea>
                                    <?php if (!empty($car[8])) { ?>
                                        <script>
                                            document.getElementById("myDes").value = "<?php echo $car[8] ?>";
                                        </script>
                                    <?php } ?>
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