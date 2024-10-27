// ==UserScript==
// @name         generatingmoban1.0
// @namespace    from testforgeneratingmoban uk and minority version 1.0
//ignored observer.disconnect; solution: add iteration lt3
// @version      2024-06-26
// @description  try to take over the world!
// @author       You
// @match        http://10.100.1.1/publish-web/amazon/amazonAutoPublish/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1.1
// @grant        none
// ==/UserScript==
'use strict';


function createpanel(){

const AutoPublishpanel = document.createElement('div');
AutoPublishpanel.id = 'AutoPublishpanel';
AutoPublishpanel.innerHTML = `<h2>Panel</h2>
<textarea id="ctextarea"></textarea>
<button id="getdesbutton">getdesNtrimkw</button>
<button id="ifnostylechange">ifnostylechange</button>
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
};

createpanel();

const ctextarea = document.getElementById('ctextarea');
const getdesbutton=document.getElementById('getdesbutton');
const ifnostylechange=document.getElementById('ifnostylechange');
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

                        resolve();
                        //reject();
                        break; // Stop iterating after finding the button
                    }
                }
            } else {
                console.log('未翻译/The third form item content does not contain a supported language.');
                resolve(); // Reject if content doesn't match
            }
        } else {
            console.log('There are fewer than 3 form items.');
            resolve("未翻译"); // Reject if there are fewer than 3 form items
        }
    });
};

function checkButton() {
    return new Promise((resolve, reject) => {
        const button = document.querySelector('.ivu-btn.ivu-btn-primary.ivu-btn-loading');
        if (!!button) {
            console.log('Button ivu-btn ivu-btn-primary ivu-btn-loading found.');
 setTimeout(() => { checkButton();},2000);
            //reject();
        } else if(!button){
            console.log('Button not found. proceed.');
            resolve();
        }
    })};

function checktransbutton() {
  return new Promise((resolve) => {
    const button = document.querySelector('.ivu-btn.ivu-btn-primary.ivu-btn-loading');
    if (!!button) {
      console.log('翻译中/Button ivu-btn ivu-btn-primary ivu-btn-loading found.');
      // Handle the case where the button exists (e.g., retry or wait)
      setTimeout(() => {
        checktransbutton().then(resolve);
      }, 2000);
    } else {
      console.log('翻译完成/Button not found. proceed.');
      resolve("翻译完成/Button not found. proceed");
    }
  });
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

function trimkw(){
    const event = new Event('input');
    let kwTextareas = document.querySelectorAll("textarea[maxlength='249']");
    kwTextareas.forEach(kwTextarea => {
        kwTextarea.value= kwTextarea.value.slice(0, 249);
        kwTextarea.dispatchEvent(event);
    });
    console.log("trimed");
};

function observerconfirm(){
 return new Promise((resolve, reject) => {
const observer = new MutationObserver((mutations) => {
  console.log("observing");
    mutations.forEach((mutation) => {
        if (mutation.attributeName === "style") {
            const newStyle = mutation.target.style.overflow;
            if (newStyle === "hidden") {
                const buttons = document.querySelectorAll('.ivu-btn.ivu-btn-primary');
                for (const button of buttons) {
                    if (button.querySelector('span').textContent === "确定 ") {
                        console.log("确定Button found!");
						button.click();
						console.log("已点击确定");
                        document.querySelectorAll('.ivu-collapse-header')[0].click();
                        document.querySelectorAll('.ivu-collapse-header')[2].click();
                        break; // Exit the loop after finding the first match
                    };
                };
              //  observer.disconnect();
				resolve();
            }
        }
    }
	);
});
const body = document.body;
observer.observe(body, { attributes: true });
 })
};

//input query
function inputquery(inputvalue,suggestionnum,kkinputvalue){
	return new Promise((resolve)=>{

		let inputdiv=document.querySelector('.el-input.el-input--small.el-input--suffix');
		let inputElement = inputdiv.querySelector('input[type="text"]');
		const event = new Event('input');
		//inputElement.value = 'colormap';
		inputElement.value = inputvalue;
        inputElement.dispatchEvent(event);
		let greeting="resolved";
		//console.log(kkinputvalue);
		setTimeout(()=>{resolve(greeting)},2000)
		//console.log(kkinputvalue);
		})
}
//click suggestitem
function clicksuggestionitem(inputvalue,suggestionnum,kkinputvalue){

		let suggestionItem = document.querySelectorAll(".el-cascader__suggestion-item");
		if (suggestionItem) {
                console.log("Suggestion item found:",suggestionnum,kkinputvalue);
                suggestionItem[suggestionnum].click();
				//console.log(kkinputvalue);
				//return kkinputvalue;
            } else {
                console.error("Suggestion item recheck");
            }

}
//click addattributes
function clickaddattributes(inputvalue,suggestionnum,kkinputvalue){
	const buttons = document.querySelectorAll('.ivu-btn.ivu-btn-primary');
    for (const button of buttons) {
        if (button.querySelector('span').textContent === "添加非必填属性") {
            console.log("Button 添加非必填属性 found!");
            const eventclick = new Event('click');
            button.dispatchEvent(eventclick);
			console.log(kkinputvalue);
			//return kkinputvalue;
        }};
}
//input attributes
function inputattributes(inputvalue,suggestionnum,kkinputvalue){
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
    //kkinput.value = 'multicolor';
	console.log(kkinputvalue);
	kkinput.value = kkinputvalue;
    kkinput.dispatchEvent(event);
}

let myvalues = [
  {
    inputvalue: "colormap",
    suggestionnum: 0,
    kkinputvalue: "multicolored",
  },
  {
    inputvalue: "sizemap",
    suggestionnum: 0,
    kkinputvalue: "standard",
  },
  {
    inputvalue: "HardwarePlatform",
    suggestionnum: 0,
    kkinputvalue: "as Description",
  },
];

let currentProcessIndex = 0;

function processValue(value) {
  return new Promise((resolve, reject) => {
    inputquery(value.inputvalue, value.suggestionnum, value.kkinputvalue)
      .then((result) => clicksuggestionitem(value.inputvalue, value.suggestionnum, value.kkinputvalue))
      .then((result) => clickaddattributes(value.inputvalue, value.suggestionnum, value.kkinputvalue))
      .then((result) => inputattributes(value.inputvalue, value.suggestionnum, value.kkinputvalue))
      .then(() => resolve(value))
      .catch((error) => reject(error));
  });
}

function runForValues() {
  return new Promise((resolve, reject) => {
    processNextValue();

    function processNextValue() {
      if (currentProcessIndex < myvalues.length) {
        const value = myvalues[currentProcessIndex];
        processValue(value)
          .then((result) => {
            currentProcessIndex++;
            processNextValue();
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        resolve(myvalues);
      }
    }
  });
}

function processAllValues() {
  return runForValues()
  .then((results) => {
	  checkUKContent()
  })
  .then((results) => {
	  return new Promise((resolve) => {
	  checktransbutton().then(resolve);
    });
  })
  .then((results) => {
    //observerconfirm();
	trimkw();
	clickkdbtnsave();
	console.log("已点击保存模板", results);
  })
  .then((results) => {

  })
  .catch((error) => {
    console.error("Error:", error);
  });
}

observerconfirm()
.then(processAllValues)

getdesbutton.addEventListener('click', ()=>{getdescription();trimkw()});
assignbtn.addEventListener('click', splitAndAssignLines);
ifnostylechange.addEventListener('click',processAllValues);
