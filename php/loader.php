<?php
  $offset = file_get_contents(("php://input"), true);
  $numOfRecords = 12;

  $mysql = new mysqli("localhost", "root", "", "anyfinder");

  if($mysql->connect_error) {
    die("Connection failed: " . $mysql->connect_error);
  }

  $query = $mysql->query("SELECT * FROM `ads` WHERE `status` = 'approved' LIMIT $offset, $numOfRecords");
  $data = array();
  while ($row = $query->fetch_assoc()) {
    $data[] = $row;
  }
  if (count($data) == 0) {
    echo "ads is not exist";
    exit();
  }
  header("Content-Type: application/json");
  echo json_encode($data);
  
  $mysql->close();