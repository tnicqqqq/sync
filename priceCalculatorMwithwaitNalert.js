//works, with alert
const articleNumbers = [
  "9SD505790-588","9SD514559-A","4NB108673-PK","4NB108673-RG","4NB108673-GD","5AC616380-A","2SS323377-S","2SS323377-L","4NB802858-BL","4NB802858-W","4NB802858-R","7HH404572","9EE700242-OR","9EE700242-BN","9EE700242-R","9EE700242-DR","9EE700242-RB","9EE700242-NB","9EE700242-KH","9EE700242-GY","9EE700242-SP"
  // ... more article numbers
];

async function fetchAndDownload(articleNumber) {
	  const requestBody = {
    // ... construct request body
	    args: JSON.stringify([{
        articleNumber: articleNumber,
		quantity:1,
		saleChannel:"Amazon",
		site:"UK",
		saleType:"一口价",
		productType:"家居用品",
		paymentType:"WORLDFIRST",
		countryCode:"GB",
		shippingMethod:"SZCNPY_NEW",
		salePrice:4.99
      }]),
      method: "batchExportCulate"
  };
  // ... construct request body
  const response = await fetch("http://10.100.1.1/sale-extra/priceCalculator", {
    // ... request options
		"headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyOTQ3MTU0N30.4TQtZ-OdhEof3DodP03OrVeSWKId4wr9J_Z7BmnGOlG_hCzMsDroLVMKi1PY5fjhbp06nIKsdRDUkt6IbDDD2A",
    "cache-control": "no-cache",
    "content-type": "application/json; charset=UTF-8",
    "pragma": "no-cache",
    "system-name": "sale_web",
    "username": "182717",
    "x-url-path": "/sale-web/trialList"
  },
  "referrer": "http://10.100.1.1/sale-web/trialList",
  "referrerPolicy": "strict-origin-when-cross-origin",
  body: JSON.stringify(requestBody),
  // why need stringify twice?
  "method": "POST",
  "mode": "cors",
  "credentials": "include",
  responseType: "blob"
    // ... request options
  });
  const blob = await response.blob();
	const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'downloaded_file.xlsx';   
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    // Handle the binary blob
    // ...
  // ... process the blob and download the file
}

async function main() {
  for (const articleNumber of articleNumbers) {
    await fetchAndDownload(articleNumber);
  }
  alert("All downloads have finished!");
}

main();
