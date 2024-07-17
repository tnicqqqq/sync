const libtn=document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button');
const licbox=document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div.tableCss.vxe-table.vxe-table--render-default.tid_1.size--small.border--full.show--head.fixed--right.t--animat.scroll--y.virtual--y > div.vxe-table--main-wrapper > div.vxe-table--header-wrapper.body--wrapper > table > thead > tr > th.vxe-header--column.col_2.col--center.col--checkbox > div > span > span');
const likdbtn=document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div:nth-child(3) > div.searchRow.ivu-col.ivu-col-span-22 > button');
const lidkdbtn=document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(2) > div > div > label.ivu-radio-wrapper.ivu-radio-group-item.ivu-radio-wrapper-checked.ivu-radio-default');
const litkdbtn=document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(2) > div > div > label:nth-child(3)');
//const liaccount=document.querySelector('body > div.ivu-select-dropdown.ivu-select-dropdown-transfer > ul.ivu-select-dropdown-list > li:nth-child(1)');
//jpk1,uk2,de3,es4,it5,fr6,nl7,us11,ca12,mx13,jp14
//why does this can't be const.click(); need use document.click; below two are same reason
  //const liamountup=document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(3) > div:nth-child(1) > div > div > div.ivu-input-number-handler-wrap > a.ivu-input-number-handler.ivu-input-number-handler-up');
  //const litimerup=document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(3) > div:nth-child(3) > div > div > div.ivu-input-number-handler-wrap > a.ivu-input-number-handler.ivu-input-number-handler-up');
const liokbtn=document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button');
const linextbtn=document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div.vxe-pager.size--mini.align--left > div > span.vxe-pager--next-btn > i');

for (let i=1;i<50;i++){
  while(!libtn.classList.contains('ivu-btn-loading')){
    //!!read this!!!!const first, also check libtn
    //then run below to test if the const is valid.--------
      await new Promise((resolve) => setTimeout(resolve, 500));
      licbox.click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      likdbtn.click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      litkdbtn.click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      //liaccount.click();
      document.querySelector('body > div.ivu-select-dropdown.ivu-select-dropdown-transfer > ul.ivu-select-dropdown-list > li:nth-child(14)').click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(3) > div:nth-child(1) > div > div > div.ivu-input-number-handler-wrap > a.ivu-input-number-handler.ivu-input-number-handler-up').click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(3) > div:nth-child(3) > div > div > div.ivu-input-number-handler-wrap > a.ivu-input-number-handler.ivu-input-number-handler-up').click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      liokbtn.click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      linextbtn.click();
      await new Promise((resolve) => setTimeout(resolve, 2000));

  };
  console.log("Loading");
  await new Promise((resolve) => setTimeout(resolve, 3000));
}
//done
//next: go for bulkkd
