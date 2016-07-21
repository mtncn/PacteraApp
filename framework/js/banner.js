// JavaScript Document

$(function () {
    var $index = 0;
    var $preIndex = 0;
    $(".btn span").mouseover(function () {
        clearInterval(timer);
        $index = $(this).index();
        scrollPlay();
        $preIndex = $index;
    }).mouseout(function () {
        auto();
    })


    $(".aRight").click(function () {
        $index++;
        if ($index > 1) {
            $index = 0;
            $qiandex = 1;
        }
        scrollPlay();
        $preIndex = $index;
        clearInterval(timer);
        auto();
    })


    $(".aLeft").click(function () {
        $index--;
        if ($index < 0) {
            $index = 1;
            $preIndex = 0;
        }
        scrollPlay();
        $preIndex = $index;
        clearInterval(timer);
        auto();
    })
    auto();
    function auto() {
        timer = setInterval(function () {
            $index++;
            if ($index > 1) {
                $index = 0;
                $preIndex = 1;
            }
            scrollPlay();
            $preIndex = $index;
        }, 3000)
    }

    function scrollPlay() {
        $(".btn span").eq($index).addClass("hover").siblings().removeClass("hover");
        if ($index == 0 && $preIndex == 1) {
            $(".scroll div").eq($preIndex).stop(true, true).animate({
                "left": "-100%"
            });
            $(".scroll div").eq($index).css("left", "100%").stop(true, true).animate({
                "left": "0"
            });
        } else if ($index == 1 && $preIndex == 0) {
            $(".scroll div").eq($preIndex).stop(true, true).animate({
                "left": "100%"
            });
            $(".scroll div").eq($index).css("left", "-100%").stop(true, true).animate({
                "left": "0"
            });
        } else if ($index > $preIndex) { //左移
            $(".scroll div").eq($preIndex).stop(true, true).animate({
                "left": "-100%"
            });
            $(".scroll div").eq($index).css("left", "100%").stop(true, true).animate({
                "left": "0"
            });
        } else if ($index < $preIndex) { //右移
            $(".scroll div").eq($preIndex).stop(true, true).animate({
                "left": "100%"
            });
            $(".scroll div").eq($index).css("left", "-100%").stop(true, true).animate({
                "left": "0"
            });
        }
    }

    $(".middle").hover(function () {
        $(".aLeft,.aRight").fadeIn(500);
    }, function () {
        $(".aLeft,.aRight").fadeOut(500);
    })
})