//use to get spu for fetch; this configuration is 七月普货 071024; modify index size ,paste to console, manual copy the results

const logMessages = [];
fetch("http://10.100.1.1/product/spu/list", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyNzU3MTMyNH0.zQa52zPz2ytrTlmJUH74iuqGW6JBRvfV1cWXnVLxA5KxLOxIO2L9606cbXn_a1yT9Ic3z1kjJThe1ukZXeYe8g",
    "cache-control": "no-cache",
    "content-type": "application/json; charset=UTF-8",
    "menucode": "8010612",
    "pragma": "no-cache",
    "system-name": "product_web",
    "username": "182717",
    "x-url-path": "/product-web/sinProMan/spu"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"editStatus\":\"\",\"devEmpName\":[],\"modelStatus\":\"\",\"spu\":\"\",\"beginTime\":\"2024-07-01 00:00:00\",\"endTime\":\"2024-07-31 23:59:59\",\"editFinishTimeStart\":\"\",\"editFinishTimeEnd\":\"\",\"createFinishTimeStart\":\"\",\"createFinishTimeEnd\":\"\",\"exceptSalesProhibition\":[\"Amazon\"],\"noSaleplat\":[\"Amazon\"],\"existModel\":null,\"isInfringement\":null,\"platform\":\"\",\"site\":\"\",\"salesProhibition\":null,\"saleCostBegin\":\"\",\"offComplement\":null,\"saleCostEnd\":\"\",\"itemStatus\":[7002],\"isBrand\":null,\"title\":\"\",\"sonSku\":\"\",\"tag\":[\"BQ0035\"],\"categoryIds\":[],\"pageIndex\":7,\"pageSize\":500,\"translateEmpName\":[],\"packageWeightBegin\":\"\",\"packageWeightEnd\":\"\",\"orderBy\":\"\",\"sequence\":\"\",\"availableStock\":null,\"availableStockBegin\":null,\"availableStockEnd\":null,\"whetherHasPostRemark\":null,\"plugSpecification\":\"无\",\"specialCode\":[],\"isBack\":0,\"isTemuPublish\":null}",
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

      const recordsspu = record.spu;

      try {

        //logMessages.push(`${recordsspu}\tunrestricted${recordsspu.join("\t")}\n`);
		logMessages.push(`${recordsspu}\t\n`);
      } catch (error) {
        console.error("Error parsing features:", error);
      }


  }
  logMessages.push(`${data.result.total}\t${data.result.size}\t${data.result.current}\t${data.result.pages}\n`);
}).then((results)=>{
if (logMessages.length > 0) {
  console.log("Log Messages:");
  console.log(logMessages.join("\n"));
} else {
  console.log("No messages logged.");}})
