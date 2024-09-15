<?php
// if($_SERVER["REQUEST_METHOD"] == "POST") {
//     $name = strip_tags(trim($_POST["name"]));
//     $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
//     $subject = strip_tags(trim($_POST["subject"]));
//     $message = trim($_POST["message"]);

//     if ( empty($name) OR empty($subject) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
//         // Set a 400 (bad request) response code and exit.
//         http_response_code(400);
//         echo "Please complete the form and try again.";
//         exit;
//     }

//     $recipient = "amr.adwan6@gmail.com";
//     $subject = "[YourSite] New message from $name";
//     $email_content = "Name: $name\n";
//     $email_content .= "Email: $email\n\n";
//     $email_content .= "Message:\n$message\n";

//     $email_headers = "From: $name <$email>";

//     if (mail($recipient, $subject, $email_content, $email_headers)) {
//         http_response_code(200);
//         echo "Thank You! Your message has been sent.";
//     } else {
//         http_response_code(500);
//         echo "Oops! Something went wrong and we couldn't send your message.";
//     }

// } else {
//     // Not a POST request, set a 403 (forbidden) response code.
//     http_response_code(403);
//     echo "There was a problem with your submission, please try again.";
// }

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
  $name = strip_tags(trim($_POST["name"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $subject = "[YourSite] New message from " . strip_tags(trim($_POST["subject"]));
  $message = trim($_POST["message"]);

  if (empty($name) or !filter_var($email, FILTER_VALIDATE_EMAIL) or empty($subject) or empty($message))
  {
    http_response_code(400);
    echo "Please complete the form and try again.";
    exit;
  }

  $recipient = "amr.adwan6@gmail.com";

  // Email headers
  $email_headers = "From: $name <$email>\r\n";
  $email_headers .= "Reply-To: $email\r\n";
  $email_headers .= "MIME-Version: 1.0\r\n";
  $email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  // Email content
  $email_content = "Name: $name\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Message:\n$message\n";

  if (mail($recipient, $subject, $email_content, $email_headers))
  {
    http_response_code(200);
    echo "Thank You! Your message has been sent.";
  } else
  {
    http_response_code(500);
    echo "Oops! Something went wrong, and we couldn't send your message.";
  }
} else
{
  http_response_code(403);
  echo "There was a problem with your submission, please try again.";
}

?>
