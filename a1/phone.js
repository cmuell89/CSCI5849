// $(document).ready(function() { // do this when the document is loaded
// 	$("#content1").show(); // show the element with ID "element"
// 	$("#content2").hide();
// 	$("#content3").hide(); // hide the element with ID "otherElement"
// });

// $("#button1").click(function() { // when "button_id" is clicked
// 	$("#content1").show(); // show the element with ID "element"
// 	$("#content2").hide();
// 	$("#content3").hide();
// });

// $("#button2").click(function() { // when "button_id" is clicked
// 	$("#content2").show(); // show the element with ID "element"
// 	$("#content1").hide();
// 	$("#content3").hide();
// });

// $("#button3").click(function() { // when "button_id" is clicked
// 	$("#content3").show(); // show the element with ID "element"
// 	$("#content1").hide();
// 	$("#content3").hide();
// });


var count = 0;

$(".digit").on('click', function() {
  var num = ($(this).clone().children().remove().end().text());
  if (count < 11) {
    $("#output").append('<span>' + num.trim() + '</span>');

    count++
  }
});

$('.fa-long-arrow-left').on('click', function() {
  $('#output span:last-child').remove();
  count--;
});