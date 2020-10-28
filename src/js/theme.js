/* eslint-disable no-undef */
/* eslint-disable no-var */
/**
 * Theme JS
 */

var theme = {

	init: function() {
		var menuButton = document.getElementsByClassName('js-burger')[0];
		var scrollLink = document.querySelectorAll('.js-scroll');
		var cookieButton = document.getElementsByClassName('js-cookies')[0];
		var buttonScrollTo = document.getElementsByClassName('button-scroll')[0];

		if(cookieButton) {
			window.addEventListener('resize', this.setBodyPaddingBottom);
		}

		this.checkCookie();

		if(menuButton) {
			menuButton.addEventListener('click', this.toggleMenu);
		}

		if(scrollLink) {
			for(var i = 0;i < scrollLink.length;i++){
				scrollLink[i].addEventListener('click', this.toggleMenu, false);
			}
		}

		if(cookieButton) {
			cookieButton.addEventListener('click', this.acceptTerms);
		}

		if(buttonScrollTo) {
			window.addEventListener('scroll', this.slideButtonInView);
		}
	},

	// //combining multiple event listeners
	addMultiListener: function(element, eventNames, listener) {
		var events = eventNames.split(' ');
		for (var i=0, iLen=events.length; i<iLen; i++) {
			element.addEventListener(events[i], listener, false);
		}
	},

	toggleMenu: function() {
		var menu = document.getElementsByClassName('js-menu')[0];
		var body = document.getElementsByTagName('body');
		var isHidden = menu.getAttribute('aria-hidden');

		if(isHidden === 'true') {
			menu.style.display = 'block';
			menu.classList.remove('animation-slide-out');
			menu.classList.add('animation-slide-in');
			body.classList.add('scroll-off');
			menu.setAttribute('aria-hidden', 'false');
		} else {
			menu.classList.remove('animation-slide-in');
			body.classList.remove('scroll-off');
			menu.classList.add('animation-slide-out');
			setTimeout(function () {
				menu.style.display = 'none';
			}, 1000);
			menu.setAttribute('aria-hidden', 'true')
		}

	},

	checkCookie: function() {
		var cookieBanner = document.getElementsByClassName('cookies')[0];
		var buttonScroll = document.getElementsByClassName('button-scroll')[0];
		var buttonScrollBottomOffset = 40;
		var cookieBannerHeight = cookieBanner.offsetHeight;
		var bmbBody = document.getElementsByTagName('body')[0];

		if (window.matchMedia("screen and (max-width: 414px)").matches) {
			buttonScrollBottomOffset = 30;
		}

		if(localStorage.terms === 'accepted') {
			bmbBody.style.paddingBottom = 0;
			cookieBanner.style.display = 'none';
		} else {
			bmbBody.style.paddingBottom = cookieBannerHeight + 'px';
			buttonScrollBottomOffset += cookieBannerHeight;
			buttonScroll.style.bottom = buttonScrollBottomOffset + 'px';
		}
	},

	setBodyPaddingBottom: function() {
		var cookieBanner = document.getElementsByClassName('cookies')[0];
		var cookieBannerHeight = cookieBanner.offsetHeight;
		var buttonScroll = document.getElementsByClassName('button-scroll')[0];
		buttonScroll.style.bottom = 0;
		var buttonScrollBottomOffset = 40;
		var bmbBody = document.getElementsByTagName('body')[0];
		bmbBody.style.paddingBottom = 0;

		if (window.matchMedia("screen and (max-width: 414px)").matches) {
			buttonScrollBottomOffset = 30;
		}

		bmbBody.style.paddingBottom = cookieBannerHeight + 'px';
		buttonScroll.style.bottom = (cookieBannerHeight + buttonScrollBottomOffset) + 'px';
	},

	acceptTerms: function() {
		var cookieBanner = document.getElementsByClassName('cookies')[0];
		var cookieBannerHeight = cookieBanner.offsetHeight;
		var buttonScroll = document.getElementsByClassName('button-scroll')[0];
		var buttonScrollBottomOffset = 40;
		var bmbBody = document.getElementsByTagName('body')[0];
		localStorage.setItem('terms', 'accepted');

		if (window.matchMedia("screen and (max-width: 414px)").matches) {
			buttonScrollBottomOffset = 30;
		}

		bmbBody.style.transition = 0.55 + 's' + ' ease-out';
		bmbBody.style.paddingBottom = 0;

		cookieBanner.style.transition = 0.6 + 's' + ' ease-out';
		cookieBanner.style.bottom = - cookieBannerHeight + 'px';

		buttonScroll.style.transition = 0.6 + 's' + ' ease-out';
		buttonScroll.style.bottom = buttonScrollBottomOffset + 'px';

		setTimeout(function () {
			cookieBanner.style.display = 'none';
		}, 600);
	},

	slideButtonInView: function() {
		var buttonScrollTo = document.getElementsByClassName('button-scroll')[0];

		buttonScrollTo.classList.add('scroll-view');
	}

};

theme.init();
