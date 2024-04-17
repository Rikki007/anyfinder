<?php
  $data = json_decode(file_get_contents("php://input"), true);
  $operation = $data["operation"];
  $id = $data["id"];

  $mysql = new mysqli("localhost", "root", "", "anyfinder");

  if ($mysql->connect_error) {
    die("Connection failed: " . $mysql->connect_error);
  }
  if($operation == 'delete') {
    $query = "DELETE FROM `ads` WHERE `id` = '$id'";
    if($mysql->query($query)) {
      echo "ad is delete";
    }else{
      echo $mysql->error;
    }
  }

  $mysql->close();
  