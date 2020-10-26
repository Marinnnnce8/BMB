/* eslint-disable no-undef */
/* eslint-disable no-var */
/**
 * Theme JS
 */

var theme = {

	init: function() {
		// var campaignSlider = document.getElementsByClassName('campaign-slider')[0];
		var menuButton = document.getElementsByClassName('js-burger')[0];
		var scrollLink = document.querySelectorAll('.js-scroll');

		// if(campaignSlider) {
		// 	this.addMultiListener(window, 'load resize', theme.campaignItemSetHeight);
		// }

		if(menuButton) {
			menuButton.addEventListener('click', this.toggleMenu);
		}

		if(scrollLink) {
			for(var i = 0;i < scrollLink.length;i++){
				scrollLink[i].addEventListener('click', this.toggleMenu, false);
			}
		}
	},

	// //combining multiple event listeners
	// addMultiListener: function(element, eventNames, listener) {
	// 	var events = eventNames.split(' ');
	// 	for (var i=0, iLen=events.length; i<iLen; i++) {
	// 		element.addEventListener(events[i], listener, false);
	// 	}
	// },

	toggleMenu: function() {
		var menu = document.getElementsByClassName('js-menu')[0];
		var isHidden = menu.getAttribute('aria-hidden');
		console.log(isHidden);

		if(isHidden === 'true') {
			menu.style.display = 'block';
			menu.classList.remove('animation-slide-out');
			menu.classList.add('animation-slide-in');
			menu.setAttribute('aria-hidden', 'false');
		} else {
			menu.classList.remove('animation-slide-in');
			menu.classList.add('animation-slide-out');
			setTimeout(function () {
				menu.style.display = 'none';
			}, 1000);
			menu.setAttribute('aria-hidden', 'true')
		}

	}

};

theme.init();
