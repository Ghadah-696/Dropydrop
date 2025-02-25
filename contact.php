<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // استلام البيانات من النموذج
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $service = $_POST['service'];
    $message = $_POST['message'];

    // التحقق من صحة البيانات
    if (!empty($name) && !empty($email) && !empty($phone) && !empty($service) && !empty($message)) {
        // إعداد تفاصيل البريد الإلكتروني
        $to = "ghadaha696@gmail.com"; // استبدل هذا البريد الإلكتروني ببريدك الإلكتروني الشخصي
        $subject = "New Contact Form Submission";
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nService: $service\n\nMessage:\n$message";
        $headers = "From: $email";

        // إرسال البريد الإلكتروني
        if (mail($to, $subject, $body, $headers)) {
            echo "Your message has been sent successfully!";
        } else {
            echo "Failed to send your message. Please try again later.";
        }
    } else {
        echo "Please fill in all fields.";
    }
} else {
    echo "Invalid request method.";
}
?>