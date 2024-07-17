// ==UserScript==
// @name         killallstylev1

// @namespace    http://tampermonkey.net/
// @version      2024-07-01
// @description  try to take over the world!
// @author       You
// @match        https://sellercentral.amazon.co.uk/*
// @exclude     https://www.example.com/ , https://www.anothersite.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.co.uk
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
// delet both is a terror

const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
stylesheets.forEach(stylesheet => document.head.removeChild(stylesheet));
//delete this will make it faster and stable

/*
const styleTags = document.querySelectorAll('style');
styleTags.forEach(styleTag => document.head.removeChild(styleTag));
    // if only delete "style", the page becames unstable
    */
})();
