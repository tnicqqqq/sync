// ==UserScript==
// @name         layoutchangeorders
// @namespace    http://tampermonkey.net/
// @version      2024-07-08
// @description  try to take over the world!
// @author       You
// @match        http://10.100.1.1/sale-web/orderForm/amazon/AmazonSystemOrder
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1.1
// @grant        none
// ==/UserScript==

window.onload=function (){
    document.querySelectorAll(".ivu-btn.ivu-btn-text")[4].click();
        document.querySelector(".ivu-btn.ivu-btn-success").click();

const layoutchangeordersbtn = document.createElement('button')
document.querySelectorAll(".margin-top-8.ivu-row")[0].appendChild(layoutchangeordersbtn);
layoutchangeordersbtn.textContent="fasf";
layoutchangeordersbtn.addEventListener('click',layoutchangeorders);
    while (document.querySelector(".ivu-loading-bar").style==="height: 2px; display: none;"){alert("daf");setTimeout(()=> {document.getElementsByTagName("table")[1].style.height = '2000.34px';},500);;
;break}
    //this while need to test
 }


function layoutchangeorders() {
    'use strict';

    document.getElementsByTagName("table")[1].style.height = '2000.34px';
};
