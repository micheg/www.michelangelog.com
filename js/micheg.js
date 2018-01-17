new WOW().init();

$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
              callback();
            }
        });
        return this;
    }
});

(function($)
{
    var app = {
        setup_ui: function () {
            $('.btn_menu').hover(function () {
                $(this).animateCss('rubberBand');
            }, function (){
                // skip
            });
            $('#logo').hover(function () {
                $(this).animateCss('tada');
            }, function (){
                // skip
            });
            $('.btn-social').hover(function () {
                $(this).animateCss('tada');
            }, function (){
                // skip
            });
        }
    };
    $(document).ready(function()
    {
        app.setup_ui();
        $.cookieBar({fixed: true});
    });
})(jQuery);
