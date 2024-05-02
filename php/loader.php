<?php
  $mysql = new mysqli("localhost", "root", "", "anyfinder");
  $query = $mysql->query("SELECT * FROM `ads` WHERE `status` = 'approved'");
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