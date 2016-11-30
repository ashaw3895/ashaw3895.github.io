$(document).ready(function() {

// parallax
function parallax() {
    /* YOUR CODE HERE */
    var scrolled = $(window).scrollTop();
    $('.parallax').css('top', -(scrolled * 0.6) + 'px');
  }
// stickynav goddamn why the fuck doesn't it work right now???!??
var searchBarPosition = $(".nav").offset().top;

$(window).scroll(function() {
  parallax();
  var scrollHeight = $(window).scrollTop();

  if (scrollHeight > searchBarPosition) {
    $(".nav").addClass("search-bar-fixed");
  } else {
    $(".nav").removeClass("search-bar-fixed");
  }

  });

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};


$("#contactclick").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
});

//
$("#jen").click(function() {
    $("#jen-popup.ppl-popup").fadeIn();
  });

$("#shan").click(function() {
    $("#shan-popup.ppl-popup").fadeIn();
  });

$("#ned").click(function() {
    $("#ned-popup.ppl-popup").fadeIn();
  });

$(".stock").click(function() {
    $("#stock-popup.ppl-popup").fadeIn();
  });
$("#lisa").click(function() {
    $("#lisa-popup.ppl-popup").fadeIn();
  });

$(".button").click(function() {
    $(".ppl-popup").fadeOut();
  });
  // EXTRA FOR EXPERTS

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});
