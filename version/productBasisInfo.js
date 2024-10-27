const logMessages = [];
fetch("http://10.100.1.1/sale-publish-amazon/amazonTemplate/productBasisInfo", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyOTQ3MTU0N30.4TQtZ-OdhEof3DodP03OrVeSWKId4wr9J_Z7BmnGOlG_hCzMsDroLVMKi1PY5fjhbp06nIKsdRDUkt6IbDDD2A",
    "cache-control": "no-cache",
    "content-type": "application/json; charset=UTF-8",
    "pragma": "no-cache",
    "system-name": "publish_web",
    "username": "182717",
    "x-url-path": "/publish-web/amazon/amazonAutoPublish/2SS320150/US-shibin97/-1/0"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"spu\":\"2SS320150\",\"site\":\"US\",\"skuDataSource\":1,\"accountNumber\":\"US-shibin97\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
.then(response => response.json())
.then(data => {
  const records = data.result;// here is result
 const record = records;
      const recordsspu = record.spu;
      const recordscid = record.platformCategoryId;
      const recordspt = record.platformProductType;
      try {
		logMessages.push(`${recordsspu} ${recordscid} ${recordspt}`);//tab to return; space for delimiter
      } catch (error) {
        console.error("Error parsing features:", error);
      }
  logMessages.push(`\n${records.length},`);//be careful here
}).then((results)=>{
if (logMessages.length > 0) {
  console.log("Log Messages:");
  console.log(logMessages.join("\t"));// delimiter
} else {
  console.log("No messages logged.");}})

