
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




$(".scroll-wrap").click(function(){
	$('html').animate( { scrollTop : 0 } )
});

(function scrollToggle(){
	if($(".header-wrapper").Height() > 1158){
		if (sct > 0) {
			$(".scroll-wrap").css("dispaly", "block");
		}
		else {
			$(".scroll-wrap").css("dispaly", "none");
		}

		}
	});





 (function(){
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

})();

(function(){
var $newWrap = $(".new-wrapper .news");
var $newSlides =$(".new-wrapper .news");
var $pagerPrev = $(".news .pager1");
var $pagerNext = $(".news .pager2");
var idx=0;



$pagerPrev.click(onPagerPrev);
$pagerNext.click(onPagerNext);



function onPagerPrev() {
	if(idx == 0) idx = 1;
	else idx = 0;
	ani();
}

function onPagerNext() {
	if(idx == 0) idx = 1;
	else idx = 0;
	
	ani();
}

function ani() {
	var $slide = $(".news .new-wrap > div");
	$slide.eq(idx).css({opacity: 1	});
	$slide.eq(idx).siblings().css({	opacity: 0	});

}
setInterval(onPagerNext,8000);


})();

/* $(function(){
  $('.news .pager1').click(function(){
    $('.news .abso').css({"display":"none"});
    $('.news .abso2').css({"display":"block"});
  });
	$('.news .pager2').click(function(){
    $('.news .abso').css({"display":"block"});
    $('.news .abso2').css({"display":"none"});
  });
});
 */

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

