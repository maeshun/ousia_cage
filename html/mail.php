<?php
// // カレントの言語を日本語に設定する
mb_language("ja");
// 内部文字エンコードを設定する
mb_internal_encoding("UTF-8");
$message = "NAME: " . $_POST["name"] . "\nMAIL ADDRESS: " . $_POST["mailaddress"] . "\nSUBJECT: " . $_POST["subject"] . "\nINQUIRY: " . $_POST["inquiry"];
$result = 'お問い合わせを送信しました。';

if (!mb_send_mail("info@cagegallery.com",$_POST["name"] . "様よりお問い合わせ", $message, "From: " . $_POST["mailaddress"])) {
  $result = "お問い合わせの送信に失敗しました。";
  exit("送信に失敗しました。");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="description" content="">
</head>
<body>
  <script>
  var msg = '<?php echo $result; ?>';
  alert(msg);
  location.href = "./about.html";
  </script>
</body>
</html>