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
})