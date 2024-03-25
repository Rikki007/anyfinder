<?php
  $login = filter_var(trim($_POST["login"]), FILTER_SANITIZE_STRING);
  $password = filter_var(trim($_POST["password"]), FILTER_SANITIZE_STRING);

  $mysql = new mysqli("localhost","root","","anyfinder");
  $mysql->query("INSERT INTO `users` (`name`, `login`, `password`) VALUES('$login', '$name', '$password')");

  $mysql->close();

  header("Location: /");
?>