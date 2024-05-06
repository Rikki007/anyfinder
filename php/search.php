<?php
  $value = file_get_contents(("php://input"), true);

  $mysql = new mysqli("localhost", "root", "", "anyfinder");

  if($mysql->connect_error) {
    die("Connection failed: " . $mysql->connect_error);
  }

  $sql = "SELECT * FROM `ads` WHERE product LIKE ? OR description LIKE ?";
  $stmt = $mysql->prepare($sql);
  $searchTerm = "%{$value}%";
  $stmt->bind_param('ss', $searchTerm, $searchTerm);

  $stmt->execute();
  $result = $stmt->get_result();
  
  $data = array();
  
  while ($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
  
  header("Content-Type: application/json");
  echo json_encode($data);

  $mysql->close();