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

var c1 = document.getElementById("c1");
var parent = document.getElementById("p1");
c1.width = parent.offsetWidth - 40;
c1.height = parent.offsetHeight - 40;

var data1 = {
  labels : ["M","T","W","T","F","S","S"],
  datasets : [
    {
      fillColor : "rgba(255,255,255,.1)",
      strokeColor : "rgba(255,255,255,1)",
      pointColor : "#b66e5d",
      pointStrokeColor : "rgba(255,255,255,1)",
      data : [150,200,235,390,290,250,250]
    }
  ]
};

var options1 = {
  scaleFontColor : "rgba(255,255,255,1)",
  scaleLineColor : "rgba(255,255,255,1)",
  scaleGridLineColor : "transparent",
  bezierCurve : false,
  scaleOverride : true,
  scaleSteps : 5,
  scaleStepWidth : 100,
  scaleStartValue : 0
};

new Chart(c1.getContext("2d")).Line(data1,options1);

