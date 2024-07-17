// ==UserScript==
// @name         RemoveAllImages
// @namespace    http://tampermonkey.net/
// @version      2024-06-27
// @description  try to take over the world!
// @author       You
// @match        https://sellercentral.amazon.com/inventory/*
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


// Select the table element with the specific class
const targetTable = document.querySelector('table.a-bordered.a-horizontal-stripes.mt-table');

// Option 1: Inline Styles to Reset Specific Properties (More Control)
//targetTable.style.border = 'none'; // Reset border
//targetTable.style.backgroundColor = 'transparent'; // Reset background color
// ... and so on for other styles you want to reset

// Option 2: Remove the Class (Less Control)
targetTable.classList.remove('a-bordered', 'a-horizontal-stripes', 'mt-table'); // Removes all three classes



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
