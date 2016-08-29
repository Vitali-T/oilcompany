<?php 
if(isset($_POST['submit'])&&!empty($_POST['contact'])&&!empty($_POST['mail'])&&!empty($_POST['phone'])&&!empty($_POST['products'])&&!empty($_POST['quantity'])){
    $to = ""; // this is your Email address
    $from = $_POST['mail']; // this is the sender's Email address
    $name = $_POST['contact'];
    $phone = $_POST['phone'];
    $products = $_POST['products'];
    $quantity = $_POST['quantity'];
    $subject = "Cerere de ofertă";
    $message = $name . " a solicitat oferta de pret pentru: " . "\n\n" . $products ."\n\n Cantitate: ".$quantity;
    $message .= "\n\n Date de contact: \n\n Nume: " . $name . "\n\n E-mail: " . $from . "\n\n Telefon: " . $phone;
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    mail($to,$subject,$message,$headers);
    echo "Mesag trimis. Veți fi contactat în cel mai scurt timp.";
    }
?>