<?php
  $data = json_decode(file_get_contents("php://input"), true);
  $login = $data["login"];
  $type = $data["type"];
  $action = $data["action"];

  $mysql = new mysqli("localhost", "root", "", "anyfinder");

  if($mysql->connect_error) {
    die("Connection failed: " . $mysql->connect_error);
  }

  if($type === 'moderator' && $action === 'give') {
    $tiny = 1;
    $query = $mysql->query("UPDATE `users` SET `moderator` = '$tiny' WHERE `login` = '$login'");
    $res = $mysql->query("SELECT `login`, `admin`, `moderator` FROM `users` WHERE `login` = '$login'");
    header("Content-Type: application/json");
    echo json_encode($res->fetch_assoc());
  }

  if($type === 'moderator' && $action === 'take') {
    $tiny = 0;
    $query = $mysql->query("UPDATE `users` SET `moderator` = '$tiny' WHERE `login` = '$login'");
    $res = $mysql->query("SELECT `login`, `admin`, `moderator` FROM `users` WHERE `login` = '$login'");
    header("Content-Type: application/json");
    echo json_encode($res->fetch_assoc());
  }

  if($type === 'admin' && $action === 'give') {
    $tiny = 1;
    $query = $mysql->query("UPDATE `users` SET `admin` = '$tiny' WHERE `login` = '$login'");
    $res = $mysql->query("SELECT `login`, `admin`, `moderator` FROM `users` WHERE `login` = '$login'");
    header("Content-Type: application/json");
    echo json_encode($res->fetch_assoc());
  }

  if($type === 'admin' && $action === 'take') {
    $tiny = 0;
    $query = $mysql->query("UPDATE `users` SET `admin` = '$tiny' WHERE `login` = '$login'");
    $res = $mysql->query("SELECT `login`, `admin`, `moderator` FROM `users` WHERE `login` = '$login'");
    header("Content-Type: application/json");
    echo json_encode($res->fetch_assoc());
  }

  $mysql->close();