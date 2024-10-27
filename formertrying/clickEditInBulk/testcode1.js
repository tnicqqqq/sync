//problem1: can only open the first list
document.querySelector('#main_content > div > div > div.ivu-card-body > div.commonTable.ivu-table-wrapper > div > div.ivu-table-body > table > tbody > tr:nth-child(1) > td:nth-child(13) > div > div > button.editButton.ivu-btn.ivu-btn-primary.ivu-btn-small').click();
document.querySelector('#main_content > div > div > div.ivu-card-body > div.commonTable.ivu-table-wrapper > div > div.ivu-table-body > table > tbody > tr:nth-child(2) > td:nth-child(13) > div > div > button.editButton.ivu-btn.ivu-btn-primary.ivu-btn-small').click();

const button = document.querySelector('#main_content > div > div > div.ivu-card-body > div.commonTable.ivu-table-wrapper > div > div.ivu-table-body > table > tbody > tr:nth-child(1) > td:nth-child(13) > div > div > button.editButton.ivu-btn.ivu-btn-primary.ivu-btn-small');
button.click();

// Wait for a few seconds (adjust as needed)
setTimeout(() => {
  // Switch back to the original tab
  window.focus();
}, 3000); // 3000 milliseconds (3 seconds) delay

the console recorder recorded a click, type:click, target:main, selectors: slector #1: tr.ivu-table-row-hover button.editButton > span,selector #2:xpath///*[@id="main_content"]/div/div/div[2]/div[5]/div/div[2]/table/tbody/tr[4]/td[13]/div/div/button[1]/span,selector #3:pierce/tr.ivu-table-row-hover button.editButton > span, offsetX:13.4, offsetY:9.5

const target = document.querySelector('tr.ivu-table-row-hover button.editButton > span'); // Replace with your target element
const clickEvent = new Event('click', {
  bubbles: true,
  cancelable: true,
});
target.dispatchEvent(clickEvent);
