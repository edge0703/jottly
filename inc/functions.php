<?php // PHP functions
include("inc/dbconnect.php");

if (isset($_POST['button-contact'])) { // Process form if JS is off
	$receiver = "ck@css3files.com";
	$type = $_POST['contact-type'];
	if ($type == "message") $type = "message";
	else $type = "tip";
	$subject = "New $type from sketch-tips";
	$name = $_POST['name'];
	$email = $_POST['email'];
	$msg = $_POST['msg'];
	$mailheader = "From: $name<$email>";
	mail($receiver, $subject, $msg, $mailheader) or die("Fehler");
	$msgsent = 1;
}
?>