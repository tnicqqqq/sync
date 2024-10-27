// ==UserScript==
// @name         interContinentalPanel
// @namespace    https://gsfw.w3school.com
// @version      2024-06-24
// @description  add mutation observer shining effect
// @author       jui
// @match        https://*/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==
'use strict';


const interContinentalPanel = document.createElement('div');
interContinentalPanel.id = "interContinentalPanel";
interContinentalPanel.innerHTML = `
<div class="togglediv" id="togglediv">togglediv</div>
<div class="contentdiv" id="contentdiv">
<table>
  <caption>
  </caption>
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2"></th>
      <td></td>
    </tr>
  </tfoot>
</table>
</div>

`;
const stylesinterContinentalPanel = document.createElement('style');
stylesinterContinentalPanel.textContent = `
 #interContinentalPanel {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0px;
  height: 0px;
  background-color: blue;
  padding: 0px;
  }
  #togglediv {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 0px;
  height: 0px;
  background-color: blue;
  }
  #contentdiv {
  position: absolute;
  top: 20px;
  left: 0px;
  width: 200px;
  height: 200px;
  border: 2px dashed #ddd;
  background-color:aqua;
  opacity:0.5;
  display:none;
  }
  `;

const togglediv = interContinentalPanel.querySelector('.togglediv');
const contentdiv = interContinentalPanel.querySelector('.contentdiv');

togglediv.addEventListener('click', () => {
    // contentdiv.style.opacity = (contentdiv.style.opacity === '0') ? 0.5 : 0;
    contentdiv.style.display = contentdiv.style.display === 'none' ? 'block' : 'none';
});


document.head.appendChild(stylesinterContinentalPanel);
document.body.appendChild(interContinentalPanel);
