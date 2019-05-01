
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

function send_email(){
    var name = document.getElementById("name").value;
    var emailfrom = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var comment = document.getElementById("comment").value;
    var emailto = "jose@srlgroup.co"
    var payload = "mailto:" + emailto + "?subject=" + "ReferralVoodoo: Request for Information" + "&body=" + comment + "%0D%0A" + "Thank You," + "%0D%0A" + name + "%0D%0A" + "Contact information: " + "%0D%0A"+ "Email: " + emailfrom + "%0D%0A" + "Phone Number: "+ phone;
    location.href = payload;
}