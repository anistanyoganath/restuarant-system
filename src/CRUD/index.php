<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-headers: *");


if (isset($_POST['order-confirmed'])) {
    echo "Order Confirmed";
}
