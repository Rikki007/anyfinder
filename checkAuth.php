<?php
  $data = json_decode(file_get_contents("php://input"), true);
  $action = $data["action"];
  $login = $data["login"];
  $password = $data["password"];
  $avatar = $data["avatarNum"];

  $mysql = new mysqli("localhost", "root", "", "anyfinder");

  if ($mysql->connect_error) {
      die("Connection failed: " . $mysql->connect_error);
  }
  $query = "INSERT INTO `users` (`login`, `password`, `avatar`) VALUES ('$login', '$password', $avatar)";
  if ($mysql->query($query) === TRUE) {
      echo "New record created successfully";
      setcookie("username", $login, time() + (3600), "/");
      setcookie("avatar", $avatar, time() + (3600),"/");
  } else {
      echo $mysql->error;
  }

  $mysql->close();
