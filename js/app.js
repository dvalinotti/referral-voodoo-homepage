
$(document).foundation();
//smooth scrolling added to the "Get Started" button on the stop
//goes to the id called "signup" at the bottom

function startup() {
			document.getElementById("signup").scrollIntoView({behavior:'smooth'});
}
function control_phone(){
$('#phone-number-field').keyup(function(){
		$(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'$1-$2-$3'))
});
}
$("#slideshowleft > div:gt(0)").hide();

setInterval(function() {
  $('#slideshowleft > div1:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshowleft');
}, 3000);

$("#slideshowright > div:gt(0)").hide();

setInterval(function() {
  $('#slideshowright > div2:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshowright');
}, 3000);
