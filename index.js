var clicks = 0;
$(document).ready(function() {
   $("#gmail").click(function() {
    clicks++;
    if(clicks % 2 != 0) {
    $(".loginbox").show("slow");
  }
  else {
    $(".loginbox").hide();
  }
  });
 });