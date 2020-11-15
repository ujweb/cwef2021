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
	$('.hamburger').click(function(){
		$(this).toggleClass('active');
		$('nav > .container > ul').fadeToggle();
	});
	$('nav > .container > ul > li > a').click(function(){
		$('.hamburger').removeClass('active');
		$('nav > .container > ul').fadeOut();
	});
	$('.container-twice').each(function(){
		let phraseHeight = $(this).children('.column-txt').children('.content').children('p').outerHeight(),
			columnImg = $(this).children('.column-img'),
			columnImgHeight = columnImg.outerHeight();
		columnImg.css('padding-top', phraseHeight);
		columnImg.children('.img').height(columnImgHeight-phraseHeight);
	});
	$('.slider-center').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		centerMode: true,
		centerPadding: '0',
		prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="icon icon-chevron-right"></i></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll >= height / 3) {
			$("header").addClass("scroll");
		} else {
			$("header").removeClass("scroll");
		}
	});
});
