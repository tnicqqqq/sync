// ==UserScript==
// @name         layoutchangeordersv2.2
// @namespace    http://tampermonkey.net/
// @version      2024-07-08
// @description  modify panel left
// @author       You
// @match        http://10.100.1.1/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1.1
// @grant        none
// ==/UserScript==


const layoutpanel = document.createElement('div');
layoutpanel.id = 'floating-layoutpanel';
layoutpanel.innerHTML = `<h2>Panel</h2>`;
const styles = document.createElement('style');
layoutpanel.style.cssText ="resize:both";
styles.textContent = `
    #floating-layoutpanel {
        position: fixed;
        top: 0px;
        left: 630px;
  width: 44px;
  height: 44px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
        padding: 5px;
        z-index: 10;
        opacity:1;
    };
 #floating-layoutpanel:hover {
  opacity:0.5;
}
`;
layoutpanel.innerHTML += `

  <button id="layoutbtn">layoutbtn</button>



`;
document.body.appendChild(layoutpanel);
document.head.appendChild(styles);

window.onload=function (){


    if (window.location.href.startsWith("http://10.100.1.1/sale-web/orderForm/amazon/AmazonSystemOrder")) {
        document.querySelectorAll(".ivu-btn.ivu-btn-text")[4].click();
        document.querySelector(".ivu-btn.ivu-btn-success").click();}

};



const layoutbtn = document.getElementById('layoutbtn');
//const is important here because we use innerHTML to add button not elementCreate
layoutbtn.addEventListener('click',layoutbchange);
function layoutbchange(){
    try {
        document.getElementById("main_content").style.maxHeight = "2160px";}
    catch (error){};
    try {
        document.getElementsByTagName("table")[1].style.height = '2000.34px';}
    catch (error){};
    try {
        document.querySelector(".vxe-table--body-wrapper.body--wrapper").style.maxHeight= "2160px";}
    catch (error){};
        try {
    document.querySelectorAll(".ivu-table-tbody")[1].style.height = '2000.34px';}
    catch (error){};

}
