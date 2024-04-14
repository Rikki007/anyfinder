<?php
  $data = json_decode(file_get_contents("php://input"), true);
  $dataStrignify = json_encode($data);
  $login = $data["login"];
  $type = $data["operation"];
  $product = $data["product"];
  $description = $data["description"];
  $price = $data["price"];
  
  $mysql = new mysqli("localhost","root","","anyfinder");

  if ($mysql->connect_error) {
    die("Connection failed: " . $mysql->connect_error);
  }

  $query = "INSERT INTO `ads` (`login`, `type`, `product`, `description`, `price`) VALUES ('$login', '$type', '$product', '$description', '$price')";
  if($mysql->query($query)) {
    echo "Advertisement is created successfully";
  }else{
    echo $mysql->error;
  }
  $mysql->close();
