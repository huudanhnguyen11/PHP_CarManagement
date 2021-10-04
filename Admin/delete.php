<?php
require('connectDb.php');
if ($_GET['type'] == 'emp') {
    $avatar = $conn->query("select Avatar from users where Id=" .(int)$_GET['id'])->fetch();
    if($avatar[0] != "avatar/default.jpg"){
        unlink($avatar[0]);
    }
    $conn->query("delete from users where Id=" . $_GET['id']);
    header('Location: show_emp.php');
}
if ($_GET['type'] == 'car') {
    $carImage = $conn->query("select CarImage from cars where Id=" . (int)$_GET['id'])->fetch();
    if ($carImage[0] != "imagecar/defaultcar.jpg") {
        unlink($carImage[0]);
    }
    $conn->query("delete from cars where Id=" . $_GET['id']);
    header('Location: show_car.php');
}
if ($_GET['type'] == 'brand') {
    $conn->query("delete from brands where Id=" . $_GET['id']);
    header('Location: show_brand.php');
}
if ($_GET['type'] == 'customer') {
    $conn->query("delete from customers where Id=" . $_GET['id']);
    header('Location: show_customer.php');
}
if ($_GET['type'] == 'post') {
    $image = $conn->query("select Image from posts where Id=" .$_GET['id'])->fetch();
    if ($image[0] != "images/defaultnew.jpg") {
        unlink($image[0]);
    }
    $conn->query("delete from posts where Id=" . $_GET['id']);
    header('Location: show_post.php');
}
if ($_GET['type'] == 'order') {
    $orderid = $_GET['id'];
    $orderdt = $conn->query("select Id, CarId from orderdetails where OrderId=" .$orderid)->fetch();
    $conn->query("delete from orderdetails where Id=" . $orderdt['Id']);
    $conn->query("delete from orders where Id=" . $orderid);
    $conn->query("update cars set StatusCar = 'Chưa thuê' where Id = " .$orderdt['CarId']);
    header('Location: show_order.php');
}
