$(function(){

  // Nav Bar
  $('#nav-menu-toggle').on('click', function(e) {
    e.preventDefault();
    $('nav').fadeToggle();
  });
  $('nav a').on('click', function(e) {
    $('nav').fadeToggle();
  });
  $('#site-title a').on('click', function(e) {
    $('nav').fadeOut();
  });

});