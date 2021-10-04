<?php
session_start();
require('checkUser.php');
require('connectDb.php');
if($_SESSION['user']['RoleName'] == "marketing" || $_SESSION['user']['RoleName'] == "sale") {
    header('location: logout.php');
} 
$brands = $conn->query("select * from brands")->fetchAll();
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
                        <div class="right__title">Quản lý hãng xe</div>
                        <a href="insert_brand.php" class="lienket">
                            Thêm mới
                        </a>
                        <div class="right__table">
                            <div class="right__tableWrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên Hãng</th>
                                            <th>Mô tả</th>
                                            <th>Xoá</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <?php for ($i = 0; $i < count($brands); $i++) { ?>
                                            <tr>
                                                <td data-label="STT"><?php echo $i + 1 ?></td>
                                                <td data-label="Tên hãng"><?php echo $brands[$i]['BrandName'] ?></td>
                                                <td data-label="Mô tả"><?php echo $brands[$i]['Description'] ?></td>
                                                <td data-label="Xoá" class="right__iconTable"><a onclick="return confirm('Bạn chắc chắn muốn xóa hãng xe <?php echo $brands[$i]['BrandName'] ?> không ?')" href="delete.php?id=<?php echo $brands[$i]['Id'] ?>&type=brand"><img src="assets/icon-trash-black.svg" alt=""></a></td>
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