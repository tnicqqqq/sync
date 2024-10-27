// ==UserScript==
// @name         inactiveinventClickv1.2
// @namespace    http://tampermonkey.net/
// @version      2024-10-21
// @description  us doesn't work
// @author       You
// @match        https://sellercentral-japan.amazon.com/listing/reports*
// @match        https://sellercentral.amazon.com/listing/reports*
// @match        https://sellercentral.amazon.co.uk/listing/reports*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @grant        none
// ==/UserScript==

const interContinentalPanel = document.createElement('div');
interContinentalPanel.id = "interContinentalPanel";
interContinentalPanel.innerHTML = `
<div class="togglediv" id="togglediv">www1</div>
<div class="contentdiv2" id="contentdiv2">www2</div>
<div class="contentdiv3" id="contentdiv3">www3</div>
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


function click1() {
  return new Promise((resolve, reject) => {
const dropdownToClick = document.getElementById("a-autoid-1-announce");
    dropdownToClick.click();
      resolve();
  });
};
function click2() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
    const elementToClick = document.getElementById("dropdown1_6");
    elementToClick.click();
      resolve();
           }, 500); // Delay for 2 seconds
  });
}
function click3() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
    const requestToClick = document.querySelector('input[name="report-request-button"]');
    requestToClick.click();
      resolve();
      }, 500); // Delay for 2 seconds
  });
}
togglediv.addEventListener('click', () => {
click1()
    .then(click2)
    .then(click3)
});
