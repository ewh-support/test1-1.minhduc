(function($) {
	"use strict";

	$(window).load(function() {
		var $adsWrapper = $('#ht-bottom-right-ads');
		var w = $adsWrapper.width();
		var h = $adsWrapper.height();
		console.log(h);
		$('#ht-bottom-right-ads .ht-ads-close').on('click', function(e) {
			e.preventDefault();
			var $close = $(this);
			var $open = $close.prev();

			$close.hide();
			$open.show();
			$adsWrapper.animate({
				width: 0,
				height: h,
				// 'right': '-' + w,
			});
		});

		$('#ht-bottom-right-ads .ht-ads-open').on('click', function(e) {
			e.preventDefault();
			var $open = $(this);
			var $close = $open.next();

			$close.show();
			$open.hide();
			$adsWrapper.animate({
				width: w,
				height: h,
				// 'right': 0,
			});
		});

		$('#ht-bottom-left-ads .ht-ads-close').on('click', function(e) {
			e.preventDefault();
			var $close = $(this);
			var $open = $close.prev();
			var $adsWrapper = $('#ht-bottom-left-ads');
			var w = $adsWrapper.width();

			$close.hide();
			$open.show();
			$adsWrapper.animate({
				'left': '-' + w,
			});
		});

		$('#ht-bottom-left-ads .ht-ads-open').on('click', function(e) {
			e.preventDefault();
			var $open = $(this);
			var $close = $open.next();
			var $adsWrapper = $('#ht-bottom-left-ads');
			var w = $adsWrapper.width();

			$close.show();
			$open.hide();
			$adsWrapper.animate({
				'left': 0,
			});
		});
	});
})(jQuery);