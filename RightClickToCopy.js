// ==UserScript==
// @name         Right click to copy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Right click to image on grid element and it will be copied in clipboard
// @author       EnergoStalin
// @match        https://waifulabs.com/generate
// @icon         https://www.google.com/s2/favicons?sz=64&domain=waifulabs.com
// @grant        none
// @require		 https://raw.githubusercontent.com/EnergoStalin/Tampermonkey/Shared.js
// @license      GPLV3
// ==/UserScript==

(function () {
	'use strict';


	const nodes = [];
	const callback = () => {
		for (let i = 0; i < nodes.length; i++) {
			const node = nodes[i];
			node.addEventListener("contextmenu", (evt) => {
				evt.preventDefault();
				const div = node.querySelector(":scope div > div > div > div");
				const bg = div.style.backgroundImage.replace(/^url\(\"|\"\)$/gm, '');

				imageToBlob(bg).then((blob) => {
					const item = new ClipboardItem({ "image/png": blob });
					navigator.clipboard.write([item]);
				});
			});
		}
	}

	const tm = setInterval(() => {
		if (nodes.length !== 0) {
			clearInterval(tm);
			callback();
		}
		nodes.splice(nodes.length, 0, ...document.querySelectorAll("#wizard-container > div > div > div.waifu-container > div > div"));
		nodes.pop()
	}, 100);
})();