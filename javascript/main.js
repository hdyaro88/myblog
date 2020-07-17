    
/*$(document).ready(function(){
  $("#instagram").click(function(){
    var clicks = 0;
     clicks++;
     if(clicks === 1) {
       $("#facebook-box").hide();
        $("#twitter-box").hide();
    $("#instagram-box").show("slow");
      }
  else if(clicks === 2) {
    $("#instagram-box").hide();
    clicks = 0;
  }
  });
   $("#facebook").click(function (){
    var clicks = 0;
     clicks++;
     if(clicks === 1) {
      $("#twitter-box").hide();
       $("#instagram-box").hide();
    $("#facebook-box").show("slow");
    clicks = 0;
  }
  else if(clicks === 2) {
    $("#facebook-box").hide();
    clicks = 0;
  }
});
   $("#twitter").click(function(){
    var clicks = 0;
     clicks++;
     if(clicks === 1) {
       $("#instagram-box").hide();
        $("#facebook-box").hide();
    $("#twitter-box").show("slow");
      }
  else if(clicks === 2) {
    $("#twitter-box").hide();
    clicks = 0;
  }
  });
    $("#hide-social-box").click(function(){
     $(".social-box").hide();
   });
      $("#show-social-box").click(function(){
         $("#insta-anchor").on("click", function (e) {
        e.preventDefault();
    });
     $(".social-box").show();
   });
   
});
*/
$(document).ready(function() {
  $("#gmail").click(function() {
    $(".loginbox").show("slow");
  });
  $("#submit").click(function(){
    $(".loginbox").hide();
  });
});