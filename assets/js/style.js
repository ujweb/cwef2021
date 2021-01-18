$(function () {
	var width = $(window).width(),
		height = $(window).height(),
		headerHeight = $('nav').outerHeight();
	var iPhone = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
	var android = (navigator.userAgent.match(/android/i) != null);
	var iPad = navigator.userAgent.match(/iPad/i) != null;
	// Smooth scrolling using jQuery easing
	$('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
			if (target.length) {
				$("html, body").animate({
					scrollTop: target.offset().top - headerHeight
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});
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
	if (width < 930) {
		$('.hamburger').click(function(){
			$(this).toggleClass('active');
			$('nav > .container > ul').fadeToggle();
		});
		$('nav > .container > ul > li > a').click(function(){
			$('.hamburger').removeClass('active');
			$('nav > .container > ul').fadeOut();
		});
	}
	$('.container-twice').each(function(){
		let phraseHeight = $(this).children('.column-txt').children('.content').children('p').outerHeight(),
			columnImg = $(this).children('.column-img'),
			columnImgHeight = columnImg.outerHeight();
		columnImg.css('padding-top', phraseHeight);
		// columnImg.children('.img').height(columnImgHeight-phraseHeight);
	});
	$('.slider-center').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
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
	}).on('afterChange', function(event, slick, currentSlide, nextSlide){
		player01.pauseVideo();
		player02.pauseVideo();
		player03.pauseVideo();
		player04.pauseVideo();
		player05.pauseVideo();
		player06.pauseVideo();
		player07.pauseVideo();
		player08.pauseVideo();
		player09.pauseVideo();
		player10.pauseVideo();
		$('.player').removeClass('playing');
	});
	$('.agenda .content button').each(function(){
		let related = $(this).attr('data-relate');
		$(this).click(function(){
			let agendaTop =  $(this).parent('.content').parent('.column').parent('.container').parent('.agenda').offset().top,
				agendaHeight = $(this).parent('.content').parent('.column').parent('.container').parent('.agenda').outerHeight(),
				speakerTop = agendaTop + agendaHeight;
			$(this).toggleClass('active');
			$('.' + related).slideToggle();
			$('html,body').animate({
				scrollTop: speakerTop - (height / 3)
			}, 1000);
		});
	});
	$(".speaker-more").click(function() {
        var speakerName = $(this).data('name'),
			speaker = "";
        for (var i = 0; i < data.length; i++) {
            if (speakerName == data[i]["nameZh"]) {
                speaker += '<img class="message-img" src="assets/images/speaker/' + data[i]["img"];
                speaker += '" alt="' + data[i]["nameZh"];
                speaker += '"><div class="message-name serif font-weight-700 text-center">' + data[i]["nameZh"];
                speaker += '</div><div class="message-name serif font-weight-700 text-center">' + data[i]["nameEn"];
                speaker += '</div><div class="message-title text-center">' + data[i]["titleZh"];
                speaker += '</div><div class="message-title text-center">' + data[i]["titleEn"];
                speaker += '</div><div class="message-essay">' + data[i]["intro"];
                speaker += '</div>'
            }
        }
        $('.message-content').html(speaker);
		$('.message').fadeIn();
        return false;
    });
    $('.message-content').click(function(e) {
        e.stopPropagation();
    })
    $('.message').click(function() {
        $('.message').fadeOut();;
    })
	$('.player').each(function () {
		var y2bId = $(this).attr('data-youtube');
		$(this).click(function () {
			$(this).addClass('playing');
		})
	})
	$('.input-inline i.icon').click(function(){
		$(this).siblings('input').attr('type',
			$(this).siblings('input').attr('type')==='password'?'text':'password'
		);
		$(this).toggleClass('icon-eyeon icon-eyeoff');
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

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player01, player02, player03, player04, player05, player06, player07, player08, player09, player10;
function onYouTubeIframeAPIReady() {
	player01 = new YT.Player('youtube01', {
		fitToBackground: true,
		width: '100%',
		videoId: 'tom94M5VGN0',
		playerVars: { 'playsinline': 1, 'rel': 0, 'showinfo': 0 },
	});
	player02 = new YT.Player('youtube02', {
		fitToBackground: true,
		width: '100%',
		videoId: 'SLa45iSQEdw',
		playerVars: { 'playsinline': 1, 'rel': 0, 'showinfo': 0 },
	});
	player03 = new YT.Player('youtube03', {
		fitToBackground: true,
		width: '100%',
		videoId: '5xNX0YyAQC4',
		playerVars: { 'playsinline': 1, 'rel': 0, 'showinfo': 0 },
	});
	player04 = new YT.Player('youtube04', {
		fitToBackground: true,
		width: '100%',
		videoId: 'hiN3oDczEww',
		playerVars: { 'playsinline': 1, 'rel': 0, 'showinfo': 0 },
	});
	player05 = new YT.Player('youtube05', {
		fitToBackground: true,
		width: '100%',
		videoId: 'fZZaz3LSocU',
		playerVars: { 'playsinline': 1, 'rel': 0, 'showinfo': 0 },
	});
	player06 = new YT.Player('youtube06', {
		fitToBackground: true,
		width: '100%',
		videoId: 'FHJEVkUjDF0',
		playerVars: { 'playsinline': 1, 'rel': 0, 'showinfo': 0 },
	});
	player07 = new YT.Player('youtube07', {
		fitToBackground: true,
		width: '100%',
		videoId: 'KNZ3Fpd1R4o',
		playerVars: { 'playsinline': 1, 'rel': 0, 'showinfo': 0 },
	});
	player08 = new YT.Player('youtube08', {
		fitToBackground: true,
		width: '100%',
		videoId: '70TyzqU3bkI',
		playerVars: { 'playsinline': 1, 'rel': 0, 'showinfo': 0 },
	});
	player09 = new YT.Player('youtube09', {
		fitToBackground: true,
		width: '100%',
		videoId: '9FCpi-DoV30',
		playerVars: { 'playsinline': 1, 'rel': 0, 'showinfo': 0 },
	});
	player10 = new YT.Player('youtube10', {
		fitToBackground: true,
		width: '100%',
		videoId: 'NZ5XdG6vr0s',
		playerVars: { 'playsinline': 1, 'rel': 0, 'showinfo': 0 },
	});
}
function play01() { 
	player01.playVideo();
}
function play02() { 
	player02.playVideo();
}
function play03() { 
	player03.playVideo();
}
function play04() { 
	player04.playVideo();
}
function play05() { 
	player05.playVideo();
}
function play06() { 
	player06.playVideo();
}
function play07() { 
	player07.playVideo();
}
function play08() { 
	player08.playVideo();
}
function play09() { 
	player09.playVideo();
}
function play10() { 
	player10.playVideo();
}
