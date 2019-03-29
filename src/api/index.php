<?php

    $to = "vanshuhassija@gmail.com"; // this is your Email address
    $from = "vanshuhassija@gmail.com"; // this is the sender's Email address
    $first_name = "Vanshu";
    $last_name ="Hassija";
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . "hello  Dear";
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . "Hello dear";

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";



?>
