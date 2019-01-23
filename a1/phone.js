$(document).ready(function() { // do this when the document is loaded
	$("#content1").show(); // show the element with ID "element"
	$("#content2").hide();
	$("#content3").hide(); // hide the element with ID "otherElement"
});

$("#button1").click(function() { // when "button_id" is clicked
	$("#content1").show(); // show the element with ID "element"
	$("#content2").hide();
	$("#content3").hide();
});

$("#button2").click(function() { // when "button_id" is clicked
	$("#content2").show(); // show the element with ID "element"
	$("#content1").hide();
	$("#content3").hide();
});

$("#button3").click(function() { // when "button_id" is clicked
	$("#content3").show(); // show the element with ID "element"
	$("#content1").hide();
	$("#content3").hide();
});