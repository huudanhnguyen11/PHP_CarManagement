<?php
session_start();
require('checkUser.php');
require('connectDb.php');

$type = $_GET['Type'];
$disp = 'none';
$mes = '';
$post = $conn->query("select * from posts where Id = " . $_GET['Id'])->fetch();
if (isset($_POST['btnUpdate'])) {
    if ($_POST['content'] != "") {
        if ($type == "Tin tức") {

            // $sqlp = "update post set Title=?, ";
            // $stmt = $conn->prepare($sqlp);
            // $stmt->execute([$_POST['title'], $_POST['category'], date("Y-m-d"), $_SESSION['user']['UserName'], $_POST['content']]);
            // $postid = $conn->lastInsertId();
            
            if ($_FILES['image']['tmp_name'] != null) {
                $path = "images/";
                if ($post['Image'] == "images/defaultnew.jpg") {
                    $imagename = 'post_' . $post['Id'] . '.jpg';
                    $path .= $imagename;
                    move_uploaded_file($_FILES['image']['tmp_name'], $path);
                    $stmtup = $conn->prepare("update posts set Image = ? where Id = ?");
                    $stmtup->execute([$path, $post['Id']]);
                } else {
                    move_uploaded_file($_FILES['image']['tmp_name'], $post['Image']);
                }
            }
            $stmt = $conn->prepare("update posts set Title=?, Content=? where Id=?");
            $stmt->execute([$_POST['title'], $_POST['content'], $post['Id']]);
            header("Location: show_post.php");
        }
        if ($type == "Xe") {
            $stmt = $conn->prepare("update posts set Content = ? where Id = ?");
            $stmt->execute([$_POST['content'], $post['Id']]);

            header("Location: show_post.php");
        }
    } else {
        $disp = 'block';
        $mes = 'Bạn vẫn chưa nhập nội dung bài đăng!';
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="css/main.css">
    <script src="../ckeditor/ckeditor.js"></script>
    <style>
        .divContent {
            margin-bottom: 15px;
            width: 950px;
            align-self: center;
        }

        @media screen and (max-width: 1300px) {
            .divContent {
                width: 630px;
            }
        }

        @media screen and (max-width: 799px) {
            .divContent {
                width: 450px;
            }
        }

        @media screen and (max-width: 511px) {
            .divContent {
                width: 350px;
            }
        }

        @media screen and (max-width: 380px) {
            .divContent {
                width: 300px;
            }
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div class="container">
            <div class="dashboard">
                <div class="left">
                    <span class="left__icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <div class="left__content">
                        <?php include('leftmenu.php') ?>
                    </div>
                </div>
                <div class="right">
                    <div class="right__content">
                        <div class="right__title">Quản lý bài đăng</div>
                        <p class="right__desc">Chỉnh sửa bài đăng</p>
                        <div class="right__formWrapper">

                            <form action="" method="post" enctype="multipart/form-data">
                                <div style="clear: left;">
                                    <label><b>Loaị bài viết: </b><?php echo $type ?></label>
                                </div>
                                <?php if ($type == "Tin tức") { ?>
                                    <div class="right__inputWrapper">
                                        <label for="title">Tên bài đăng</label>
                                        <input type="text" required name="title" value="<?php echo $post['Title'] ?>" placeholder="Tên bài đăng">
                                    </div>
                                    <div class="right__inputWrapper">
                                        <label for="image">Hình ảnh</label>
                                        <input name="image" type="file" accept="image/*">
                                    </div>
                                <?php } else { ?>
                                    <div class="right__inputWrapper">
                                        <label for="title">Tên bài đăng</label>
                                        <input type="text" disabled name="title" value="<?php echo $post['Title'] ?>">
                                    </div>
                                <?php } ?>
                                <div class="divContent">
                                    <div style="text-align: center; margin-bottom: 5px;">
                                        <b>Nội dung bài đăng</b>
                                    </div>
                                    <textarea id="con" style="resize: none;" name="content" cols="30" rows="10">
                                        <?php echo $post['Content'] ?>
                                    </textarea>
                                </div>
                                <b style="display: <?php echo $disp ?>;color: red;"><?php echo $mes ?></b>
                                <button class="btn" type="submit" name="btnUpdate" value="up">Cập nhật</button>
                            </form>
                            <script type="text/javascript">
                                CKEDITOR.replace('con');
                            </script>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="js/main.js"></script>
</body>

</html>