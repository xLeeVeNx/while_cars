<?php 
  $conn = new PDO("mysql:host=localhost;dbname=while_cars", 'mysql', 'mysql');

  $query = "INSERT INTO clientinfo VALUES(NOW(), :phone, :email, :name)";
  $msg = $conn->prepare($query);
  $msg->execute(['phone' => $_POST['phone'], 'email' => $_POST['email'], 'name' => $_POST['name']]);
?>