
//Fade in on load
$(document).ready(function(){
  var x = 1000;
    $('#MTVU').fadeTo(x,1,function(){
      $('#MTNZ').fadeTo(x,1,function(){
        $('.logo').fadeTo(x,1);
      });
    });
  });

//Progress bar on top of page
window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
