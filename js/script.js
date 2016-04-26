$(document).ready(function(){
// ***remove default setting automoving of top after click on button   **********
	$(".btn").on("click",function(){
		event.preventDefault();
	})
// --navbar toggle ************************************************************	
	$(".navbar-toggle").on("click",function(){
		$(".navHeaderCollapse").slideToggle();
	})

	$(window).resize(function() {
		/* to fix problem with hiding problem navbar-collapse after */
	    if ($(window).width() >784) {
	        $(".navbar").show();
	    }
	    if ($(window).width() <= 784) {
	        $(".navbar").hide();
	    }
	});
// *** logo click to scroll top of website ************************************
	$(".logo").on("click",function(){
		$("body,html").stop().animate({scrollTop:0})
	})

// ***smooth autohiding navbar ************************************************
	$(function(){
		var scroll=$(document).scrollTop();
		var headerHeight=$(".header").height();
		$(window).scroll(function(){
			var scrolled=$(document).scrollTop();
			if(scrolled>scroll && scroll>headerHeight){
				$(".header").slideUp();
			}
			else{
				$(".header").slideDown();
			}
			scroll=$(document).scrollTop();
		})
	})

// ***slider in "TECHNOLOGIE"********************************************************************
	// var width = $(window).width();	
	var ww = $(window).width()
		var a; /* create variable a to automaticly determinate the amount of column in slider=> "slidesPerView:a" */
		if (ww<784) {a=1;}		
		if (ww>=784) {a=3;}
		// if(ww>=1024){a=3;}

	var mySwiper2 = new Swiper ('.technologie-slider', {
		/* initial slider created by using swiper*/
		// Optional parameters
		direction: 'horizontal',
		loop: true,

		// If we need pagination
		pagination: '.swiper-pagination',

		// Navigation arrows
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',

		// And if we need scrollbar
		// scrollbar: '.swiper-scrollbar',

		 slidesPerView: a,		 

        //  autoplay: 5000,
        // autoplayDisableOnInteraction: false

        // slidesPerView: 2,
         spaceBetween: 35
	})

	$(window).resize(function(){
		/* if resizing screen will change the amount of column in section categories*/
		var ww = $(window).width()		
		if (ww<784) {mySwiper2.params.slidesPerView = 1;}		
		if (ww>=784) {mySwiper2.params.slidesPerView = 3;}		
		// if (ww>=1024) {mySwiper2.params.slidesPerView = 3;}
	})	
// -------------------------------------------------------------------------------------------------
	$(".table__navigation_vykon").on("click",function(){
		$(".table__navigation").removeClass("table__navigation_active");
		$(".table__navigation_vykon").addClass("table__navigation_active");
	})
	$(".table__navigation_bezpecnost").on("click",function(){
		$(".table__navigation").removeClass("table__navigation_active");
		$(".table__navigation_bezpecnost").addClass("table__navigation_active");
		
	})
	$(".table__navigation_prostor").on("click",function(){
		$(".table__navigation").removeClass("table__navigation_active");
		$(".table__navigation_prostor").addClass("table__navigation_active");
	})


})