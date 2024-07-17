// ==UserScript==
// @name         wordreplacecombine
// @namespace    http://tampermonkey.net/
// @version      2024-06-21
// @description  try to take over the world!
// @author       You
// @match        https://sellercentral.amazon.co.uk/abis/listing/edit*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.co.uk
// @grant        none
// ==/UserScript==

'use strict';

const styleSheet =`
.juibuttons{
background-color:green;}`
const createcss=document.createElement("style");
createcss.type="text/css";
createcss.innerHTML=styleSheet;
(document.head ||document.documentElement).appendChild(createcss);


const cbtn=document.createElement("button");
cbtn.className="juibuttons";
cbtn.textContent="doreplace";
cbtn.style.cssText = 'width:100px;height:40px;border:2px dashed #ddd;';
cbtn.addEventListener("mouseover", () => {
    cbtn.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
});
cbtn.addEventListener("mouseout", () => {
    cbtn.style.backgroundColor = ""; // Restore default color
});
document.getElementById("sc-navbar-container").appendChild(cbtn);

const ctextarea = document.createElement("textarea");
document.getElementById("sc-navbar-container").appendChild(ctextarea);
ctextarea.style.cssText = 'font-size: 0.8rem; letter-spacing: 1px; width: 100px; height: 40px; border: 2px dashed #ddd;';
//ctextarea.value=celements[0].textContent;



cbtn.addEventListener("click", () => {

    const celements = [...document.querySelectorAll('.text-size-sm.text-secondary')];
    for (const a of celements) {
        a.textContent = a.textContent.replace(new RegExp(ctextarea.value, 'gi'), '');
        // csmallbtn.addEventListener("click", () => {navigator.clipboard.writeText(csmallbtn.parentElement.textContent)});
    };

});


const mbtn=document.createElement("button");
mbtn.className="juibuttons";
mbtn.textContent="createcopybutton";
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
        copyButton.className="juibuttons";
        copyButton.textContent = "";
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
