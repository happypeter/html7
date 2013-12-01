$(document).ready(function() {
  $('.user-detail-nav ul li').on('click', function() {
    $('.user-detail-nav ul li').removeClass('active');
    var myClass = $(this).attr("class");
    $(this).toggleClass('active');
    $('.user-detail-content').children().hide();
    $('.user-detail-content').children('.' + myClass).show();
    return false;

  });

  $('.books').children('.watched-books').show();
});