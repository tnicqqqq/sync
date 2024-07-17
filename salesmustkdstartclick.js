// ==UserScript==
// @name         amazonAutoPublishClick
// @namespace    http://tampermonkey.net/
// @version      2024-06-26
// @description  try to take over the world!
// @author       You
// @match        http://10.100.1.1/publish-web/amazon/amazonAutoPublish/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1.1
// @grant        none
// ==/UserScript==
'use strict';


const body = document.body;

// MutationObserver to detect style changes
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
                    }
                }

                // Optionally, disconnect the observer after first click
                observer.disconnect();
            }
        }
    });
});

// Observe the body element for style changes
observer.observe(body, { attributes: true });
