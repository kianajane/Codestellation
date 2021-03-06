window.addEventListener("DOMContentLoaded", function() {
    function hasAttr(attribute) {
        var attr = $(this).attr(attribute);
        return (typeof attr !== typeof undefined && attr !== false)
    }

    var sections = ["#about", "#schedule", "#map", "#hardware", "#prizes", "#sponsors"];
    sections.forEach(function(section) {
        var button = $(section + "-button");
        var section = $(section);
        button.click(function(){
            sections.forEach(function(section) {
                if ($(section).hasClass("current")) {
                    $(section).removeClass("current");
                    $(section + "-button").removeClass("current");
                }
            });
            section.addClass("current");
            button.addClass("current");
            $('html, body').animate({
                scrollTop: $(section).offset().top
            }, 500);
      });
    });
});
