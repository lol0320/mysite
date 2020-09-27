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





(function(){
	var slides = $(".header-wrapper .slider-stage")

	var $slideStage = $(".header-wrapper .slider-stage");
	var $slideWrap = $(".header-wrapper.slide-wrap");
	var $btnPrev = $(".slider-btn .btn1");
	var $btnNext = $(".slider-btn .btn2");

var idx = 0;											// 현재 화면에 보이는 slide의 index
	var lastIdx = slides.length - 1;	// $(".slide")들 중에 마지막 index
	var interval;											// setInterval을 담아놓는 변수

	function init() {
		var html, i;
		for(i in slides) {
			html = '<div class="slide">';
			html += '<img class="w-100" src="'+slides[i].src+'">';
			html += '<h1>'+i+'</h1>';
			html += '<div class="title">'+slides[i].title+'</div>';
			html += '</div>';
			$slides[i] = $(html);
		
		
		}
		
		//interval = setInterval(onNext, 3000);
	}

	function slideInit() {
		//$slideWrap.html($slides[idx].clone());
		var $my = $($slides[idx].clone()).appendTo($slideWrap.empty());
		$my.find(".title").css("opacity");
		$my.find(".title").css("transform");
		$my.find(".title").css({"opacity": 1, "transform": "translateX(0)"});
	}

	$btnPrev.click(onPrev);
	$btnNext.click(onNext);
	//$slideStage.mouseover(onHover);
	//$slideStage.mouseleave(onLeave);

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



	function ani() {
		$pager.removeClass("active").eq(idx).addClass("active");
		$slideWrap.append($slides[idx].clone());
		var $slide0 = $slideWrap.find(".slide").eq(0);
		var $slide1 = $slideWrap.find(".slide").eq(1);
		$slide0.css({"opacity": 0});
		$slide1.css("opacity");
		
		$slide1.css({"opacity": 1});
		setTimeout(slideInit, 500);
	}
	init();
})();