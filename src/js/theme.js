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

		this.checkTerms();

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

	//toggle responsive navigation
	toggleMenu: function() {
		var header = document.getElementsByClassName('header')[0];
		var body = document.getElementsByTagName('body')[0];
		var html = document.getElementsByTagName('html')[0];
		var headerAttr = '{"animation":"uk-animation-slide-top","show-on-up":true}';
		var menu = document.getElementsByClassName('js-menu')[0];
		var burgerButton = document.getElementsByClassName('js-burger')[0];
        var isHidden = menu.getAttribute('aria-hidden');

		if(isHidden === 'true') {
            body.classList.add('has-scroll');
            html.classList.add('has-scroll');
            burgerButton.classList.add('burger-active');
            header.removeAttribute('data-uk-sticky');
			menu.style.display = 'block';
			menu.classList.remove('animation-slide-out');
			menu.classList.add('animation-slide-in');
			menu.setAttribute('aria-hidden', 'false');
		} else {
            burgerButton.classList.remove('burger-active');
            body.classList.remove('has-scroll');
            html.classList.remove('has-scroll');
            header.setAttribute('data-uk-sticky', headerAttr);
			menu.classList.remove('animation-slide-in');
			menu.classList.add('animation-slide-out');
			setTimeout(function () {
				menu.style.display = 'none';
			}, 800);
			menu.setAttribute('aria-hidden', 'true');
		}
	},

	//check if terms accepted 
	checkTerms: function() {
		var cookieBanner = document.getElementsByClassName('cookies')[0];
		var buttonScroll = document.getElementsByClassName('button-scroll')[0];
		var buttonScrollBottomOffset = 40;
		var cookieBannerHeight = cookieBanner.offsetHeight;
		var bmbBody = document.getElementsByTagName('body')[0];

		if (window.matchMedia("screen and (max-width: 1024px)").matches) {
			buttonScrollBottomOffset = 50;
		}
		if (window.matchMedia("screen and (max-width: 768px)").matches) {
			buttonScrollBottomOffset = 29;
		}
		if (window.matchMedia("screen and (max-width: 414px)").matches) {
			buttonScrollBottomOffset = 45;
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

	//adjust body padding bottom according to cookies banner height 
	setBodyPaddingBottom: function() {
		setTimeout(function () {
			var cookieBanner = document.getElementsByClassName('cookies')[0];
			var cookieBannerHeight = cookieBanner.offsetHeight;
			var buttonScroll = document.getElementsByClassName('button-scroll')[0];
			buttonScroll.style.bottom = 0;
			var buttonScrollBottomOffset = 40;
			var bmbBody = document.getElementsByTagName('body')[0];
			bmbBody.style.paddingBottom = 0;

			if (window.matchMedia("screen and (max-width: 1024px)").matches) {
				buttonScrollBottomOffset = 50;
			}
			if (window.matchMedia("screen and (max-width: 768px)").matches) {
				buttonScrollBottomOffset = 29;
			}
			if (window.matchMedia("screen and (max-width: 414px)").matches) {
				buttonScrollBottomOffset = 45;
			}

			bmbBody.style.paddingBottom = cookieBannerHeight + 'px';
			buttonScroll.style.bottom = (cookieBannerHeight + buttonScrollBottomOffset) + 'px';
		}, 170);
	},

	//accept Terms and animation effect after accepting
	acceptTerms: function() {
		var cookieBanner = document.getElementsByClassName('cookies')[0];
		var cookieBannerHeight = cookieBanner.offsetHeight;
		var buttonScroll = document.getElementsByClassName('button-scroll')[0];
		var buttonScrollBottomOffset = 40;
		var bmbBody = document.getElementsByTagName('body')[0];
		localStorage.setItem('terms', 'accepted');

		if (window.matchMedia("screen and (max-width: 1024px)").matches) {
			buttonScrollBottomOffset = 50;
		}
		if (window.matchMedia("screen and (max-width: 768px)").matches) {
			buttonScrollBottomOffset = 29;
		}
		if (window.matchMedia("screen and (max-width: 414px)").matches) {
			buttonScrollBottomOffset = 45;
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

	//slide scroll button in view on scroll
	slideButtonInView: function() {
		var buttonScrollTo = document.getElementsByClassName('button-scroll')[0];

		buttonScrollTo.classList.add('scroll-view');
	}

};

theme.init();
