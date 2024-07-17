// ==UserScript==
// @name         wordreplace
// @namespace    http://tampermonkey.net/
// @version      2024-06-21
// @description  try to take over the world!
// @author       You
// @match        https://sellercentral.amazon.co.uk/abis/listing/edit/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.co.uk
// @grant        none
// ==/UserScript==

'use strict';

const cbtn=document.createElement("button");
document.getElementById("sc-navbar-container").appendChild(cbtn);
cbtn.id="juibutton";
cbtn.textContent="click";
cbtn.style.cssText = 'width:100px;height:40px;border:2px dashed #ddd;';
cbtn.addEventListener("mouseover", () => {
    cbtn.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
});
cbtn.addEventListener("mouseout", () => {
    cbtn.style.backgroundColor = ""; // Restore default color
});

const ctextarea = document.createElement("textarea");
document.getElementById("sc-navbar-container").appendChild(ctextarea);
ctextarea.style.cssText = 'font-size: 0.8rem; letter-spacing: 1px; width: 100px; height: 40px; border: 2px dashed #ddd;';
//ctextarea.value=celements[0].textContent;


cbtn.addEventListener("click", () => {
const celements = [...document.querySelectorAll('.text-size-sm.text-secondary')];
for (const a of celements) {
    a.textContent = a.textContent.replace(new RegExp(ctextarea.value, 'gi'), 'ffffff');
}
});

/*
const elements = [...document.querySelectorAll('.text-size-sm.text-secondary')];
for (const element of elements) {
  element.textContent = element.textContent.replace(/a/g, 'ffffff');
}
*/
//version3
