<?php
  $data = json_decode(file_get_contents("php://input"), true);
  $id = $data["id"];
  $status = $data["status"];

  $mysql = new mysqli("localhost", "root", "", "anyfinder");

  if($mysql->connect_error) {
    die("Connection failed: " . $mysql->connect_error);
  }
  $query = "UPDATE `ads` SET `status` = '$status' WHERE `id` = '$id'";
  if($mysql->query($query)) {
    echo "status was changed";
  }else{
    echo $mysql->error;
  }
   