<?php
  $login = file_get_contents("php://input");
  
  $mysql = new mysqli("localhost", "root", "", "anyfinder");
  $result = $mysql->query("SELECT * FROM `ads` WHERE `login` = '$login'");
  $data = array();
  while ($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
  if (count($data) == 0) {
    echo "ads is not exist";
    exit();
  }
  header("Content-Type: application/json");
  echo json_encode($data);
  $mysql->close();