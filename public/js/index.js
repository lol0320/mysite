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

function onImgEnter(){
	$(this).find(".new-wrap .abso2").css("display","block")
	$(this).find(".new-wrap .abso").css("display","none")
}
function onImgLeave(){
	$(this).find(".new-wrap .abso2").css("display","none")
	$(this).find(".new-wrap .abso").css("display","block")
}

function onMainEnter(){
	$(this).find(".slider-stage .slider-wrapper2").css({opacity:"1", transition:"all 0.7s"})
	$(this).find(".slider-stage .slider-wrapper1").css({opacity:"0", transition:"all 0.7s"})
}
function onMainLeave(){
	$(this).find(".slider-stage .slider-wrapper1").css({opacity:"1", transition:"all 0.7s"})
	$(this).find(".slider-stage .slider-wrapper2").css({opacity:"0", transition:"all 0.7s"})
}

$(window).scroll(onScroll).trigger("scroll");
$(window).resize(onResize).trigger("resize");
$(".slider-txt1").mouseenter(onSlidEnter);
$(".slider-txt1").mouseleave(onSlidLeave);


$(".new-wrapper").mouseenter(onImgEnter);
$(".new-wrapper").mouseleave(onImgLeave);


$(".header-wrapper").mouseenter(onMainEnter);
$(".header-wrapper").mouseleave(onMainLeave);