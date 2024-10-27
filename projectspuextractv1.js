// ==UserScript==
// @name         projectspuextractv1
// @namespace    http://tampermonkey.net/
// @version      2024-07-18
// @description  try to take over the world!
// @author       You
// @match        http://10.100.1.1/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1.1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();



const spuextractpanel = document.createElement('div');
spuextractpanel.id = "spuextractpanel";
spuextractpanel.innerHTML = `
<div class="startspuextract" id="startspuextract">startspuextract</div>
<div class="spucontentdiv" id="spucontentdiv">
   <button class="startbutton" id="startbutton">startbutton</button>
   <textarea id="sss">Hi jui</textarea>
</div>
`;
const stylesinterContinentalPanel = document.createElement('style');
stylesinterContinentalPanel.textContent = `
 #spuextractpanel {
  position: fixed;
  top: 92px;
  left: 50%;
  transform: translateX(-50%);
  width: 0px;
  height: 0px;
  background-color: blue;
  padding: 0px;
  }
  #startspuextract {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 0px;
  height: 0px;
  background-color: blue;
  }
  #spucontentdiv {
  position: absolute;
  top: 20px;
  left: 0px;
  width: auto;
  height: 200px;
  border: 2px dashed #ddd;
  background-color:white;
  opacity:0.7;
  display:none;
  }
  #startbutton{
  }

  `;




document.head.appendChild(stylesinterContinentalPanel);
document.body.appendChild(spuextractpanel);

const startspuextract = spuextractpanel.querySelector('.startspuextract');
const spucontentdiv = spuextractpanel.querySelector('.spucontentdiv');
const startbutton = spuextractpanel.querySelector('.startbutton');

let juinum;



function juialert(){
    alert("hi Jui");
};
function juilog(){
    console.log("waiting");
};

function funccheck(){
    const juielement = document.querySelector('.vxe-table--loading.vxe-loading.is--visible');
   // const juielementno = document.querySelector('.vxe-table--loading.vxe-loading');
    if(!!juielement){console.log("loading");setTimeout(()=>{funccheck()},1000);}else if (!juielement){console.log("we can proceed");juinum=100;}else {console.log("in else")}
    console.log(juinum);
    return juinum;
};


startspuextract.addEventListener('click', () => {
    spucontentdiv.style.display = spucontentdiv.style.display === 'none' ? 'block' : 'none';
});

startbutton.addEventListener('click', () => {


    //check
    funccheck();
    //extract

    //next

});
