// ==UserScript==
// @name         interContinentalPanelv2.11
// @namespace    use promise for iframe
// @version      2024-06-24
// @description  integratd all amazon sricpts
// @author       jui
// @match        https://*/*
// @grant        GM_xmlhttpRequest
// @connect *
// @connect amazon.com
// @connect amazon.co.uk

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
	<thead>
    <tr>
		<td scope="col" id="tdJPkuangxiaojian2024">JPkuangxiaojian2024</td>
		<td scope="col" id="tdUKshibin97">UKshibin97</td>
		<td scope="col" id="tdUKhe3jia2jia">UKhe3jia2jia</td>
        <td scope="col" id="tdUKkunyuzou1314">UKkunyuzou1314</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td id="td">reserved</td>
      <td id="tdUSshibin97">USshibin97</td>
	  <td id="tdUShe3jia2jia">UShe3jia2jia</td>
      <td id="tdUSkunyuzou1314">USkunyuzou1314</td>
    </tr>
	 <tr>
      <td id="td">reserved</td>
      <td id="tdJPshibin97">JPshibin97</td>
	  <td id="tdJPhe3jia2jia">JPhe3jia2jia</td>
      <td id="tdJPkunyuzou1314">JPkunyuzou1314</td>
    </tr>
	<tr>
	<td id="tdjp">jp</td>
	<td id="tdmx">mx</td>
	<td id="tdca">ca</td>
	<td id="tdus">us</td>
	<td id="tdnl">nl</td>
	<td id="tdes">es</td>
	<td id="tdit">it</td>
	<td id="tdde">de</td>
	<td id="tdfr">fr</td>
	<td id="tduk">uk</td>
	</tr>
    <tr><td id="opaddproducts">opaddproducts</td></tr>
    <tr><td id="opinventory">opinventory</td></tr>
    <tr><td id="opaccounthealth">opaccounthealth</td></tr>
    <tr><td id="opperformancenotification">opperformancenotification</td></tr>
    <tr><td id="opcampaignmanager">opcampaignmanager</td></tr>
    <tr><td id="opmanagepromotions">opmanagepromotions</td></tr>
    <tr><td id="opinventoryrepor">opinventoryrepor</td></tr>
    <tr><td id="opinventorytype">opinventorytype</td></tr>
    <tr><td id="opbulkupload">opbulkupload</td></tr>
    <tr><td id="opmanageoders">opmanageoders</td></tr>
    <tr><td id="opvouchers">opvouchers</td></tr>
    <tr><td id="opbizrepor">opbizrepor</td></tr>
  </tbody>
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
  width: auto;
  height: 200px;
  border: 2px dashed #ddd;
  background-color:white;
  opacity:0.7;
  display:none;
  }
  .stylestable{
  table-layout: fixed;
  width: auto;
  color: blue;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: left;
  }
  .stylestable td {
  background-color: transparent;
  min-width: 30px;
  border: 1px dashed black;
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

const sss= document.getElementById('sss');
let marketdomain="";
let merchantid="";
let maketplaceid="";
let amzn1id="";

function defaultmarketdomain(){
    if(window.location.href.startsWith("https://sellercentral.amazon.co.uk")){
        marketdomain="https://sellercentral.amazon.co.uk/";
        return marketdomain;
    }else if(window.location.href.startsWith("https://sellercentral-japan.amazon.com")){
        marketdomain="https://sellercentral-japan.amazon.com/";
        return marketdomain;
    }else{
        marketdomain="https://sellercentral.amazon.com/";
        return marketdomain;
    }
};

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

const tdUKkunyuzou1314= document.getElementById('tdUKkunyuzou1314');
function functiontdUKkunyuzou1314() {
    tdUKkunyuzou1314.style.backgroundColor='green';
    setTimeout(() => {
        tdUKkunyuzou1314.style.backgroundColor='white';
    }, 100);
    amzn1id="AA36RKHKHY2HKH5GHSSTNTITHBMQ";
    merchantid="AAMFQPDGTZURNSYY2JJGRZRRGZFA";
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

const tdUSkunyuzou1314= document.getElementById('tdUSkunyuzou1314');
function functiontdUSkunyuzou1314() {
    tdUSkunyuzou1314.style.backgroundColor='green';
    setTimeout(() => {
        tdUSkunyuzou1314.style.backgroundColor='white';
    }, 100);
    amzn1id="AA36RKHKHY2HKH5GHSSTNTITHBMQ";
    merchantid="ADWCIIAH6JSQWA6PGRSH5ETEOGOA";
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


const tdJPkunyuzou1314= document.getElementById('tdJPkunyuzou1314');
function functiontdJPkunyuzou1314() {
    tdJPkunyuzou1314.style.backgroundColor='green';
    setTimeout(() => {
        tdJPkunyuzou1314.style.backgroundColor='white';
    }, 100);
    amzn1id="AA36RKHKHY2HKH5GHSSTNTITHBMQ";
    merchantid="ADBB2ESSHIABCX3FVKMBLRC4CNPA";
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
                sss.style.backgroundColor='green';
                setTimeout(() => {
                    sss.style.backgroundColor='white';
                }, 100);
            }else{sss.style.backgroundColor='blue';
                 }
        }
    });
    return siteshref;
};

////////////////////////////////////////////////////////////////////
const opaddproducts= document.getElementById('opaddproducts');
function functionopaddproducts(marketdomain) {
    window.open(`${marketdomain}product-search?ref=xx_catadd_favb_xx`,"_blank")
};

const opinventory= document.getElementById('opinventory');
function functionopinventory(marketdomain) {
    window.open(`${marketdomain}inventory/ref=xx_invmgr_favb_xx`,"_blank")
};


const opaccounthealth= document.getElementById('opaccounthealth');
function functionopaccounthealth(marketdomain) {
    window.open(`${marketdomain}performance/dashboard`,"_blank")
};


const opperformancenotification= document.getElementById('opperformancenotification');
function functionopperformancenotification(marketdomain) {
    window.open(`${marketdomain}performance/notifications`,"_blank")
};


const opcampaignmanager= document.getElementById('opcampaignmanager');
function functionopcampaignmanager(marketdomain) {
    window.open(`${marketdomain}cm/ref=xx_cmpmgr_favb_xx`,"_blank")
};


const opmanagepromotions= document.getElementById('opmanagepromotions');
function functionopmanagepromotions(marketdomain) {
    window.open(`${marketdomain}promotions/manage/ref=xx_promomgr_favb_xx`,"_blank")
};


const opinventoryrepor= document.getElementById('opinventoryrepor');
function functionopinventoryrepor(marketdomain) {
    window.open(`${marketdomain}listing/reports/ref=xx_invreport_favb_xx`,"_blank")
};

const opinventorytype= document.getElementById('opinventorytype');
function functionopinventorytype(marketdomain) {
    window.open(`${marketdomain}listing/reports/custom?report_type=47700`,"_blank")
};

const opbulkupload= document.getElementById('opbulkupload');
function functionopbulkupload(marketdomain) {
    window.open(`${marketdomain}listing/upload`,"_blank")
};


const opmanageoders= document.getElementById('opmanageoders');
function functionopmanageoders(marketdomain) {
    window.open(`${marketdomain}orders-v3/ref=xx_myo_favb_xx`,"_blank")
};


const opvouchers= document.getElementById('opvouchers');
function functionopvouchers(marketdomain) {
    window.open(`${marketdomain}coupons/ref=xx_scoupn_favb_xx`,"_blank")
};



const opbizrepor= document.getElementById('opbizrepor');
function functionopbizrepor(marketdomain) {
    window.open(`${marketdomain}business-reports/ref=xx_sitemetric_favb_xx`,"_blank")
};
////////////////////////////////////////


window.onload=function(){defaultmarketdomain()};

tdJPkuangxiaojian2024.addEventListener('click', functiontdJPkuangxiaojian2024);
tdUKshibin97.addEventListener('click', functiontdUKshibin97);
tdUKhe3jia2jia.addEventListener('click', functiontdUKhe3jia2jia);
tdUKkunyuzou1314.addEventListener('click', functiontdUKkunyuzou1314);
tdUSshibin97.addEventListener('click', functiontdUSshibin97);
tdUShe3jia2jia.addEventListener('click', functiontdUShe3jia2jia);
tdUSkunyuzou1314.addEventListener('click', functiontdUSkunyuzou1314);
tdJPshibin97.addEventListener('click', functiontdJPshibin97);
tdJPhe3jia2jia.addEventListener('click', functiontdJPhe3jia2jia);
tdJPkunyuzou1314.addEventListener('click', functiontdJPkunyuzou1314);

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


opaddproducts.addEventListener('click',function(){functionopaddproducts(marketdomain)});
opinventory.addEventListener('click',function(){functionopinventory(marketdomain)});
opaccounthealth.addEventListener('click',function(){functionopaccounthealth(marketdomain)});
opperformancenotification.addEventListener('click',function(){functionopperformancenotification(marketdomain)});
opcampaignmanager.addEventListener('click',function(){functionopcampaignmanager(marketdomain)});
opmanagepromotions.addEventListener('click',function(){functionopmanagepromotions(marketdomain)});
opinventoryrepor.addEventListener('click',function(){functionopinventoryrepor(marketdomain)});
opinventorytype.addEventListener('click',function(){functionopinventorytype(marketdomain)});
opbulkupload.addEventListener('click',function(){functionopbulkupload(marketdomain)});
opmanageoders.addEventListener('click',function(){functionopmanageoders(marketdomain)});
opvouchers.addEventListener('click',function(){functionopvouchers(marketdomain)});
opbizrepor.addEventListener('click',function(){functionopbizrepor(marketdomain)});






//IFRAME function start:------------------------------------------------------------------------------------------------------------------------------------
(function withinuni() {
    // Check the current URL to see which @match triggered the script
    if (window.location.href.startsWith("https://sellercentral.amazon.co.uk/home")) {
        function createAndAppendIframe(src, width, height, additionalStyles = '') {
            const cdiv = document.createElement("iframe");
            const container = document.getElementById("sc-content-container");

            if (!container) {
                console.error("Element with id 'sc-content-container' not found. Skipping iframe creation.");
                return;
            }

            cdiv.src = src;
            cdiv.width = width;
            cdiv.height = height;
            cdiv.style.cssText = `border: 6px dashed #ddd; -moz-border-radieu: 100px; box-shadow: 0px 0px 8px #fff; resize: both; ${additionalStyles}`;

            container.appendChild(cdiv);
        }

        function eu1() {
            return new Promise(resolve => {
                createAndAppendIframe("https://sellercentral.amazon.co.uk/performance/dashboard", 700, 1000);
                // Replace this placeholder with your actual logic for eu1
                // ... your code here
                resolve();
            });
        }

        function eu2() {
            return new Promise(resolve => {
                createAndAppendIframe("https://sellercentral.amazon.co.uk/performance/notifications", 700, 1000);
                // Replace this placeholder with your actual logic for eu2
                // ... your code here
                resolve();
            });
        }

        function eu3() {
            return new Promise(resolve => {
                createAndAppendIframe("https://sellercentral.amazon.co.uk/messaging/inbox-v3?fi=responseNeeded&&&", 1100, 1000);
                // Replace this placeholder with your actual logic for eu3
                // ... your code here
                resolve();
            });
        }

        function eu4() {
            return new Promise(resolve => {
                createAndAppendIframe("https://sellercentral.amazon.co.uk/inventory/ref=xx_invmgr_favb_xx", 1100, 1000);
                // Replace this placeholder with your actual logic for eu4
                // ... your code here
                resolve();
            });
        }

        eu1()
            .then(eu2)
            .then(eu3)
            .then(eu4)
            .catch(error => {
            console.error('An error occurred:', error);
        });
    } else if (window.location.href.startsWith("https://sellercentral-japan.amazon.com/home")) {
        function createAndAppendIframe(src, width, height, additionalStyles = '') {
            const cdiv = document.createElement("iframe");
            const container = document.getElementById("sc-content-container");

            if (!container) {
                console.error("Element with id 'sc-content-container' not found. Skipping iframe creation.");
                return;
            }

            cdiv.src = src;
            cdiv.width = width;
            cdiv.height = height;
            cdiv.style.cssText = `border: 6px dashed #ddd; -moz-border-radijp: 100px; box-shadow: 0px 0px 8px #fff; resize: both; ${additionalStyles}`;

            container.appendChild(cdiv);
        }

        function jp1() {
            return new Promise(resolve => {
                createAndAppendIframe("https://sellercentral-japan.amazon.com/performance/dashboard", 700, 1000);
                // Replace this placeholder with your actual logic for jp1
                // ... your code here
                resolve();
            });
        }

        function jp2() {
            return new Promise(resolve => {
                createAndAppendIframe("https://sellercentral-japan.amazon.com/performance/notifications", 700, 1000);
                // Replace this placeholder with your actual logic for jp2
                // ... your code here
                resolve();
            });
        }

        function jp3() {
            return new Promise(resolve => {
                createAndAppendIframe("https://sellercentral-japan.amazon.com/messaging/inbox-v3?fi=responseNeeded&&&", 1100, 1000);
                // Replace this placeholder with your actual logic for jp3
                // ... your code here
                resolve();
            });
        }

        function jp4() {
            return new Promise(resolve => {
                createAndAppendIframe("https://sellercentral-japan.amazon.com/inventory/ref=xx_invmgr_favb_xx", 1100, 1000);
                // Replace this placeholder with your actual logic for jp4
                // ... your code here
                resolve();
            });
        }

        jp1()
            .then(jp2)
            .then(jp3)
            .then(jp4)
            .catch(error => {
            console.error('An error occurred:', error);
        });
    }else if (window.location.href.startsWith("https://sellercentral.amazon.com/home")) {
        function createAndAppendIframe(src, width, height, additionalStyles = '') {
            const cdiv = document.createElement("iframe");
            const container = document.getElementById("sc-content-container");

            if (!container) {
                console.error("Element with id 'sc-content-container' not found. Skipping iframe creation.");
                return;
            }

            cdiv.src = src;
            cdiv.width = width;
            cdiv.height = height;
            cdiv.style.cssText = `border: 6px dashed #ddd; -moz-border-radius: 100px; box-shadow: 0px 0px 8px #fff; resize: both; ${additionalStyles}`;

            container.appendChild(cdiv);
        }

        function us1() {
            return new Promise(resolve => {
                createAndAppendIframe("https://sellercentral.amazon.com/performance/dashboard", 700, 1000);
                // Replace this placeholder with your actual logic for us1
                // ... your code here
                resolve();
            });
        }

        function us2() {
            return new Promise(resolve => {
                createAndAppendIframe("https://sellercentral.amazon.com/performance/notifications", 700, 1000);
                // Replace this placeholder with your actual logic for us2
                // ... your code here
                resolve();
            });
        }

        function us3() {
            return new Promise(resolve => {
                createAndAppendIframe("https://sellercentral.amazon.com/messaging/inbox-v3?fi=responseNeeded&&", 1100, 1000);
                // Replace this placeholder with your actual logic for us3
                // ... your code here
                resolve();
            });
        }

        function us4() {
            return new Promise(resolve => {
                createAndAppendIframe("https://sellercentral.amazon.com/inventory/ref=xx_invmgr_favb_xx", 1100, 1000);
                // Replace this placeholder with your actual logic for us4
                // ... your code here
                resolve();
            });
        }

        us1()
            .then(us2)
            .then(us3)
            .then(us4)
            .catch(error => {
            console.error('An error occurred:', error);
        });
    }

    // ... add more conditions for other @match URLs
}

)();

//IFRAME function ends----------------------------------------------------------------------------------------------------

//listedit function starts----------------------------------------------------------------------------------------------------

(function(){
    if (window.location.href.startsWith("https://sellercentral.amazon.co.uk/abis/listing/edit")||window.location.href.startsWith("https://sellercentral.amazon.com/abis/listing/edit")||window.location.href.startsWith("https://sellercentral-japan.amazon.com/abis/listing/edit")){
        const styleSheet =`
.juibuttons{
background-color:green;}`
        const createcss=document.createElement("style");
        createcss.type="text/css";
        createcss.innerHTML=styleSheet;
        (document.head ||document.documentElement).appendChild(createcss);


        const cbtn=document.createElement("button");
        cbtn.className="juibuttons";
        cbtn.textContent="doreplace";
        cbtn.style.cssText = 'width:100px;height:40px;border:2px dashed #ddd;';
        cbtn.addEventListener("mouseover", () => {
            cbtn.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        });
        cbtn.addEventListener("mouseout", () => {
            cbtn.style.backgroundColor = ""; // Restore default color
        });
        document.getElementById("sc-navbar-container").appendChild(cbtn);

        const ctextarea = document.createElement("textarea");
        document.getElementById("sc-navbar-container").appendChild(ctextarea);
        ctextarea.style.cssText = 'font-size: 0.8rem; letter-spacing: 1px; width: 100px; height: 40px; border: 2px dashed #ddd;';
        //ctextarea.value=celements[0].textContent;



        cbtn.addEventListener("click", () => {

            const celements = [...document.querySelectorAll('.text-size-sm.text-secondary')];
            for (const a of celements) {
                a.textContent = a.textContent.replace(new RegExp(ctextarea.value, 'gi'), '');
                // csmallbtn.addEventListener("click", () => {navigator.clipboard.writeText(csmallbtn.parentElement.textContent)});
            };

        });


        const mbtn=document.createElement("button");
        mbtn.className="juibuttons";
        mbtn.textContent="createcopybutton";
        mbtn.style.cssText = 'width:100px;height:40px;border:2px dashed #ddd;';
        mbtn.addEventListener("mouseover", () => {
            mbtn.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        });
        mbtn.addEventListener("mouseout", () => {
            mbtn.style.backgroundColor = ""; // Restore default color
        });
        document.getElementById("sc-navbar-container").appendChild(mbtn);

        mbtn.addEventListener("click", jui);

        function jui(){

            const elements = [...document.querySelectorAll('.text-size-sm.text-secondary')];


            for (const element of elements) {

                const copyButton = document.createElement('button');
                copyButton.className="juibuttons";
                copyButton.textContent = "";
                copyButton.style.cssText = 'width:100px;height:40px;border:2px dashed #ddd;';
                copyButton.addEventListener("mouseover", () => {
                    copyButton.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                });
                copyButton.addEventListener("mouseout", () => {
                    copyButton.style.backgroundColor = ""; // Restore default color
                });
                copyButton.addEventListener("click",()=>{navigator.clipboard.writeText(copyButton.parentElement.textContent)});
                element.appendChild(copyButton);
            }
        }
    }
})();
//listedit function ends----------------------------------------------------------------------------------------------------
//performancet function starts----------------------------------------------------------------------------------------------------

(function(){
    if (window.location.href.startsWith("https://sellercentral.amazon.co.uk/performance/account/health/product-policies")||window.location.href.startsWith("https://sellercentral-japan.amazon.com/performance/account/health/product-policies")||window.location.href.startsWith("https://sellercentral.amazon.com/performance/account/health/product-policies")){
        const defaultBackgroundColor="rgba(221,221,221,1)";
        const openlinkbtn = document.createElement("button");
        const detailsbtn = document.createElement("button");

        document.getElementById("sc-navbar-container").appendChild(openlinkbtn);
        document.getElementById("sc-navbar-container").appendChild(detailsbtn);
        const ctextarea = document.createElement("textarea");
        document.getElementById("sc-navbar-container").appendChild(ctextarea);
        openlinkbtn.id="juibutton";
        openlinkbtn.textContent="retrievesku";
        detailsbtn.textContent="clickdetails";
        openlinkbtn.style.cssText = 'width:100px;height:40px;border:2px dashed #ddd;';
        detailsbtn.style.cssText = 'width:100px;height:40px;border:2px dashed #ddd;';
        ctextarea.style.cssText = 'font-size: 0.8rem; letter-spacing: 1px; width: 100px; height: 40px; border: 2px dashed #ddd;';
        ctextarea.id="juictextarea";


        detailsbtn.addEventListener("click", () => {
            const expanders = document.querySelectorAll('.ahd-pp-rp-view-detail-container kat-icon');

            expanders.forEach(expander => {
                // Option A: Using dispatchEvent (recommended)
                const clickEvent = new Event('click', { bubbles: true });
                expander.dispatchEvent(clickEvent);

                // Option B: Using click() (might be affected by bubbling)
                // expander.click();
            });
        });

        openlinkbtn.addEventListener("mouseover", () => {
            openlinkbtn.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        });
        openlinkbtn.addEventListener("mouseout", () => {
            openlinkbtn.style.backgroundColor = defaultBackgroundColor; // Restore default color
        });


        //retrieve starts----------------------------------------------------------------------------------------------------------

        function retrivesku050724(){
            ctextarea.value = "";
            const filteredSpans = [...document.querySelectorAll("span")].filter((span) => !span.hasAttribute("class") && span.textContent.includes("ASIN："));
            const asins = filteredSpans.map((filteredSpan) => {
                const replacedText = filteredSpan.textContent.replace(/ASIN：/gi, "");
                return replacedText;
            });
            const results = [];

            function asinprocess(asin){
                let inventoryhref="";
                if (window.location.href.startsWith("https://sellercentral.amazon.co.uk/performance/account/health/product-policies")) {
                    inventoryhref="https://sellercentral.amazon.co.uk/inventory/?ref=sp_st_ahd_abp_edit&search:";
                }else if(window.location.href.startsWith("https://sellercentral-japan.amazon.com/performance/account/health/product-policies")){
                    inventoryhref="https://sellercentral-japan.amazon.com/inventory/?ref=sp_st_ahd_abp_edit&search:"
                }else if(window.location.href.startsWith("https://sellercentral.amazon.com/performance/account/health/product-policies")){
                    inventoryhref="https://sellercentral.amazon.com/inventory/?ref=sp_st_ahd_abp_edit&search:"
                };
                const newHref = `${inventoryhref}${asin.replace(/&amp;/g, "&")}`;
                function gmrequest(newHref){
                    GM_xmlhttpRequest({
                        method: "GET",
                        url: newHref,
                        onload: function(response) {
                            const parsedHTML = response.responseText;
                            //alert(`${response.status}`);
                            ctextarea.value += `${response.status}\n`;
                            const doc = new DOMParser().parseFromString(parsedHTML, "text/html"); // Assuming HTML

                            const targetElements = doc.querySelectorAll(".a-link-normal.mt-link-content.mt-table-main");
                            let elementText = "";
                            for (const element of targetElements) {
                                elementText += element.textContent + "\n"; // Add newline for each element
                            }
                            console.log(`${asin}\n${elementText}`);
                            if(targetElements.length === 2) {
                                const textContent = targetElements[1].textContent; // Get first element's text
                                const trimmedContent = textContent.trim();
                                //  results.push(`${asin}\t\t${trimmedContent.replace(/[-_].*$/g, "")}`);
                                results.push(`${asin}\t\t${trimmedContent}`);
                            } else if (targetElements.length === 1){
                                const textContent = targetElements[0].textContent; // Get second element's text
                                const trimmedContent = textContent.trim();
                                // results.push(`${asin}\t\t${trimmedContent.replace(/[-_].*$/g, "")}`);
                                results.push(`${asin}\t\t${trimmedContent}`);
                            }else{
                                results.push(`${asin}\t\t,`);
                            }

                            if (results.length === asins.length) {
                                ctextarea.value = results.join("\n");
                            }
                        }
                    })

                };

                gmrequest(newHref);


            };

            asins.forEach((asin, index) => {setTimeout(() => asinprocess(asin), index * 200); ctextarea.value += index * 200 + ' ';});


            //   for (const asin of asins) {asinprocess(asin)}
        }


        openlinkbtn.addEventListener("click",retrivesku050724);
        //retrieve ends-----------------------------------------------------------------------------------

        const copybtn = document.createElement("button");
        document.getElementById("sc-navbar-container").appendChild(copybtn);
        copybtn.textContent="copy";
        copybtn.style.cssText = 'width:100px;height:40px;border:2px dashed #ddd;';
        copybtn.addEventListener("mouseover", () => {
            copybtn.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        });
        copybtn.addEventListener("mouseout", () => {
            copybtn.style.backgroundColor = defaultBackgroundColor; // Restore default color
        });

        copybtn.addEventListener("click", () => {
            const valuetextarea = document.getElementById("juictextarea");

            // Assuming Clipboard API is supported (not recommended for production)
            navigator.clipboard.writeText(valuetextarea.value)
                .then(() => {
                console.log("Copied to clipboard!");
            })
                .catch(err => {
                console.error("Failed to copy to clipboard:", err);
            });
        });
    }})();
//performancet function ends----------------------------------------------------------------------------------------------------

//mutationobserve function starts----------------------------------------------------------------------------------------------------

const panelamazon = document.createElement('div');
panelamazon.id = 'panelamazon';
panelamazon.innerHTML = `<h2>Panel</h2>
<textarea id="panelamazontextarea"></textarea>
`;
const styles = document.createElement('style');
styles.textContent = `
#panelamazon {
  position: fixed;
  top: 10px;
  left: 1800px;
  width: 44px;
  height: 44px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 0px;//top, right, bottom, left (in that order).
  z-index: 10;
  //display:none;
  /* Toggle visibility on mutation */
  opacity: 0; /* Initially hidden */
}
#panelamazon:hover {
  opacity: 1; /* Show on hover (optional) */
}
#panelamazontextarea {
  font-size: 0.8rem;
  letter-spacing: 1px;
  width: 100px;
  height: 44px;
  border: 1px dashed #ddd;
  border-radius: 50%;
  background-color: transparent;
  resize: both;
  padding: 0px 15px 0px 15px;
  z-index: 10;
  opacity: 1; /* Initially hidden */
}
`;
panelamazon.innerHTML += `
`;
document.body.appendChild(panelamazon);
document.head.appendChild(styles);
const panelamazontextarea = document.getElementById('panelamazontextarea');
setInterval(() => (document.getElementById('panelamazon').style.backgroundColor =['#DAF7A6 ', '#00ff0030'][(Math.floor(Math.random() * 2))]), 200);

(function() {
    'use strict';
    const observer = new MutationObserver((mutations) => {
        panelamazontextarea.value +=console.log(`${mutations}`);
        panelamazontextarea.style.backgroundColor ='#C8FAF7';
        setTimeout(()=>{panelamazontextarea.style.backgroundColor ='#C8FAF700'},100);
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
//mutationobserve function ends----------------------------------------------------------------------------------------------------


//pricehealth function ends----------------------------------------------------------------------------------------------------
(function(){
    if (window.location.href.startsWith("https://sellercentral-japan.amazon.com/pricing/health/ref=xx_xx_dnav_xx")){
        const defaultBackgroundColor="rgba(221,221,221,1)";
        const cxpriceminus5 = document.createElement("button");

        document.getElementById("sc-navbar-container").appendChild(cxpriceminus5);
        const ctextarea = document.createElement("textarea");
        document.getElementById("sc-navbar-container").appendChild(ctextarea);
        cxpriceminus5.id="cxpriceminus5";
        cxpriceminus5.textContent="cxpriceminus5";

        cxpriceminus5.style.cssText = 'width:100px;height:40px;border:2px dashed #ddd;';
        ctextarea.style.cssText = 'font-size: 0.8rem; letter-spacing: 1px; width: 100px; height: 40px; border: 2px dashed #ddd;';
        ctextarea.id="juictextarea";

 function cycleAndAssignValues() {
  const start = 10;
  const end = 100;

  for (let i = 0; i < (end - start) / 4; i++) {
    const sourceId = `katal-id-${start + i * 4}`;
    const targetId = `katal-id-${start + i * 4 + 1}`;

    const sourceInput = document.getElementById(sourceId);
    const targetInput = document.getElementById(targetId);

    if (sourceInput && targetInput) {
      targetInput.value = sourceInput.value;
      ctextarea.value += `${sourceId}\n${targetId}\n${i}\n${sourceInput.value}`;
    };
  };
};

 // cxpriceminus5.addEventListener("click", cycleAndAssignValues);
        cxpriceminus5.addEventListener("click", () => {
            cycleAndAssignValues();
        });


    }})();
//pricehealth function ends----------------------------------------------------------------------------------------------------
