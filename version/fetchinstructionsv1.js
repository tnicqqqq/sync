//exportfiles part starts------------------------------------------------------------------------------


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
  "body": "{\"ids\":[],\"singleItemSearchVO\":{\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"remarkInfriTime\":[\"\",\"\"],\"enterSingeTime\":[\"\",\"\"],\"publishAndSaleCountVO\":[{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"},{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"}],\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7002],\"createTime\":[\"\",\"\"],\"lastphasechangetime\":[\"\",\"\"],\"salesProhibition\":[],\"isRefreshSale\":0,\"categoryIds\":[16,182],\"tag\":[],\"itemLastStatus\":[],\"exceptSalesProhibition\":[\"Amazon\"],\"noSaleplat\":[\"Amazon\"],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"infringementData\":\"\",\"infringementUser\":[],\"isPrice\":null,\"plugSpecification\":\"无\",\"sequence\":\"DESC\",\"isRefreshTransiting\":0},\"copywritingCondition\":null,\"exportMode\":6}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
//zhubao all cates, 49777, but server-side limited 20000(it's a good way to get sku thought); anyway, use this to get all skus, and split to 20grand skus per


//exportfiles: option2  use ids and sonSku
//ids: hdd columnP
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
  "body": "{\"ids\":[\"2623150\",\"2623218\"],\"singleItemSearchVO\":{\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"remarkInfriTime\":[\"\",\"\"],\"enterSingeTime\":[\"\",\"\"],\"publishAndSaleCountVO\":[{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"},{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"}],\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"sonSku\":\"2SS317373,2SS317139\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7002],\"createTime\":[\"\",\"\"],\"lastphasechangetime\":[\"\",\"\"],\"salesProhibition\":[],\"isRefreshSale\":0,\"categoryIds\":null,\"tag\":[],\"itemLastStatus\":[],\"exceptSalesProhibition\":[\"Amazon\"],\"noSaleplat\":[\"Amazon\"],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"infringementData\":\"\",\"infringementUser\":[],\"isPrice\":null,\"plugSpecification\":\"无\",\"sequence\":\"DESC\",\"isRefreshTransiting\":0},\"copywritingCondition\":null,\"exportMode\":6}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

//exportfiles: option3 use sonSku only
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
  "body": "{\"ids\":[],\"singleItemSearchVO\":{\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"remarkInfriTime\":[\"\",\"\"],\"enterSingeTime\":[\"\",\"\"],\"publishAndSaleCountVO\":[{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"},{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"}],\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"sonSku\":\"7HH1000153,7HH1105559\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7002],\"createTime\":[\"\",\"\"],\"lastphasechangetime\":[\"\",\"\"],\"salesProhibition\":[],\"isRefreshSale\":0,\"categoryIds\":null,\"tag\":[],\"itemLastStatus\":[],\"exceptSalesProhibition\":[\"Amazon\"],\"noSaleplat\":[\"Amazon\"],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"infringementData\":\"\",\"infringementUser\":[],\"isPrice\":null,\"plugSpecification\":\"无\",\"sequence\":\"DESC\",\"isRefreshTransiting\":0},\"copywritingCondition\":null,\"exportMode\":6}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});


//exportfiles: option4 use mainSku only

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
  "body": "{\"ids\":[],\"singleItemSearchVO\":{\"isBrandNew\":\"\",\"rateCountBegin\":\"\",\"rateCountEnd\":\"\",\"newState\":\"\",\"remarkInfriTime\":[\"\",\"\"],\"enterSingeTime\":[\"\",\"\"],\"publishAndSaleCountVO\":[{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"},{\"countBegin\":\"\",\"countEnd\":\"\",\"publishOrSale\":\"\"}],\"taskType\":\"\",\"existQcPic\":\"\",\"isDrainageSku\":\"\",\"isHighCustomerPrice\":\"\",\"optimizationType\":[],\"type\":\"\",\"mainSku\":\"10SN200068,12SZ100072\",\"devEmpId\":[],\"saleEmpId\":[],\"translateEmpName\":[],\"psEmpId\":[],\"assistant\":[],\"itemStatus\":[7002],\"createTime\":[\"\",\"\"],\"lastphasechangetime\":[\"\",\"\"],\"salesProhibition\":[],\"isRefreshSale\":0,\"tag\":[],\"itemLastStatus\":[],\"exceptSalesProhibition\":[\"Amazon\"],\"noSaleplat\":[\"Amazon\"],\"isInfringement\":\"\",\"qualificationName\":[],\"isSeason\":[],\"isSeasonArr\":[],\"infringementData\":\"\",\"infringementUser\":[],\"isPrice\":null,\"plugSpecification\":\"无\",\"sequence\":\"DESC\",\"isRefreshTransiting\":0},\"copywritingCondition\":null,\"exportMode\":6}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

//export file part ends -------------------------------------------------------------------------

//direct publish part begins -------------------------------------------------------------------------


//kd: modify spu and fetch; get listAccountNumber: check one and click kd, you'll see; seems the only way is to use spu , can't use categoryIds;


fetch("http://10.100.1.1/sale-publish-amazon/autoPublish/directPublish", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "erp-usermgt-n-token:eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODI3MTciLCJzdWIiOiIxODI3MTciLCJpc3MiOiJaU1RELU5FVyIsImlhdCI6MTcyMDA1ODYzOH0.eB5jxGJivSYajTkcGQ7Y_v9irfCAiwaUXFEIi3hhHnjDq9zGbL8ivK_Ujfj0gccXI6I4FJk1wS0dgPOFYhtq0Q",
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

//direct publish part ends -------------------------------------------------------------------------


//img download part begins -------------------------------------------------------------------------

//download img, use spu, no limit, modify country; accountname: go to tupianxiazairizhi , network panel-saleAccount-response includes all your accountname

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
