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
<table class="stylestable">
  <caption>
  </caption>
  <thead>
    <tr>
		<th scope="col" id="thuk">UK</th>
		<th scope="col" id="thde">DE</th>
		<th scope="col" id="thes">ES</th>
		<th scope="col" id="thit">IT</th>
		<th scope="col" id="thfr">FR</th>
		<th scope="col" id="thnl">NL</th>
		<th scope="col" id="thus">US</th>
		<th scope="col" id="thca">CA</th>
		<th scope="col" id="thmx">MX</th>
		<th scope="col" id="thjp">JP</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" id="opaddproducts">addproducts</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" id="opinventory">inventory</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" id="opaccounthealth">accounthealth</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" id="opperformancenotification">performancenotification</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" id="opcampaignmanager">campaignmanager</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" id="opmanagepromotions">managepromotions</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" id="opinventoryrepor">inventoryrepor</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" id="opbulkupload">bulkupload</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" id="opmanageoders">manageoders</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" id="opvouchers">vouchers</th>
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
  width: 700px;
  height: 200px;
  border: 2px dashed #ddd;
  background-color:white;
  opacity:0.5;
  display:none;
  }
  .stylestable{
  color: red;
  font-size: 0.01rem;
  text-align: left;
  }
  `;




document.head.appendChild(stylesinterContinentalPanel);
document.body.appendChild(interContinentalPanel);

const togglediv = interContinentalPanel.querySelector('.togglediv');
const contentdiv = interContinentalPanel.querySelector('.contentdiv');

togglediv.addEventListener('click', () => {
    // contentdiv.style.opacity = (contentdiv.style.opacity === '0') ? 0.5 : 0;
    contentdiv.style.display = contentdiv.style.display === 'none' ? 'block' : 'none';
});

const thuk= document.getElementById('thuk');

function functionthuk() {
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://sellercentral.amazon.co.uk/home?mons_sel_dir_mcid=amzn1.merchant.d.AB4X3Q4YULYF2ZZBQUMW7NG4FXFQ&mons_sel_mkid=A1F83G8C2ARO7P&mons_sel_dir_paid=amzn1.pa.d.ABD5343SGPIPFVXYH6NGCN5MGNHA&ignore_selection_changed=true",
        onload: function(response) {
            const parsedHTML = response.responseText;
            //  alert(`${response.status}`);
            if (response.status==200){
                thuk.style.backgroundColor='green';
                setTimeout(() => {
                    thuk.style.backgroundColor='white';
                }, 100);
            }else{thuk.style.backgroundColor='blue';
                 }
        }
    })
};

thuk.addEventListener('click', functionthuk);



const opaddproducts= document.getElementById('opaddproducts');
function functionopaddproducts() {
window.open("","_blank")
};
opaddproducts.addEventListener('click', opaddproducts);

const opinventory= document.getElementById('opinventory');
function functionopinventory() {
window.open("","_blank")
};
opinventory.addEventListener('click', opinventory);

const opaccounthealth= document.getElementById('opaccounthealth');
function functionopaccounthealth() {
window.open("","_blank")
};
opaccounthealth.addEventListener('click', opaccounthealth);

const opperformancenotification= document.getElementById('opperformancenotification');
function functionopperformancenotification() {
window.open("","_blank")
};
opperformancenotification.addEventListener('click', opperformancenotification);

const opcampaignmanager= document.getElementById('opcampaignmanager');
function functionopcampaignmanager() {
window.open("","_blank")
};
opcampaignmanager.addEventListener('click', opcampaignmanager);

const opmanagepromotions= document.getElementById('opmanagepromotions');
function functionopmanagepromotions() {
window.open("","_blank")
};
opmanagepromotions.addEventListener('click', opmanagepromotions);

const opmanagepromotionsrepor= document.getElementById('opmanagepromotionsrepor');
function functionopmanagepromotionsrepor() {
window.open("","_blank")
};
opmanagepromotionsrepor.addEventListener('click', opmanagepromotionsrepor);

const opbulkupload= document.getElementById('opbulkupload');
function functionopbulkupload() {
window.open("","_blank")
};
opbulkupload.addEventListener('click', opbulkupload);

const opmanageoders= document.getElementById('opmanageoders');
function functionopmanageoders() {
window.open("","_blank")
};
opmanageoders.addEventListener('click', opmanageoders);

const opvouchers= document.getElementById('opvouchers');
function functionopvouchers() {
window.open("","_blank")
};
opvouchers.addEventListener('click', opvouchers);
