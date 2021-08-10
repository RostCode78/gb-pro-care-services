<?php
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];

$destinatario = "zeroxcode78@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "From: $name \n";
$carta .= "Email: $email \n";
$carta .= "Number: $number \n";

mail($destinatario, $asunto, $carta); 
header('Location:index.html');

?>