<?php

  $data = json_decode(file_get_contents("php://input"), true);
  $dataStrignify = json_encode($data);
  echo $dataStrignify;