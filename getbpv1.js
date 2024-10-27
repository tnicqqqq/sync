
//six

//under 1000 sku
//remember to change page size and index (max 1000 size works)
const logMessages = [];
fetch("http://10.100.1.1/product/singleItem/getinfo", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyNjEwNzQ3NH0.ZGooDF9UTXVbNgSuWxzQ4VPNpcskaBIsbMoe1i3GRhaB9Nh9RTR3AjbZEZrP_aW_bCCi9F1KuNxzFrKk8vnj5w",
    "cache-control": "no-cache",
    "content-type": "application/json; charset=UTF-8",
    "menucode": "8010602",
    "pragma": "no-cache",
    "system-name": "product_web",
    "username": "182717",
    "x-url-path": "/product-web/sinProMan/sinProManManage"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"remarkInfriTime\":[\"\",\"\"],\"enterSingeTime\":[\"\",\"\"],\"publishAndSaleCountVO\":[{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"},{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"}],\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"sonSku\":\"5AC303263,8YY800397\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7002],\"createTime\":[\"\",\"\"],\"lastphasechangetime\":[\"\",\"\"],\"salesProhibition\":[],\"isRefreshSale\":0,\"tag\":[\"BQ0035\"],\"itemLastStatus\":[],\"exceptSalesProhibition\":[\"Amazon\"],\"noSaleplat\":[\"Amazon\"],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"infringementData\":\"\",\"infringementUser\":[],\"isPrice\":null,\"plugSpecification\":\"无\",\"sequence\":\"DESC\",\"pageIndex\":1,\"pageSize\":1000,\"isRefreshTransiting\":0}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
.then(response => response.json())
.then(data => {
  const records = data.result.records;
  //console.log(records.length)
console.log(records.length);
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
	/*
	 let featuresString="";
    let featuresArray="";
	 if (record.singleItemOfficials[1].features && record.singleItemUnrestrictedOfficials[0].features) {
	 console.log(i,"one exists")}
	    try {
      featuresString = record.singleItemUnrestrictedOfficials[0].features || record.singleItemOfficials[1].features;
	  console.log(featuresString);
      featuresArray = JSON.parse(featuresString);
	  //console.log(featuresArray)
      logMessages.push(`${record.sonSku}\t${featuresArray.join("\t")}\n`);
    } catch (error) {
      console.error(i,"Error parsing features:", error);
    }
	*/
	    if (record.singleItemUnrestrictedOfficials && record.singleItemUnrestrictedOfficials[0] && record.singleItemUnrestrictedOfficials[0].features) {
      const featuresString = record.singleItemUnrestrictedOfficials[0].features;

      try {
        const featuresArray = JSON.parse(featuresString);
        logMessages.push(`${record.sonSku}\tunrestricted${featuresArray.join("\t")}\n`);
      } catch (error) {
        console.error("Error parsing features:", error);
      }
    } else if (record.singleItemOfficials && record.singleItemOfficials[1] && record.singleItemOfficials[1].features) {
      const featuresString = record.singleItemOfficials[1].features;

      try {
        const featuresArray = JSON.parse(featuresString);
        logMessages.push(`${record.sonSku}\tnonfiltered${featuresArray.join("\t")}\n`);
      } catch (error) {
        console.error("Error parsing features:", error);
      }
    } else {
      console.warn("Missing features for record:", i," ",record.sonSku);
    }


  }
  logMessages.push(`${data.result.total}\t${data.result.size}\t${data.result.current}\t${data.result.pages}\n`);
}).then((results)=>{
if (logMessages.length > 0) {
  console.log("Log Messages:");
  console.log(logMessages.join("\n"));
} else {
  console.log("No messages logged.");}})
