<?php

  $data = json_decode(file_get_contents("php://input"), true);
  $date = $data["date"];
  $type = $data["type"];
  
  $mysql = new mysqli("localhost", "root", "", "anyfinder");
  if($mysql->connect_error) {
    die("Connection failed: " . $mysql->connect_error);
  }

  if($date === 'empty' && $type !== 'empty') {

    $query = $mysql->query("SELECT * FROM `ads` WHERE `type` = '$type' AND `status` = 'approved'" );
    $rez = array();

    while ($row = $query->fetch_assoc()) {
      $rez[] = $row;
    }

    header("Content-Type: application/json");
    echo json_encode($rez);

  }

  if($date === 'new' && $type !== 'empty') {

    $query = $mysql->query("SELECT * FROM `ads` WHERE `type` = '$type' AND `status` = 'approved'" );
    $rez = array();

    while ($row = $query->fetch_assoc()) {
      $rez[] = $row;
    }

    usort($rez, function($a, $b) {
      return strtotime($a["date"]) - strtotime($b["date"]);
    });

    header("Content-Type: application/json");
    echo json_encode($rez);

  }

  if($date === 'old' && $type !== 'empty') {

    $query = $mysql->query("SELECT * FROM `ads` WHERE `type` = '$type' AND `status` = 'approved'" );
    $rez = array();

    while ($row = $query->fetch_assoc()) {
      $rez[] = $row;
    }

    usort($rez, function($a, $b) {
      return strtotime($b["date"]) - strtotime($a["date"]);
    });

    header("Content-Type: application/json");
    echo json_encode($rez);

  }

  if($date === 'new' && $type === 'empty') {

    $query = $mysql->query("SELECT * FROM `ads` WHERE `status` = 'approved'" );
    $rez = array();

    while ($row = $query->fetch_assoc()) {
      $rez[] = $row;
    }

    usort($rez, function($a, $b) {
      return strtotime($a["date"]) - strtotime($b["date"]);
    });

    header("Content-Type: application/json");
    echo json_encode($rez);

  }

  if($date === 'old' && $type === 'empty') {

    $query = $mysql->query("SELECT * FROM `ads` WHERE `status` = 'approved'" );
    $rez = array();

    while ($row = $query->fetch_assoc()) {
      $rez[] = $row;
    }

    usort($rez, function($a, $b) {
      return strtotime($b["date"]) - strtotime($a["date"]);
    });

    header("Content-Type: application/json");
    echo json_encode($rez);

  }

  $mysql->close();

