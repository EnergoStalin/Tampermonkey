// ==UserScript==
// @name         NotAlone chat toggle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Toggles chan on notalone player
// @author       EnergoStalin
// @match        https://notalone.tv/room/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=notalone.tv
// @grant        nonechrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=new-user-script+editor
// @require		 https://raw.githubusercontent.com/EnergoStalin/Tampermonkey/Shared.js
// @license      GPLV3
// ==/UserScript==

(function () {
	'use strict';

	window.addEventListener('keydown', (evt) => {
		if (!(evt.key === 'h' && evt.altKey)) return;

		evt.preventDefault();
		toggleAttribute(
			document.body.querySelector('#player_chat > div.grid66.bg-white.pd-0.playerGrid'),
			'style',
			'flex: auto;'
		);
		toggleAttribute(
			[
				document.body.querySelector('#player_chat > div.grid33.chat_grid.pd-0'),
				document.body.querySelector('body > main > div.grid.settings_container')
			],
			'style',
			'display: none;'
		);
	})
})();