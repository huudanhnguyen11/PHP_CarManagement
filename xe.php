<?php
require('Admin/connectDb.php');
$news;
if (!isset($_GET['seat'])) {
    $news = $conn->query("select p.Id as PostId, p.Category, p.Image, p.Title, c.Seat, c.Price from posts p join cars c on p.CarId = c.Id where p.Category = 'Xe'")->fetchAll();
} elseif ($_GET['seat'] == '4') {
    $news = $conn->query("select p.Id as PostId, p.Category, p.Image, p.Title, c.Seat, c.Price from posts p join cars c on p.CarId = c.Id where p.Category = 'Xe' and c.Seat = 4")->fetchAll();
} elseif ($_GET['seat'] == '7') {
    $news = $conn->query("select p.Id as PostId, p.Category, p.Image, p.Title, c.Seat, c.Price from posts p join cars c on p.CarId = c.Id where p.Category = 'Xe' and c.Seat = 7")->fetchAll();
} else {
    $news = $conn->query("select p.Id as PostId, p.Category, p.Image, p.Title, c.Seat, c.Price from posts p join cars c on p.CarId = c.Id where p.Category = 'Xe' and c.Seat = 2")->fetchAll();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xe</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">

    <link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic&amp;subset=vietnamese" rel="stylesheet">
    <link rel="stylesheet" href="./style/main.css">
    <link rel="stylesheet" href="./style/main1.css">
    <link rel="stylesheet" href="./style/main2.css">
    <style>
        #sp-page-builder .page-content #section-id-1513406215434 {
            padding-top: 50px;
            padding-right: 0px;
            padding-bottom: 50px;
            padding-left: 0px;
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            margin-left: 0px;
            background-color: #f3f3f3;
        }

        #sp-bottom {
            background-image: url(./images/bg-bottom2.png);
            background-color: #f5f5f5;
            color: #ccc;
            padding: 35px 0px;
        }

        #sp-footer {
            background-color: burlywood;
            color: black;
        }
    </style>
</head>

<body class="site com-content view-article no-layout no-task itemid-278 vi-vn ltr  sticky-header layout-fluid off-canvas-menu-init">
    <div class="body-wrapper">
        <div class="body-innerwrapper">
            <!-- ------------------------------------ -->
            <!-- HEADER START-->
            <?php include './layout/header.php'; ?>
            <!-- HEADER END-->
            <!-- ------------------------------------ -->
            <!-- NAV START-->
            <?php include './layout/nav.php'; ?>
            <!-- NAV END-->
            <!-- ------------------------------------ -->
            <section id="sp-page-title">
                <div class="row">
                    <div id="sp-title" class="col-sm-12 col-md-12">
                        <div class="sp-column ">
                            <div class="sp-page-title">
                                <div class="container">
                                    <h2>Xe</h2>
                                    <ol class="breadcrumb"> <span>Bạn đang ở: &nbsp;</span>
                                        <li><a href="./index.php" class="pathway">Trang chủ</a></li>
                                        <li class="active">Xe</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="sp-main-body">
                <div class="container">
                    <div class="row">
                        <div id="sp-component" class="col-sm-9 col-md-9">
                            <div class="sp-column ">
                                <div id="system-message-container"> </div>
                                <div class="blog" itemscope="">
                                    <div class="items-row">
                                        <?php for ($i = 0; $i < count($news); $i++) { ?>
                                            <div class="col-sm-4">
                                                <article class="item column-<?php echo $i + 1 ?>" itemprop="blogPost" itemscope="">
                                                    <div class="entry-image intro-image"> <a href="details_post.php?Id=<?php echo $news[$i]['PostId'] ?>&Type=<?php echo $news[$i]['Category'] ?>"> <img style="width: 263px; height: 197px;" src="<?php echo 'Admin/' . $news[$i]['Image'] ?>" alt="" itemprop="thumbnailUrl"></a></div>
                                                    <div class="entry-header">
                                                        <h2 itemprop="name"> <a href="details_post.php?Id=<?php echo $news[$i]['PostId'] ?>&Type=<?php echo $news[$i]['Category'] ?>" itemprop="url"><?php echo $news[$i]['Title'] ?></a> </h2>
                                                    </div>
                                                    <dl class="fields-container">
                                                        <dd class="field-entry" style="margin-bottom: 0;"> <span class="field-label">Số chỗ: </span> <span class="field-value"><?php echo $news[$i]['Seat'] ?> chỗ</span> </dd>
                                                        <dd class="field-entry" style="margin-bottom: 0;"> <span class="field-label">Giá thuê ngày: </span> <span class="field-value"><?php echo (int)$news[$i]['Price'] ?> VNĐ</span> </dd>
                                                        <dd class="field-entry" style="margin-bottom: 0;"> <span class="field-label">Giá thuê tháng: </span> <span class="field-value">0777512747</span> </dd>
                                                    </dl>
                                                    <p class="readmore"> <a class="btn btn-default" href="details_post.php?Id=<?php echo $news[$i]['PostId'] ?>&Type=<?php echo $news[$i]['Category'] ?>" itemprop="url"> Xem tiếp... </a> </p>
                                                </article>
                                            </div>
                                        <?php } ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="sp-right" class="col-sm-3 col-md-3">
                            <div class="sp-column class2">
                                <div class="sp-module ">
                                    <h3 class="sp-module-title">Search</h3>
                                    <div class="sp-module-content">
                                        <div class="search">
                                            <form action="/tin-tuc.html" method="post"> <input name="searchword" id="mod-search-searchword" maxlength="200" class="inputbox search-query" type="text" size="20" placeholder="Search..."> <input type="hidden" name="task" value="search"> <input type="hidden" name="option" value="com_search"> <input type="hidden" name="Itemid" value="536"> </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="sp-module ">
                                    <div class="sp-module-content">
                                        <div class="custom">
                                            <div id="support-online">
                                                <h4 style="background-color: burlywood;color: black;">24/7 Support<span>thắc mắc liên lạc ngay với chúng tôi để được hỗ trợ</span></h4>
                                                <ul>
                                                    <li id="tel"><a><i class="fa fa-phone-square"></i> Hotline: (+84)931525258</a></li>
                                                    <li id="email-sup"><a href="mailto:dinhautodn@gmail.com"><i class="fa fa-envelope-o"></i> dinhautodn@gmail.com</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ------------------------------------ -->
            <!-- FOOTER START-->
            <?php include './layout/footer.php'; ?>
            <!-- FOOTER END-->
            <!-- ------------------------------------ -->
        </div>
    </div>

</body>

</html>