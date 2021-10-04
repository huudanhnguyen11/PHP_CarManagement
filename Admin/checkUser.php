<?php
if (!isset($_SESSION['user']) && $_SESSION['user'] == null) {
    header('location: login.php');
}