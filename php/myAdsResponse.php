<?php
  $data = json_decode(file_get_contents("php://input"), true);

  $login = $data["login"];
  $isModerator = $data["isModerator"];
  
  $mysql = new mysqli("localhost", "root", "", "anyfinder");

  $moderator = 0;
  $result = $mysql->query("SELECT `moderator` FROM `users` WHERE `login` = '$login'");
  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $moderator = (int)$row['moderator'];
  }

  if ($moderator == 1 && $isModerator == true) {
    $result = $mysql->query("SELECT * FROM `ads` WHERE `status` = 'moderation'");
  } else {
    $result = $mysql->query("SELECT * FROM `ads` WHERE `login` = '$login'");
  }

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