// ==UserScript==
// @name         layoutchangeordersv1
// @namespace    http://tampermonkey.net/
// @version      2024-07-08
// @description  try to take over the world!
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
        left: 700px;
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



const layoutbtn = document.getElementById('layoutbtn');
//const is important here because we use innerHTML to add button not elementCreate
layoutbtn.addEventListener('click',layoutbchange);
function layoutbchange(){
    document.getElementById("main_content").style.maxHeight = "2160px";
}
