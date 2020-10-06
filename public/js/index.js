function topToggle() {
	var sct = $(this).scrollTop();
	if($(window).outerWidth() > 1100) {  // PC
		if (sct > 0) {
			$(".header-wrapper .top-wrap").css("background-color", "rgba(0,0,0,0.8)");
		}
		else {
			$(".header-wrapper .top-wrap").css("background-color", "rgba(0,0,0,0)");
		}
	}
	else {
		$(".header-wrapper .top-wrap").css("background-color", "rgb(0,0,0)");
	}
}


function onScroll() {
	topToggle();
}

function onResize() {
	topToggle();
}


$(".top-wrap .fas").click( function() {
	$(".bars-navi").slideToggle(500, function(){

	});
});







 
/* function onSlidEnter() {
	$(this).find(".slider-btn .btn").css("display", "block");
}

function onSlidLeave() {
	$(this).find(".slider-btn .btn").css("display", "none");
}

function onImgEnter(){
	$(this).find(".new-wrap .abso2").css("display","block")
	$(this).find(".new-wrap .abso").css("display","none")
}
function onImgLeave(){
	$(this).find(".new-wrap .abso2").css("display","none")
	$(this).find(".new-wrap .abso").css("display","block")
} */

 
	var $slideWrap = $(".header-wrapper .slider-stage");
	var $slides =$(".header-wrapper .slider-wrap");
	var $btnPrev = $(".slider-stage .btn-prev");
	var $btnNext = $(".slider-stage .btn-next");
	var idx=0;

	

	$btnPrev.click(onPrev);
	$btnNext.click(onNext);



	function onPrev() {
		if(idx == 0) idx = 1;
		else idx = 0;
		ani();
	}
	
	function onNext() {
		if(idx == 0) idx = 1;
		else idx = 0;
		
		ani();
	}

	function ani() {
		var $slide = $(".slider-wrap > div");
		$slide.eq(idx).css({
			opacity: 1
			
		});
		$slide.eq(idx).siblings().css({
			opacity: 0
			
		});
	
	}
setInterval(onNext,8000);

 


$(window).scroll(onScroll).trigger("scroll");
$(window).resize(onResize).trigger("resize");



function onNaviEnter(){
	$(this).find(".sub-navi").css("display", "block");
};
function onNaviLeave(){
	$(this).find(".sub-navi").css("display", "none");	
};


 $(".top-wrap .on").mouseenter(onNaviEnter);
 $(".top-wrap .on").mouseleave(onNaviLeave);



 