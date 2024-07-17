
/*
document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap.ivu-modal-hidden > div > div > div.ivu-modal-footer > div > button')
//this is the initial button selector when you first open this page.
document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button')
//while you click once, after success, it'll show as above; dont' bother, just use this
document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').classList.contains('ivu-btn-loading')
//btn-success contains 'ivu-btn-loading'

const libtn=document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button');
const licbox=document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div.tableCss.vxe-table.vxe-table--render-default.tid_1.size--small.border--full.show--head.fixed--right.t--animat.scroll--y.virtual--y > div.vxe-table--main-wrapper > div.vxe-table--header-wrapper.body--wrapper > table > thead > tr > th.vxe-header--column.col_2.col--center.col--checkbox > div > span > span');
const likdbtn=document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div:nth-child(3) > div.searchRow.ivu-col.ivu-col-span-22 > button');
const lidkdbtn=document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(2) > div > div > label.ivu-radio-wrapper.ivu-radio-group-item.ivu-radio-wrapper-checked.ivu-radio-default');
const litkdbtn=document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(2) > div > div > label:nth-child(3)');
//const liaccount=document.querySelector('body > div.ivu-select-dropdown.ivu-select-dropdown-transfer > ul.ivu-select-dropdown-list > li:nth-child(1)');
//jpk1,uk2,de3,es4,it5,fr6,nl7,us11,ca12,mx13,jp14
//why does this can't be const.click(); need use document.click
  const liamountup=document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(3) > div:nth-child(1) > div > div > div.ivu-input-number-handler-wrap > a.ivu-input-number-handler.ivu-input-number-handler-up');
  const litimerup=document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(3) > div:nth-child(3) > div > div > div.ivu-input-number-handler-wrap > a.ivu-input-number-handler.ivu-input-number-handler-up');
const liokbtn=document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button');
const linextbtn=document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div.vxe-pager.size--mini.align--left > div > span.vxe-pager--next-btn > i');
*/
/*
while(!libtn.classList.contains('ivu-btn-loading')){
  await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Proceeding...");

};console.log("Loading");
//above logic works, below add for loop

for (let i=1;i<5;i++){
  while(!libtn.classList.contains('ivu-btn-loading')){
    await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Proceeding...");

  };console.log("Loading");
}
//same problems here: run nearly in miliseconds.
//below add waiting for loading-state

for (let i=1;i<5;i++){
  while(!libtn.classList.contains('ivu-btn-loading')){
    await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Proceeding...");

  };
  console.log("Loading");
  await new Promise((resolve) => setTimeout(resolve, 2000));
}
//too short add more
for (let i=1;i<5;i++){
  while(!libtn.classList.contains('ivu-btn-loading')){
      console.log("Proceeding...");
      await new Promise((resolve) => setTimeout(resolve, 5000));

  };
  console.log("Loading");
  await new Promise((resolve) => setTimeout(resolve, 5000));
}
//run four times of log('loding')
*/
//ok, it's ok, let's test real
/*
for (let i=1;i<5;i++){
  while(!libtn.classList.contains('ivu-btn-loading')){
    //after const, run below to test if the const is valid.
      await new Promise((resolve) => setTimeout(resolve, 500));
      licbox.click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      likdbtn.click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      lidkdbtn.click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      //liaccount.click();
      document.querySelector('body > div.ivu-select-dropdown.ivu-select-dropdown-transfer > ul.ivu-select-dropdown-list > li:nth-child(1)').click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      liokbtn.click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      linextbtn.click();
      await new Promise((resolve) => setTimeout(resolve, 2000));

  };
  console.log("Loading");
  await new Promise((resolve) => setTimeout(resolve, 3000));
}
//works, but i=4 is too short still.modify as below, should proced 3pages:
*/


const libtn=document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button');
const licbox=document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div.tableCss.vxe-table.vxe-table--render-default.tid_6.size--small.border--full.show--head.fixed--right.t--animat.scroll--y.virtual--y > div.vxe-table--main-wrapper > div.vxe-table--header-wrapper.body--wrapper > table > thead > tr > th.vxe-header--column.col_7.col--center.col--checkbox > div > span > span');
const likdbtn=document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div:nth-child(4) > div.searchRow.ivu-col.ivu-col-span-22 > button');
const lidkdbtn=document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(2) > div > div > label:nth-child(1)');
const litkdbtn=document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(2) > div > div > label:nth-child(3)');

/*about the kd btn:
body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(2) > div > div > label:nth-child(1)
body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(2) > div > div > label.ivu-radio-wrapper.ivu-radio-group-item.ivu-radio-wrapper-checked.ivu-radio-default
body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(2) > div > div > label:nth-child(3)
//above before check; below is checked on; solution, use above
body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(2) > div > div > label.ivu-radio-wrapper.ivu-radio-group-item.ivu-radio-wrapper-checked.ivu-radio-default
body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(2) > div > div > label.ivu-radio-wrapper.ivu-radio-group-item.ivu-radio-wrapper-checked.ivu-radio-default
body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(2) > div > div > label.ivu-radio-wrapper.ivu-radio-group-item.ivu-radio-wrapper-checked.ivu-radio-default

*/
//const liaccount=document.querySelector('body > div.ivu-select-dropdown.ivu-select-dropdown-transfer > ul.ivu-select-dropdown-list > li:nth-child(1)');
//jpk1,uk2,de3,es4,it5,fr6,nl7,us11,ca12,mx13,jp14
//why does this can't be const.click(); need use document.click; below two are same reason
  //const liamountup=document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(3) > div:nth-child(1) > div > div > div.ivu-input-number-handler-wrap > a.ivu-input-number-handler.ivu-input-number-handler-up');
  //const litimerup=document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-body > div > form > div:nth-child(3) > div:nth-child(3) > div > div > div.ivu-input-number-handler-wrap > a.ivu-input-number-handler.ivu-input-number-handler-up');
const liokbtn=document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button');
const linextbtn=document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div.vxe-pager.size--mini.align--left > div > span.vxe-pager--next-btn > i');

for (let i=1;i<80;i++){
  while(!libtn.classList.contains('ivu-btn-loading')){
    //!!read this!!!!const first, also check libtn
    //then run below to test if the const is valid.--------
      await new Promise((resolve) => setTimeout(resolve, 500));
      licbox.click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      likdbtn.click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      lidkdbtn.click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      //liaccount.click();
      //jpk1,uk2,de3,es4,it5,fr6,nl7,us11,ca12,mx13,jp14
      document.querySelector('body > div.ivu-select-dropdown.ivu-select-dropdown-transfer > ul.ivu-select-dropdown-list > li:nth-child(13)').click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      liokbtn.click();
      await new Promise((resolve) => setTimeout(resolve, 500));
      linextbtn.click();
      await new Promise((resolve) => setTimeout(resolve, 2000));

  };
  console.log("Loading");
  await new Promise((resolve) => setTimeout(resolve, 3000));
}
//yes, 3 pages, cost 19 loding
//done holly
