// ==UserScript==
// @name         retrieveskuallinone
// @namespace    http://tampermonkey.net/
// @version      2024-06-21
// @description  try to take over the world!
// @author       You
// @match        https://sellercentral.amazon.co.uk/performance/account/health/product-policies*
// @match        https://sellercentral-japan.amazon.com/performance/account/health/product-policies*
// @match https://sellercentral.amazon.com/performance/account/health/product-policies*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.co.uk
// @grant    GM_xmlhttpRequest
// ==/UserScript==

'use strict';
const defaultBackgroundColor="rgba(221,221,221,1)";
const openlinkbtn = document.createElement("button");
document.getElementById("sc-navbar-container").appendChild(openlinkbtn);
const ctextarea = document.createElement("textarea");
document.getElementById("sc-navbar-container").appendChild(ctextarea);
openlinkbtn.id="juibutton";
openlinkbtn.textContent="retrievesku";
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
    /*
    ctextarea.value = asins.map((asin) => {

        const link = document.createElement("a");
        const newHref = `https://sellercentral.amazon.co.uk/inventory/?ref=sp_st_ahd_abp_edit&search:${asin.replace(/&amp;/g, "&")}`; // Replace &amp; with &
        link.href = newHref;
        link.textContent = asin;
        window.open(newHref,"_blank");

        return link.outerHTML;
    }).join("");
    */
    const results = [];
    for (const asin of asins) {
        let inventoryhref="";
        if (window.location.href.startsWith("https://sellercentral.amazon.co.uk/performance/account/health/product-policies")) {
            inventoryhref="https://sellercentral.amazon.co.uk/inventory/?ref=sp_st_ahd_abp_edit&search:";
        }else if(window.location.href.startsWith("https://sellercentral-japan.amazon.com/performance/account/health/product-policies")){
            inventoryhref="https://sellercentral-japan.amazon.com/inventory/?ref=sp_st_ahd_abp_edit&search:"
        }else if(window.location.href.startsWith("https://sellercentral.amazon.com/performance/account/health/product-policies")){
            inventoryhref="https://sellercentral.amazon.com/inventory/?ref=sp_st_ahd_abp_edit&search:"
        };
        //alert(inventoryhref);
        const newHref = `${inventoryhref}${asin.replace(/&amp;/g, "&")}`;

        //const newHref = `https://sellercentral.amazon.co.uk/inventory/?ref=sp_st_ahd_abp_edit&search:${asin.replace(/&amp;/g, "&")}`;





        GM_xmlhttpRequest({
            method: "GET",
            url: newHref,
            onload: function(response) {
                /*
                  if (response.status === 200) {
        alert("GM_xmlhttpRequest successful!");
      } else {
        alert("GM_xmlhttpRequest failed:", response.status);
      };
*/
                const parsedHTML = response.responseText;
                const doc = new DOMParser().parseFromString(parsedHTML, "text/html"); // Assuming HTML

                // Search for the target class element on the product page
                const targetElements = doc.querySelectorAll(".a-link-normal.mt-link-content.mt-table-main");
                //alert(targetElements);
                // Extract and process text content (consider loop for multiple elements)
                if (targetElements.length > 1) {
                    const textContent = targetElements[1].textContent; // Get first element's text
                    const trimmedContent = textContent.trim();
                    results.push(`${asin}\t\t${trimmedContent.replace(/[-_].*$/g, "")}`);
                } else if (targetElements.length === 1){
                    const textContent = targetElements[0].textContent; // Get second element's text
                    const trimmedContent = textContent.trim();
                    results.push(`${asin}\t\t${trimmedContent.replace(/[-_].*$/g, "")}`);
                }else {
                    results.push(`${asin}\t\t,`);
                }

                // Update text area after all requests are complete (consider loop completion)
                if (results.length === asins.length) {
                    ctextarea.value = results.join("\n");
                }
            }
        });
    }
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
