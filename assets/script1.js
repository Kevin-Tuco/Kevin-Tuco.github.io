// I completely forgot what I did here
/*
    The code essentially adds the "visible" class to the elements with the class "tag" when they become 
    visible in the window as the user scrolls, and removes the class when they are no longer visible. 
    This class can be used for styling or other functionality on those elements.
*/

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
});
