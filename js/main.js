$(document).ready(function(){

	var in_videos_listing = false;
	var in_music_listing = false;
	var in_images_gallery = false;
	var in_contact_form = false;
	var in_about = false;

	$('.icon').on('mouseenter', function(){
		$('.link-title').text($(this).attr('title'));
		if(!(in_videos_listing && ($(this).attr('title') === 'Videos'))){
			$('.videos-listing').empty();
		};
		if(!(in_music_listing && ($(this).attr('title') === 'Music'))){
			$('.music-listing').empty();
		};
		if(!(in_images_gallery && ($(this).attr('title') === 'Images'))){
			$('.images-gallery').fadeOut(500);
		};
		if(!(in_contact_form && ($(this).attr('title') === 'Contact'))){
			$('.contact-form').fadeOut(500);
			$('#send-button').fadeOut(500);
		};
	});

	$('.icon').on('mouseleave', function(){
		if(!(in_videos_listing && ($(this).attr('title') === 'Videos'))){
			$('.link-title').empty();
			in_videos_listing = false;
		};
		if(!(in_music_listing && ($(this).attr('title') === 'Music'))){
			$('.link-title').empty();
			in_music_listing = false;
		};
		if(!(in_images_gallery && ($(this).attr('title') === 'Images'))){
			$('.link-title').empty();
			in_images_gallery = false;
		};
		if(!(in_contact_form && ($(this).attr('title') === 'Contact'))){
			$('.link-title').empty();
			in_contact_form = false;
		};
	});
	
	$('.music').on('click', function(){

		if(in_videos_listing){
			$('.videos-listing').empty();
			in_videos_listing = false;			
		}
		if(in_images_gallery){
			$('.images-gallery').fadeOut(300);
			in_images_gallery = false;			
		}
		if(in_contact_form){
			$('.contact-form').fadeOut(300);
			$('#send-button').fadeOut(300);
			in_contact_form = false;			
		}
		if(in_about){
			$('.about-section').empty();
			in_about = false;
		}

		$('.music-listing').html('<a target="_blank" href="https://antonschmeer.github.io/music/">All</a><a target="_blank" href="https://antonschmeer.github.io/patroklos/">Patroklos</a>');
		
		in_music_listing = true;

		var viewportWidth = $(window).width();
		if(viewportWidth < 369){
			var container = $('.wrapper'),
			    scrollTo = $('.music-listing');

			container.animate({
			    scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 40
			});
		}
	});

	$('.videos').on('click', function(){

		if(in_music_listing){
			$('.music-listing').empty();
			in_music_listing = false;			
		}
		if(in_images_gallery){
			$('.images-gallery').fadeOut(300);
			in_images_gallery = false;			
		}
		if(in_contact_form){
			$('.contact-form').fadeOut(300);
			$('#send-button').fadeOut(300);
			in_contact_form = false;			
		}
		if(in_about){
			$('.about-section').empty();
			in_about = false;
		}

		$('.videos-listing').html('<a href="#">Video 1</a><a href="#">Video 2</a><a href="#">Video 3</a><a href="#">Video 4</a><a href="#">Video 5</a>');
		in_videos_listing = true;

		var viewportWidth = $(window).width();
		if(viewportWidth < 369){
			var container = $('.wrapper'),
			    scrollTo = $('.videos-listing');

			container.animate({
			    scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 40
			});
		}
	});

	$('.images').on('click', function(){

		if(in_videos_listing){
			$('.videos-listing').empty();
			in_videos_listing = false;			
		}
		if(in_music_listing){
			$('.music-listing').empty();
			in_music_listing = false;			
		}
		if(in_contact_form){
			$('.contact-form').fadeOut(300);
			$('#send-button').fadeOut(300);
			in_contact_form = false;			
		}
		if(in_about){
			$('.about-section').empty();
			in_about = false;
		}

		$('.images-gallery').fadeIn(1200);		
		in_images_gallery = true;

		var viewportWidth = $(window).width();
		if(viewportWidth < 369){
			var container = $('.wrapper'),
			    scrollTo = $('.images-gallery');

			container.animate({
			    scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 40
			});
		}
	});

	$('.email-icon').on('click', function(){

		if(in_videos_listing){
			$('.videos-listing').empty();
			in_videos_listing = false;			
		}
		if(in_images_gallery){
			$('.images-gallery').fadeOut(300);
			in_images_gallery = false;			
		}
		if(in_music_listing){
			$('.music-listing').empty();
			in_music_listing = false;			
		}
		if(in_about){
			$('.about-section').empty();
			in_about = false;
		}

		$('.contact-form').fadeIn(600);	
		$('#send-button').fadeIn(600);		  

		in_contact_form = true;

		var viewportWidth = $(window).width();
		if(viewportWidth < 369){
			var container = $('.wrapper');
			    // scrollTo = $('.contact-form');

			container.animate({
			    scrollTop: 600
			});
		}
	});

	// eliminate the 300ms click delay on mobile browsers https://github.com/ftlabs/fastclick
	$(function() {
	    FastClick.attach(document.body);
	});


	var name_spin = function(){

		var word = "ANTON SCHMEER";
		var wordLength = word.length;
		var scrambled = "";

		for (var i = 0; i < wordLength; i++) {
		    var charIndex = Math.floor(Math.random() * word.length);
		    scrambled += word.charAt(charIndex);
		    word = word.substr(0, charIndex) + word.substr(charIndex + 1);
		}

		$('.my-name').text(scrambled);

	}

	var stop_name_spin = function() {
	    $('.my-name').text('ANTON SCHMEER');
	}

	$('.wrapper').scroll(function(){
		name_spin();
		// console.log('scrolling');
	})

	$('.wrapper').scroll(function() {
	    clearTimeout($.data(this, 'scrollTimer'));
	    $.data(this, 'scrollTimer', setTimeout(function() {
	        stop_name_spin();
	        // console.log("Haven't scrolled in 200ms");
	    }, 200));
	});

	// functionality for form effects
	(function() {
	    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	    if (!String.prototype.trim) {
	        (function() {
	            // Make sure we trim BOM and NBSP
	            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	            String.prototype.trim = function() {
	                return this.replace(rtrim, '');
	            };
	        })();
	    }

	    [].slice.call( document.querySelectorAll( 'input.input__field, textarea.input__field' ) ).forEach( function( inputEl ) {
	        // in case the input is already filled..
	        if( inputEl.value.trim() !== '' ) {
	            classie.add( inputEl.parentNode, 'input--filled' );
	        }

	        // events:
	        inputEl.addEventListener( 'focus', onInputFocus );
	        inputEl.addEventListener( 'blur', onInputBlur );
	    } );

	    function onInputFocus( ev ) {
	        classie.add( ev.target.parentNode, 'input--filled' );
	    }

	    function onInputBlur( ev ) {
	        if( ev.target.value.trim() === '' ) {
	            classie.remove( ev.target.parentNode, 'input--filled' );
	        }
	    }
	})();


	/* form submit handlers */
	var contactForm = document.querySelector('.contact-form'),
	    inputName = contactForm.querySelector('[name="name"]'),
	    replyTo = contactForm.querySelector('[name="_replyto"]'),
	    subject = contactForm.querySelector('[name="_subject"]'),
 	    message = contactForm.querySelector('[name="message"]'),
	    sendButton = document.querySelector('#send-button');

    sendButton.addEventListener('click', function(event){
    	event.preventDefault(); // prevent the form from posting

    	sendButton.value = 'Sending..';

    	var xhr = new XMLHttpRequest();
    	xhr.open('POST', '//formspree.io/antonschmeer@protonmail.ch', true);
    	xhr.setRequestHeader("Accept", "application/json");
    	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    	xhr.onloadend = function (res) {
    		if(res.target.status === 200){
    			sendButton.value = 'Msg Sent!';  
    			setTimeout(function(){
    				sendButton.value= 'Msg Sent';
    				setTimeout(function(){
    					sendButton.value= 'Msg Sen';
    				}, 50);
    				setTimeout(function(){
    					sendButton.value= 'Msg Se';
    				}, 100);
    				setTimeout(function(){
    					sendButton.value= 'Msg S';
    				}, 150);
    				setTimeout(function(){
    					sendButton.value= 'Msg ';
    				}, 200);
    				setTimeout(function(){
    					sendButton.value= 'Msg';
    					/* empty text from form */
    					$('.contact-form').find("input[type=text], input[type=email], textarea").val(""); 
    				}, 250);
    				setTimeout(function(){
    					sendButton.value= 'Ms';
    				}, 300);
    				setTimeout(function(){
    					sendButton.value= 'M';
    				}, 350);
    				setTimeout(function(){
    					sendButton.value= '';
    				}, 400);
    				setTimeout(function(){
    					sendButton.value= 'S';
    				}, 450);
    				setTimeout(function(){
    					sendButton.value= 'Se';
    				}, 500);
    				setTimeout(function(){
    					sendButton.value= 'Sen';    					
    				}, 550);
    				setTimeout(function(){
    					sendButton.value= 'Send';
    					/* remove in focus classes to reset form */
    			    	[].slice.call( document.querySelectorAll( 'input.input__field, textarea.input__field' ) ).forEach( function( inputEl ) {
    			    	    if( inputEl.value.trim() == '' ) {
    			    	        classie.remove( inputEl.parentNode, 'input--filled' );
    			    	    }
    			    	});	
    				}, 600);
    			}, 2000); 	    			
    		}
    		else {
    			sendButton.value = 'Error!';
    		}
    	}

    	xhr.send("name=" + inputName.value + "&reply to=" + replyTo.value + "&subject=" + subject.value + "&message=" + message.value);
    });

});
