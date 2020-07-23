var clicks = 0;
$(document).ready(function() {
$(".btn").click(function() {
	clicks++;
	if((clicks / 2) % 2 != 0) {
	$(".info-box").show("slow");
     }
     else {
     	$(".info-box").hide();
     }
});
});