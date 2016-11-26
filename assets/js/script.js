$(document).ready(function() {


//Implement the "slide to left" when the user clicks on #carousel-next here
//   $('#carousel-next').click(function(){
//     var m=parseInt($('#carousel').css('margin-left').replace("px", ""));
//     if (m == -3840) {
//       return false;
//     }
//     else {
//       $('#carousel').css('margin-left',(m-960)+'px');
//     };
//   });
//
//   //Implement the "slide to right" when the user clicks on #carousel-prev here
//   $('#carousel-prev').click(function (){
//     var m=parseInt($('#carousel').css('margin-left').replace("px", ""));
//     if (m == 0) {
//     return false;
//     }
//     else {
//     $('#carousel').css('margin-left',(m+960)+'px')
//     };
// });
// click on -> button:
//     if at the end of carousel:
//         set margin-left = 0
//     else:
//         set margin-left = current margin-left - 960
// $('carousel-next').click(function(){
//   var m=parseInt($('#carousel').css('margin-left').replace("px", ""));
//   if (m == 0) {
//   return false;
//   }
//   else {
//   $('#carousel').css('margin-left',(m-960)+'px')
//   };
// })
//sticky nav

function parallax() {
    /* YOUR CODE HERE */
    var scrolled = $(window).scrollTop();
    $('.parallax').css('top', -(scrolled * 0.6) + 'px');
  }
// code here
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




// var searchBarPosition = $(".search-container").offset().top;

// $(window).scroll(function() {

//   var currentScroll = $(window).scrollTop();
//   console.log(currentScroll);

//   if (currentScroll < searchBarPosition) {
//     console.log("hello");
//     $(".search-container").removeClass("search-bar-fixed");
//   } else {
//     $(".search-container").addClass("search-bar-fixed");
//   }
// });


  //THIS IS NOT A REQUIRED QUESTION
  // EXTRA FOR EXPERTS

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});
