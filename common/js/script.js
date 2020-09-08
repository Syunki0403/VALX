$(function () {
    var posi;

    setTimeout('mouse()');
    setTimeout('TopBtn()');

    // box5のhover処理
    $('.box5_hovers').each(function () {
        let img_off = $(this).attr('src');
        let img_on = $(this).attr('src').replace('_off', '_on');

        $(this).hover(
            function () {
                $(this).attr('src', img_on);
            },
            function () {
                $(this).attr('src', img_off);
            }
        );
    });

    // モーダル表示
    $(function () {
        $('.js-modal-open').each(function () {
            $(this).on('click', function () {
                var target = $(this).data('target');
                var modal = document.getElementById(target);
                $(modal).fadeIn(200);
                posi = $(window).scrollTop();
                $('body').addClass('fixed').css({'top': -posi});
            });
        });
        $('.modal_closebtn').on('click', function () {
            //$('body').attr({ style: '' });
            //$('body').css({ overflow: 'hidden' });
            //$('html, body').prop({ scrollTop: posi });
            $('body').removeClass('fixed');
            //$('body,html').stop().animate({scrollTop:posi}, 0);
            //$(window).scrollTop(posi);
            $('html, body').stop().scrollTop(posi);
            //$('html, body').stop(true);
            $('.js-modal').fadeOut(200);
        });
    });

    $(window).scroll(function () {
        //　★のフィードイン
        $('.box7_voice').each(function () {
            var posi = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if ((scroll - 300) > posi - windowHeight) {
                $('.js_star_fadein').addClass('active');
            }
        });

        //　サービスフェードイン
        $('.box5_shop').each(function () {
            var posi = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if ((scroll - 300) > posi - windowHeight) {
                $('.js-modal-open').addClass('active');
            }
        });

        // ナビの固定
        $('.box9').each(function () {
            var box9_posi = $(this).offset().top;
            var scroll = $(window).scrollTop();
            if (scroll >= box9_posi) {
                $('.box9 .head-nav').addClass('scrollset');

                // $('.box9 .box_nav').css({
                //     'position': 'fixed',
                //     'width': '560px',
                //     'top': '0',
                //     'background': 'radial-gradient(farthest-side circle at center bottom,#fffffa 46%,rgba(240,240,240) 116%)',
                //     'padding-bottom': '10px',
                //     'z-index': '2'
                // });
            } else {
                $('.box9 .head-nav').removeClass('scrollset');

                //$('.box9 .box_nav').css('position', 'static');
            }
        });
    });

    // スムーズスクロール
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

function mouse() {
    $('.box1_mouseImg').animate({
        marginTop: '-=18px'
    }, 700).animate({
        marginTop: '+=18px'
    }, 700);
    setTimeout('mouse()', 1400);
};

function TopBtn() {
    $('.box9_topBtn a').animate({
        top: '-=10px'
    }, 700).animate({
        top: '+=10px'
    }, 700);
    setTimeout('TopBtn()', 1400);
};