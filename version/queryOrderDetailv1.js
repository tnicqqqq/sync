//seriously, niubile woca, just amend both username and salesmanNo
//username for authorization;salesmanNo to narrow down (can run without salesmanNo)
const logMessages = [];
fetch("http://10.100.1.1/bis/adsOrderDetailAmazonController/queryOrderDetail", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyODk2NTkwNH0.W61RY1QjJkuAIkYRiNfiG_zxaamkXSz0APpOvcD8nFcAKZEaNipfeGtV2xkOEMOtQgxNdJV6tsIfUaZr9_C9xQ",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    "pragma": "no-cache",
    "system-name": "bi_web",
    "username": "182334"
  },
  "referrer": "http://10.100.1.1/bi-web/orderSys/amazon/saleList",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"dateType\":\"shipmentDate\",\"beginDate\":\"2024-09-01\",\"endDate\":\"2024-09-30\",\"pageIndex\":1,\"pageSize\":50,\"spu\":\"\",\"sku\":\"\",\"categoryPathCode\":\"\",\"accountNumber\":[],\"accountSite\":[],\"salesmanNo\":[\"182334\"],\"salesTeamLeaderNo\":[],\"salesSupervisorNo\":[],\"minQuantity\":\"\",\"maxQuantity\":\"\",\"minTotalPrice\":\"\",\"maxTotalPrice\":\"\",\"minRefundAmount\":\"\",\"maxRefundAmount\":\"\",\"orderType\":\"\",\"minVat\":\"\",\"maxVat\":\"\",\"orderBy\":\"\",\"sequence\":\"\",\"amazonDetailDimensions\":\"SKU\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
.then(response => response.json())
.then(data => {
  const records = data.result.result;
console.log(records.length);
  for (let i = 0; i < records.length; i++) {
    const record = records[i];

      const recordsspu = record.spu;

      try {

        //logMessages.push(`${recordsspu},${recordsspu.join(",")}`);
		logMessages.push(`${recordsspu}`);
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
