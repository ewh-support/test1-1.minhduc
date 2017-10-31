(function($) {
	"use strict";

	var HT_Bongda_01 = {

		init: function() {
			this.stickySidebar();
			this.tabLichthidau();
			this.tabKetqua();
			this.tabBXH();
			this.colCenter();
			this.iframeHeight();
		},

		stickySidebar: function() {
			$('.page-content > .row > .col-sm-push-3, .page-content > .row > .col-sm-pull-9, .page-sidebar').theiaStickySidebar({
				additionalMarginTop: 15,
				minWidth: 992,
			});
		},

		tabLichthidau: function() {
			$('#select-lichthidau').on('change', function() {
				var val = $(this).val();
				$('#lichthidau .content-league').removeClass('active');
				$('#' + val).addClass('active');
			});
		},

		tabKetqua: function() {
			$('#select-ketqua').on('change', function() {
				var val = $(this).val();
				$('#ketqua .content-league').removeClass('active');
				$('#' + val).addClass('active');
			});
		},

		tabBXH: function() {
			$('#select-bangxephang').on('change', function() {
				var val = $(this).val();
				$('#bangxephang .content-league').removeClass('active');
				$('#' + val).addClass('active');
			});
		},

		iframeHeight: function() {
			var h = $(window).innerHeight();
			var w = $(window).innerWidth();
			$('body.iframe-post').height(h);
			// $('#single-iframe-wrapper').height(h);
			// $('#single-iframe-wrapper').width(w);
		},

		colCenter: function() {
			$('#col-center .ht-close').on('click', function(e) {
				e.preventDefault();

				$(this).hide();
				$(this).next().css({
					display: 'block',
				});
				$('#col-center').animate({
					height: 0,
				});
			});

			$('#col-center .ht-open').on('click', function(e) {
				e.preventDefault();

				$(this).hide();
				$(this).prev().css({
					display: 'block',
				});

				$('#col-center').animate({
					height: 82,
				});
			});
		},

	};

	$(document).ready(function() {
		HT_Bongda_01.init();
	});

})(jQuery);
