// ==UserScript==
// @name         invent0modify
// @namespace    http://tampermonkey.net/
// @version      2024-08-27
// @description  try to take over the world!
// @author       You
// @match        https://sellercentral.amazon.co.uk/myinventory/inventory?fulfilledBy=all&page=1&pageSize=25&sort=date_created_desc&status=out_of_stock
// @match   https://sellercentral.amazon.co.uk/fixyourproducts*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.co.uk
// @grant        none
// ==/UserScript==
const interContinentalPanel = document.createElement('div');
interContinentalPanel.id = "interContinentalPanel";
interContinentalPanel.innerHTML = `
<div class="togglediv" id="togglediv">togglediv</div>
<div class="contentdiv" id="contentdiv">
<textarea id="sss">sss</textarea>
</div>
//
<div class="price500" id="price500">price500</div>
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
  }`;

document.body.appendChild(interContinentalPanel);
document.head.appendChild(stylesinterContinentalPanel);

const togglediv = interContinentalPanel.querySelector('.togglediv');
const contentdiv = interContinentalPanel.querySelector('.contentdiv');

const price500 = interContinentalPanel.querySelector('.price500');

function functionprice500(){

    const pricetextarea = document.getElementById('sss');
   let incrementalnum= parseInt(pricetextarea.value);
//for (let i = 0; i < 51; i++) {
   // incrementalnum+=i*3;

    const sourceId = `kat-input[unique-id="katal-id-${incrementalnum}"`;
   // pricetextarea.value += `${sourceId}`;
    const inputElement = document.querySelector(sourceId);



    inputElement.value="500";
    inputElement.dispatchEvent(new Event('input'));
      //  pricetextarea.value = `${incrementalnum}`;

    incrementalnum+=3;
    pricetextarea.value =incrementalnum;
        pricetextarea.dispatchEvent(new Event('input'));
   // pricetextarea.value += `${inputElement.value}`;
  //  }else {
 //           alert("nosourceId");
  //      }



};

price500.addEventListener('click', functionprice500);
