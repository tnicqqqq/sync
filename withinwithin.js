// ==UserScript==
// @name         withinwithin
// @namespace    http://tampermonkey.net/
// @version      2024-06-20
// @description  try to take over the world!
// @author       You
// @match        https://sellercentral-japan.amazon.com/inventory/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @grant        none
// ==/UserScript==



(function() {
    'use strict';
    const cdiv = document.createElement("iframe");
    document.getElementById("sc-navbar-container").appendChild(cdiv);
    const j="www.baidu.com"
    cdiv.src="https://sellercentral-japan.amazon.com/gp/seller-rating/pages/performance-summary.html/ref=xx_srsumprf_favb_xx";
    cdiv.width="1800";
    cdiv.height="1000";
//cdiv.style.cssText = 'position:absolute;top:300px;left:300px;width:200px;height:200px;-moz-border-radius:100px;border:1px  solid #ddd;-moz-box-shadow: 0px 0px 8px  #fff;display:none;';
    cdiv.style.cssText = 'width:1800px;height:1000px;-moz-border-radius:100px;border:2px  dashed #ddd;-moz-box-shadow: 0px 0px 8px  #fff;';

    // Your code here...
})();
