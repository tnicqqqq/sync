// ==UserScript==
// @name         salesmustkdopenlinkv1.1
// @namespace    http://tampermonkey.net/
// @version      2024-06-25
// @description  try to take over the world!
// @author       You
// @match        http://10.100.1.1/publish-web/amazon/saleNewProduct
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1.1
// @grant        none
// ==/UserScript==
'use strict';
window.onbeforeunload=function(){return"you sure?"};
const panel = document.createElement('div');
panel.id = 'floating-panel';
panel.innerHTML = `<h2>Panel</h2>`;
const styles = document.createElement('style');
panel.style.cssText ="resize:both";
styles.textContent = `
    #floating-panel {
        position: fixed;
        top: 0px;
        left: 700px;
        width: 700px;
        height: 70px;
background-color: rgba(255, 255, 255, 0.12);
border: 1px solid #ddd;
        padding: 5px;
        z-index: 10;
    };

`;
panel.innerHTML += `
  <button id="openjpkbutton">openjpk</button>
  <button id="openjpsbbutton">openjpsb</button>
  <button id="openukbutton">openuk</button>
  <button id="openusbutton">openus</button>
  <button id="opendbutton">opende</button>
  <button id="testbbtn">testbtn</button>
  <button id="layoutbutton">layoutbutton</button>



`;
document.body.appendChild(panel);
document.head.appendChild(styles);

/*
0	JP-kuangxiaojian2024
1	US-kunyuzou1314
2	CA-kunyuzou1314
3	MX-kunyuzou1314
4	UK-shibin97
5	DE-shibin97
6	ES-shibin97
7	IT-shibin97
8	FR-shibin97
9	NL-shibin97
10	SE-shibin97
11	PL-shibin97
12	BE-shibin97
13	US-shibin97
14	CA-shibin97
15	MX-shibin97
16	JP-shibin97
17	UK-kunyuzou1314
18	DE-kunyuzou1314
19	ES-kunyuzou1314
20	IT-kunyuzou1314
21	FR-kunyuzou1314
22	NL-kunyuzou1314
23	SE-kunyuzou1314
24	PL-kunyuzou1314
25	BE-kunyuzou1314
26	JP-kunyuzou1314
27	BR-shibin97
28	UK-he3jia2jia
29	DE-he3jia2jia
30	ES-he3jia2jia
31	IT-he3jia2jia
32	FR-he3jia2jia
33	NL-he3jia2jia
34	SE-he3jia2jia
35	PL-he3jia2jia
36	BE-he3jia2jia
37	US-he3jia2jia
38	CA-he3jia2jia
39	MX-he3jia2jia
40	JP-he3jia2jia
*/

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
const layoutbutton = document.getElementById('layoutbutton');
layoutbutton.addEventListener('click', layoutchange);


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













/////////////////////////////////////below is functions area





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
};//Why does it not work yesterday? i'm curious
function openjpsb() {
    const elements = document.querySelectorAll('td[colid="col_16"]');
    elements.forEach(element => {
        const url = `http://10.100.1.1/publish-web/amazon/amazonAutoPublish/${element.textContent}/JP-shibin97/-1/0`;
        window.open(url, "_blank");// Open link in new tab
    });
};
function openuk() {
    const elements = document.querySelectorAll('td[colid="col_16"]');
    elements.forEach(element => {
        const url = `http://10.100.1.1/publish-web/amazon/amazonAutoPublish/${element.textContent}/UK-shibin97/-1/0`;
        window.open(url, "_blank");// Open link in new tab
    });
};
function openus() {
    const elements = document.querySelectorAll('td[colid="col_16"]');
    elements.forEach(element => {
        const url = `http://10.100.1.1/publish-web/amazon/amazonAutoPublish/${element.textContent}/US-shibin97/-1/0`;
        window.open(url, "_blank");// Open link in new tab
    });
};
function opende() {
    const elements = document.querySelectorAll('td[colid="col_16"]');
    elements.forEach(element => {
        const url = `http://10.100.1.1/publish-web/amazon/amazonAutoPublish/${element.textContent}/DE-shibin97/-1/0`;
        window.open(url, "_blank");// Open link in new tab
    });
};
function layoutchange() {
    'use strict';

    document.querySelector('.main.ivu-layout').style.height = '2000.34px';
    document.getElementById("main_content").style.maxHeight="2000.34px"
    //document.querySelector('.ivu-card-body').style.height = '1900.34px';

    document.querySelector('.vxe-table--main-wrapper').style.height = '2000.34px';//=
    document.querySelector('.vxe-table--render-wrapper').style.height = '2000.34px';//=
    setTimeout(()=> {document.querySelector('.vxe-table--body-wrapper.body--wrapper').style.height = '1797.34px';},500);
    //document.querySelector('.vxe-table--body-wrapper.body--wrapper').style.height = '1397.34px';


};
