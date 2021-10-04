<?php
session_start();
require('checkUser.php');
require('connectDb.php');
if($_SESSION['user']['RoleName'] == "marketing") {
    header('location: logout.php');
}
$orders = $conn->query("SELECT o.Id as OrderId, od.UnitPrice, o.CustomerId, o.UserId, c.CustomerName, o.CreatedDate, o.StatusOrder, o.StatusPayment, u.UserName, u.FullName
FROM orders o join customers c on o.CustomerId = c.Id
join orderdetails od on od.OrderId = o.Id
join users u on o.UserId = u.Id where o.StatusOrder != 'Hoàn thành' order by o.Id desc")->fetchAll();
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
                        <div class="right__title">Quản lý thuê xe</div>
                        <a href="insert_order.php" class="lienket">
                            Thêm mới
                        </a>
                        <div class="right__table">
                            <div class="right__tableWrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Tên khách hàng</th>
                                            <th>Ngày tạo</th>
                                            <th>Trạng thái</th>
                                            <th>Thanh toán</th>
                                            <th>Thành tiền</th>
                                            <th>Chi tiết</th>
                                            <th>Sửa</th>
                                            <th>Xoá</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <?php for ($i = 0; $i < count($orders); $i++) { ?>
                                            <tr>
                                                <td data-label="Id"><?php echo $orders[$i]['OrderId'] ?></td>
                                                <td data-label="Tên khách hàng"><a target="_blank" href="update_customer.php?Id=<?php echo $orders[$i]['CustomerId'] ?>"><?php echo $orders[$i]['CustomerName'] ?></a></td>
                                                <td data-label="Ngày tạo"><?php echo date("d-m-Y", strtotime($orders[$i]['CreatedDate'])) ?></td>
                                                <td data-label="Trạng thái"><?php echo $orders[$i]['StatusOrder'] ?></td>
                                                <td data-label="Thanh toán"><?php echo $orders[$i]['StatusPayment'] ?></td>
                                                <td data-label="Thành tiền"><?php echo $orders[$i]['UnitPrice'] ?></td>
                                                <td data-label="Chi tiết" class="right__iconTable"><a target="_blank" href="details_order.php?Id=<?php echo $orders[$i]['OrderId'] ?>"><img src="assets/icon-book.svg" alt=""></a></td>
                                                <td data-label="Sửa" class="right__iconTable"><a href="update_order.php?Id=<?php echo $orders[$i]['OrderId'] ?>"><img src="assets/icon-edit.svg" alt=""></a></td>
                                                <td data-label="Xoá" class="right__iconTable"><a onclick="return confirm('Bạn chắc chắn muốn xóa đơn đặt xe này ?')" href="delete.php?id=<?php echo $orders[$i]['OrderId'] ?>&type=order"><img src="assets/icon-trash-black.svg" alt=""></a></td>
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