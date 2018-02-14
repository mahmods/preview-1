$(document).ready(function () {
    new WOW().init();
    $('#homepage').fullpage({
        sectionsColor: ['#f2f2f2', '#1BBC9B', '#7E8F7C', '#C63D0F'],
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'right',
        continuousVertical: true,
        onLeave: function (index, nextIndex, direction) {

            if (direction == "up") {
                $(".section").removeClass("down");
                $(".section").removeClass("next");
                $(".section").removeClass("prev");
                $("#homepage .section:nth-child(" + nextIndex + ")").addClass("up");
                $("#homepage .section:nth-child(" + nextIndex + ")").next().addClass("next up");
                $("#homepage .section:nth-child(" + nextIndex + ")").prev().addClass("prev up");
            } else {
                $(".section").removeClass("up");
                $(".section").removeClass("next");
                $(".section").removeClass("prev");
                $("#homepage .section:nth-child(" + nextIndex + ")").addClass("down");
                $("#homepage .section:nth-child(" + nextIndex + ")").next().addClass("next down");
                $("#homepage .section:nth-child(" + nextIndex + ")").prev().addClass("prev down");
            }
            console.log(index + '-' + nextIndex)
        },
    });
});