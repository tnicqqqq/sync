function waitme() {

  if(document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').classList.contains('ivu-btn-loading')){
    setTimeout(waitme, 100);
  } else {
	document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div.tableCss.vxe-table.vxe-table--render-default.tid_6.size--small.border--full.show--head.fixed--right.t--animat.scroll--y.virtual--y > div.vxe-table--main-wrapper > div.vxe-table--header-wrapper.body--wrapper > table > thead > tr > th.vxe-header--column.col_7.col--center.col--checkbox > div > span > span').click();
  }
}
waitme();

--------------
below is gonna work, combine them tomorrow
--------------------------
for (let i = 1; i < 4; i++) {document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div.tableCss.vxe-table.vxe-table--render-default.tid_6.size--small.border--full.show--head.fixed--right.t--animat.scroll--y.virtual--y > div.vxe-table--main-wrapper > div.vxe-table--header-wrapper.body--wrapper > table > thead > tr > th.vxe-header--column.col_7.col--center.col--checkbox > div > span > span').click();await new Promise(r => setTimeout(r, 1000))
}
-----------------------------------------
function waitme() {
//console.log(document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').classList)
//above to see the classList
  if(document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').classList.contains('ivu-btn-loading')){
    setTimeout(waitme, 100);
  } else {
		document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div.tableCss.vxe-table.vxe-table--render-default.tid_1.size--small.border--full.show--head.fixed--right.t--animat.scroll--y.virtual--y > div.vxe-table--main-wrapper > div.vxe-table--header-wrapper.body--wrapper > table > thead > tr > th.vxe-header--column.col_2.col--center.col--checkbox > div > span > span').click();await new Promise(r => setTimeout(r, 500));document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div:nth-child(3) > div.searchRow.ivu-col.ivu-col-span-22 > button').click();await new Promise(r => setTimeout(r, 500));document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(2) > div > div > label:nth-child(1)').click();await new Promise(r => setTimeout(r, 500));document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(1) > div > div > div > div > div > input').click();await new Promise(r => setTimeout(r, 500));document.querySelector('body > div.ivu-select-dropdown.ivu-select-dropdown-transfer > ul.ivu-select-dropdown-list > li:nth-child(1)').click();await new Promise(r => setTimeout(r, 500));document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').click();await new Promise(r => setTimeout(r, 500));document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div.vxe-pager.size--mini.align--left > div > span.vxe-pager--next-btn > i').click();
  }
}
waitme();