<?php

$hostName = "localhost";
$dbUser = "root";
$dbPassword = "";
$dbName = "real_estate-login";
$conn = mysqli_connect($hostName, $dbUser, $dbPassword, $dbName);
if (!$conn) {
    die("Something went wrong;");
}

?>