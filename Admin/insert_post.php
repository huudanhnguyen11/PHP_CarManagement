<?php
session_start();
require('checkUser.php');
require('connectDb.php');

$disp = 'none';
$mes = '';
$allcar = $conn->query("select c.Id as CarId, c.CarName, c.LicenseCar, c.Price, b.BrandName
from cars c join brands b on c.BrandId = b.Id where c.Id not in (select CarId from Posts where CarId != 'NULL')")->fetchAll();
if (isset($_POST['btnAdd'])) {
    if($_POST['content'] != ""){
        if($_POST['category'] == "Tin tức") {
            $sqlp = "INSERT INTO `posts`(`Title`, `Category`, `CreatedDate`, `CreatedBy`, `Content`) VALUES (?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sqlp);
            $stmt->execute([$_POST['title'], $_POST['category'], date("Y-m-d"), $_SESSION['user']['UserName'], $_POST['content']]);
            $postid = $conn->lastInsertId();

            $path = "images/";
            if ($_FILES['image']['tmp_name'] == null) {
                $path .= "defaultnew.jpg";
            } else {
                $imagename = 'post_' .$postid. '.jpg';
                $path .= $imagename;
                move_uploaded_file($_FILES['image']['tmp_name'], $path);
            }
            $stmtup = $conn->prepare("update posts set Image = ? where Id = ?");
            $stmtup->execute([$path, $postid]);

            header("Location: show_post.php");
        }
        if($_POST['category'] == "Xe") {
            $car = $conn->query("select c.Id as CarId, c.CarName, c.CarImage, c.YearCar, b.BrandName from cars c join brands b on c.BrandId = b.Id where c.Id = " .$_POST['carid'])->fetch();
            $sqlp = "INSERT INTO `posts`(`Title`, `Category`, `Image`, `CreatedDate`, `CreatedBy`, `Content`, `CarId`) VALUES (?, ?, ?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sqlp);
            $stmt->execute([$car['BrandName']. ' ' .$car['CarName']. ' ' .$car['YearCar'], $_POST['category'], $car['CarImage'], date("Y-m-d"), $_SESSION['user']['UserName'], $_POST['content'], $car['CarId']]);

            header("Location: show_post.php");
        }
    } else {
        $disp = 'block';
        $mes = 'Bạn vẫn chưa nhập nội dung bài đăng!';
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
    <script src="../ckeditor/ckeditor.js"></script>
    <style>
        .divContent {
            margin-bottom: 15px;
            width: 950px;
            align-self: center;
        }

        @media screen and (max-width: 1300px) {
            .divContent {
                width: 630px;
            }
        }

        @media screen and (max-width: 799px) {
            .divContent {
                width: 450px;
            }
        }

        @media screen and (max-width: 511px) {
            .divContent {
                width: 350px;
            }
        }

        @media screen and (max-width: 380px) {
            .divContent {
                width: 300px;
            }
        }
    </style>
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
                        <div class="right__title">Quản lý bài đăng</div>
                        <p class="right__desc">Thêm mới bài đăng</p>
                        <div class="right__formWrapper">
                            <form action="" method="post" enctype="multipart/form-data">
                                <div class="right__inputWrapper">
                                    <label for="title">Tên bài đăng</label>
                                    <input id="txtTitle" type="text" required name="title" placeholder="Tên bài đăng">
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="category">Loại bài đăng</label>
                                    <select id="catcbb" name="category" required>
                                        <option value="" selected>---Mời chọn loại bài đăng---</option>
                                        <option value="Tin tức">Tin tức</option>
                                        <option value="Xe">Xe</option>
                                    </select>
                                    <script>
                                        var catcbb = document.getElementById("catcbb");
                                        catcbb.onchange = function() {
                                            var car = document.getElementById("divcar");
                                            var txttitle = document.getElementById("txtTitle");
                                            var txtimage = document.getElementById("txtimage");
                                            if (catcbb.value == "Xe") {
                                                car.setAttribute("style", "display: flex;");
                                                document.getElementById("carcbb").setAttribute("required", "required");
                                                
                                                txttitle.setAttribute("disabled", "disabled");
                                                txttitle.removeAttribute("required");
                                                
                                                txtimage.setAttribute("disabled", "disabled");
                                            } else {
                                                car.setAttribute("style", "display: none;");
                                                document.getElementById("carcbb").removeAttribute("required");

                                                txttitle.removeAttribute("disabled");
                                                txttitle.setAttribute("required", "required");

                                                txtimage.removeAttribute("disabled");
                                            }
                                        }
                                    </script>
                                </div>
                                <div id="divcar" style="display: none;" class="right__inputWrapper">
                                    <label for="carid">Xe</label>
                                    <select id="carcbb" name="carid">
                                        <option value="" selected>---Mời chọn xe---</option>
                                        <?php for ($i = 0; $i < count($allcar); $i++) { ?>
                                            <option value="<?php echo $allcar[$i]['CarId'] ?>"><?php echo $allcar[$i]['BrandName'] . ' ' . $allcar[$i]['CarName'] . ' - Biển số: ' . $allcar[$i]['LicenseCar'] ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="image">Hình ảnh</label>
                                    <input id="txtimage" name="image" type="file" accept="image/*">
                                </div>
                                <div class="divContent">
                                    <div style="text-align: center; margin-bottom: 5px;">
                                        <b>Nội dung bài đăng</b>
                                    </div>
                                    <textarea id="con" style="resize: none;" name="content" cols="30" rows="10"></textarea>
                                </div>
                                <b style="display: <?php echo $disp ?>;color: red;"><?php echo $mes ?></b>
                                <button class="btn" type="submit" name="btnAdd" value="add">Thêm mới</button>
                            </form>
                            <script type="text/javascript">
                                CKEDITOR.replace('con');
                            </script>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="js/main.js"></script>
</body>

</html>