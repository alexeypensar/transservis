<?php

use PHPMailer\PHPMailer;
use PHPMailer\SMTP;
use PHPMailer\Exception;

// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];


// Формирование самого письма
$title = "Транс-Сервис - обращение с сайта";
$body = "
<h2>Обращение с сайта Транс-Сервис:</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$comment
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer(true);
try {

    $mail->IsSMTP();
    $mail->SMTPDebug = 2;
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";
    $mail->Host = "ssl://smtp.yandex.ru";
    $mail->Port = 465;

//    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
//    $mail->SMTPAuth = true;
    //$mail->SMTPDebug = 2;
//    $mail->Debugoutput = function ($str, $level) {
//        $GLOBALS['status'][] = $str;
//    };

    // Настройки вашей почты

//    $mail->Host = 'ssl://smtp.yandex.ru';
//    $mail->Port = 465;
    $mail->Username = 'trans-servis-website@yandex.ru';
    $mail->Password = '27continentstK';

//    $mail->STARTTLS = 25;
//    $mail->SMTPSecure = 'ssl';
//    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

    $mail->setFrom('trans-servis-website@yandex.ru'); // Адрес самой почты и имя отправителя

    // Получатель письма

    $mail->addAddress('info@pensar.ru'); // Ещё один, если нужен


// Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

// Проверяем отравленность сообщения
    if ($mail->send()) {
        $result = "success";
    } else {
        $result = "error";
    }

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "status" => $status]);