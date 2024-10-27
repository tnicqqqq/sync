// ==UserScript==
// @name         interContinentalPanelv1.3
// @namespace    https://gsfw.w3school.com
// @version      2024-06-24
// @description  add mutation observer shining effect
// @author       jui
// @match        https://*/*
// @grant        GM_xmlhttpRequest
// @connect      *
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
  top: 92px;
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


let marketdomain="https://sellercentral.amazon.co.uk/";
let merchantid="AB4X3Q4YULYF2ZZBQUMW7NG4FXFQ";
let maketplaceid="A1F83G8C2ARO7P";
let amzn1id="ABD5343SGPIPFVXYH6NGCN5MGNHA";
let gmnewhref = `${marketdomain}home?mons_sel_dir_mcid=amzn1.merchant.d.${merchantid}&mons_sel_mkid=${maketplaceid}&mons_sel_dir_paid=amzn1.pa.d.${amzn1id}&ignore_selection_changed=true`;




//thead part
const thuk= document.getElementById('thuk');
function functionthuk() {
    GM_xmlhttpRequest({
        method: "GET",
        url: gmnewhref,
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

const thde= document.getElementById('thde');
function functionthde() {
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://sellercentral.amazon.co.uk/home?mons_sel_dir_mcid=amzn1.merchant.d.AB4X3Q4YULYF2ZZBQUMW7NG4FXFQ&mons_sel_mkid=A1PA6795UKMFR9&mons_sel_dir_paid=amzn1.pa.d.ABD5343SGPIPFVXYH6NGCN5MGNHA&ignore_selection_changed=true",
        onload: function(response) {
            const parsedHTML = response.responseText;
            //  alert(`${response.status}`);
            if (response.status==200){
                thde.style.backgroundColor='green';
                setTimeout(() => {
                    thde.style.backgroundColor='white';
                }, 100);
            }else{thde.style.backgroundColor='blue';
                 }
        }
    })
};
thde.addEventListener('click', functionthde);

const thfr= document.getElementById('thfr');
function functionthfr() {
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://sellercentral.amazon.co.uk/home?mons_sel_dir_mcid=amzn1.merchant.d.AB4X3Q4YULYF2ZZBQUMW7NG4FXFQ&mons_sel_mkid=A13V1IB3VIYZZH&mons_sel_dir_paid=amzn1.pa.d.ABD5343SGPIPFVXYH6NGCN5MGNHA&ignore_selection_changed=true",
        onload: function(response) {
            const parsedHTML = response.responseText;
            //  alert(`${response.status}`);
            if (response.status==200){
                thfr.style.backgroundColor='green';
                setTimeout(() => {
                    thfr.style.backgroundColor='white';
                }, 100);
            }else{thfr.style.backgroundColor='blue';
                 }
        }
    })
};
thfr.addEventListener('click', functionthfr);

const thit= document.getElementById('thit');
function functionthit() {
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://sellercentral.amazon.co.uk/home?mons_sel_dir_mcid=amzn1.merchant.d.AB4X3Q4YULYF2ZZBQUMW7NG4FXFQ&mons_sel_mkid=APJ6JRA9NG5V4&mons_sel_dir_paid=amzn1.pa.d.ABD5343SGPIPFVXYH6NGCN5MGNHA&ignore_selection_changed=true",
        onload: function(response) {
            const parsedHTML = response.responseText;
            //  alert(`${response.status}`);
            if (response.status==200){
                thit.style.backgroundColor='green';
                setTimeout(() => {
                    thit.style.backgroundColor='white';
                }, 100);
            }else{thit.style.backgroundColor='blue';
                 }
        }
    })
};
thit.addEventListener('click', functionthit);

const thes= document.getElementById('thes');
function functionthes() {
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://sellercentral.amazon.co.uk/home?mons_sel_dir_mcid=amzn1.merchant.d.AB4X3Q4YULYF2ZZBQUMW7NG4FXFQ&mons_sel_mkid=A1RKKUPIHCS9HS&mons_sel_dir_paid=amzn1.pa.d.ABD5343SGPIPFVXYH6NGCN5MGNHA&ignore_selection_changed=true",
        onload: function(response) {
            const parsedHTML = response.responseText;
            //  alert(`${response.status}`);
            if (response.status==200){
                thes.style.backgroundColor='green';
                setTimeout(() => {
                    thes.style.backgroundColor='white';
                }, 100);
            }else{thes.style.backgroundColor='blue';
                 }
        }
    })
};
thes.addEventListener('click', functionthes);

const thnl= document.getElementById('thnl');
function functionthnl() {
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://sellercentral.amazon.co.uk/home?mons_sel_dir_mcid=amzn1.merchant.d.AB4X3Q4YULYF2ZZBQUMW7NG4FXFQ&mons_sel_mkid=A1805IZSGTT6HS&mons_sel_dir_paid=amzn1.pa.d.ABD5343SGPIPFVXYH6NGCN5MGNHA&ignore_selection_changed=true",
        onload: function(response) {
            const parsedHTML = response.responseText;
            //  alert(`${response.status}`);
            if (response.status==200){
                thnl.style.backgroundColor='green';
                setTimeout(() => {
                    thnl.style.backgroundColor='white';
                }, 100);
            }else{thnl.style.backgroundColor='blue';
                 }
        }
    })
};
thnl.addEventListener('click', functionthnl);

const thus= document.getElementById('thus');
function functionthus() {
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://sellercentral.amazon.com/home?mons_sel_dir_mcid=amzn1.merchant.d.AC6XHOEZMNBO7FV6ZMTB56WNKXJQ&mons_sel_mkid=ATVPDKIKX0DER&mons_sel_dir_paid=amzn1.pa.d.ABD5343SGPIPFVXYH6NGCN5MGNHA&ignore_selection_changed=true&mons_redirect=change_domain",
        onload: function(response) {
            const parsedHTML = response.responseText;
            //  alert(`${response.status}`);
            if (response.status==200){
                thus.style.backgroundColor='green';
                setTimeout(() => {
                    thus.style.backgroundColor='white';
                }, 100);
            }else{thus.style.backgroundColor='blue';
                 }
        }
    })
};
thus.addEventListener('click', functionthus);

const thca= document.getElementById('thca');
function functionthca() {
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://sellercentral.amazon.com/home?mons_sel_dir_mcid=amzn1.merchant.d.AC6XHOEZMNBO7FV6ZMTB56WNKXJQ&mons_sel_mkid=A2EUQ1WTGCTBG2&mons_sel_dir_paid=amzn1.pa.d.ABD5343SGPIPFVXYH6NGCN5MGNHA&ignore_selection_changed=true",
        onload: function(response) {
            const parsedHTML = response.responseText;
            //  alert(`${response.status}`);
            if (response.status==200){
                thca.style.backgroundColor='green';
                setTimeout(() => {
                    thca.style.backgroundColor='white';
                }, 100);
            }else{thca.style.backgroundColor='blue';
                 }
        }
    })
};
thca.addEventListener('click', functionthca);


const thmx= document.getElementById('thmx');
function functionthmx() {
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://sellercentral.amazon.com/home?mons_sel_dir_mcid=amzn1.merchant.d.AC6XHOEZMNBO7FV6ZMTB56WNKXJQ&mons_sel_mkid=A1AM78C64UM0Y8&mons_sel_dir_paid=amzn1.pa.d.ABD5343SGPIPFVXYH6NGCN5MGNHA&ignore_selection_changed=true",
        onload: function(response) {
            const parsedHTML = response.responseText;
            //  alert(`${response.status}`);
            if (response.status==200){
                thmx.style.backgroundColor='green';
                setTimeout(() => {
                    thmx.style.backgroundColor='white';
                }, 100);
            }else{thmx.style.backgroundColor='blue';
                 }
        }
    })
};
thmx.addEventListener('click', functionthmx);


const thjp= document.getElementById('thjp');
function functionthjp() {
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://sellercentral-japan.amazon.com/home?mons_sel_dir_mcid=amzn1.merchant.d.AB56PZRFZ2ZW42PF4WQITF2B4NGA&mons_sel_mkid=A1VC38T7YXB528&mons_sel_dir_paid=amzn1.pa.d.ABD5343SGPIPFVXYH6NGCN5MGNHA&ignore_selection_changed=true&mons_redirect=change_domain",
        onload: function(response) {
            const parsedHTML = response.responseText;
            //  alert(`${response.status}`);
            if (response.status==200){
                thjp.style.backgroundColor='green';
                setTimeout(() => {
                    thjp.style.backgroundColor='white';
                }, 100);
            }else{thjp.style.backgroundColor='blue';
                 }
        }
    })
};
thjp.addEventListener('click', functionthjp);




//th part
const opaddproducts= document.getElementById('opaddproducts');
function functionopaddproducts() {
window.open(`${marketdomain}product-search?ref=xx_catadd_favb_xx`,"_blank")
};
opaddproducts.addEventListener('click', functionopaddproducts);

const opinventory= document.getElementById('opinventory');
function functionopinventory() {
window.open(`${marketdomain}inventory/ref=xx_invmgr_favb_xx`,"_blank")
};
opinventory.addEventListener('click', functionopinventory);

const opaccounthealth= document.getElementById('opaccounthealth');
function functionopaccounthealth() {
window.open(`${marketdomain}performance/dashboard`,"_blank")
};
opaccounthealth.addEventListener('click', functionopaccounthealth);

const opperformancenotification= document.getElementById('opperformancenotification');
function functionopperformancenotification() {
window.open(`${marketdomain}performance/notifications`,"_blank")
};
opperformancenotification.addEventListener('click', functionopperformancenotification);

const opcampaignmanager= document.getElementById('opcampaignmanager');
function functionopcampaignmanager() {
window.open(`${marketdomain}cm/ref=xx_cmpmgr_favb_xx`,"_blank")
};
opcampaignmanager.addEventListener('click', functionopcampaignmanager);

const opmanagepromotions= document.getElementById('opmanagepromotions');
function functionopmanagepromotions() {
window.open(`${marketdomain}promotions/manage/ref=xx_promomgr_favb_xx`,"_blank")
};
opmanagepromotions.addEventListener('click', functionopmanagepromotions);

const opinventoryrepor= document.getElementById('opinventoryrepor');
function functionopinventoryrepor() {
window.open(`${marketdomain}listing/reports/ref=xx_invreport_favb_xx`,"_blank")
};
opinventoryrepor.addEventListener('click', functionopinventoryrepor);

const opbulkupload= document.getElementById('opbulkupload');
function functionopbulkupload() {
window.open(`${marketdomain}listing/upload`,"_blank")
};
opbulkupload.addEventListener('click', functionopbulkupload);

const opmanageoders= document.getElementById('opmanageoders');
function functionopmanageoders() {
window.open(`${marketdomain}orders-v3/ref=xx_myo_favb_xx`,"_blank")
};
opmanageoders.addEventListener('click', functionopmanageoders);

const opvouchers= document.getElementById('opvouchers');
function functionopvouchers() {
window.open(`${marketdomain}coupons/ref=xx_scoupn_favb_xx`,"_blank")
};
opvouchers.addEventListener('click', functionopvouchers);
