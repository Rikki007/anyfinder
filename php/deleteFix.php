<?php
  $data = json_decode(file_get_contents("php://input"), true);
  $operationOnAd = $data["operationOnAd"];
  $id = $data["id"];
  $operation = $data["operation"];
  $product = $data["product"];
  $description = $data["description"];
  $price = $data["price"];


  $mysql = new mysqli("localhost", "root", "", "anyfinder");

  if($mysql->connect_error) {
    die("Connection failed: " . $mysql->connect_error);
  }
  if($operationOnAd == 'delete') {
    $query = "DELETE FROM `ads` WHERE `id` = '$id'";
    if($mysql->query($query)) {
      echo "ad is delete";
    }else{
      echo $mysql->error;
    }
  }
  if($operationOnAd == 'fix') {
    $query = "UPDATE `ads` SET `type` = '$operation', `product` = '$product', `description` = '$description', `price` = '$price', `status` = 'moderation' WHERE `id` = '$id'";
    if($mysql->query($query)) {
      // echo "ad has been changed and it waiting for moderation now.";
      echo $data;
    }else{
      echo $mysql->error;
    }
  }

  $mysql->close();
  