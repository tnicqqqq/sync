funciton(){//exportfiles part starts------------------------------------------------------------------------------


//exportfiles: option1  use categoryIds

//get categoryIds: manual select cates and click query, you'll see it in the  getinfo (if you are visit guanlidanpin)
//get categoryIds: the same and you'll see the list(if you are visit spuguanli)

fetch("http://10.100.1.1/product/singleItem/exportPublishFilesBetterNew", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyMDA1ODYzOH0.eB5jxGJivSYajTkcGQ7Y_v9irfCAiwaUXFEIi3hhHnjDq9zGbL8ivK_Ujfj0gccXI6I4FJk1wS0dgPOFYhtq0Q",
    "content-type": "application/json; charset=UTF-8",
    "menucode": "8010602",
    "system-name": "product_web",
    "username": "182717",
    "x-url-path": "/product-web/sinProMan/sinProManManage"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"ids\":[],\"singleItemSearchVO\":{\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"remarkInfriTime\":[\"\",\"\"],\"enterSingeTime\":[\"\",\"\"],\"publishAndSaleCountVO\":[{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"},{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"}],\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7002],\"createTime\":[\"\",\"\"],\"lastphasechangetime\":[\"\",\"\"],\"salesProhibition\":[],\"isRefreshSale\":0,\"categoryIds\":[16,182],\"tag\":[],\"itemLastStatus\":[],\"exceptSalesProhibition\":[\"Amazon\"],\"noSaleplat\":[\"Amazon\"],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"infringementData\":\"\",\"infringementUser\":[],\"isPrice\":null,\"plugSpecification\":\"无\",\"sequence\":\"DESC\",\"isRefreshTransiting\":0},\"copywritingCondition\":null,\"exportMode\":27}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
//zhubao all cates, 49777, but server-side limited 20000(it's a good way to get sku thought); anyway, use this to get all skus, and split to 20grand skus per


//exportfiles: option2  use ids and sonSku
//ids: hdd columnP
//input spu, query, check main box,
fetch("http://10.100.1.1/product/singleItem/exportPublishFilesBetterNew", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyMDA1ODYzOH0.eB5jxGJivSYajTkcGQ7Y_v9irfCAiwaUXFEIi3hhHnjDq9zGbL8ivK_Ujfj0gccXI6I4FJk1wS0dgPOFYhtq0Q",
    "content-type": "application/json; charset=UTF-8",
    "menucode": "8010602",
    "system-name": "product_web",
    "username": "182717",
    "x-url-path": "/product-web/sinProMan/sinProManManage"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"ids\":[\"2623150\",\"2623218\"],\"singleItemSearchVO\":{\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"remarkInfriTime\":[\"\",\"\"],\"enterSingeTime\":[\"\",\"\"],\"publishAndSaleCountVO\":[{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"},{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"}],\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"sonSku\":\"2SS317373,2SS317139\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7002],\"createTime\":[\"\",\"\"],\"lastphasechangetime\":[\"\",\"\"],\"salesProhibition\":[],\"isRefreshSale\":0,\"categoryIds\":null,\"tag\":[],\"itemLastStatus\":[],\"exceptSalesProhibition\":[\"Amazon\"],\"noSaleplat\":[\"Amazon\"],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"infringementData\":\"\",\"infringementUser\":[],\"isPrice\":null,\"plugSpecification\":\"无\",\"sequence\":\"DESC\",\"isRefreshTransiting\":0},\"copywritingCondition\":null,\"exportMode\":27}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

//exportfiles: option3 use sonSku only
//if use sonsku, first use gaojiquery select big cates|jinshou|chatou and export- to get all sku, then you won't need to filter fetch
fetch("http://10.100.1.1/product/singleItem/exportPublishFilesBetterNew", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyMDA1ODYzOH0.eB5jxGJivSYajTkcGQ7Y_v9irfCAiwaUXFEIi3hhHnjDq9zGbL8ivK_Ujfj0gccXI6I4FJk1wS0dgPOFYhtq0Q",
    "content-type": "application/json; charset=UTF-8",
    "menucode": "8010602",
    "system-name": "product_web",
    "username": "182717",
    "x-url-path": "/product-web/sinProMan/sinProManManage"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"ids\":[],\"singleItemSearchVO\":{\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"remarkInfriTime\":[\"\",\"\"],\"enterSingeTime\":[\"\",\"\"],\"publishAndSaleCountVO\":[{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"},{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"}],\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"sonSku\":\"7HH1000153,7HH1105559\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7002],\"createTime\":[\"\",\"\"],\"lastphasechangetime\":[\"\",\"\"],\"salesProhibition\":[],\"isRefreshSale\":0,\"categoryIds\":null,\"tag\":[],\"itemLastStatus\":[],\"exceptSalesProhibition\":[\"Amazon\"],\"noSaleplat\":[\"Amazon\"],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"infringementData\":\"\",\"infringementUser\":[],\"isPrice\":null,\"plugSpecification\":\"无\",\"sequence\":\"DESC\",\"isRefreshTransiting\":0},\"copywritingCondition\":null,\"exportMode\":27}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

//option 3/1 :test with 2500sku: input to the sku box, query, it says no more than 100, then you just export without check any box it works.(though haven't analyze the fetch)
fetch("http://10.100.1.1/product/singleItem/exportPublishFilesBetterNew", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyMTk1NTY2OX0.GkTpy7OrPnp7akTgLVOrRCXpiLj2Xm0IHD1Bf968Z_aOr_pMDNXMSReZQj1_fDXJ_ju7sMuoxHwgxfkRheqDjA",
    "cache-control": "no-cache",
    "content-type": "application/json; charset=UTF-8",
    "menucode": "8010602",
    "pragma": "no-cache",
    "system-name": "product_web",
    "username": "182717",
    "x-url-path": "/product-web/sinProMan/sinProManManage"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"ids\":[],\"singleItemSearchVO\":{\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"sonSku\":\"10SC400446\\t, 10SC400522\\t, 10SC400691-A\\t, 10SC400691-B\\t, 10SC400691-C\\t,\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7002],\"salesProhibition\":[],\"isRefreshTransiting\":0,\"isRefreshSale\":0,\"sequence\":\"DESC\",\"tag\":[],\"infringementData\":null,\"itemLastStatus\":[],\"exceptSalesProhibition\":[],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"finishInfringement\":\"\",\"infringementUser\":[],\"isPrice\":null,\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"enterSingeTime\":\"\",\"publishAndSaleCountVO\":[]},\"exportMode\":27}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

//exportfiles: option4 use mainSku only, and it calculate the sku quantity (can not exceed 20000)
	//tested 997, it worked,should be no limits; tested 1994spu, works300724, and itself will filter (this time output only 1627spu)
	//use advanced search and input spu(1 is enough) query, do not check box, export,you'll get fetch without ids, modify main spu part;

fetch("http://10.100.1.1/product/singleItem/exportPublishFilesBetterNew", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyMDE3NDEwMn0.zQiBXJKBjC6m7XVpS5X8-lRtgz5Y4BGe9HtDDmwD5MIgcIHVfFOu4MalLkJEtRyln0pE865OJFHYHYLU3IX9OA",
    "content-type": "application/json; charset=UTF-8",
    "menucode": "8010602",
    "system-name": "product_web",
    "username": "182717",
    "x-url-path": "/product-web/sinProMan/sinProManManage"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"ids\":[],\"singleItemSearchVO\":{\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"remarkInfriTime\":[\"\",\"\"],\"enterSingeTime\":[\"\",\"\"],\"publishAndSaleCountVO\":[{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"},{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"}],\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"mainSku\":\"10SN200068,12SZ100072\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7002],\"createTime\":[\"\",\"\"],\"lastphasechangetime\":[\"\",\"\"],\"salesProhibition\":[],\"isRefreshSale\":0,\"tag\":[],\"itemLastStatus\":[],\"exceptSalesProhibition\":[\"Amazon\"],\"noSaleplat\":[\"Amazon\"],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"infringementData\":\"\",\"infringementUser\":[],\"isPrice\":null,\"plugSpecification\":\"无\",\"sequence\":\"DESC\",\"isRefreshTransiting\":0},\"copywritingCondition\":null,\"exportMode\":27}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

//export file part ends-------------------------------------------------------------------------
};



function(){//direct publish part begins -------------------------------------------------------------------------


//option1 kd: modify spu and fetch; get listAccountNumber: check one and click kd button, you'll see this network; seems the only way is to use spu , can't use categoryIds;
//use export file to get sku, then use replace to get spu out of it
//300724 4999 valid, use cpp to split, KJP IS SLOW BUT WORK
/*
     "JP-kuangxiaojian2024",
        "UK-shibin97",
        "DE-shibin97",
        "ES-shibin97",
        "IT-shibin97",
        "FR-shibin97",
        "NL-shibin97",
        "SE-shibin97",
        "PL-shibin97",
        "BE-shibin97",
        "US-shibin97",
        "CA-shibin97",
        "MX-shibin97",
        "JP-shibin97",
        "BR-shibin97",
        "UK-he3jia2jia",
        "DE-he3jia2jia",
        "ES-he3jia2jia",
        "IT-he3jia2jia",
        "FR-he3jia2jia",
        "NL-he3jia2jia",
        "SE-he3jia2jia",
        "PL-he3jia2jia",
        "BE-he3jia2jia",
        "US-he3jia2jia",
        "CA-he3jia2jia",
        "MX-he3jia2jia",
        "JP-he3jia2jia"
		*/


fetch("http://10.100.1.1/sale-publish-amazon/autoPublish/directPublish", {
  "headers": {
    "accept": "application/json, text/plain, */*",
     "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyMDUwODM0NH0.5p2wlpIEzb2N3bWTGU7IavGSVuBE8aiWt8i0i8YTZE0CsJ2VsH-D2QQoeZlJV9Yk-BJnVWxnhnDAduNIq0w9oA",
    "content-type": "application/json; charset=UTF-8",
    "menucode": "8010612",
    "system-name": "product_web",
    "username": "182717",
    "x-url-path": "/product-web/sinProMan/spu"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"productSource\":1,\"accountNumber\":\"JP-shibin97\",\"parentSku\":\"7HH1000153,7HH1105559\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});


//option2 carry: (if you are visit amazonmoban) modify x-url-path , args.id; this way to achieve instantly kd, but suppose it won't use often

fetch("http://10.100.1.1/sale-publish-amazon/amazonTemplate/carry", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyMDE3NDEwMn0.zQiBXJKBjC6m7XVpS5X8-lRtgz5Y4BGe9HtDDmwD5MIgcIHVfFOu4MalLkJEtRyln0pE865OJFHYHYLU3IX9OA",
    "content-type": "application/json; charset=UTF-8",
    "system-name": "publish_web",
    "username": "182717",
    "x-url-path": "/publish-web/amazon/amazonAutoPublish/3TT204725/FR-shibin97/178300012/0"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"args\":\"{\\\"id\\\":178300012,\\\"templatePublishProcess\\\":\\\"template\\\",\\\"needFilter\\\":true}\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

//direct publish part ends -------------------------------------------------------------------------
};

function(){//img download part begins -------------------------------------------------------------------------

//download img, use spu, no limit, modify accountname: go to tupianxiazairizhi , network panel-saleAccount-response includes all your accountname
//4000spu downloade;tried 19000spu:1135starts failed; try halfpart1 sent, wait tomorrwo;split to 5000 comma per fetch, que limited to 5; about 20-35 minutes per
//120724 i think the img is universal, upload us to uk, works. although, us img #n/a is more than jp.

fetch("http://10.100.1.1/sale-publish-amazon/amazon/imageDownload/download", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyMDE3NDEwMn0.zQiBXJKBjC6m7XVpS5X8-lRtgz5Y4BGe9HtDDmwD5MIgcIHVfFOu4MalLkJEtRyln0pE865OJFHYHYLU3IX9OA",
    "content-type": "application/json; charset=UTF-8",
    "system-name": "publish_web",
    "username": "182717",
    "x-url-path": "/publish-web/amazon/imageDownload"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"args\":\"{\\\"productArticleNumbers\\\":\\\"13AC1301968,13AC1900139\\\",\\\"accountNumber\\\":\\\"US-shibin97\\\",\\\"downloadType\\\":\\\"1\\\"}\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

//img download part ends -------------------------------------------------------------------------
};

function(){//pricecalculator publish part begins -------------------------------------------------------------------------

//maneuver shisuanqi...you shouldn't use, because it's not as smart as hdd
//doesn't work, don't know how to trigger the file or what

fetch("http://10.100.1.1/sale-extra/priceCalculator", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyMDE3NDEwMn0.zQiBXJKBjC6m7XVpS5X8-lRtgz5Y4BGe9HtDDmwD5MIgcIHVfFOu4MalLkJEtRyln0pE865OJFHYHYLU3IX9OA",
    "content-type": "application/json; charset=UTF-8",
    "system-name": "sale_web",
    "username": "182717",
    "x-url-path": "/sale-web/trialList"
  },
  "referrer": "http://10.100.1.1/sale-web/trialList",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"args\":\"[{\\\"articleNumber\\\":\\\"9FF600385\\\",\\\"quantity\\\":\\\"1\\\",\\\"saleChannel\\\":\\\"Amazon\\\",\\\"site\\\":\\\"US\\\",\\\"saleType\\\":\\\"一口价\\\",\\\"productType\\\":\\\"家居用品\\\",\\\"paymentType\\\":\\\"WORLDFIRST\\\",\\\"countryCode\\\":\\\"美国\\\",\\\"shippingMethod\\\":\\\"SSBRAM\\\",\\\"grossProfitRate\\\":\\\"0.5\\\"},{\\\"articleNumber\\\":\\\"5AC401786\\\",\\\"quantity\\\":\\\"1\\\",\\\"saleChannel\\\":\\\"Amazon\\\",\\\"site\\\":\\\"US\\\",\\\"saleType\\\":\\\"一口价\\\",\\\"productType\\\":\\\"家居用品\\\",\\\"paymentType\\\":\\\"WORLDFIRST\\\",\\\"countryCode\\\":\\\"美国\\\",\\\"shippingMethod\\\":\\\"SSBRAM\\\",\\\"grossProfitRate\\\":\\\"0.5\\\"}]\",\"method\":\"batchExportCulate\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});




//pricecalculator publish part ends -------------------------------------------------------------------------
};


function(){// erp update inventory part begins-----------------------------------------------------------
//open http://10.100.1.1/publish-web/amazon/newProducts
//you can download all data by export without checkbox
//operate one to get token,
//there's delay in this erp, too serious to use this method. so , better manual update.
/*
			"BE-he3jia2jia",
            "BE-shibin97",
            "BR-shibin97",
            "CA-he3jia2jia",
            "CA-shibin97",
            "DE-he3jia2jia",
            "DE-shibin97",
            "ES-he3jia2jia",
            "ES-shibin97",
            "FR-he3jia2jia",
            "FR-shibin97",
            "IT-he3jia2jia",
            "IT-shibin97",
            "JP-he3jia2jia",
            "JP-kuangxiaojian2024",
            "JP-shibin97",
            "MX-he3jia2jia",
            "MX-shibin97",
            "NL-he3jia2jia",
            "NL-shibin97",
            "PL-he3jia2jia",
            "PL-shibin97",
            "SE-he3jia2jia",
            "SE-shibin97",
            "UK-he3jia2jia",
            "UK-shibin97",
            "US-he3jia2jia",
            "US-shibin97"
*/
//one country

fetch("http://10.100.1.1/sale-publish-amazon/amazonProductListing/publishProductListinPartialUpdate", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyMDUwODM0NH0.5p2wlpIEzb2N3bWTGU7IavGSVuBE8aiWt8i0i8YTZE0CsJ2VsH-D2QQoeZlJV9Yk-BJnVWxnhnDAduNIq0w9oA",
    "content-type": "application/json; charset=UTF-8",
    "system-name": "publish_web",
    "username": "182717",
    "x-url-path": "/publish-web/amazon/newAmazonChangePriceNum"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"args\":\"{\\\"feedTypeList\\\":[\\\"POST_INVENTORY_AVAILABILITY_DATA\\\"],\\\"amazonProductListingList\\\":[{\\\"accountNumber\\\":\\\"FR-shibin97\\\",\\\"sellerSku\\\":\\\"10SC500481-BK-L_LFS\\\",\\\"articleNumber\\\":\\\"10SC500481-BK-L\\\",\\\"price\\\":27.42,\\\"salePrice\\\":null,\\\"saleStartDate\\\":\\\"\\\",\\\"saleEndDate\\\":\\\"\\\",\\\"quantity\\\":500}]}\",\"method\":\"batchProductListingPriceInventory\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

// different account
fetch("http://10.100.1.1/sale-publish-amazon/amazonProductListing/publishProductListinPartialUpdate", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyMDUwODM0NH0.5p2wlpIEzb2N3bWTGU7IavGSVuBE8aiWt8i0i8YTZE0CsJ2VsH-D2QQoeZlJV9Yk-BJnVWxnhnDAduNIq0w9oA",
    "content-type": "application/json; charset=UTF-8",
    "system-name": "publish_web",
    "username": "182717",
    "x-url-path": "/publish-web/amazon/newAmazonChangePriceNum"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"args\":\"{\\\"feedTypeList\\\":[\\\"POST_INVENTORY_AVAILABILITY_DATA\\\"],\\\"amazonProductListingList\\\":[{\\\"accountNumber\\\":\\\"FR-shibin97\\\",\\\"sellerSku\\\":\\\"10SC500481-BK-L_LFS\\\",\\\"articleNumber\\\":\\\"10SC500481-BK-L\\\",\\\"price\\\":27.42,\\\"salePrice\\\":null,\\\"saleStartDate\\\":\\\"\\\",\\\"saleEndDate\\\":\\\"\\\",\\\"quantity\\\":500},{\\\"accountNumber\\\":\\\"JP-shibin97\\\",\\\"sellerSku\\\":\\\"1AG204342-S_ALF\\\",\\\"articleNumber\\\":\\\"1AG204342-S\\\",\\\"price\\\":0,\\\"salePrice\\\":null,\\\"saleStartDate\\\":\\\"\\\",\\\"saleEndDate\\\":\\\"\\\",\\\"quantity\\\":500}]}\",\"method\":\"batchProductListingPriceInventory\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

//test, try omitting price\\\
// results: no respond

fetch("http://10.100.1.1/sale-publish-amazon/amazonProductListing/publishProductListinPartialUpdate", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyMDUwODM0NH0.5p2wlpIEzb2N3bWTGU7IavGSVuBE8aiWt8i0i8YTZE0CsJ2VsH-D2QQoeZlJV9Yk-BJnVWxnhnDAduNIq0w9oA",
    "content-type": "application/json; charset=UTF-8",
    "system-name": "publish_web",
    "username": "182717",
    "x-url-path": "/publish-web/amazon/newAmazonChangePriceNum"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"args\":\"{\\\"feedTypeList\\\":[\\\"POST_INVENTORY_AVAILABILITY_DATA\\\"],\\\"amazonProductListingList\\\":[{\\\"accountNumber\\\":\\\"FR-shibin97\\\",\\\"sellerSku\\\":\\\"10SC500481-BK-L_LFS\\\",\\\"articleNumber\\\":\\\"10SC500481-BK-L\\\",\\\"price\\\":,\\\"salePrice\\\":null,\\\"saleStartDate\\\":\\\"\\\",\\\"saleEndDate\\\":\\\"\\\",\\\"quantity\\\":500}]}\",\"method\":\"batchProductListingPriceInventory\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});



// erp update inventory part ends*********************************************-------------------------------------------------------------------------

};
























function(){//try and history


/************************************************
***************************************************
history*****************/
//女装类目 fetch 090724
//file://D:\fetchfiles\女装sku090724.txt
fetch("http://10.100.1.1/product/singleItem/exportPublishFilesBetterNew", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyMDUwODM0NH0.5p2wlpIEzb2N3bWTGU7IavGSVuBE8aiWt8i0i8YTZE0CsJ2VsH-D2QQoeZlJV9Yk-BJnVWxnhnDAduNIq0w9oA",
    "content-type": "application/json; charset=UTF-8",
    "menucode": "8010602",
    "system-name": "product_web",
    "username": "182717",
    "x-url-path": "/product-web/sinProMan/sinProManManage"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"ids\":[],\"singleItemSearchVO\":{\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7002],\"salesProhibition\":[],\"isRefreshTransiting\":0,\"isRefreshSale\":0,\"categoryIds\":[5,66,464,465,466,467,468,67,68,469,470,471,472,473,474,475,476,477,478,479,9601,69,70,72,73,74,75,76,77,79,80,500,501,502,9594,81,9602,9603,9604,9605,9606,9607,9608,9609,9610,9611,9612,9613,9614,9615,9616,9617,9618,9619,9620,9621,9622],\"sequence\":\"DESC\",\"tag\":[],\"infringementData\":null,\"itemLastStatus\":[],\"exceptSalesProhibition\":[\"Amazon\"],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"finishInfringement\":\"\",\"infringementUser\":[],\"isPrice\":null,\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"enterSingeTime\":\"\",\"publishAndSaleCountVO\":[]},\"copywritingCondition\":null,\"exportMode\":6}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});




}
