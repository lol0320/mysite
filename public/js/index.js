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

function onSlidEnter() {
	$(this).find(".slider-btn .btn").css("display", "block");
}

function onSlidLeave() {
	$(this).find(".slider-btn .btn").css("display", "none");
}


$(window).scroll(onScroll).trigger("scroll");
$(window).resize(onResize).trigger("resize");
$(".slider-txt1").mouseenter(onSlidEnter);
$(".slider-txt1").mouseleave(onSlidLeave);





$(".slider-btn .btn").click(function(){
	var idx=0;
	idx = idx == 1 ? idx = 0 : idx = 1;
	$(".slider-wrapper").removeClass('on');
	$(".slider-wrapper").eq(idx).addClass();

});