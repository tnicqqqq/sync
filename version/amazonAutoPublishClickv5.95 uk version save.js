// ==UserScript==
// @name         amazonAutoPublishClickv5.95 uk version save
// @namespace    only to translate; won't click kd for all situations; cannot click confirm; add sizemap
// @version      2024-06-26
// @description  try to take over the world!
// @author       You
// @match        http://10.100.1.1/publish-web/amazon/amazonAutoPublish/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1.1
// @grant        none
// ==/UserScript==
'use strict';


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
                        button.click();
                        document.querySelectorAll('.ivu-collapse-header')[0].click();
                        document.querySelectorAll('.ivu-collapse-header')[2].click();
                        break; // Exit the loop after finding the first match
                    };
                };

                setTimeout(() => {}, 1000);


                let inputdiv=document.querySelector('.el-input.el-input--small.el-input--suffix');
                let inputElement = inputdiv.querySelector('input[type="text"]');
                const event = new Event('input');
                inputElement.value = 'colormap';
                inputElement.dispatchEvent(event);
                setTimeout(() => {
                    let suggestionItem = document.querySelector(".el-cascader__suggestion-item");
                    if (suggestionItem) {
                        console.log("Suggestion item found:", suggestionItem);
                        suggestionItem.click();
                        setTimeout(() => {feibitianbuttonclick();},300);
                        setTimeout(() => {kkinputdata();}, 500);
                    } else {
                        console.error("Suggestion item not found");
                    }
                }, 500);
setTimeout(()=>{
                inputElement.value = 'sizemap';
                inputElement.dispatchEvent(event);
                setTimeout(() => {
                    let suggestionItem = document.querySelectorAll(".el-cascader__suggestion-item");
                    if (suggestionItem) {
                        console.log("Suggestion item found:", suggestionItem);
                        suggestionItem[1].click();
                        setTimeout(() => {feibitianbuttonclick();},300);
                        setTimeout(() => {kkinputdata2();}, 500);
                    } else {
                        console.error("Suggestion item not found");
                    }
                }, 500);
            },600);
   /*             checkUKContent()
                    .then(() => {

                   checkButton()



                    checkButton();
                    clickkdbtn();
                    checkForButton()
                   */ /*
                    .then(()=>{
                          clickkdbtn();
                    checkForButton()
                    })
                    .catch(error => {
                    console.error(checkButton(), error);
                });



                })
                    .then(()=>{

                    setTimeout(() => {
                        clickkdbtn()
                    }, 2000);
                })
                    .then(() => {

                    setTimeout(() => {
                         checkForButton(); // Assuming checkForButton is a function
                    }, 2000);
                })
                    .catch(error => {

                    console.error('Error:', error);
                });
                */
                              // checkButton();
                   clickkdbtnsave();
                    checkForOkButton();
                observer.disconnect();
            }
        }
    });
});
const AutoPublishpanel = document.createElement('div');
AutoPublishpanel.id = 'AutoPublishpanel';
AutoPublishpanel.innerHTML = `<h2>Panel</h2>
<textarea id="ctextarea"></textarea>
<button id="getdesbutton">getdesNtrimkw</button>
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
const assignbtn = document.getElementById('assignbtn');

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
function clickkdbtnsave(){
    const buttons = document.querySelectorAll('.ivu-btn.ivu-btn-primary');
    for (const button of buttons) {
        if (button.querySelector('span').textContent.match(/保存模板\s*$/)) {
            console.log("Button 保存模板 found!");
            button.click();
            break; // Exit the loop after the first click
        };
    };
};
function checkButton() {
    return new Promise((resolve, reject) => {
        const button = document.querySelector('.ivu-btn.ivu-btn-primary.ivu-btn-loading');
        if (!!button) {
            console.log('Button ivu-btn ivu-btn-primary ivu-btn-loading found.');
 setTimeout(() => { checkButton();},2000);
           // reject();
        } else if(!button){

            trimkw();
            console.log('Button not found. proceed.');
            resolve();
        }
    })};

function checkUKContent() {
    return new Promise((resolve, reject) => {
        const formItems = document.querySelectorAll('.ivu-form-item-content');

        if (formItems.length >= 3) { // Ensure there are at least 3 form items
            const thirdFormItem = formItems[2]; // Access the third form item
            const content = thirdFormItem.textContent.trim(); // Get the content, removing leading/trailing whitespace

            if (content.includes('JP') || content.includes('FR') || content.includes('DE') || content.includes('IT') || content.includes('ES') || content.includes('NL') || content.includes('MX')) {
                let buttons = document.querySelectorAll('.ivu-btn.ivu-btn-primary');
                let buttonFound = false;
                for (const button of buttons) {
                    if (button.querySelector('span').textContent.match(/一键翻译\s*$/)) {
                        buttonFound = true;
                        button.click();
                        console.log("Button 一键翻译 已点击!");

                      //  resolve();
                        reject();
                        break; // Stop iterating after finding the button
                    }
                }
            } else {
                console.log('The third form item content does not contain a supported language.');
                reject(); // Reject if content doesn't match
            }
        } else {
            console.log('There are fewer than 3 form items.');
            reject(); // Reject if there are fewer than 3 form items
        }
    });
};
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
function checkForOkButton() {
   let buttonss = document.querySelectorAll('.ivu-btn.ivu-btn-primary');
    let buttonFound = false;
    for (let button of buttonss) {
        if (button.querySelector('span').textContent.match(/确定 \s*$/)) {
            buttonFound = true;
            console.log("Button 删除侵权词后刊登 found!");
            button.click()
            break;
        }
    }
    if (!buttonFound) {
        setTimeout(checkForButton, 200); // Schedule a retry if no button was found
    };
};
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

function splitAndAssignLines() {
    getdescription();
    const content = ctextarea.value;
    const lines = content.split('\n'); // Split by newline characters
    const targetElements = document.querySelectorAll('.ivu-col.ivu-col-span-23 .ivu-input');
    for (let i = 0; i < targetElements.length; i++) {
        if (i < lines.length) {
            targetElements[i].value = lines[i];
            targetElements[i].dispatchEvent(new Event('input',{
                bubbles: true}));
        } else {
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
            console.log("Button 非必填 found!");
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
function kkinputdata2(){
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
    kkinput.value = 'M';
    kkinput.dispatchEvent(event);
};
function trimkw(){
    const event = new Event('input');
    let kwTextareas = document.querySelectorAll("textarea[maxlength='249']");
    kwTextareas.forEach(kwTextarea => {
        kwTextarea.value= kwTextarea.value.slice(0, 249);
        kwTextarea.dispatchEvent(event);
    });
    console.log("trimed");
};

observer.observe(body, { attributes: true });
getdesbutton.addEventListener('click', ()=>{getdescription();trimkw()});
assignbtn.addEventListener('click', splitAndAssignLines);
