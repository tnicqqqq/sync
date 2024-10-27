// ==UserScript==
// @name         invent0modifyv3
// @namespace    http://tampermonkey.net/
// @version      2024-08-27
// @description  try to take over the world!
// @author       You
// @match        https://sellercentral.amazon.co.uk/myinventory/inventory?fulfilledBy=all&page=1&pageSize=25&sort=date_created_desc&status=out_of_stock
// @match   https://sellercentral.amazon.co.uk/fixyourproducts*
// @match https://sellercentral.amazon.com/fixyourproducts*
// @match https://sellercentral-japan.amazon.com/fixyourproducts*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.co.uk
// @grant        none
// ==/UserScript==
const interContinentalPanel = document.createElement('div');
interContinentalPanel.id = "interContinentalPanel";
interContinentalPanel.innerHTML = `
<div class="togglediv" id="togglediv">togglediv</div>
<div class="contentdiv" id="contentdiv">
<textarea id="sss">43</textarea>
</div>
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
//欧洲43 日本85 翻一页+2 犯错了就乱了
document.body.appendChild(interContinentalPanel);
document.head.appendChild(stylesinterContinentalPanel);

const togglediv = interContinentalPanel.querySelector('.togglediv');
const contentdiv = interContinentalPanel.querySelector('.contentdiv');

const price500 = interContinentalPanel.querySelector('.price500');
let clickCount = 0;
function functionprice500(){
  clickCount++;
  if (clickCount <= 50) {
    // Your function logic here
    console.log('Clicked:', clickCount);


    const pricetextarea = document.getElementById('sss');
    let incrementalnum= parseInt(pricetextarea.value);
    const sourceId = `kat-input[unique-id="katal-id-${incrementalnum}"`;
    const inputElement = document.querySelector(sourceId);
    inputElement.value="500";
    inputElement.dispatchEvent(new Event('input'));
    incrementalnum+=3;
    pricetextarea.value =incrementalnum;
    pricetextarea.dispatchEvent(new Event('input'));
    const allButtons = document.querySelectorAll('kat-button');
    const filteredButtons = document.querySelectorAll('kat-button[label="更新数量"]');
    const delay = 100; // 1 second delay between clicks 20ms太快了
    filteredButtons.forEach((button, index) => {
        setTimeout(() => {
            button.click();
        }, (index*0+1) * delay); // Delay based on button index
    });
      setTimeout(functionprice500, delay);
  }else {
      clickCount=0;
    // Remove the event listener to prevent further clicks
   // price500.removeEventListener('click', functionprice500);
  };

};

price500.addEventListener('click', functionprice500);

//
