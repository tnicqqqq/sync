// ==UserScript==
// @name         fuck u
// @namespace    http://tampermonkey.net/
// @version      2024-06-25
// @description  try to take over the world!
// @author       You
// @match        http://10.100.1.1/publish-web/amazon/saleNewProduct
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1.1
// @grant        none
// ==/UserScript==
'use strict';

//(function (){

const panel = document.createElement('div');
panel.id = 'floating-panel';
panel.innerHTML = `<h2>Floating Panel</h2><p>Content goefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffs here.</p>`;

const styles = document.createElement('style');
panel.style.cssText ="resize:both";
styles.textContent = `
    #floating-panel {
        position: fixed;
        top: 50px;
        left: 100px;
        width: 200px;
        height: 100px;
background-color: rgba(255, 255, 255, 0.12);
border: 1px solid #ddd;
        padding: 10px;
        z-index: 10;

    }
`;

panel.innerHTML += `
  <button id="openjpkbutton">openjpk</button>
  <button id="openjpsbbutton">openjpsb</button>
  <button id="openukbutton">openuk</button>
  <button id="openusbutton">openus</button>
  <button id="opendbutton">opende</button>
    <button id="testbbtn">testbtn</button>
`;
document.body.appendChild(panel);
document.head.appendChild(styles);

const openjpkbutton = document.getElementById('openjpkbutton');
//const is important here because we use innerHTML to add button not elementCreate
openjpkbutton.addEventListener('click',openjpk);
const openjpsbbutton = document.getElementById('openjpsbbutton');
openjpsbbutton.addEventListener('click', openjpsb);
const openukbutton= document.getElementById('openukbutton');
openukbutton.addEventListener('click',openuk);
const openusbutton = document.getElementById('openusbutton');
openusbutton.addEventListener('click',openus);
const opendbutton = document.getElementById('opendbutton');
opendbutton.addEventListener('click', opende);



//})();

/////////////////////////////////////below is functions area
const testbbtn = document.getElementById('testbbtn');
const urls = ["www.baidu.com", "www.baidu.com", "www.baidu.com", /* ... more urls */];

testbbtn.addEventListener('click', () => {
  openMultipleTabs(urls)
    .then(() => console.log("All tabs opened successfully!"))
    .catch(error => console.error("Error opening tabs:", error));
});

function openMultipleTabs(urls) {
  for (let i = 0; i < urls.length; i++) {
    setTimeout(() => {
      window.open(urls[i], "_blank");
    }, i * 100); // Delay by 100 milliseconds for each tab
  }
}

/*
function openMultipleTabs(urls) {
  const promises = urls.map(url => new Promise((resolve) => {
    window.open(url, "_blank", "", resolve); // Resolve promise after tab opens
  }));
  return Promise.all(promises); // Wait for all promises to resolve (all tabs open)
}
*/




function testopen() {

  window.open("www.gofuckyourself", "_blank");// Open link in new tab
    window.open("www.gofuckyourself", "_blank");// Open link in new tab
    window.open("www.gofuckyourself", "_blank");// Open link in new tab
    window.open("www.gofuckyourself", "_blank");// Open link in new tab
    window.open("www.gofuckyourself", "_blank");// Open link in new tab
    window.open("www.gofuckyourself", "_blank");// Open link in new tab
};
function openjpk() {


    const elements = document.querySelectorAll('td[colid="col_16"]');
const textContentArray = [];
    elements.forEach(element => {

        const url = `http://10.100.1.1/publish-web/amazon/amazonAutoPublish/${element.textContent}/JP-kuangxiaojian2024/-1/0`;
        window.open(url, "_blank");// Open link in new tab
textContentArray.push(url);
        // Optional: Add a delay between opening links (replace 200 with desired delay in milliseconds)
        // setTimeout(() => {}, 200);
    });
    window.open(textContentArray[0],"_blank");
     window.open(textContentArray[1],"_blank");
     window.open(textContentArray[2],"_blank");
     window.open(textContentArray[3],"_blank");
     window.open(textContentArray[4],"_blank");
     window.open(textContentArray[5],"_blank");
     window.open(textContentArray[6],"_blank");
};
function openjpsb() {


    const elements = document.querySelectorAll('td[colid="col_16"]');

    elements.forEach(element => {
        const url = `http://10.100.1.1/publish-web/amazon/amazonAutoPublish/${element.textContent}/JP-shibin97/-1/0`;
        window.open(url, "_blank");// Open link in new tab

        // Optional: Add a delay between opening links (replace 200 with desired delay in milliseconds)
        // setTimeout(() => {}, 200);
    });
};
function openuk() {


    const elements = document.querySelectorAll('td[colid="col_16"]');

    elements.forEach(element => {
        const url = `http://10.100.1.1/publish-web/amazon/amazonAutoPublish/${element.textContent}/UK-shibin97/-1/0`;
        window.open(url, "_blank");// Open link in new tab

        // Optional: Add a delay between opening links (replace 200 with desired delay in milliseconds)
        // setTimeout(() => {}, 200);
    });
};
function openus() {


    const elements = document.querySelectorAll('td[colid="col_16"]');

    elements.forEach(element => {
        const url = `http://10.100.1.1/publish-web/amazon/amazonAutoPublish/${element.textContent}/US-shibin97/-1/0`;
        window.open(url, "_blank");// Open link in new tab

        // Optional: Add a delay between opening links (replace 200 with desired delay in milliseconds)
        // setTimeout(() => {}, 200);
    });
};
function opende() {


    const elements = document.querySelectorAll('td[colid="col_16"]');

    elements.forEach(element => {
        const url = `http://10.100.1.1/publish-web/amazon/amazonAutoPublish/${element.textContent}/DE-shibin97/-1/0`;
        window.open(url, "_blank");// Open link in new tab

        // Optional: Add a delay between opening links (replace 200 with desired delay in milliseconds)
        // setTimeout(() => {}, 200);
    });
};
