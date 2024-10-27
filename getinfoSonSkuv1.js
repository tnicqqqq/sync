//tranform from getspu for getinfo (guanlidanpin [amazon,无,正常 5000 page1])
//
const logMessages = [];
fetch("http://10.100.1.1/product/singleItem/getinfo", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyODk2NTkwNH0.W61RY1QjJkuAIkYRiNfiG_zxaamkXSz0APpOvcD8nFcAKZEaNipfeGtV2xkOEMOtQgxNdJV6tsIfUaZr9_C9xQ",
    "cache-control": "no-cache",
    "content-type": "application/json; charset=UTF-8",
    "menucode": "8010602",
    "pragma": "no-cache",
    "system-name": "product_web",
    "username": "182717",
    "x-url-path": "/product-web/sinProMan/sinProManManage"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"remarkInfriTime\":[\"\",\"\"],\"enterSingeTime\":[\"\",\"\"],\"publishAndSaleCountVO\":[{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"},{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"}],\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7002],\"createTime\":[\"\",\"\"],\"lastphasechangetime\":[\"\",\"\"],\"salesProhibition\":[],\"isRefreshSale\":0,\"tag\":[],\"itemLastStatus\":[],\"exceptSalesProhibition\":[\"Amazon\"],\"noSaleplat\":[\"Amazon\"],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"infringementData\":\"\",\"infringementUser\":[],\"isPrice\":null,\"plugSpecification\":\"无\",\"sequence\":\"DESC\",\"pageIndex\":1,\"pageSize\":5000,\"isRefreshTransiting\":0}",
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
      const recordssonSku = record.sonSku;
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
