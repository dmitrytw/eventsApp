$(function() {
	var $mainNav = $('.main-navigation');
  $('.nav-toggle').on("click", function() {
    $mainNav.toggleClass('open');
  
  });

$("html").click(function(event) {
    if ($(event.target).closest('.main-navigation, .nav-toggle').length === 0) {
        $('.main-navigation').removeClass('open');
    }
});

});

