//ANIMATION "BACK TO TOP"
$(document).ready(function(){
    //scroll animation
    $goUp.click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
     });
     $goToRev.click(function(){
        scrollTo("#review-form");
     });

    })
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
  function scrollTo(to){
        $('html, body').animate({
            scrollTop:  ($(to).offset().top)
        }, 2000);
}


