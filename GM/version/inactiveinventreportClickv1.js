// ==UserScript==
// @name         inactiveinventClickv1
// @namespace    http://tampermonkey.net/
// @version      2024-10-21
// @description  try to take over the world!
// @author       You
// @match        https://sellercentral-japan.amazon.com/listing/reports*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @grant        none
// ==/UserScript==

const interContinentalPanel = document.createElement('div');
interContinentalPanel.id = "interContinentalPanel";
interContinentalPanel.innerHTML = `
<div class="togglediv" id="togglediv">togglediv</div>
<div class="contentdiv2" id="contentdiv2">contentdiv2</div>
<div class="contentdiv3" id="contentdiv3">contentdiv3</div>
`;
const stylesinterContinentalPanel = document.createElement('style');
stylesinterContinentalPanel.textContent = `
 #interContinentalPanel {
  position: fixed;
  top: 92px;
  left: 50%;
  transform: translateX(-50%);
  width: 0px;
  height: 0px;
  background-color: blue;
  padding: 0px;
  }

  `;




document.head.appendChild(stylesinterContinentalPanel);
document.body.appendChild(interContinentalPanel);
const togglediv = interContinentalPanel.querySelector('.togglediv');
const contentdiv2 = interContinentalPanel.querySelector('.contentdiv2');
const contentdiv3= interContinentalPanel.querySelector('.contentdiv3');



togglediv.addEventListener('click', () => {

    const dropdownToClick = document.getElementById("a-autoid-1-announce");
    dropdownToClick.click();


});

contentdiv2.addEventListener('click', () => {


    const elementToClick = document.getElementById("dropdown1_6");
elementToClick.click();
});
contentdiv3.addEventListener('click', () => {



     //const requestToClick = document.querySelector('.a-declarative[data-action="request-report"]');
//const requestToClick = document.getElementById("report-request-button-announce");
   //requestToClick.click();

    //const requestToClick = document.getElementById("report-request-button");
const requestToClick = document.querySelector('input[name="report-request-button"]');
    requestToClick.click();
/*
const clickEvent = new MouseEvent('click', {
  bubbles: true, // Propagate the event
  cancelable: true, // Allow default behavior to be prevented
  clientX: 100, // X-coordinate (optional, approximate)
  clientY: 200  // Y-coordinate (optional, approximate)
});

requestToClick.dispatchEvent(clickEvent);
*/
});
