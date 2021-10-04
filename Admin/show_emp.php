<?php
session_start();
require('checkUser.php');
require('connectDb.php');
if($_SESSION['user']['RoleName'] == "marketing" || $_SESSION['user']['RoleName'] == "sale") {
    header('location: logout.php');
} 
$emps = $conn->query("select * from users where RoleName != 'admin' order by Id desc")->fetchAll();
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
                        <div class="right__title">Quản lý nhân viên</div>
                        <a href="insert_emp.php" class="lienket">
                            Thêm mới
                        </a>
                        <div class="right__table">
                            <div class="right__tableWrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên</th>
                                            <th>Hình ảnh</th>
                                            <th>Số điện thoại</th>
                                            <th>Địa chỉ</th>
                                            <th>Ngày sinh</th>
                                            <th>Tài khoản</th>
                                            <th>Sửa</th>
                                            <th>Xoá</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <?php for ($i = 0; $i < count($emps); $i++) { ?>
                                            <tr>
                                                <td data-label="STT"><?php echo $i + 1 ?></td>
                                                <td data-label="Tên"><?php echo $emps[$i]['FullName'] ?></td>
                                                <td data-label="Hình ảnh"><img width="60px" height="75px" src="<?php echo $emps[$i]['Avatar'] ?>" alt=""></td>
                                                <td data-label="Số điện thoại"><?php echo $emps[$i]['Phone'] ?></td>
                                                <td data-label="Địa chỉ"><?php echo $emps[$i]['Address'] ?></td>
                                                <td data-label="Ngày sinh"><?php echo date("d-m-Y", strtotime($emps[$i]['Birthday'])) ?></td>
                                                <td data-label="Tài khoản"><?php echo $emps[$i]['UserName'] ?></td>
                                                <td data-label="Sửa" class="right__iconTable"><a href="update_emp.php?Id=<?php echo $emps[$i]['Id'] ?>"><img src="assets/icon-edit.svg" alt=""></a></td>
                                                <td data-label="Xoá" class="right__iconTable"><a onclick="return confirm('Bạn chắc chắn muốn xóa nhân viên <?php echo $emps[$i]['FullName'] ?> ?')" href="delete.php?id=<?php echo $emps[$i]['Id'] ?>&type=emp"><img src="assets/icon-trash-black.svg" alt=""></a></td>
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