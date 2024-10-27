//all outputs in one log
const logMessages = [];

async function scheduleFetch(spuValue) {
  const fetchUrl = "http://10.100.1.1/sale-publish-amazon/amazonTemplate/productBasisInfo";
  const fetchOptions = {
    headers: {
      accept: "application/json, text/plain, */*",
      ["accept-language"]: "zh-CN,zh;q=0.9",
      authorization: "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyOTQ3MTU0N30.4TQtZ-OdhEof3DodP03OrVeSWKId4wr9J_Z7BmnGOlG_hCzMsDroLVMKi1PY5fjhbp06nIKsdRDUkt6IbDDD2A",
      ["cache-control"]: "no-cache",
      ["content-type"]: "application/json; charset=UTF-8",
      pragma: "no-cache",
      ["system-name"]: "publish_web",
      username: "182717",
      ["x-url-path"]: "/publish-web/amazon/amazonAutoPublish/2SS320150/US-shibin97/-1/0"
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      spu: spuValue,
      site: "US",
      skuDataSource: 1,
      accountNumber: "US-shibin97"
    }),
    method: "POST",
    mode: "cors",
    credentials: "include"
  };

  try {
    const response = await fetch(fetchUrl, fetchOptions);
    const data = await response.json();

    const records = data.result;
    const record = records;
    const recordsspu = record.spu;
    const recordscid = record.platformCategoryId;
    const recordspt = record.platformProductType;

    logMessages.push(`${recordsspu} ${recordscid} ${recordspt}`);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const spuValues = ["2SS320150", "5AC607476"];

// Use Promise.all to wait for all fetch requests to complete
Promise.all(spuValues.map(spuValue => scheduleFetch(spuValue)))
  .then(() => {
    if (logMessages.length > 0) {
      console.log("Log Messages:");
      console.log(logMessages.join("\t"));
    } else {
      console.log("No messages logged.");
    }
  })
  .catch(error => {
    console.error("Error in fetch requests:", error);
  });