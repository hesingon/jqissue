var main = function(){


	$('.btn').click(function() {  //the post button
		var post = $('.status-box').val();
		$currentSection = $(this).parent().parent();
		$
		$('<li>').text(post).prependTo($currentSection.children('.posts'));
		$('.status-box').val('');
		$('.counter').text('0');
		$('.btn').addClass('disabled'); 


	});

	$('.status-box').keyup(function() {
		var postLength = $(this).val().length;
		$('.counter').text(postLength);

		if(postLength > 0) {
			$('.btn').removeClass('disabled'); 
		};
	});

	$('.btn').addClass('disabled');


	/* Push the body and the nav over by 285px over */
	var sectionOut = false;

	$('.popout-btn').click(function() {
		if(sectionOut === false){
			$('.comments').animate({ 
				right: '0px' /* "0px" is the position on the site page */
			}, 600); /*time taken during which the icon menu push right */

			$('#text-field').animate({
				width: "auto",
				marginRight: "400px"
			});
			sectionOut = true;
			return;
		}

		if(sectionOut === true){
			$('.comments').animate({right:'-380px'}, 600);
			$('#text-field').animate({
				width:"auto",
				marginRight: "250px"
			})
			sectionOut = false;
		}
	});

	//This part is about highlighting the color
	var prevPara 
	$('.pTxt').click(function() {
		$('.pTxt').animate({
			color: "#737373"
		});

		$(this).animate({
			color: "o#ff9900"
		});

		$('.comments').animate({ 
			right: '0px' /* "0px" is the position on the site page */
		}, 600); /*time taken during which the icon menu push right */
		sectionOut = true;

		$('#text-field').animate({
			width: "auto",
			marginRight: "400px"
		});
	});

}

$(document).ready(main);

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}