/* eslint-disable no-undef */
/* eslint-disable no-var */
/**
 * Theme JS
 */

var theme = {

	init: function() {
		var campaignSlider = document.getElementsByClassName('campaign-slider')[0];

		if(campaignSlider) {
			this.addMultiListener(window, 'load resize', theme.campaignItemSetHeight);
		}
	},

	//combining multiple event listeners
	addMultiListener: function(element, eventNames, listener) {
		var events = eventNames.split(' ');
		for (var i=0, iLen=events.length; i<iLen; i++) {
			element.addEventListener(events[i], listener, false);
		}
	},

};

$uk.ready(function() {
	theme.init();
});
