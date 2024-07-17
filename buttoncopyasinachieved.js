// ==UserScript==
// @name         buttoncopyasin
// @namespace    http://tampermonkey.net/
// @version      2024-06-21
// @description  try to take over the world!
// @author       You
// @match        https://sellercentral.amazon.co.uk/performance/account/health/product-policies*
// @match        https://sellercentral-japan.amazon.com/performance/account/health/product-policies*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.co.uk
// @grant        none
// ==/UserScript==

'use strict';
const defaultBackgroundColor="rgba(221,221,221,1)";
const cbtn = document.createElement("button");
document.getElementById("sc-navbar-container").appendChild(cbtn);
const ctextarea = document.createElement("textarea");
document.getElementById("sc-navbar-container").appendChild(ctextarea);
cbtn.id="juibutton";
cbtn.textContent="copyAsin";
cbtn.style.cssText = 'width:100px;height:40px;border:2px dashed #ddd;';
ctextarea.style.cssText = 'font-size: 0.8rem; letter-spacing: 1px; width: 100px; height: 40px; border: 2px dashed #ddd;';
ctextarea.id="juictextarea";


cbtn.addEventListener("mouseover", () => {
    cbtn.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
});
cbtn.addEventListener("mouseout", () => {
    cbtn.style.backgroundColor = defaultBackgroundColor; // Restore default color
});

cbtn.addEventListener("click", () => {
  ctextarea.value = "";

  const filteredSpans = [...document.querySelectorAll("span")].filter((span) => !span.hasAttribute("class") && span.textContent.includes("ASIN："));

  ctextarea.value = filteredSpans.map((filteredSpan) => {
    const replacedText = filteredSpan.textContent.replace(/ASIN：/gi, "");
    return replacedText;
  }).join("\n");
event.stopPropagation(); // Prevent bubbling to parent elements
});

const copybtn = document.createElement("button");
document.getElementById("sc-navbar-container").appendChild(copybtn);
copybtn.textContent="copy";
copybtn.style.cssText = 'width:100px;height:40px;border:2px dashed #ddd;';
copybtn.addEventListener("mouseover", () => {
    copybtn.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
});
copybtn.addEventListener("mouseout", () => {
    copybtn.style.backgroundColor = defaultBackgroundColor; // Restore default color
});

copybtn.addEventListener("click", () => {
  const valuetextarea = document.getElementById("juictextarea");

  // Assuming Clipboard API is supported (not recommended for production)
  navigator.clipboard.writeText(valuetextarea.value)
    .then(() => {
      console.log("Copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy to clipboard:", err);
    });
});


// Your code here...
