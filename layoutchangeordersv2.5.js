// ==UserScript==
// @name         layoutchangeordersv2.5
// @namespace    http://tampermonkey.net/
// @version      2024-10-08
// @description  simplify
// @author       You
// @match        http://10.100.1.1/sale-web/orderForm*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1.1
// @grant        none
// ==/UserScript==


const layoutpanel = document.createElement('div');
layoutpanel.id = 'floating-layoutpanel';
layoutpanel.innerHTML = `<h2></h2>`;
const styles = document.createElement('style');
layoutpanel.style.cssText ="resize:both";
styles.textContent = `
    #floating-layoutpanel {
        position: fixed;
        top: 270px;
        left: 1600px;
  width: 67px;
  height: 30px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
        padding: 5px;
        z-index: 10;
        opacity:0.61;
    };
 #floating-layoutpanel:hover {
  opacity:1;
}
  #layoutbtn {
        position: relative;
  width: 67px;
  height: 30px;
  background-color: #2d8cf0;
  border: none;
  border-radius: 5%;
        padding: 5px;
        z-index: 10;
        opacity:0.61;
    };
`;
layoutpanel.innerHTML += `

  <button id="layoutbtn">layoutbtn</button>



`;
document.body.appendChild(layoutpanel);
document.head.appendChild(styles);

window.onload=function (){


    if (window.location.href.startsWith("http://10.100.1.1/sale-web/orderForm/amazon/AmazonSystemOrder")) {
       setTimeout(()=>{
        document.querySelectorAll(".ivu-btn.ivu-btn-text")[4].click();
      //  document.querySelector(".ivu-btn.ivu-btn-success").click();
           document.querySelectorAll(".ivu-btn.ivu-btn-primary")[1].click();
          // layoutbtn.click();
       },
                  800)
    }

};



const layoutbtn = document.getElementById('layoutbtn');
//const is important here because we use innerHTML to add button not elementCreate

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
layoutbtn.addEventListener('click',layoutbchange);
