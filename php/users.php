<?php
  
  $mysql = new mysqli("localhost", "root", "", "anyfinder");

  if($mysql->connect_error) {
    die("Connection failed: " . $mysql->connect_error);
  }
  
  $query = $mysql->query("SELECT `id`, `login`, `avatar`, `admin`, `moderator` FROM `users`");
  $data = array();
  while ($row = $query->fetch_assoc()) {
    $data[] = $row;
  }
  header("Content-Type: application/json");
  echo json_encode($data);
  
  $mysql->close();