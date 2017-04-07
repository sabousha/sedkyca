<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
// Create the email and send the message
$to = 's_aboushamalah@outlook.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: noreply@sedky.ca\n";
$headers .= "Reply-To: $email_address"; 
$headers .= 'X-Mailer: PHP/' . phpversion();
$headers .= "Content-Type: multipart/mixed";

ini_set('SMTP','smtp.live.com');
ini_set('smtp_port',25);

if (mail($to,$email_subject,$email_body,$headers))
{
    return "mail_success";
}
else
{
    return "mail_error";
}
?>
