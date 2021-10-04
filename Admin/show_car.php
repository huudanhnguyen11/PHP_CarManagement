<?php
session_start();
require('checkUser.php');
require('connectDb.php');
$cars = $conn->query("select * from cars,brands where cars.BrandId = brands.Id order by cars.Id desc")->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="css/main.css">
    <style>
        .lienket {
            background-color: white;
            color: black;
            border: 2px solid #73AD21;
            border-radius: 5px;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            font-family: "Lucida Sans Unicode";
            margin-bottom: 10px;
        }

        .lienket:hover {
            background-color: #73AD21;
            color: white;
        }

        .lienket:active {
            background-color: green;
            border-color: green;
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
                        <?php include('leftmenu.php'); ?>
                    </div>
                </div>
                <div class="right">
                    <div class="right__content">
                        <div class="right__title">Quản lý xe</div>
                        <a href="insert_car.php" class="lienket">
                            Thêm mới
                        </a>
                        <div class="right__table">
                            <div class="right__tableWrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên xe</th>
                                            <th>Hình ảnh</th>
                                            <th>Số chỗ</th>
                                            <th>Giá xe/1 ngày</th>
                                            <th>Biển số</th>
                                            <th>Trạng thái</th>
                                            <th>Sửa</th>
                                            <th>Xoá</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <?php for ($i = 0; $i < count($cars); $i++) { ?>
                                            <tr>
                                                <td data-label="STT"><?php echo $i + 1 ?></td>
                                                <td data-label="Tên"><?php echo $cars[$i]['BrandName'].' '.$cars[$i]['CarName'] ?></td>
                                                <td data-label="Hình ảnh"><img width="60px" height="75px" src="<?php echo $cars[$i]['CarImage'] ?>" alt=""></td>
                                                <td data-label="Số chỗ"><?php echo $cars[$i]['Seat'] ?></td>
                                                <td data-label="Giá xe/1 ngày"><?php echo $cars[$i]['Price'] ?></td>
                                                <td data-label="Biển số"><?php echo $cars[$i]['LicenseCar'] ?></td>
                                                <td data-label="Trạng thái"><?php echo $cars[$i]['StatusCar'] ?></td>
                                                <td data-label="Sửa" class="right__iconTable"><a href="update_car.php?Id=<?php echo $cars[$i][0] ?>"><img src="assets/icon-edit.svg" alt=""></a></td>
                                                <td data-label="Xoá" class="right__iconTable"><a onclick="return confirm('Bạn chắc chắn muốn xóa xe <?php echo $cars[$i]['BrandName'].' '.$cars[$i]['CarName'] ?> ?')" href="delete.php?id=<?php echo $cars[$i][0] ?>&type=car"><img src="assets/icon-trash-black.svg" alt=""></a></td>
                                            </tr>
                                        <?php } ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="js/main.js"></script>
</body>

</html>