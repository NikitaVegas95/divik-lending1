<?php

$recepient = "ooodivik@yandex.ru";
$sitename = "DIVIK";

$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $tel \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");