


function onScroll() {
	var sct = $(this).scrollTop();
	if(sct > 0) {
		$(".header-wrapper .top-wrap").css("background-color", "rgba(0,0,0,0.8)");
	}
	else {
		$(".header-wrapper .top-wrap").css("background-color", "rgba(0,0,0,0)");
	}
	
}

function onSlidEnter(){
	$(this).find(".slider-btn .btn").css("display","block");
}
function onSlidLeave(){
	$(this).find(".slider-btn .btn").css("display","none");
}




$(window).scroll(onScroll);
$(".slider-txt1").mouseenter(onSlidEnter);
$(".slider-txt1").mouseleave(onSlidLeave);
