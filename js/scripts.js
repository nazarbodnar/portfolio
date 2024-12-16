$(document).ready(function () {
	$('.bg-img').each(function() {
		$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
	});
	$('.scroll-to').click(function (e) {
		var href = $(this).attr("href"),
		offsetTop = href === "#" ? 0 : $(href).offset().top;
		$('html, body').stop().animate({
			scrollTop: offsetTop 
		}, 300);
		return false;
	});
})