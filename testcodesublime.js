for (let i=1; i<5;i++){
  if(document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').classList.contains('ivu-btn-loading')){
  	console.log('waiting')
  }else{
  	console.log('proceed')
  }
}


  //////////试一下下面这个，下一页之后时间加长；因为主要问题是当不存在list的时候let太快了
  for (let i = 1; i < 3; i++) {
(async function dome(){

if(document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').classList.contains('ivu-btn-loading')){
	setTimeout(dome, 1000);}//looks like this determine something
  else{//here's your intention
	  await new Promise(r => setTimeout(r, 500));
	  document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div.tableCss.vxe-table.vxe-table--render-default.tid_1.size--small.border--full.show--head.fixed--right.t--animat.scroll--y > div.vxe-table--main-wrapper > div.vxe-table--header-wrapper.body--wrapper > table > thead > tr > th.vxe-header--column.col_2.col--center.col--checkbox > div > span > span').click();//check box
	  await new Promise(r => setTimeout(r, 500));
	  document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div:nth-child(4) > div.searchRow.ivu-col.ivu-col-span-22 > button').click();//kandeng button;
	  await new Promise(r => setTimeout(r, 500));
	  document.querySelector('body > div.ivu-select-dropdown.ivu-select-dropdown-transfer > ul.ivu-select-dropdown-list > li:nth-child(1)').click();//jpk1,uk2,de3,es4,it5,fr6,nl7,us11,ca12,mx13,jp14
	  await new Promise(r => setTimeout(r, 500));
	  document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(2) > div > div > label:nth-child(1)').click();//direct
	  await new Promise(r => setTimeout(r, 500));
      document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').click();//confirm
	  await new Promise(r => setTimeout(r, 500));
	  document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div.vxe-pager.size--mini.align--left > div > span.vxe-pager--next-btn > i').click();//next page
	  await new Promise(r => setTimeout(r, 5000));
	  
  }
  
  
})();


}//3pages if run correctly