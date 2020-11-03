$(function () {
	var width = $(window).width(),
		height = $(window).height();
	var iPhone = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
	var android = (navigator.userAgent.match(/android/i) != null);
	var iPad = navigator.userAgent.match(/iPad/i) != null;
	if (iPad) {
        iPhone = false;
        android = false;
        $('video').load();
	}
	if (iPhone) {
        iPad = false;
        android = false;
        $('video').load();
	}
	if (android) {
        iPad = false;
        iPhone = false;
        var video = document.querySelector('video');
        $('video').load();
        $("video").attr('poster', 'assets/images/opening.png');
        $("video").attr('source', 'assets/images/opening.mp4');
        window.addEventListener('touchstart', function videoStart() {
            video.play();
            this.removeEventListener('touchstart', videoStart);
		});
	}
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll >= height / 3) {
			$("header").addClass("scroll");
		} else {
			$("header").removeClass("scroll");
		}
	});
});
