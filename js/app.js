
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
