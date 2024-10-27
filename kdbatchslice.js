//works
const articleNumbers = [
  "3TK305532","8NB901375","3TK305523","3TK305522","8NB901371","3TK305517","8NB901370","3TT914588","6EE111037","8NB901361"
];

async function fetchAndDownloadBatch(articleNumbers) {
const requestBody = {
    "productSource": 1,
    "accountNumber": "JP-kuangxiaojian2024",
    "parentSku": articleNumbers.join(',')
};
  const response = await fetch("http://10.100.1.1/sale-publish-amazon/autoPublish/directPublish", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyOTQ3MTU0N30.4TQtZ-OdhEof3DodP03OrVeSWKId4wr9J_Z7BmnGOlG_hCzMsDroLVMKi1PY5fjhbp06nIKsdRDUkt6IbDDD2A",
    "cache-control": "no-cache",
    "content-type": "application/json; charset=UTF-8",
    "menucode": "8010612",
    "pragma": "no-cache",
    "system-name": "product_web",
    "username": "182717",
    "x-url-path": "/product-web/sinProMan/spu"
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