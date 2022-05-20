<?php

if (isset($_POST["db"])) {
  submitUserInput();
}

function submitUserInput() {

  $name = $_POST["name"];
  $email = $_POST["email"];
  $comment1 = $_POST["comment1"];
  $comment2 = $_POST["comment2"];
  $checkbox = $_POST["checkbox"] == "on" ? 0 : 1;
  $dir = $_SERVER["DOCUMENT_ROOT"] . "/php/dbaccess.php";
  include($dir);
  if ($stmt = $conn->prepare("INSERT INTO contact (name,email,comment1,comment2,checkbox) VALUES (?,?,?,?,?)")) {
              $stmt->bindValue(1, $name);
              $stmt->bindValue(2, $email);
              $stmt->bindValue(3, $comment1);
              $stmt->bindValue(4, $comment2);
              $stmt->bindValue(5, $checkbox);
              $stmt->execute();
  }

}



 ?>
