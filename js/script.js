$(document).ready(function(){
// *** remove default setting automoving of top after click on button **********
	$("a").on("click",function(){
		// event.preventDefault();
	})

// *** navbar toggle ***********************************************************	
	$(".navbar-toggle").on("click",function(){
		$(".navHeaderCollapse").slideToggle();
	})

// ** to fix problem with hiding problem navbar-collapse after *****************
	$(window).resize(function() {
	    if ($(window).width() >784) {
	        $(".navbar").show();
	    }
	    if ($(window).width() <= 784) {
	        $(".navbar").hide();
	    }
	});
// *** logo click to scroll top of website *************************************
	$(".logo").on("click",function(){
		$("body,html").stop().animate({scrollTop:0})
	})

// *** smooth autohiding navbar ************************************************
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

// *** slider in "technologie-content" *****************************************
	// var width = $(window).width();	
	var ww = $(window).width()
		var a; 
		/* create variable a to automaticly determinate the amount of 
		column in slider=> "slidesPerView:a" */
		if (ww<784) {a=1;}		
		if (ww>=784) {a=3;}
		// if(ww>=1024){a=3;}

	var mySwiper2 = new Swiper ('.technologie-slider', {
		direction: 'horizontal',
		loop: true,
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		// scrollbar: '.swiper-scrollbar',
		 slidesPerView: a,		 
        //  autoplay: 5000,
        // autoplayDisableOnInteraction: false
        // slidesPerView: 2,
         spaceBetween: 35
	})
	/* if resizing screen will change the amount of column in section categories*/
	// $(window).resize(function(){
	// 	var ww = $(window).width()		
	// 	if (ww<784) {mySwiper2.params.slidesPerView = 1;}		
	// 	if (ww>=784) {mySwiper2.params.slidesPerView = 3;}		
	// })	

// *** table navigation of technologie *****************************************
	$(".table__navigation").on("click",function(){
		$(".table__navigation").removeClass("table__navigation_active");
		$(this).addClass("table__navigation_active");
	})

// *** btn__link navigation posedli hight-light active section *****************
	$(".btn__link_posedli").on("click",function(){
		console.log("hovnodva");
	    $(".btn__link_posedli").removeClass("btn__link_hight-light");
	    $(this).addClass("btn__link_hight-light");
	})

// *** click on posedli will  animate to chosen person section *****************
	$(".btn__link_petr").on("click", function(e) {
	    var msg = $(this).attr("href");
	    var menu = $(".header");
	    $("html, body").stop().animate({ scrollTop:0}, 500); 
	    event.preventDefault();
	});
	// *** btn__link_terezie ************************
	$(".btn__link_terezie").on("click", function(e) {
		event.preventDefault();
	    var msg = $(this).attr("href");
	    var menu = $(".header");
	    var scrolled=$(document).scrollTop();
	    if(scrolled <669){
		    $("html, body").stop().animate({ scrollTop: $(msg).offset().top }, 500); 
		    $(".btn__link").removeClass("btn__link_hight-light");
		    $(this).addClass("btn__link_hight-light");
	    }else{
	    	$("html, body").stop().animate({ scrollTop: $(msg).offset().top - 110 }, 500); 
	    }
	});
	// *** btn__link_yemi ************************
	$(".btn__link_yemi").on("click", function(e) {
		event.preventDefault();
	    var msg = $(this).attr("href");
	    var menu = $(".header");
	    var scrolled=$(document).scrollTop();
	    if(scrolled <1038){
		    $("html, body").stop().animate({ scrollTop: $(msg).offset().top }, 500); 
		    	    $(".btn__link").removeClass("btn__link_hight-light");
		    $(this).addClass("btn__link_hight-light");

	    }else{
	    	$("html, body").stop().animate({ scrollTop: $(msg).offset().top - 110 }, 500); 
	    }
	});
	// *** btn__link_dalsi ************************
	$(".btn__link_dalsi").on("click", function(e) {
		event.preventDefault();
	    var msg = $(this).attr("href");
	    var menu = $(".header");
	    var scrolled=$(document).scrollTop();
	    if(scrolled <1397){
		    $("html, body").stop().animate({ scrollTop: $(msg).offset().top }, 500); 
	    }else{
	    	$("html, body").stop().animate({ scrollTop: $(msg).offset().top - 110 }, 500); 
	    }
	});
// *** POSEDLI VICE BUTTON *****************************************************
	var vice=false
	$(".btn_last-posedli").on("click",function(){
		event.preventDefault();
	  	if(!vice){
		  	$(".posedli-content__vice_second").slideDown();
		  	$(".btn_last-posedli").text("MÉNĚ");
		  	vice=true;
	  	}else{
		  	$(".posedli-content__vice_second").slideUp();
		  	$(".btn_last-posedli").text("VÍCE");
		  	vice=false;}
	  })

// *** show and hide detail  ***************************************************
	$(function(){
		var scroll=$(document).scrollTop();
		var headerHeight=$(".header").height();
		$(window).scroll(function(){
			var scrolled=$(document).scrollTop();
			// console.log("scroll: "+scroll);
			// console.log("scrolled: "+scrolled);
			// if(scrolled>600&&scrolled<670){
			// 	$(".posedli-content__detail-container_second").css("tranform","scale(1.7)");
				
			// }
			// else{
			// 	$(".posedli-content__detail-container_second").removeClass("show");
			// }

			// if(scrolled>1030&&scrolled<1100){
			// 	$(".posedli-content__detail-container_third").addClass("show");
			// }
			// else{
			// 	$(".posedli-content__detail-container_third").removeClass("show");
			// }
			// scroll=$(document).scrollTop();
		})
	})

// ********SCROLL MAGIC ********************************************************
  // var controller= new ScrollMagic.Controller();
  // var scenel = new ScrollMagic.Scene({
  // 	triggerElement:"#trigger1",
  // 	duration:300
  // }).setTween(".posedli-content__detail-container_second",0.5,{scale:2})

  // .addIndicators({name:"1 - 0 duration"})
  // .addTo(controller);

  // var controller= new ScrollMagic.Controller();
  // var scenel = new ScrollMagic.Scene({
  // 	triggerElement:"#trigger1",
  // 	duration:500
  // }).on("enter",function(){
  // 	$(".posedli-content__detail-container_second").css("transform","scale(1.7)");
  // 	$(".posedli-content__detail-container_second").css("z-index","99");
  // }).on("leave",function(){
  // 	$(".posedli-content__detail-container_second").css("transform","scale(1)");
  // })
  // .addIndicators({name:"changing scale"})
  // .addTo(controller);	

  // var scenel = new ScrollMagic.Scene({
  // 	triggerElement:"#trigger2",
  // 	duration:300
  // }).on("enter",function(){
  // 	$(".posedli-content__detail-container_third").css("transform","scale(1.7)");
  // 	$(".posedli-content__detail-container_third").css("z-index","99");
  // }).on("leave",function(){
  // 	$(".posedli-content__detail-container_third").css("transform","scale(1)");
  // })
  // .addIndicators({name:"changing scale"})
  // .addTo(controller);	
  // var scenel = new ScrollMagic.Scene({
  // 	triggerElement:"#trigger2"
  // }).setTween(".posedli-content__detail-container_second",0.5,{scale:1})
  // .addIndicators({name:"1 - 0 duration"})
  // .addTo(controller);

// *****************************************************************************
})