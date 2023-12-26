<!DOCTYPE html>
<html>
<head>
    <title>簡単な掲示板</title>
</head>
<body>

<?php
// フォームが送信された場合
if (isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] == "POST") {
    // ユーザー名とメッセージの取得
    $username = isset($_POST["username"]) ? htmlspecialchars($_POST["username"]) : "";
    $message = isset($_POST["message"]) ? htmlspecialchars($_POST["message"]) : "";

    // アップロードされたファイルの処理
    $uploadedFiles = [];
    if (isset($_FILES["files"]["name"])) {
        for ($i = 0; $i < count($_FILES["files"]["name"]); $i++) {
            $fileName = $_FILES["files"]["name"][$i];
            $tmpName = $_FILES["files"]["tmp_name"][$i];
            move_uploaded_file($tmpName, "uploads/" . $fileName);
            $uploadedFiles[] = $fileName;
        }
    }

    // メッセージの書き込み
    $post = "$username さんが書き込みました: $message";
    $post .= "\n添付ファイル: " . implode(", ", $uploadedFiles);
    file_put_contents("messages.txt", $post . "\n", FILE_APPEND);
}

    // メッセージの表示
    $messages = file_get_contents("messages.txt");
    $messages = nl2br($messages); // 改行を<br>タグに変換
    echo $messages;
?>

<form enctype="multipart/form-data" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    ユーザー名: <input type="text" name="username" required><br>
    メッセージ: <textarea name="message" rows="4" cols="50" required></textarea><br>
    ファイルの添付 (最大5つ): <input type="file" name="files[]" multiple><br>
    <input type="submit" value="送信">
</form>

<script>
    // ユーザー名をダブルクリックしたらIPの最後の3桁が表示される
    document.querySelector('body').addEventListener('dblclick', function() {
        alert('IPの最後の3桁: <?php echo isset($_SERVER['REMOTE_ADDR']) ? substr($_SERVER['REMOTE_ADDR'], -3) : "N/A"; ?>');
    });
</script>

</body>
</html>
