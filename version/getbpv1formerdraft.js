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
  "body": "{\"pageIndex\":1,\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"pageSize\":50,\"sonSku\":\"9SD513390-P2\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7009,7002,7003,7004,7005,7006,7011],\"salesProhibition\":[],\"isRefreshTransiting\":0,\"isRefreshSale\":0,\"sequence\":\"DESC\",\"tag\":[],\"infringementData\":null,\"itemLastStatus\":[],\"exceptSalesProhibition\":[],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"finishInfringement\":\"\",\"infringementUser\":[],\"isPrice\":null,\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"enterSingeTime\":\"\",\"publishAndSaleCountVO\":[]}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
.then(response => response.json()) // Parse the response as JSON
.then(data => {
  console.log(data); // Access the fetched data here
});




//verstion 2
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
  "body": "{\"pageIndex\":1,\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"pageSize\":50,\"sonSku\":\"9SD513390-P2\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7009,7002,7003,7004,7005,7006,7011],\"salesProhibition\":[],\"isRefreshTransiting\":0,\"isRefreshSale\":0,\"sequence\":\"DESC\",\"tag\":[],\"infringementData\":null,\"itemLastStatus\":[],\"exceptSalesProhibition\":[],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"finishInfringement\":\"\",\"infringementUser\":[],\"isPrice\":null,\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"enterSingeTime\":\"\",\"publishAndSaleCountVO\":[]}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
.then(response => response.json())
.then(data => {
  const records = data.result.records; // Extract the records array

  // Iterate over each record and log its properties
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    console.log("Record", i + 1, ":");
    console.log("  ID:", record.sonSku); // Replace "id" with the actual property name
    console.log("  Name:", record.singleItemUnrestrictedOfficials.features); // Replace "name" with the actual property name
    // ... log other properties as needed
  }
});



//version 3
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
  "body": "{\"pageIndex\":1,\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"pageSize\":50,\"sonSku\":\"9SD513390-P2\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7009,7002,7003,7004,7005,7006,7011],\"salesProhibition\":[],\"isRefreshTransiting\":0,\"isRefreshSale\":0,\"sequence\":\"DESC\",\"tag\":[],\"infringementData\":null,\"itemLastStatus\":[],\"exceptSalesProhibition\":[],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"finishInfringement\":\"\",\"infringementUser\":[],\"isPrice\":null,\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"enterSingeTime\":\"\",\"publishAndSaleCountVO\":[]}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
.then(response => response.json())
.then(data => {
  const records = data.result.records;

  for (let i = 0; i < records.length; i++) {
    const record = records[i];
   // console.log("Record", i + 1, ":");
    console.log("  ID:", record.sonSku);

    // Access the features property within the array
    const featuresArray = record.singleItemUnrestrictedOfficials.map(item => {
      const featuresString = item.features;
      try {
        return JSON.parse(featuresString);
      } catch (error) {
        console.error("Error parsing features:", error);
        return []; // Or provide a default value
      }
    });

    // Iterate over the features array
    for (let j = 0; j < featuresArray.length; j++) {
      for (let k = 0; k < featuresArray[j].length; k++) {
        console.log("    Feature", j + 1, ":", featuresArray[j][k]);
      }
    }
  }
});

//ver siotn 4
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
  "body": "{\"pageIndex\":1,\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"pageSize\":50,\"sonSku\":\"9SD513390-P2\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7009,7002,7003,7004,7005,7006,7011],\"salesProhibition\":[],\"isRefreshTransiting\":0,\"isRefreshSale\":0,\"sequence\":\"DESC\",\"tag\":[],\"infringementData\":null,\"itemLastStatus\":[],\"exceptSalesProhibition\":[],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"finishInfringement\":\"\",\"infringementUser\":[],\"isPrice\":null,\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"enterSingeTime\":\"\",\"publishAndSaleCountVO\":[]}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
.then(response => {
  if (!response.ok) {
    throw new Error(`API call failed with status ${response.status}`);
  }
  return response.json();
})
.then(data=> {
  const records = data.result.records;

  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    console.log("Record", i + 1, ":");
    console.log("  ID:", record.sonSku);

    // Access the features property within the array
    const featuresArray = record.singleItemUnrestrictedOfficials.map(item => {
      const featuresString = item.features;
      try {
        return JSON.parse(featuresString);
      } catch (error) {
        console.error("Error parsing features:", error);
        return []; // Or provide a default value
      }
    });

    // Iterate over the features array
    for (let j = 0; j < featuresArray.length; j++) {
      for (let k = 0; k < featuresArray[j].length; k++) {
        console.log("    Feature", j + 1, ":", featuresArray[j][k]);
      }
    }
  }
})
.catch(error => {
  console.error("Error fetching or processing data:", error);
});


//five

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
  "body": "{\"pageIndex\":1,\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"pageSize\":50,\"sonSku\":\"1SA300960,3TT914398-BG\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7009,7002,7003,7004,7005,7006,7011],\"salesProhibition\":[],\"isRefreshTransiting\":0,\"isRefreshSale\":0,\"sequence\":\"DESC\",\"tag\":[],\"infringementData\":null,\"itemLastStatus\":[],\"exceptSalesProhibition\":[],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"finishInfringement\":\"\",\"infringementUser\":[],\"isPrice\":null,\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"enterSingeTime\":\"\",\"publishAndSaleCountVO\":[]}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
.then(response => response.json())
.then(data => {
  const records = data.result.records;

  for (let i = 0; i < records.length; i++) {
    const record = records[i];
   // console.log("Record", i + 1, ":");
   /*
    console.log("  ID:", record.sonSku);

	console.log("  ID:", record.singleItemUnrestrictedOfficials[0].features);
	*/
	console.log(record.sonSku,":",record.singleItemUnrestrictedOfficials[0].features);
	/*
const featuresArray = record.singleItemUnrestrictedOfficials.map(unrestrictedOfficialsItem => {
    return unrestrictedOfficialsItem.features;
  });
 for (let j = 0; j < featuresArray.length; j++) {
    console.log("    Feature", j + 1, ":", featuresArray[j]);
  }
  */
  }

});

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
