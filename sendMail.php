<?php 
if(isset($_POST['submit'])&&!empty($_POST['fullname'])&&!empty($_POST['mail'])&&!empty($_POST['phone'])&&!empty($_POST['msg'])){
    $to = ""; // this is your Email address
    $from = $_POST['mail']; // this is the sender's Email address
    $name = $_POST['fullname'];
    $subject = "Mail trimis prin formularul de contact de pe website";
    $message = $name . " (".$from.") sent the following message:" . "\n\n" . $_POST['msg'];
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    mail($to,$subject,$message,$headers);
    echo "Mesag trimis. Veți fi contactat în cel mai scurt timp.";
    }
?>