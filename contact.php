<?php
$mail_to_send_to = "info@talentcol.com";
$from_email = "from@yourdomain.tld";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $subject = "Message from $name";
    $message_body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $from_email" . "\r\n" . "Reply-To: $email";

    if (mail($mail_to_send_to, $subject, $message_body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Message failed to send. Please try again later.";
    }
}
?>
