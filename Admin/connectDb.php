<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'cars_management_db';

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->query("set names utf8");
} catch (PDOException $e) {
    die($e->getMessage());
}
