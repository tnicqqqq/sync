// ==UserScript==
// @name         retrievesku
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
const openlinkbtn = document.createElement("button");
document.getElementById("sc-navbar-container").appendChild(openlinkbtn);
const ctextarea = document.createElement("textarea");
document.getElementById("sc-navbar-container").appendChild(ctextarea);
openlinkbtn.id="juibutton";
openlinkbtn.textContent="openlinkbtn";
openlinkbtn.style.cssText = 'width:100px;height:40px;border:2px dashed #ddd;';
ctextarea.style.cssText = 'font-size: 0.8rem; letter-spacing: 1px; width: 100px; height: 40px; border: 2px dashed #ddd;';
ctextarea.id="juictextarea";


openlinkbtn.addEventListener("mouseover", () => {
    openlinkbtn.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
});
openlinkbtn.addEventListener("mouseout", () => {
    openlinkbtn.style.backgroundColor = defaultBackgroundColor; // Restore default color
});


openlinkbtn.addEventListener("click", () => {
    ctextarea.value = "";

    const filteredSpans = [...document.querySelectorAll("span")].filter((span) => !span.hasAttribute("class") && span.textContent.includes("ASIN："));

    const asins = filteredSpans.map((filteredSpan) => {
        const replacedText = filteredSpan.textContent.replace(/ASIN：/gi, "");
        return replacedText;
    });

  // Create links dynamically
 // ctextarea.value = asins.map((asin) => {
  asins.map((asin) => {

    const link = document.createElement("a");
      const newHref = `https://sellercentral.amazon.co.uk/inventory/?ref=sp_st_ahd_abp_edit&search:${asin.replace(/&amp;/g, "&")}`; // Replace &amp; with &
  link.href = newHref;

    //link.href = `https://sellercentral.amazon.co.uk/inventory/?ref=sp_st_ahd_abp_edit&search:${asin}`; // Adjust URL if needed
    link.textContent = asin;
      window.open(newHref,"_blank");
    return link.outerHTML; // Add link's HTML to textarea
  }).join(""); // Join links with no delimiter


});

// Your code here...
/*old version replace without &
const link = document.createElement("a");
    link.href = `https://www.amazon.com/dp/${asin}`; // Adjust URL if needed
    link.textContent = asin;
    return link.outerHTML;
    */
