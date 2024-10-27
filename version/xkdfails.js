
window.onbeforeunload=function(){return"you sure?"};
outerLoop: for (let i = 1; i < 1000; i++) {
    console.log(`i=${i} is running`);
	document.querySelectorAll('.ivu-btn')[8].click();//query button
	await new Promise((resolve)=>setTimeout(resolve, 1000));
	while (document.querySelectorAll('.ivu-btn')[8].classList.contains('ivu-btn-loading')) {
            await new Promise((resolve)=>setTimeout(resolve, 3000));
        };//query button waiting
	document.querySelector('.ivu-checkbox-input').click();//Checkbox
	document.querySelectorAll('.ivu-btn')[2].click();//delete button
	while (!Boolean(document.querySelector('.ivu-modal-confirm-footer'))) {
                await new Promise((resolve)=>setTimeout(resolve, 1000));
            };//waiting confrimbutton
			await new Promise((resolve)=>setTimeout(resolve, 1000));//neccessary
            try {document.querySelector('.ivu-modal-confirm-footer').children[1].click();console.log("deleted");} catch (error) {console.log("error catched");};//confirm delete button

}
