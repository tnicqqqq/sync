// ==UserScript==
// @name         RemoveAllImages1.1
// @namespace    http://tampermonkey.net/
// @version      2024-06-27
// @description  try to take over the world!
// @author       You
// @match        https://*/inventory/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
    'use strict';
// ==UserScript==
// @name        Remove img in New tr Elements
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// ==/UserScript==


//const targetTable = document.querySelector('table.a-bordered.a-horizontal-stripes.mt-table');
//targetTable.classList.remove('a-bordered', 'a-horizontal-stripes', 'mt-table'); // Removes all three classes
//defect search function
function jui(trElement) {
  const allImages = trElement.querySelectorAll('img');
  for (let i = allImages.length - 1; i >= 0; i--) {
    allImages[i].parentNode.removeChild(allImages[i]);
  }
};
//dele exists
const preNodes = document.querySelectorAll('tr');
for (const preNode of preNodes) {
  jui(preNode); // Directly call jui for each tr element
};

//dele new exists
// MutationObserver for New tr Elements
const mutationObserver = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === 'childList') {
      const addedNodes = mutation.addedNodes;

      for (const node of addedNodes) {
        if (node.nodeName.toLowerCase() === 'tr') {
          jui(node); // Call jui function for newly added tr elements
        }
      }
    }
  }
});
mutationObserver.observe(document.documentElement, { childList: true, subtree: true });
// Observe subtree for nested changes
