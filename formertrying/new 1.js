//------------can deleted????-----------



// Assuming you have a button with the specified selector
const button = document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button');
let isToggled = false;

function waitForButtonClickable() {
  // Check if any of the classes indicate the button is ready
  const expectedClass = 'ready-for-click'; // Replace with the actual class name
  const hasExpectedClass = button.classList.contains(expectedClass);

  if (!hasExpectedClass) {
    // Button is not ready; continue checking
    setTimeout(waitForButtonClickable, 100);
  } else {
    // Button is clickable again; perform the next action
    button.click();
  }
}

// Start checking
waitForButtonClickable();

------------------------
const button = document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button');
function waitForFuck() {
  
  const expectedClass = 'ivu-btn ivu-btn-success'; // Replace with the actual class name
  const hasExpectedClass = document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').classList.contains(expectedClass);

  if (!hasExpectedClass) {
    // Button is not ready; continue checking
    setTimeout(waitForFuck, 100);
  } else {
    // Button is clickable again; perform the next action
    document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').click();
  }
}
waitForFuck();



if(document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').classList.contains('ivu-btn-loading')){alert("don't fuck")}else{alert("fuck me now")}

if(document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').classList.contains('ivu-btn-loading')){}