//daifa desc
//not exceed 20000: entity content is too long [546632599] for the configured buffer limit [524288000]; nested exception is java.lang.RuntimeException: entity content is too long [546632599] for the configured buffer limit [524288000]",
//test with 15000, takes a while
const logMessages = [];
fetch("http://10.100.1.1/product/singleItem/getinfo", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyOTQ3MTU0N30.4TQtZ-OdhEof3DodP03OrVeSWKId4wr9J_Z7BmnGOlG_hCzMsDroLVMKi1PY5fjhbp06nIKsdRDUkt6IbDDD2A",
    "cache-control": "no-cache",
    "content-type": "application/json; charset=UTF-8",
    "menucode": "8010602",
    "pragma": "no-cache",
    "system-name": "product_web",
    "username": "182717",
    "x-url-path": "/product-web/sinProMan/sinProManManage"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"remarkInfriTime\":[\"\",\"\"],\"enterSingeTime\":[\"\",\"\"],\"publishAndSaleCountVO\":[{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"},{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"}],\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7002],\"createTime\":[\"\",\"\"],\"lastphasechangetime\":[\"\",\"\"],\"salesProhibition\":[],\"isRefreshSale\":0,\"tag\":[],\"itemLastStatus\":[],\"exceptSalesProhibition\":[\"Amazon\"],\"noSaleplat\":[\"Amazon\"],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"infringementData\":\"\",\"infringementUser\":[],\"isPrice\":null,\"plugSpecification\":\"无\",\"sequence\":\"DESC\",\"orderBy\":\"AmazonPending\",\"pageIndex\":1,\"pageSize\":15000,\"isRefreshTransiting\":0}",
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
      //const recordssonSku = record.sonSku;
      const recordssonSku = record.mainSku;
      try {
		logMessages.push(`${recordssonSku}`);
      } catch (error) {
        console.error("Error parsing features:", error);
      }


  }
  logMessages.push(`\n${data.result.total},${data.result.size},${data.result.current},${data.result.pages},`);
}).then((results)=>{
if (logMessages.length > 0) {
  console.log("Log Messages:");
  console.log(logMessages.join(","));
} else {
  console.log("No messages logged.");}})
