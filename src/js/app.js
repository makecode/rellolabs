//=include libs/jquery.min.js
'use strict';

$( document ).ready(() => {

  $('.nav').on("click","a", function (event) {
    var margin,
      id  = $(this).attr('href'),
      top = $(id).offset().top;

    if ($(window).width() < 768) {
      margin = 30;
    } else {
      margin = 0;
    }

    event.preventDefault();

    $('body,html').animate({scrollTop: top - margin}, 1000);
  });

});
