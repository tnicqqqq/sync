const licbox=document.querySelector('.ivu-checkbox-input');
const lixbtn=document.querySelectorAll('.ivu-btn')[2];
const liquerybtn=document.querySelectorAll('.ivu-btn')[8];

outerLoop:for(let i=1;i<50;i++){
	console.log(`the ${i} loop is starting`)
	await new Promise((resolve)=>setTimeout(resolve,3000));
	liquerybtn.click();await new Promise((resolve)=>setTimeout(resolve,40000));
	while(document.querySelectorAll('.ivu-btn')[8].classList.contains('ivu-btn-loading')){await new Promise((resolve)=>setTimeout(resolve,2000));};
	while(document.querySelectorAll('.ivu-checkbox-input').length>1){
		await new Promise((resolve)=>setTimeout(resolve,2000));
		licbox.click();
		await new Promise((resolve)=>setTimeout(resolve,2000));
		lixbtn.click();
		for(let j=1;j<50;j++){
			while(Boolean(document.querySelector('.ivu-modal-confirm-footer'))){
				await new Promise((resolve)=>setTimeout(resolve,2000));
				document.querySelector('.ivu-modal-confirm-footer').children[1].click();
				continue outerLoop;
		};
	};
	};
}
