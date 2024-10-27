const logMessages = [];
//orderBy\":\"sum_quantity\",\"sequence\":\"DESC\"
//modify username
fetch("http://10.100.1.1/bis/adsOrderDetailAmazonController/queryOrderDetail", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyOTQ3MTU0N30.4TQtZ-OdhEof3DodP03OrVeSWKId4wr9J_Z7BmnGOlG_hCzMsDroLVMKi1PY5fjhbp06nIKsdRDUkt6IbDDD2A",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    "pragma": "no-cache",
    "system-name": "bi_web",
    "username": "180212"
  },
  "referrer": "http://10.100.1.1/bi-web/orderSys/amazon/saleList",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"dateType\":\"payDate\",\"beginDate\":\"2024-10-01\",\"endDate\":\"2024-10-20\",\"pageIndex\":1,\"pageSize\":700,\"spu\":\"\",\"sku\":\"\",\"categoryPathCode\":\"\",\"accountNumber\":[],\"accountSite\":[\"US\"],\"salesmanNo\":[],\"salesTeamLeaderNo\":[],\"salesSupervisorNo\":[],\"minQuantity\":\"\",\"maxQuantity\":\"\",\"minTotalPrice\":\"\",\"maxTotalPrice\":\"\",\"minRefundAmount\":\"\",\"maxRefundAmount\":\"\",\"orderType\":\"\",\"minVat\":\"\",\"maxVat\":\"\",\"orderBy\":\"sum_quantity\",\"sequence\":\"DESC\",\"amazonDetailDimensions\":\"SKU\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
.then(response => response.json())
.then(data => {
  const records = data.result.result;// here is result
//console.log(records.length);
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
      const recordsspu = record.spu;
      const recordsku = record.article_number;
      const recordcates = record.category_path;
      const recordacc = record.account_number;
      const recordsqty = record.sum_quantity;
      const recordpiless = record.profit_margin_refunds_less;


      try {
		logMessages.push(`${recordsspu} ${recordsku} ${recordcates} ${recordacc} ${recordsqty} ${recordpiless}`);//tab to return; space for delimiter
      } catch (error) {
        console.error("Error parsing features:", error);
      }


  }
  logMessages.push(`\n${data.result.total},${data.result.totalPages},${records.length},`);//be careful here
}).then((results)=>{
if (logMessages.length > 0) {
  console.log("Log Messages:");
  console.log(logMessages.join("\t"));// delimiter
} else {
  console.log("No messages logged.");}})
