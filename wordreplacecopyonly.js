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

cbtn.id="juibutton";
cbtn.textContent="click";
cbtn.style.cssText = 'width:100px;height:40px;border:2px dashed #ddd;';


const mbtn=document.createElement("button");

mbtn.textContent="click";
mbtn.style.cssText = 'width:100px;height:40px;border:2px dashed #ddd;';
mbtn.addEventListener("mouseover", () => {
    mbtn.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
});
mbtn.addEventListener("mouseout", () => {
    mbtn.style.backgroundColor = ""; // Restore default color
});
document.getElementById("sc-navbar-container").appendChild(mbtn);

mbtn.addEventListener("click", jui);

function jui(){

    const elements = [...document.querySelectorAll('.text-size-sm.text-secondary')];

    for (const element of elements) {
        const copyButton = document.createElement('button');
        copyButton.textContent = "";
        copyButton.className="copy-button"; // Add a CSS class for styling
        copyButton.style.cssText = 'width:100px;height:40px;border:2px dashed #ddd;';
        copyButton.addEventListener("mouseover", () => {
            copyButton.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        });
        copyButton.addEventListener("mouseout", () => {
            copyButton.style.backgroundColor = ""; // Restore default color
        });
        copyButton.addEventListener("click",()=>{navigator.clipboard.writeText(copyButton.parentElement.textContent)});
        element.appendChild(copyButton);
    }
}
