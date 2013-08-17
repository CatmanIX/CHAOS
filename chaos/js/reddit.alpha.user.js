// ==UserScript==
// @name            CHAOS 2.0 [ALPHA]
// @version         2.0-a03
// @author          The_Catman
// @description     WOOOOOooooOOooOoooooOOoooooOOOOooooooooOOOoooOOooooooOOOOOOOooOOOOOooOOO!
// @namespace       http://litter.mlas1.us
// @homepage        http://litter.mlas1.us/chaos.html
// @updateURL       http://litter.mlas1.us/chaos/js/reddit.alpha.user.js
// @license         CC BY-NC-SA 3.0
// @include         http*://*.reddit.com/*
// @run-at          document-start
// ==/UserScript==

var enableRotate = true;
var enableSpin = true;
var enableSpeed = true;

var heads = document.getElementsByTagName("head");
if (heads.length > 0) {
    if (enableRotate === true) {
		var rotate = document.createElement("link");
		rotate.rel = "stylesheet";
		rotate.type = "text/css";
		rotate.href = "http://litter.mlas1.us/chaos/css/rotate.css";
        heads[0].appendChild(rotate);
    }
    if (enableSpin === true) {
		var spin = document.createElement("link");
		spin.rel = "stylesheet";
		spin.type = "text/css";
		spin.href = "http://litter.mlas1.us/chaos/css/spin.css";
        heads[0].appendChild(spin);
    }
    if (enableSpeed === true) {
		var speed = document.createElement("link");
		speed.rel = "stylesheet";
		speed.type = "text/css";
		speed.href = "http://litter.mlas1.us/chaos/css/speed.css";
        heads[0].appendChild(speed);
    }
}