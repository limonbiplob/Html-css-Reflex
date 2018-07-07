<?php




$name = @$_POST['name'];
$email = @$_POST['email'];
$sub = @$_POST['sub'];
$msg = @$_POST['msg'];
$submit = @$_POST['submit'];

$message =  'From: \r\n ' . 
            'Name:  ' . $name . '\r\n' .
            'Email:  ' . $email . '\r\n' .
            'Subject: ' . $sub . '\r\n' . 
            'Message: ' . $msg;

if( isset($submit) ) {
    
    if( !empty($name) && !empty($email) && !empty($sub) && !empty($msg) ){
        
        $to      = 'rrfinstitute@gmail.com';
        $subject = 'Reflex HTML Contact Form';
        
        $headers = 'From: no-reply@rrfpractice.com' . "\r\n" .
            'Reply-To: no-reply@rrfpractice.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        if( mail($to, $subject, $message, $headers) ){
            
            header("Location: thank-you.html");
            
        } else {
            header("Location: contact.html");
        }
        
    } else {
        header("Location: contact.html");
    }
    
}