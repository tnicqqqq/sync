for (let i = 1; i < 3; i++) {
(async function dome(){

if(document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').classList.contains('ivu-btn-loading')){
	console.log('i')}//looks like this determine something
  else{console.log("proceed") }
  
  
})();


}//i=2

//*******version.2******
for (let i = 1; i < 3; i++) {
(async function dome(){

if(!document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').classList.contains('ivu-btn-loading')){
	setTimeout(dome, 1000);
	console.log("proceed");}//looks like this determine something
  else{//here's your intention
	 
	  console.log('i')
  }
  
  
})();


}//3pages if run correctly

//************version.3****原因是 settimeout(dome,)
function dome(){

if(!document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').classList.contains('ivu-btn-loading')){
	setTimeout(dome, 1000);
	console.log("proceed");}//looks like this determine something
  else{//here's your intention
	 
	  console.log('i')
  }
  
  
}
//********version.4*******
for (let i = 1; i < 100; i++) {
function dome(){

if(!document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').classList.contains('ivu-btn-loading')){
	
	setTimeout(()=>{console.log("proceed");},2000) 
	}//looks like this determine something
  else{//here's your intention
	 
	  console.log('i')
  }
  
  
};dome();}


//*****version.5** solution.1**
async function dome() {
  const button = document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button');

  while (!button.classList.contains('ivu-btn-loading')) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Proceeding..."); // Log after the delay
  }

  console.log('Button is loading. Perform other actions here.');
  // Add code to click the button, extract data, etc.
}

// Call the async function to start the process
dome();

//*****version.5** solution.2**
let i = 1;

function dome() {
  const button = document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button');

  if (!button.classList.contains('ivu-btn-loading')) {
    setTimeout(() => {
      console.log("Proceeding..."); // Log after the delay
      i++;
      if (i < 100) {
        dome(); // Call the function recursively
      }
    }, 2000); // Delay in milliseconds
  } else {
    console.log('Button is loading. Perform other actions here.');
    // Add code to click the button, extract data, etc.
  }
}

// Call the function to start the process
dome();

//*****version.5** solution.1**modifying**
async function dome() {
  const button = document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button');

  while (button.classList.contains('ivu-btn-loading')) {
  	//contains code:
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Proceeding..."); // Log after the delay
  }
  //!contains:
  	document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div.tableCss.vxe-table.vxe-table--render-default.tid_1.size--small.border--full.show--head.fixed--right.t--animat.scroll--y.virtual--y > div.vxe-table--main-wrapper > div.vxe-table--header-wrapper.body--wrapper > table > thead > tr > th.vxe-header--column.col_2.col--center.col--checkbox > div > span > span').click();
}

// Call the async function to start the process
dome();

//*****version.5** solution.1**modifying*with requestAnimationFrame*from bing*

async function dome() {
  const button = document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button');

  async function checkButton() {
    if (!button.classList.contains('ivu-btn-loading')) {
      console.log("Proceeding...");
    } else {
      await new Promise((resolve) => requestAnimationFrame(resolve));
      checkButton(); // Recursive call
    }
  }

  await checkButton();
  console.log('Button is loading. Perform other actions here.');
  // Add code to click the button, extract data, etc.
}

// Call the async function to start the process
dome();

//*****version.5** solution.1**modifying.1**

async function dome() {
  const button = document.querySelector('body > div:nth-child(18) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button');

  while (button.classList.contains('ivu-btn-loading')) {
  	//contains code:
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Proceeding..."); // Log after the delay
  }
  //!contains:
    await new Promise((resolve) => setTimeout(resolve, 1000));
  	document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div.tableCss.vxe-table.vxe-table--render-default.tid_1.size--small.border--full.show--head.fixed--right.t--animat.scroll--y.virtual--y > div.vxe-table--main-wrapper > div.vxe-table--header-wrapper.body--wrapper > table > thead > tr > th.vxe-header--column.col_2.col--center.col--checkbox > div > span > span').click();
}

// Call the async function to start the process
;for(let i=1;i<10;i++){
	dome();
	await new Promise((resolve) => setTimeout(resolve, 1000));
}



//*****version.5** solution.1*combine-real*modifying.1*error-can'tcheck*

async function dome() {
  const button = document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap.ivu-modal-hidden > div > div > div.ivu-modal-footer > div > button');
  while (button.classList.contains('ivu-btn-loading')) {
  	//contains code:
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Proceeding..."); // Log after the delay
  }
  //!contains:
    await new Promise((resolve) => setTimeout(resolve, 1000));
  	document.querySelector('#app > div > div.right-content.ivu-layout > div.main-content-con.ivu-layout-content > div > div > div.ivu-card.ivu-card-bordered > div > div.tableCss.vxe-table.vxe-table--render-default.tid_1.size--small.border--full.show--head.fixed--right.t--animat.scroll--y.virtual--y > div.vxe-table--main-wrapper > div.vxe-table--header-wrapper.body--wrapper > table > thead > tr > th.vxe-header--column.col_2.col--center.col--checkbox > div > span > span').click();
}

// Call the async function to start the process
for(let i=1;i<100;i++){
	dome();
	await new Promise((resolve) => setTimeout(resolve, 1000));
}

//***document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button').classList.contains("ivu-btn-loading")
//logic is error, you can't check the classList if it doesnt appears
//now, caught: _prevClass changes from "ivu-btn ivu-btn-success" to "ivu-btn ivu-btn-success ivu-btn-loading"
// ask bing: on web sonsole,i caught that : _prevClass changes from "ivu-btn ivu-btn-success" to "ivu-btn ivu-btn-success ivu-btn-loading"; i want to use this as a indicator for my next operation
//****below are code from bing*
/*
// Assuming you have an element with the _prevClass attribute
const myElement = document.getElementById('my-element'); // Replace with your actual element ID

// Set up an event listener
myElement.addEventListener('DOMAttrModified', (event) => {
    if (event.attrName === '_prevClass' && event.newValue === 'ivu-btn ivu-btn-success ivu-btn-loading') {
        // Execute your next operation here
        console.log('Indicator detected! Proceed with your next action.');
    }
});
//******check from there****
// Assuming you have an element with the _prevClass attribute
const myElement = document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button'); // Replace with your actual selector

// Set up an event listener
myElement.addEventListener('DOMAttrModified', (event) => {
    if (event.attrName === '_prevClass' && event.newValue === 'ivu-btn ivu-btn-success ivu-btn-loading') {
        // Execute your next operation here
        console.log('Indicator detected! Proceed with your next action.');
    }
});
//loop check
function checkPrevClass() {
    const myElement = document.querySelector('body > div:nth-child(17) > div.ivu-modal-wrap > div > div > div.ivu-modal-footer > div > button'); // Replace with your actual selector

    // Check the _prevClass attribute value
    const prevClass = myElement.getAttribute('_prevClass');

    if (prevClass === 'ivu-btn ivu-btn-success ivu-btn-loading') {
        // Execute your next operation here
        console.log('Indicator detected! Proceed with your next action.');
    }

    // Repeat the check after a certain interval (e.g., every 1 second)
    setTimeout(checkPrevClass, 1000);
}

// Start the loop
checkPrevClass();


*/