<?php
  $server = "localhost";
  $db_name = "waa_contact";
  $db_username = "bif2webscriptinguser";
  $db_password = "bif2021";

  try {
      $conn = new PDO ("mysql:host=$server;dbname=$db_name", $db_username, $db_password);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
      echo "<br>Connection failed";
      echo $e->getMessage();
    }

 ?>
