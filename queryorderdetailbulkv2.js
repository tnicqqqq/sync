//output in one
const usernames = ["182717","182753"]; // Replace with your actual usernames
const logMessages = []; // Store all messages here

async function fetchWithDelay(username) {
  // ... (same as before)
  const headers = {
    // ... existing headers
	   "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyOTQ3MTU0N30.4TQtZ-OdhEof3DodP03OrVeSWKId4wr9J_Z7BmnGOlG_hCzMsDroLVMKi1PY5fjhbp06nIKsdRDUkt6IbDDD2A",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    "pragma": "no-cache",
    "system-name": "bi_web",
    "username": username,
    // ...
  };
  await new Promise(resolve => setTimeout(resolve, 3000)); // 3-second delay

  const data = await fetch("http://10.100.1.1/bis/adsOrderDetailAmazonController/queryOrderDetail", {
    // ... existing fetch options (including headers, body, etc.)
	"headers": headers,
    // ... existing fetch options
    "referrer": "http://10.100.1.1/bi-web/orderSys/amazon/saleList",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"dateType\":\"shipmentDate\",\"beginDate\":\"2024-10-01\",\"endDate\":\"2024-10-24\",\"pageIndex\":1,\"pageSize\":50,\"spu\":\"\",\"sku\":\"\",\"categoryPathCode\":\"\",\"accountNumber\":[],\"accountSite\":[\"UK\",\"GB\"],\"salesmanNo\":[],\"salesTeamLeaderNo\":[],\"salesSupervisorNo\":[],\"minQuantity\":\"\",\"maxQuantity\":\"\",\"minTotalPrice\":\"\",\"maxTotalPrice\":\"\",\"minRefundAmount\":\"\",\"maxRefundAmount\":\"\",\"orderType\":\"\",\"minVat\":\"\",\"maxVat\":\"\",\"orderBy\":\"sum_quantity\",\"sequence\":\"DESC\",\"amazonDetailDimensions\":\"SKU\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
    // ...
  })
  .then(response => response.json())
  .catch(error => {
    console.error("Error fetching data:", error);
    return null;
  });

  if (data) {

  const records = data.result.result;
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
      const recordsspu = record.spu;
      const recordsku = record.article_number;
      const recordcates = record.category_path;
      const recordacc = record.account_number;
      const recordsqty = record.sum_quantity;
      const recordpiless = record.profit_margin_refunds_less;

    // ... (existing code to process data and log messages)
    logMessages.push(`${recordsspu} ${recordsku} ${recordcates} ${recordacc} ${recordsqty} ${recordpiless}`);
  };logMessages.push(`${data.result.total},${data.result.totalPages},${data.result.result.length},`);
}
}

async function main() {
  for (const username of usernames) {
    await fetchWithDelay(username);
  }

  // Output all messages at the end
  if (logMessages.length > 0) {
    console.log("Log Messages:");
    console.log(logMessages.join("\t"));
  } else {
    console.log("No messages logged.");
  }
}

main();
