// ==UserScript==
// @name         amazonAutoPublishClickv3
// @namespace    http://tampermonkey.net/
// @version      2024-06-26
// @description  try to take over the world!
// @author       You
// @match        http://10.100.1.1/publish-web/amazon/amazonAutoPublish/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1.1
// @grant        none
// ==/UserScript==
//two modules contains
'use strict';


//***************************module1: click the ok ;MutationObserver to detect style changes
const body = document.body;
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.attributeName === "style") {
            const newStyle = mutation.target.style.overflow;
            if (newStyle === "hidden") {
                // Click the button when overflow is hidden
                const buttons = document.querySelectorAll('.ivu-btn.ivu-btn-primary');

                for (const button of buttons) {
                    if (button.querySelector('span').textContent === "确定 ") {
                        console.log("Button found!");
                        // Perform actions on the button here
                        button.click();
                        break; // Exit the loop after finding the first match
                    };
                };
                //setTimeout(() => {}, 1000);
                for (const button of buttons) {
                    if (button.querySelector('span').textContent.match(/刊登模板\s*$/)) {
                        console.log("Button 刊登模板 found!");
                        button.click();
                        break; // Exit the loop after the first click
                    };
                };

                // Optionally, disconnect the observer after first click
                observer.disconnect();
            }
        }
    });
});
// Observe the body element for style changes
observer.observe(body, { attributes: true });

//*********************************module1 finished

//**********************************module2 pannel
const AutoPublishpanel = document.createElement('div');
AutoPublishpanel.id = 'AutoPublishpanel';
AutoPublishpanel.innerHTML = `<h2>Panel</h2>
<textarea id="ctextarea"></textarea>
<button id="getdesbutton">getdes</button>
`;
const styles = document.createElement('style');
styles.textContent = `
#AutoPublishpanel {
  position: fixed;
  top: 63.98px;
  left: 1400px;
  width: 700px;
  height: 31px;
  background-color: rgba(255, 255, 255, 0.12);
  border: 1px solid #ddd;
  padding: 0px;//top, right, bottom, left (in that order).
  z-index: 10;
}
#main_content.default {
  max-height: 1800px;
}
#ctextarea {
  font-size: 0.8rem;
  letter-spacing: 1px;
  width: 1000px;
  height: 500px;
  border: 2px dashed #ddd;
  background-color: transparent;
  resize: both;
  padding: 0px 0px 0px 5px;
}
`;
AutoPublishpanel.innerHTML += `

`;
document.body.appendChild(AutoPublishpanel);
document.head.appendChild(styles);
const ctextarea = document.getElementById('ctextarea');
const getdesbutton=document.getElementById('getdesbutton');
getdesbutton.addEventListener('click', getdescription);

//function area
function getdescription() {
    const targetTextarea = document.querySelector('.ivu-input-wrapper-default textarea[maxlength="2000"]');

    if (targetTextarea) {
        ctextarea.value = targetTextarea.value;
        console.log("Description retrieved successfully!"); // Optional: Log success message
    } else {
        console.warn("Target textarea not found. Description could not be retrieved."); // Informative error message
    }
};
//**********************************module2 pannel finished
