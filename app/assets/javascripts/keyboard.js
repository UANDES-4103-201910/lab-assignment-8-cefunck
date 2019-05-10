// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
});

$(document).ready(function(){

	$(".key").click(function(){
		var text = $(".textarea").text();
		$('.textarea').text(text+=this.textContent);
		console.log(this.textContent);
	});

	$("button").click(function(){
		if (this.textContent == "hide keyboard"){
			this.textContent = "show keyboard";
			$("#kcontainer").hide();
		}
		else {
			this.textContent = "hide keyboard";
			$("#kcontainer").show();
		}
	});
});


function keyboardController(id){
	this.target = id;
}
