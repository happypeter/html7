$(document).ready(function() {
  $('.subnav ul li').on('click', function() {
    $('.subnav ul li').removeClass('active');

    var myClass = $(this).attr("class");
    $(this).toggleClass('active');
    $('.books').children().hide();
    $('.books').children('.' + myClass).show();

  });

  $('.books').children('.watched-books').show();
});