//try to log as plain text,not work, messy code ()
fetch("http://10.100.1.1/sale-extra/priceCalculator", {
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
  "body": "{\"args\":\"[{\\\"articleNumber\\\":\\\"9SD505790-588\\\",\\\"quantity\\\":\\\"1\\\",\\\"saleChannel\\\":\\\"Amazon\\\",\\\"site\\\":\\\"UK\\\",\\\"saleType\\\":\\\"一口价\\\",\\\"productType\\\":\\\"家居用品\\\",\\\"paymentType\\\":\\\"WORLDFIRST\\\",\\\"countryCode\\\":\\\"GB\\\",\\\"shippingMethod\\\":\\\"SZCNPY_NEW\\\",\\\"salePrice\\\":\\\"4.99\\\"}]\",\"method\":\"batchExportCulate\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
  .then(response => response.blob())
  .then(blob => {
    const reader = new FileReader();
    reader.readAsText(blob);
    reader.onload = () => {
      const text = reader.result;
      console.log(text);
      // Process the text as needed
    };
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });