


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


(function(){
	var $slideStage = $(".header-wrapper .slider-stage");
	var $slideWrap = $(".header-wrapper .slider-wrapper1");
	var $btnPrev = $(".slider-txt1 .slider-btn");
	var $btnNext = $(".slider-txt1 .slider-btn");
	var $pager;
	var $slides = $slideStage.children("div");
	console.log($slides);
	var idx = 0;
	var lastIdx = $slides.length - 1;
	var interval;

	

	function slideInit() {
		$slideWrap.html($slides[idx].clone());
	}

	$btnPrev.click(onPrev);
	$btnNext.click(onNext);
	$slideStage.mouseover(onHover);
	$slideStage.mouseleave(onLeave);

	function onHover() {
		clearInterval(interval);
	}

	function onLeave() {
		interval = setInterval(onNext, 3000);
	}

	function onPrev() {
		idx = (idx == 0) ? lastIdx : idx - 1;
		ani();
	}

	function onNext() {
		idx = (idx == lastIdx) ? 0 : idx + 1;
		ani();
	}

	function onPagerClick() {
		idx = $(this).index();
		ani();
	}

	function ani() {
		$pager.removeClass("active").eq(idx).addClass("active");
		$($slides[idx].clone()).appendTo($slideWrap).stop().animate({"opacity": 1}, 500, slideInit);
	}
	
})();