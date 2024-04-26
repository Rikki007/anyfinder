<?php
  $data = json_decode(file_get_contents("php://input"), true);
  $action = $data["action"];
  $login = $data["login"];
  $password = $data["password"];
  $avatar = $data["avatarNum"];

  $mysql = new mysqli("localhost", "root", "", "anyfinder");
  $mysql->set_charset("utf8");

  if($mysql->connect_error) {
      die("Connection failed: " . $mysql->connect_error);
  }
  if($action == "r") {
      $query = "INSERT INTO `users` (`login`, `password`, `avatar`) VALUES ('$login', '$password', $avatar)";
      if($mysql->query($query) === TRUE) {
          echo "New record created successfully";
          setcookie("username", $login, time() + 3600, "/");
          setcookie("avatar", $avatar, time() + 3600,"/");
          setcookie("admin", 0, time() + 3600,"/");
          setcookie("moderator", 0, time() + 3600,"/");
      } else {
          echo $mysql->error;
      }
  }

  if($action == "l") {
    $result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$password'");
    $user = $result->fetch_assoc();
    if(count($user) == 0) {
        echo "user not found";
        exit();
    }
    // echo "User is founded";
    header("Content-Type: application/json");
    echo json_encode($user);
    setcookie("username", $user['login'], time() + 3600, "/");
    setcookie("avatar", $user['avatar'], time() + 3600,"/");
    setcookie("admin", $user['admin'], time() + 3600,"/");
    setcookie("moderator", $user['moderator'], time() + 3600,"/");

  }
  $mysql->close();
