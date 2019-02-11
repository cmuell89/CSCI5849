
$(document).ready(function() {
	var count = 0;

	$('.tabs .tabLinks a').on('click', function(e) {
		var currentAttrValue = $(this).attr('href');
		$('.tabs ' + currentAttrValue).show().siblings().hide();
		$(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
	});

	$("#dialer").on('keypress', function() {
	  if (count < 11) {
	    $("#output").append('<span>' + num.trim() + '</span>');
	    count++
	  }
	});


	$(".digit").on('click', function() {
	  console.log($(this))
	  var num = ($(this).clone().children().remove().end().text());
	  if (count < 11) {
	    $("#output").append('<span>' + num.trim() + '</span>');
	    count++
	  }
	});

	$(".digit").on('keypress', function() {
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

	$('.fa-long-arrow-left').on('keypress', function() {
	  $('#output span:last-child').remove();
	  count--;
	});


	$(this).on("keydown", function(event) {
		// Ctrl-Alt Keyboard shortcuts
		if (event.altKey && event.ctrlKey){
			// 1 for dialer tab
			if (event.which == 49){
				$('.tabs #dialer').show().siblings().hide();
				// Change/remove current tab to active
				$('.tabs .tabLinks a[href="#dialer"]').parent('li').addClass('active').siblings().removeClass('active');
				event.preventDefault();
			// 2 for dialer tab
			} else if (event.which == 50){
				$('.tabs #contacts').show().siblings().hide();
				// Change/remove current tab to active
				$('.tabs .tabLinks a[href="#contacts"]').parent('li').addClass('active').siblings().removeClass('active');
				event.preventDefault();
			// 3 for dialer tab
			} else if (event.which == 51){
				$('.tabs #addContact').show().siblings().hide();
				// Change/remove current tab to active
				$('.tabs .tabLinks a[href="#addContact"]').parent('li').addClass('active').siblings().removeClass('active');
				event.preventDefault();
			// 4 for dialer tab
			} else if (event.which == 52){
				$('.tabs #help').show().siblings().hide();
				// Change/remove current tab to active
				$('.tabs .tabLinks a[href="#help"]').parent('li').addClass('active').siblings().removeClass('active');
				event.preventDefault();
			};
		};
	});

	$(this).on("keydown", function(event) {
		if (!event.altKey && !event.ctrlKey){
			if (event.which == 96 || event.which == 48) {
				var num = ($('#zero').clone().children().remove().end().text());
				console.log(num)
				if (count < 11) {
			    	$("#output").append('<span>' + num.trim() + '</span>');
			    	count++
			    };
			} else if (event.which == 97 || event.which == 49){
				var num = ($('#one').clone().children().remove().end().text());
				if (count < 11) {
			    	$("#output").append('<span>' + num.trim() + '</span>');
			    	count++
			    };
			} else if (event.which == 98 || event.which == 50){
				var num = ($('#two').clone().children().remove().end().text());
				if (count < 11) {
			    	$("#output").append('<span>' + num.trim() + '</span>');
			    	count++
			    };
			} else if (event.which == 99 || event.which == 51){
				var num = ($('#three').clone().children().remove().end().text());
				if (count < 11) {
			    	$("#output").append('<span>' + num.trim() + '</span>');
			    	count++
			    };
			} else if (event.which == 100 || event.which == 52){
				var num = ($('#four').clone().children().remove().end().text());
				if (count < 11) {
			    	$("#output").append('<span>' + num.trim() + '</span>');
			    	count++
			    };
			} else if (event.which == 101 || event.which == 53){
				var num = ($('#five').clone().children().remove().end().text());
				if (count < 11) {
			    	$("#output").append('<span>' + num.trim() + '</span>');
			    	count++
			    };
			} else if (event.which == 102 || event.which == 54){
				var num = ($('#six').clone().children().remove().end().text());
				if (count < 11) {
			    	$("#output").append('<span>' + num.trim() + '</span>');
			    	count++
			    };
			} else if (event.which == 103 || event.which == 55){
				var num = ($('#seven').clone().children().remove().end().text());
				if (count < 11) {
			    	$("#output").append('<span>' + num.trim() + '</span>');
			    	count++
			    };
			} else if (event.which == 104 || event.which == 56){
				var num = ($('#eight').clone().children().remove().end().text());
				if (count < 11) {
			    	$("#output").append('<span>' + num.trim() + '</span>');
			    	count++
			    };
			} else if (event.which == 105 || event.which == 57){
				var num = ($('#one').clone().children().remove().end().text());
				if (count < 11) {
			    	$("#output").append('<span>' + num.trim() + '</span>');
			    	count++
			    };
			} else if (event.which == 46  || event.which == 8){
				$('#output span:last-child').remove();
		  		count--;
			};
		}
	});

	
    if ($('.tabContent #dialer[class="tab active"]').length > 0){
	    $.notify("User the number keys/pad to dial.", "info");
    };

    $.notify("Use Ctl-Alt [1,2,3,4] to switch between tabs.", "info");
    
});





