// ==UserScript==
// @name         inactiveinventClickv1.1
// @namespace    http://tampermonkey.net/
// @version      2024-10-21
// @description  first fanal
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
      /* alternatives:
      setTimeout(() => {
      const dropdownToClick = document.getElementById("a-autoid-1-announce");
      dropdownToClick.click();
      resolve(); // Resolve the promise after the click
    }, 2000); // Delay for 2 seconds
    */
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


/*
togglediv.addEventListener('click', () => {
    const dropdownToClick = document.getElementById("a-autoid-1-announce");
    dropdownToClick.click();
});
contentdiv2.addEventListener('click', () => {
    const elementToClick = document.getElementById("dropdown1_6");
    elementToClick.click();
});
contentdiv3.addEventListener('click', () => {
    const requestToClick = document.querySelector('input[name="report-request-button"]');
    requestToClick.click();
});
*/

/*
function handleClick(elementId) {
  return new Promise((resolve, reject) => {
    let element = document.getElementById(elementId);
    if (element) {
      element.click();
      resolve(); // Resolve the promise when the element is clicked
    } else {
      reject(new Error(`Element with ID "${elementId}" not found`)); // Reject if not found
    }
  });
}
*/
/*
togglediv.addEventListener('click', () => {
  handleClick("a-autoid-1-announce")
    .then(() => handleClick("dropdown1_6"))
    .then(() => handleClick("report-request-button"))
    .catch(error => console.error(error.message));
});
*/

/*
window.onload = function() {
  // Code to execute when the page is fully loaded

  setTimeout(function() {
    // Code to execute after a delay (adjust the delay as needed)

    togglediv.addEventListener('click', () => {
      handleClick("a-autoid-1-announce")
        .then(() => handleClick("dropdown1_6"))
        .then(() => handleClick("report-request-button"))
        .catch(error => console.error(error.message));
    });
  }, 2000); // Example delay of 2 seconds
};
*/
