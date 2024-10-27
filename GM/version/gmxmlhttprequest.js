// ==UserScript==
// @name        Test GM_xmlhttpRequest
// @namespace   https://tampermonkey.net/
// @version     0.1
// @match https://*/*
// @description test GM_xmlhttpRequest functionality
// @grant       GM_xmlhttpRequest
// ==/UserScript==

(function() {
  'use strict';

  // Define a simple test URL (replace with a known working URL)
  const testUrl = 'https://www.baidu.com/';

  GM_xmlhttpRequest({
    method: "GET",
    url: testUrl,
    onload: function(response) {
      if (response.status === 200) {
        alert("GM_xmlhttpRequest successful!");
      } else {
        alert("GM_xmlhttpRequest failed:", response.status);
      }
    },
    onerror: function(error) {
      alert("GM_xmlhttpRequest error:", error);
    }
  });
})();
