$(document).ready(function() {
  $('.user-detail-list .site-data li').on('click', function() {
    $('.user-detail-list .site-data li').removeClass('active');
    var myClass = $(this).attr("class");
    $(this).toggleClass('active');
    $('.user-detail-content').children().hide();
    $('.user-detail-content').children('.' + myClass).show();
    return false;

  });

  $('.user-detail-list .site-data').children('.watched-books').addClass('active');
  $('.user-detail-content').children('.watched-books').show();
});