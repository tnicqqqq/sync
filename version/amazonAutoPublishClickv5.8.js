// ==UserScript==
// @name         amazonAutoPublishClickv5.8
// @namespace    with kd up
// @version      2024-06-26
// @description  try to take over the world!
// @author       You
// @match        http://10.100.1.1/publish-web/amazon/amazonAutoPublish/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1.1
// @grant        none
// ==/UserScript==
//two modules contains
'use strict';

function clickkdbtn(){
    const buttons = document.querySelectorAll('.ivu-btn.ivu-btn-primary');
    for (const button of buttons) {
        if (button.querySelector('span').textContent.match(/刊登模板\s*$/)) {
            console.log("Button 刊登模板 found!");
            button.click();
            break; // Exit the loop after the first click
        };
    };

};
/*
function clicxkbtn(){
    const buttons = document.querySelectorAll('.ivu-btn.ivu-btn-primary');
    for (const button of buttons) {
        if (button.querySelector('span').textContent.match(/删除侵权词后刊登\s*$/)) {
            console.log("Button 删除侵权词后刊登 found!");
            button.click();
            break; // Exit the loop after the first click
        };
    };
    //
};
*/
/*
function clicxkbtn2(){
const targetText = "删除侵权词后刊登";

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      const newSpans = Array.from(mutation.addedNodes).filter(node => node.nodeName === 'SPAN');
      newSpans.forEach(span => {
        if (span.textContent.trim() === targetText) {
          const button = span.closest('.ivu-btn.ivu-btn-primary');
          if (button) {
            button.click();
            observer.disconnect(); // Stop observing after the first click
          }
        }
      });
    }
  });
});

const targetNode = document.body;
const config = { childList: true, subtree: true };
observer.observe(targetNode, config);

};
*/
/*
this one work but try optimize
let retries = 0;
const MAX_RETRIES = 5; // Adjust as needed
function checkForButton() {
    const buttons = document.querySelectorAll('.ivu-btn.ivu-btn-primary');
    for (const button of buttons) {
        if (button.querySelector('span').textContent.match(/删除侵权词后刊登\s*$/)) {
            console.log("Button 删除侵权词后刊登 found!");
            button.click();
            break; // Exit the loop after the first click
        }else if (!button.querySelector('span').textContent.match(/删除侵权词后刊登\s*$/)) {
        retries++;
        if (retries < MAX_RETRIES) {
            setTimeout(checkForButton, 200);
        } else {
            console.log("Button not found after", MAX_RETRIES, "retries.");
        }
        continue;
    };
    };
};
*/


function checkButton() {
    return new Promise((resolve, reject) => {
        //check if yijianfanyi loading
        const button = document.querySelector('.ivu-btn.ivu-btn-primary.ivu-btn-loading');

        if (button) {
            console.log('Button ivu-btn ivu-btn-primary ivu-btn-loading found.');
            setTimeout(checkButton, 200);
        } else {
            console.log('Button not found. proceed.');
           return resolve();
            // Check again after 200 milliseconds

        }
    })};

function checkUKContent() {
    return new Promise((resolve, reject) => {
        const formItems = document.querySelectorAll('.ivu-form-item-content');

        if (formItems.length >= 3) { // Ensure there are at least 3 form items
            const thirdFormItem = formItems[2]; // Access the third form item
            const content = thirdFormItem.textContent.trim(); // Get the content, removing leading/trailing whitespace

            if (content.includes('JP')) {
                //
                let buttons = document.querySelectorAll('.ivu-btn.ivu-btn-primary');
                let buttonFound = false;

                for (const button of buttons) {
                    if (button.querySelector('span').textContent.match(/一键翻译\s*$/)) {
                        buttonFound = true;
                        console.log("Button 一键翻译 found!");
                        button.click();

resolve;
                        break;

                    }
                }
                /*
            if (!buttonFound) {
                setTimeout(checkForButton, 200); // Schedule a retry if no button was found
            };
*/
                resolve;
                //
                console.log('The third form item content contains "UK".');
            } else {

                console.log('The third form item content does not contain "UK".');
                resolve();
            }
        } else {
            console.log('There are fewer than 3 form items.');
            resolve();
        }
    })};




function checkForButton() {
    const buttons = document.querySelectorAll('.ivu-btn.ivu-btn-primary');
    let buttonFound = false;

    for (const button of buttons) {
        if (button.querySelector('span').textContent.match(/删除侵权词后刊登\s*$/)) {
            buttonFound = true;
            console.log("Button 删除侵权词后刊登 found!");
            button.click();
            break;
        }
    }

    if (!buttonFound) {
        setTimeout(checkForButton, 200); // Schedule a retry if no button was found
    };
};
/*
    const targetText = "删除侵权词后刊登";
  const button = document.querySelector('.ivu-btn.ivu-btn-primary span:contains("' + targetText + '")').closest('.ivu-btn.ivu-btn-primary');
  if (button) {
    button.click();
  } else {
    setTimeout(checkForButton, 500); // Check again after 500ms
  }
};
*/


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
                        console.log("确定Button found!");
                        // Perform actions on the button here
                        button.click();
                        document.querySelectorAll('.ivu-collapse-header')[0].click();
                        //document.querySelectorAll('.ivu-collapse-header')[1].click();

                        document.querySelectorAll('.ivu-collapse-header')[2].click();
                        // document.querySelectorAll('.ivu-collapse-header')[3].click();
                        break; // Exit the loop after finding the first match
                    };
                };

                //document.querySelectorAll('.ivu-collapse-header')[1].click();
                setTimeout(() => {}, 1000);
                const inputdiv=document.querySelector('.el-input.el-input--small.el-input--suffix');
                const inputElement = inputdiv.querySelector('input[type="text"]');
                const event = new Event('input');
                inputElement.value = 'colormap';
                inputElement.dispatchEvent(event);
                //


                // Wait for the suggestion item to appear (adjust the timeout as needed)
                setTimeout(() => {
                    const suggestionItem = document.querySelector(".el-cascader__suggestion-item");

                    if (suggestionItem) {
                        // The suggestion item has appeared, perform actions here
                        console.log("Suggestion item found:", suggestionItem);
                        suggestionItem.click();
                        setTimeout(() => {feibitianbuttonclick();},300);
                        setTimeout(() => {kkinputdata();}, 500);

                    } else {
                        console.error("Suggestion item not found");
                    }
                }, 500);

                /*
                const suggestionItem = document.querySelector(".el-cascader__suggestion-item");
                const maxRetries = 5; // Adjust the maximum number of retries as needed

                if (suggestionItem) {
                    let retries = 0;

                    while (retries < maxRetries) {
                        try {
                            suggestionItem.click();
                            break; // Exit the loop if the click is successful
                        } catch (error) {
                            console.error("Error clicking suggestion item:", error);
                            retries++;

                        }
                    }

                    if (retries >= maxRetries) {
                        console.error("Failed to click suggestion item after", maxRetries, "attempts.");
                    }
                } else {
                    console.warn("No suggestion item found.");
                };
                */
                //
                //then try
                // setTimeout(() => {document.querySelectorAll('.el-cascader__suggestion-item')[0].click();feibitianbuttonclick();}, 200);


                /*
checkUKContent();
                setTimeout(() => {clickkdbtn();;}, 200);
                setTimeout(() => {checkForButton();;}, 200);
*/

                checkUKContent()
                    .then(() => {
                    setTimeout(() => {
                        // kkinputdata();
                        clickkdbtn(); // Assuming clickkdbtn is a function
                    }, 200);
                })
                    .then(() => {
                    setTimeout(() => {
                        checkForButton(); // Assuming checkForButton is a function
                    }, 200);
                })
                    .catch(error => {
                    console.error('Error:', error);
                });

                //setTimeout(() => {}, 1000);


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
<button id="assignbtn">assignbtn</button>

`;
const styles = document.createElement('style');
styles.textContent = `
#AutoPublishpanel {
  position: fixed;
  top: 90%;
  left: 35%;
  width: 10px;
  height: 010px;
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
  width: 10px;
  height: 10px;
  border: 2px dashed #ddd;
  background-color: transparent;
  resize: both;
  padding: 0px 0px 0px 15px;
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
        const lines = ctextarea.value.split('\n');

        // Check if the first line is empty
        if (lines[0].trim() === '') {
            // Remove the first line and join the remaining lines
            lines.shift();
            ctextarea.value = lines.join('\n');
        }
        console.log("Description retrieved successfully!"); // Optional: Log success message
    } else {
        console.warn("Target textarea not found. Description could not be retrieved."); // Informative error message
    }
};
//**********************************module2 pannel finished

const assignbtn = document.getElementById('assignbtn');
assignbtn.addEventListener('click', splitAndAssignLines);
function splitAndAssignLines() {
    getdescription();
    const content = ctextarea.value;
    const lines = content.split('\n'); // Split by newline characters

    // Loop through the first 5 lines (or less)


    const targetElements = document.querySelectorAll('.ivu-col.ivu-col-span-23 .ivu-input');

    // Loop through the first 5 lines (or less) and elements
    for (let i = 0; i < targetElements.length; i++) {
        if (i < lines.length) {
            targetElements[i].value = lines[i];
            targetElements[i].dispatchEvent(new Event('input',{
                bubbles: true}));
        } else {
            // Clear remaining elements (optional)
            targetElements[i].value = '';
            targetElements[i].dispatchEvent(new Event('input',{
                bubbles: true}));
        }

    }
};

function feibitianbuttonclick(){
    const buttons = document.querySelectorAll('.ivu-btn.ivu-btn-primary');
    for (const button of buttons) {
        if (button.querySelector('span').textContent === "添加非必填属性") {
            console.log("Button found!");
            // Perform actions on the button here
            const eventclick = new Event('click');
            button.dispatchEvent(eventclick);
        }};
};
function kkinputdata(){
    const contentElements = document.querySelectorAll('.amazon-attr-content');


    const secondContent = contentElements[1];


    const targetChild = secondContent.lastChild;


    const targetChild2 = targetChild.lastChild;

    const targetChild3=targetChild2.lastChild;

    const targetChild4= targetChild3.firstChild;
    const kk1=targetChild4.firstChild;

    const kk=kk1.firstChild.children[0];

    const kkinput=kk.children[1];
    const event = new Event('input');
    kkinput.value = 'multicolor';
    kkinput.dispatchEvent(event);
};