$(function(){

    $(window).scroll(() => {
      if ($(window).scrollTop() > 500) {
        $("#navbar").addClass("nav-scroll");
      } else {
        $("#navbar").removeClass("nav-scroll");
      }
    });
  
  });