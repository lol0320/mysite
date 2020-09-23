function onScroll() {
	var sct = $(this).scrollTop();
	if(sct > 0) {
		$(".header-wrapper .top-wrap").css("background-color", "rgba(0,0,0,0.7)");
	}
	else {
		$(".header-wrapper .top-wrap").css("background-color", "rgba(0,0,0,0)");
	}
}

$(window).scroll(onScroll);