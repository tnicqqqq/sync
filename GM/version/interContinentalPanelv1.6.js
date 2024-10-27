// ==UserScript==
// @name         interContinentalPanelv1.6
// @namespace    https://gsfw.w3school.com
// @version      2024-06-24
// @description  add mutation observer shining effect
// @author       jui
// @match        https://*/*
// @grant        GM_xmlhttpRequest
// @connect *
// @connect amazon.com

// ==/UserScript==
'use strict';


const interContinentalPanel = document.createElement('div');
interContinentalPanel.id = "interContinentalPanel";
interContinentalPanel.innerHTML = `
<div class="togglediv" id="togglediv">togglediv</div>
<div class="contentdiv" id="contentdiv">
<textarea id="sss">sss</textarea>
<table class="stylestable">
  <caption>
  </caption>
	<tdead>
    <tr>
		<td scope="col" id="tdJPkuangxiaojian2024">JPkuangxiaojian2024</td>
		<td scope="col" id="tdUKshibin97">UKshibin97</td>
		<td scope="col" id="tdUKhe3jia2jia">UKhe3jia2jia</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td id="td">reserved</td>
      <td id="tdUSshibin97">USshibin97</td>
	  <td id="tdUShe3jia2jia">UShe3jia2jia</td>
    </tr>
	 <tr>
      <td id="td">reserved</td>
      <td id="tdJPshibin97">JPshibin97</td>
	  <td id="tdJPhe3jia2jia">JPhe3jia2jia</td>
    </tr>
	<tr>
	<td id="tdjp">jp</td>
	<td id="tdmx">mx</td>
	<td id="tdca">ca</td>
	<td id="tdua">ua</td>
	<td id="tdnl">nl</td>
	<td id="tdes">es</td>
	<td id="tdit">it</td>
	<td id="tdde">de</td>
	<td id="tdfr">fr</td>
	<td id="tduk">uk</td>
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

//////////////////////////////////


const tdJPkuangxiaojian2024= document.getElementById('tdJPkuangxiaojian2024');
function functiontdJPkuangxiaojian2024() {
    tdJPkuangxiaojian2024.style.backgroundColor='green';
    setTimeout(() => {
        tdJPkuangxiaojian2024.style.backgroundColor='white';
    }, 100);
amzn1id="AB3ZA2GSOUKWXO5OLKAYCP4FPZXA";
merchantid="ADGF2EUUT7PPFBLCT2UEHUL5N4MA";
marketdomain="https://sellercentral-japan.amazon.com/";
return amzn1id;
return merchantid;
return marketdomain;
};


const tdUKshibin97= document.getElementById('tdUKshibin97');
function functiontdUKshibin97() {
    tdUKshibin97.style.backgroundColor='green';
    setTimeout(() => {
        tdUKshibin97.style.backgroundColor='white';
    }, 100);
amzn1id="ABD5343SGPIPFVXYH6NGCN5MGNHA";
merchantid="AB4X3Q4YULYF2ZZBQUMW7NG4FXFQ";
marketdomain="https://sellercentral.amazon.co.uk/";
return amzn1id;
return merchantid;
return marketdomain;
};


const tdUKhe3jia2jia= document.getElementById('tdUKhe3jia2jia');
function functiontdUKhe3jia2jia() {
    tdUKhe3jia2jia.style.backgroundColor='green';
    setTimeout(() => {
        tdUKhe3jia2jia.style.backgroundColor='white';
    }, 100);
amzn1id="ADO5OA3WVVLGMRAPJYMTWZO3M7AA";
merchantid="ACNTHT5DKZOK2FR4SZUCT2EHJMYA";
marketdomain="https://sellercentral.amazon.co.uk/";
return amzn1id;
return merchantid;
return marketdomain;
};


const tdUSshibin97= document.getElementById('tdUSshibin97');
function functiontdUSshibin97() {
    tdUSshibin97.style.backgroundColor='green';
    setTimeout(() => {
        tdUSshibin97.style.backgroundColor='white';
    }, 100);
amzn1id="ABD5343SGPIPFVXYH6NGCN5MGNHA";
merchantid="AC6XHOEZMNBO7FV6ZMTB56WNKXJQ";
marketdomain="https://sellercentral.amazon.com/";
return amzn1id;
return merchantid;
return marketdomain;
};


const tdUShe3jia2jia= document.getElementById('tdUShe3jia2jia');
function functiontdUShe3jia2jia() {
    tdUShe3jia2jia.style.backgroundColor='green';
    setTimeout(() => {
        tdUShe3jia2jia.style.backgroundColor='white';
    }, 100);
amzn1id="ADO5OA3WVVLGMRAPJYMTWZO3M7AA";
merchantid="ABEQQURN7DZBU7WLITZJ3PEHJ6XA";
marketdomain="https://sellercentral.amazon.com/";
return amzn1id;
return merchantid;
return marketdomain;
};


const tdJPshibin97= document.getElementById('tdJPshibin97');
function functiontdJPshibin97() {
    tdJPshibin97.style.backgroundColor='green';
    setTimeout(() => {
        tdJPshibin97.style.backgroundColor='white';
    }, 100);
amzn1id="ABD5343SGPIPFVXYH6NGCN5MGNHA";
merchantid="AB56PZRFZ2ZW42PF4WQITF2B4NGA";
marketdomain="https://sellercentral-japan.amazon.com/";
return amzn1id;
return merchantid;
return marketdomain;
};


const tdJPhe3jia2jia= document.getElementById('tdJPhe3jia2jia');
function functiontdJPhe3jia2jia() {
    tdJPhe3jia2jia.style.backgroundColor='green';
    setTimeout(() => {
        tdJPhe3jia2jia.style.backgroundColor='white';
    }, 100);
amzn1id="ADO5OA3WVVLGMRAPJYMTWZO3M7AA";
merchantid="AD65MXFR6KW3CYF6WPTN3B4E6YEQ";
marketdomain="https://sellercentral-japan.amazon.com/";
return amzn1id;
return merchantid;
return marketdomain;
};


///////////////////////////////////////////////////////////////

const tdjp= document.getElementById('tdjp');
function functiontdjp() {
    tdjp.style.backgroundColor='green';
    setTimeout(() => {
        tdjp.style.backgroundColor='white';
    }, 100);
maketplaceid="A1VC38T7YXB528";
return maketplaceid;
};


const tdmx= document.getElementById('tdmx');
function functiontdmx() {
    tdmx.style.backgroundColor='green';
    setTimeout(() => {
        tdmx.style.backgroundColor='white';
    }, 100);
maketplaceid="A1AM78C64UM0Y8";
return maketplaceid;
};


const tdca= document.getElementById('tdca');
function functiontdca() {
    tdca.style.backgroundColor='green';
    setTimeout(() => {
        tdca.style.backgroundColor='white';
    }, 100);
maketplaceid="A2EUQ1WTGCTBG2";
return maketplaceid;
};


const tdus= document.getElementById('tdus');
function functiontdus() {
    tdus.style.backgroundColor='green';
    setTimeout(() => {
        tdus.style.backgroundColor='white';
    }, 100);
maketplaceid="ATVPDKIKX0DER";
return maketplaceid;
};


const tdnl= document.getElementById('tdnl');
function functiontdnl() {
    tdnl.style.backgroundColor='green';
    setTimeout(() => {
        tdnl.style.backgroundColor='white';
    }, 100);
maketplaceid="A1805IZSGTT6HS";
return maketplaceid;
};


const tdes= document.getElementById('tdes');
function functiontdes() {
    tdes.style.backgroundColor='green';
    setTimeout(() => {
        tdes.style.backgroundColor='white';
    }, 100);
maketplaceid="A1RKKUPIHCS9HS";
return maketplaceid;
};


const tdit= document.getElementById('tdit');
function functiontdit() {
    tdit.style.backgroundColor='green';
    setTimeout(() => {
        tdit.style.backgroundColor='white';
    }, 100);
maketplaceid="APJ6JRA9NG5V4";
return maketplaceid;
};


const tdde= document.getElementById('tdde');
function functiontdde() {
    tdde.style.backgroundColor='green';
    setTimeout(() => {
        tdde.style.backgroundColor='white';
    }, 100);
maketplaceid="A1PA6795UKMFR9";
return maketplaceid;
};


const tdfr= document.getElementById('tdfr');
function functiontdfr() {
    tdfr.style.backgroundColor='green';
    setTimeout(() => {
        tdfr.style.backgroundColor='white';
    }, 100);
maketplaceid="A13V1IB3VIYZZH";
return maketplaceid;
};


const tduk= document.getElementById('tduk');
function functiontduk() {
    tduk.style.backgroundColor='green';
    setTimeout(() => {
        tduk.style.backgroundColor='white';
    }, 100);
maketplaceid="A1F83G8C2ARO7P";
return maketplaceid;
};

let siteshref="";
function functionsiteshref (marketdomain,merchantid,maketplaceid,amzn1id){
	siteshref = `${marketdomain}home?mons_sel_dir_mcid=amzn1.merchant.d.${merchantid}&mons_sel_mkid=${maketplaceid}&mons_sel_dir_paid=amzn1.pa.d.${amzn1id}&ignore_selection_changed=true`;

	    GM_xmlhttpRequest({
        metdod: "GET",
        url: siteshref,
        onload: function(response) {
            const parsedHTML = response.responseText;
            //  alert(`${response.status}`);
            if (response.status==200){
                tduk.style.backgroundColor='green';
                setTimeout(() => {
                    tduk.style.backgroundColor='white';
                }, 100);
            }else{tduk.style.backgroundColor='blue';
                 }
        }
    });
    return siteshref;
};
function functionshref (a,b,c,d){

};

const sss= document.getElementById('sss');



tdJPkuangxiaojian2024.addEventListener('click', functiontdJPkuangxiaojian2024);
tdUKshibin97.addEventListener('click', functiontdUKshibin97);
tdUKhe3jia2jia.addEventListener('click', functiontdUKhe3jia2jia);
tdUSshibin97.addEventListener('click', functiontdUSshibin97);
tdUShe3jia2jia.addEventListener('click', functiontdUShe3jia2jia);
tdJPshibin97.addEventListener('click', functiontdJPshibin97);
tdJPhe3jia2jia.addEventListener('click', functiontdJPhe3jia2jia);


tdjp.addEventListener('click', function(){functiontdjp();functionsiteshref (marketdomain,merchantid,maketplaceid,amzn1id);sss.value=siteshref;});
tdmx.addEventListener('click', function(){functiontdmx();functionsiteshref (marketdomain,merchantid,maketplaceid,amzn1id);sss.value=siteshref;});
tdca.addEventListener('click', function(){functiontdca();functionsiteshref (marketdomain,merchantid,maketplaceid,amzn1id);sss.value=siteshref;});
tdus.addEventListener('click', function(){functiontdus();functionsiteshref (marketdomain,merchantid,maketplaceid,amzn1id);sss.value=siteshref;});
tdnl.addEventListener('click', function(){functiontdnl();functionsiteshref (marketdomain,merchantid,maketplaceid,amzn1id);sss.value=siteshref;});
tdes.addEventListener('click', function(){functiontdes();functionsiteshref (marketdomain,merchantid,maketplaceid,amzn1id);sss.value=siteshref;});
tdit.addEventListener('click', function(){functiontdit();functionsiteshref (marketdomain,merchantid,maketplaceid,amzn1id);sss.value=siteshref;});
tdde.addEventListener('click', function(){functiontdde();functionsiteshref (marketdomain,merchantid,maketplaceid,amzn1id);sss.value=siteshref;});
tdfr.addEventListener('click', function(){functiontdfr();functionsiteshref (marketdomain,merchantid,maketplaceid,amzn1id);sss.value=siteshref;});
tduk.addEventListener('click', function(){functiontduk();functionsiteshref (marketdomain,merchantid,maketplaceid,amzn1id);sss.value=siteshref;});




////////////////////////////////
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
