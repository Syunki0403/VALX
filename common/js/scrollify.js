var current;
var box2_trigger = Boolean(false);
var box_trigger = new Array(9);
var boxes = ['.box1_decoImg, .box1_logo_mouse, .box1_sinceImg'
    , '.box2_window, .box2_topFootprints li, .box2_bottomFootprints li'
    , 'not_animation'
    , '.box4_window, .box4_topFootprints li, .box4_bottomFootprints li'
    , 'not_animation'
    , '.box6_window, .box6_footprints li'
    , 'not_animation'
    , '.box8_footprints li'
    , 'not_animation'];

$(document).ready(function () {
    for (var i = 0; i < box_trigger.length; i++) {
        //トリガーtrue
        box_trigger[i] = Boolean("true");
        // boxごとに画像を非表示
        $(boxes[i]).hide();
    }
});

$.scrollify({
    section: ".box",
    setHeights: false,
    scrollbars: true,
    before: function (i, box) {
        current = i;

        // スクロールの表示・非表示
        if (i < 8) {
            $('body').css('overflow', 'hidden');
        }
        else {
           // $('body').removeAttr('style');
           $('body').css('overflow-y', 'scroll');
        }
    },
    after: function (i, box) {
        //トリガーがtrueの場合フェードイン
        if (box_trigger[i]) {
            // 繰り返し処理
            $(boxes[i]).each(function (j) {
                // 遅延させてフェードイン
                $(this).delay(200 * j).fadeIn(200);
            });
            //トリガーfalse
            box_trigger[i] = Boolean("");
        }
    },
    afterRender: function (i, box) {
        $('body').css('overflow', 'hidden');

        //box1の初期表示
        Box1();
    },
});

$(window).on('resize', function () {
    if (current) {
        var currentScrl = $('.box').eq(current).offset().top;
        $(window).scrollTop(currentScrl);
    }
});

function Box1() {
    // 繰り返し処理
    $(boxes[0]).each(function (i) {
        // 遅延させてフェードイン
        $(this).delay(500 * i).fadeIn(1000);
    });
};


