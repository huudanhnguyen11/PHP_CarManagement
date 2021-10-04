<?php
require('Admin/connectDb.php');
$allnews = $conn->query("select * from posts where Category = 'Tin tức' order by Id desc limit 0,3")->fetchAll();
$allcar2 = $conn->query("select p.Id as PostId, p.Category, p.Title, c.CarImage, c.Price, c.Seat from posts p join cars c on p.CarId = c.Id where c.Seat = 2 order by p.Id desc limit 0,8")->fetchAll();
$allcar4 = $conn->query("select p.Id as PostId, p.Category, p.Title, c.CarImage, c.Price, c.Seat from posts p join cars c on p.CarId = c.Id where c.Seat = 4 order by p.Id desc limit 0,8")->fetchAll();
$allcar7 = $conn->query("select p.Id as PostId, p.Category, p.Title, c.CarImage, c.Price, c.Seat from posts p join cars c on p.CarId = c.Id where c.Seat = 7 order by p.Id desc limit 0,8")->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang chủ</title>

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

<body class="site com-sppagebuilder view-page no-layout no-task itemid-437 vi-vn ltr  sticky-header layout-fluid off-canvas-menu-init">
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
            <img src="./images/home.jpg" style="height: 550px; width: 100%;" alt="">
            <div id="sp-page-builder" class="sp-page-builder">
                <div class="page-content">
                    <!-- ------------------------------------ -->
                    <!-- Section gioi thieu co ban START -->
                    <section id="section-id-1513406215434" class="sppb-section ">
                        <div class="sppb-row-container">
                            <div class="sppb-row">
                                <div class="sppb-col-md-6">
                                    <div id="column-id-1513406215432" class="sppb-column">
                                        <div class="sppb-column-addons">
                                            <div class="clearfix">
                                                <div class="sppb-addon sppb-addon-single-image sppb-text-center ">
                                                    <div class="sppb-addon-content">
                                                        <div class="sppb-addon-single-image-container"><img style="height: fit-content;" class="sppb-img-responsive" src="./images/banghieu.jpg" alt="Image" title=""></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sppb-col-md-6">
                                    <div id="column-id-1513406215433" class="sppb-column">
                                        <div class="sppb-column-addons">
                                            <div id="sppb-addon-1513406215440" class="clearfix">
                                                <div class="sppb-addon sppb-addon-text-block 0  ">
                                                    <div class="sppb-addon-content">
                                                        <p><strong>Đình Auto - Cho thuê xe ô tô tự lái Đà Nẵng&nbsp;</strong>xin trân trọng gửi tới Quý khách lời chào, lời chúc sức khỏe và thành công.</p>
                                                        <p>Chúng tôi chuyên cho thuê xe du lịch tại Đà Nẵng, Cho thuê xe tự lái tại Đà Nẵng, Cho thuê xe các loại 4 chỗ, 7 chỗ.&nbsp;Quý khách lưu ý, <strong>xe thuê theo tháng/năm sẽ có giá khác ưu đãi hơn.</strong></p>
                                                        <p>Các loại xe đời mới, cao cấp và chất lượng với giá rẻ, quý khách hoàn toàn có thể yên tâm với dịch vụ cho thuê xe du lịch, xe tự lái tại Đà Nẵng.</p>
                                                        <p><strong>DỊCH VỤ CHO THUÊ XE DU LỊCH TẠI ĐÀ NẴNG.</strong></p>
                                                        <p>Địa chỉ: Lô 30-31 (124-128)đường 2/9 - Hải Châu - Tp Đà Nẵng<br>Hotline: 0931 525258 - 0919 190975</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Section gioi thieu co ban END -->
                    <!-- ------------------------------------ -->
                    <!-- Section xe START -->
                    <section id="section-id-1513406215446" class="sppb-section ">
                        <div class="sppb-row-container">
                            <div class="sppb-row">
                                <div class="sppb-col-md-12">
                                    <div id="column-id-1513406215445" class="sppb-column">
                                        <div class="sppb-column-addons">
                                            <div id="sppb-addon-1513406215449" class="clearfix">
                                                <div class="sppb-addon sppb-addon-module ">
                                                    <div class="sppb-addon-content">
                                                        <div class="sp-module ">
                                                            <h3 class="sp-module-title"><a href="./xe.php?seat=2" style="color: black;">Thuê xe máy</a></h3>
                                                            <div class="sp-module-content">
                                                                <div id="sj_basic_news_1607059746958662711" class="sj-basic-news">
                                                                    <div class="row">
                                                                        <?php for ($i = 0; $i < count($allcar2); $i++) { ?>
                                                                            <div class="col-md-3 bs-item cf   last">
                                                                                <div class="bs-image"> <a href="details_post.php?Id=<?php echo $allcar2[$i]['PostId'] ?>&Type=<?php echo $allcar2[$i]['Category'] ?>"> <img style="width: 260px; height: 165px;" src="<?php echo 'Admin/' . $allcar2[$i]['CarImage'] ?>" alt="" title="<?php echo $allcar2[$i]['Title'] ?>"> </a> </div>
                                                                                <div class="bs-content">
                                                                                    <div class="bs-title"> <a href="details_post.php?Id=<?php echo $allcar2[$i]['PostId'] ?>&Type=<?php echo $allcar2[$i]['Category'] ?>" title="<?php echo $allcar2[$i]['Title'] ?>"> <?php echo $allcar2[$i]['Title'] ?> </a> </div>
                                                                                </div>
                                                                                <div class="item-extra">
                                                                                    <ul>
                                                                                        <li> <span class="title">Số chỗ :</span> <span class="value"><?php echo $allcar2[$i]['Seat'] ?> chỗ</span> </li>
                                                                                        <li> <span class="title">Giá thuê ngày:</span> <span class="value"><?php echo (int)$allcar2[$i]['Price'] ?> VNĐ</span> </li>
                                                                                        <li> <span class="title">Giá thuê tháng:</span> <span class="value">0777512747</span> </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        <?php } ?>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="sp-module ">
                                                            <h3 class="sp-module-title"><a href="./xe.php?seat=4" style="color: black;">Thuê xe 4 chỗ</a></h3>
                                                            <div class="sp-module-content">
                                                                <div id="sj_basic_news_1607059746958662711" class="sj-basic-news">
                                                                    <div class="row">
                                                                        <?php for ($i = 0; $i < count($allcar4); $i++) { ?>
                                                                            <div class="col-md-3 bs-item cf   last">
                                                                                <div class="bs-image"> <a href="details_post.php?Id=<?php echo $allcar4[$i]['PostId'] ?>&Type=<?php echo $allcar4[$i]['Category'] ?>"> <img style="width: 260px; height: 165px;" src="<?php echo 'Admin/' . $allcar4[$i]['CarImage'] ?>" alt="" title="<?php echo $allcar4[$i]['Title'] ?>"> </a> </div>
                                                                                <div class="bs-content">
                                                                                    <div class="bs-title"> <a href="details_post.php?Id=<?php echo $allcar4[$i]['PostId'] ?>&Type=<?php echo $allcar4[$i]['Category'] ?>" title="<?php echo $allcar4[$i]['Title'] ?>"> <?php echo $allcar4[$i]['Title'] ?> </a> </div>
                                                                                </div>
                                                                                <div class="item-extra">
                                                                                    <ul>
                                                                                        <li> <span class="title">Số chỗ :</span> <span class="value"><?php echo $allcar4[$i]['Seat'] ?> chỗ</span> </li>
                                                                                        <li> <span class="title">Giá thuê ngày:</span> <span class="value"><?php echo (int)$allcar4[$i]['Price'] ?> VNĐ</span> </li>
                                                                                        <li> <span class="title">Giá thuê tháng:</span> <span class="value">0777512747</span> </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        <?php } ?>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="sp-module ">
                                                            <h3 class="sp-module-title"><a href="./xe.php?seat=7" style="color: black;">Thuê xe 7 chỗ</a></h3>
                                                            <div class="sp-module-content">
                                                                <div id="sj_basic_news_1607059746195670016" class="sj-basic-news">
                                                                    <div class="row">
                                                                        <?php for ($i = 0; $i < count($allcar7); $i++) { ?>
                                                                            <div class="col-md-3 bs-item cf  ">
                                                                                <div class="bs-image"> <a href="details_post.php?Id=<?php echo $allcar7[$i]['PostId'] ?>&Type=<?php echo $allcar7[$i]['Category'] ?>"> <img style="width: 260px; height: 165px;" src="<?php echo 'Admin/' . $allcar7[$i]['CarImage'] ?>" alt="" title="<?php echo $allcar7[$i]['Title'] ?>"> </a> </div>
                                                                                <div class="bs-content">
                                                                                    <div class="bs-title"> <a href="details_post.php?Id=<?php echo $allcar7[$i]['PostId'] ?>&Type=<?php echo $allcar7[$i]['Category'] ?>" title="<?php echo $allcar7[$i]['Title'] ?>"> <?php echo $allcar7[$i]['Title'] ?> </a> </div>
                                                                                </div>
                                                                                <div class="item-extra">
                                                                                    <ul>
                                                                                        <li> <span class="title">Số chỗ :</span> <span class="value"><?php echo $allcar7[$i]['Seat'] ?> chỗ</span> </li>
                                                                                        <li> <span class="title">Giá thuê ngày:</span> <span class="value"><?php echo (int)$allcar7[$i]['Price'] ?> VNĐ</span> </li>
                                                                                        <li> <span class="title">Giá thuê tháng:</span> <span class="value">0777512747</span> </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        <?php } ?>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Section xe END -->
                    <!-- ------------------------------------ -->
                    <!-- Section tin tuc START -->
                    <section id="section-id-1513409600217" class="sppb-section ">
                        <div class="sppb-row-container">
                            <div class="sppb-row">
                                <div class="sppb-col-md-12">
                                    <div id="column-id-1513409600216" class="sppb-column">
                                        <div class="sppb-column-addons">
                                            <div id="sppb-addon-1513410311995" class="clearfix">
                                                <div class="sppb-addon sppb-addon-module ">
                                                    <div class="sppb-addon-content">
                                                        <h3 class="sppb-addon-title"><a href="tin-tuc.php" style="color: #FF0000;">TIN TỨC SỰ KIỆN</a></h3>
                                                        <div id="sj_basic_news_16070597461163102431" class="sj-basic-news">
                                                            <div class="row">
                                                                <?php if (count($allnews) > 0) {
                                                                    for ($i = 0; $i < count($allnews); $i++) { ?>

                                                                        <div class="col-md-4 bs-item cf">
                                                                            <div class="bs-image"> <a title="<?php echo $allnews[$i]['Title'] ?>" href="details_post.php?Id=<?php echo $allnews[$i]['Id'] ?>&Type=<?php echo $allnews[$i]['Category'] ?>"> <img style="width: 360px; height: 240px;" src="<?php echo 'Admin/' . $allnews[$i]['Image'] ?>" alt="" title=""> </a> </div>
                                                                            <div class="bs-content">
                                                                                <div class="bs-title"> <a href="details_post.php?Id=<?php echo $allnews[$i]['Id'] ?>&Type=<?php echo $allnews[$i]['Category'] ?>" title="<?php echo $allnews[$i]['Title'] ?>"><?php echo substr($allnews[$i]['Title'], 0, 50) ?> ... </a> </div>
                                                                                <div class="bs-description"> </div>
                                                                            </div>
                                                                        </div>
                                                                <?php }
                                                                } ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Section tin tuc END -->
                    <!-- ------------------------------------ -->
                </div>
            </div>
            <!-- ------------------------------------ -->
            <!-- FOOTER START-->
            <?php include './layout/footer.php'; ?>
            <!-- FOOTER END-->
            <!-- ------------------------------------ -->
        </div>
    </div>
</body>

</html>