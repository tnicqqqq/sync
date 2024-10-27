//this is different to batchcalcuprice,
//well, useless, because line up limited to five
const articleNumbers = [
  "3TK305532","8NB901375","3TK305523","3TK305522","8NB901371","3TK305517","8NB901370","3TT914588","6EE111037","8NB901361"
];

async function fetchAndDownloadBatch(articleNumbers) {
  const requestBody = {
	   "args": `{"productArticleNumbers":"${articleNumbers.join(',')}", "accountNumber":"UK-shibin97", "downloadType":"1"}`
  };
  const response = await fetch("http://10.100.1.1/sale-publish-amazon/amazon/imageDownload/download", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyOTQ3MTU0N30.4TQtZ-OdhEof3DodP03OrVeSWKId4wr9J_Z7BmnGOlG_hCzMsDroLVMKi1PY5fjhbp06nIKsdRDUkt6IbDDD2A",
    "cache-control": "no-cache",
    "content-type": "application/json; charset=UTF-8",
    "pragma": "no-cache",
    "system-name": "publish_web",
    "username": "182717",
    "x-url-path": "/publish-web/amazon/imageDownload"
  },
  "referrerPolicy": "no-referrer",
	  body: JSON.stringify(requestBody),
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
  });

}
const batchSize = 2; // Adjust the batch size as needed
const batches = [];
for (let i = 0; i < articleNumbers.length; i += batchSize) {
  batches.push(articleNumbers.slice(i, i + batchSize));
}
for (const batch of batches) {
  await fetchAndDownloadBatch(batch);
}