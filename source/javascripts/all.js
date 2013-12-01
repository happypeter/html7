$(document).ready(function() {
  $('.user-detail-nav ul li').on('click', function() {
    $('.user-detail-nav ul li').removeClass('active');
    var myClass = $(this).attr("class");
    $(this).toggleClass('active');
    $('.user-detail-content').children().hide();
    $('.user-detail-content').children('.' + myClass).show();
    return false;

  });

  $('.user-detail-list ul').children('.watched-books').addClass('active');
  $('.user-detail-content').children('.watched-books').show();
});