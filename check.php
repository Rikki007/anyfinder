<?php
  $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
  $login = filter_var(trim($_POST["login"]), FILTER_SANITIZE_STRING);
  $password = filter_var(trim($_POST["password"]), FILTER_SANITIZE_STRING);

  if(mb_strlen($name) < 4 || mb_strlen($name) > 10) {
    print_r("The length of name must be more than 4 and less than 10 chars");
    exit();
  } else if (mb_strlen($login) < 4 || mb_strlen($login) > 10) {
    print_r("The length of login must be more than 4 and less than 10 chars");
    exit();
  } else if (mb_strlen($password) < 2 || mb_strlen($password) > 4) {
    print_r("The length of password must be more than 2 and less than 4 chars");
    exit();
  }


  $mysql = new mysqli("localhost","root","","anyfinder");
  $mysql->query("INSERT INTO `users` (`name`, `login`, `password`) VALUES('$login', '$name', '$password')");

  $mysql->close();

  header("Location: /");
?>