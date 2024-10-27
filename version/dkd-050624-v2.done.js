//while 就是: meet true, 则loop在圈里;false p则ass
/*
0	JP-kuangxiaojian2024
1	UK-shibin97
2	DE-shibin97
3	ES-shibin97
4	IT-shibin97
5	FR-shibin97
6	NL-shibin97
7	SE-shibin97
8	PL-shibin97
9	BE-shibin97
10	US-shibin97
11	CA-shibin97
12	MX-shibin97
13	JP-shibin97
*/
window.onbeforeunload=function(){return"you sure?"};
const licbox=document.querySelector('.vxe-cell--checkbox');
const likdbtn=document.querySelector('.ivu-btn');
const lidkdbtn=document.querySelectorAll('.ivu-radio-input')[5];
const litkdbtn=document.querySelectorAll('.ivu-radio-input[name="ivuRadioGroup_1717499714228_5"]')[2];
const liokbtn=document.querySelectorAll('.ivu-btn-success')[1];
const linextbtn=document.querySelector('.vxe-pager--next-btn');
const lidropbtn=document.querySelectorAll('.ivu-select-input')[4];


//const lichildlist=["0","1","2","3","4","5","6","7","8","9","10","11","12","13"];
const lichildlist=["2","13"];
outerLoop: for (let i=1;i<5;i++){

    await new Promise((resolve) => setTimeout(resolve, 1000));
    licbox.click();await new Promise((resolve) => setTimeout(resolve, 500));

    for (let value of lichildlist) {

        while(liokbtn.classList.contains('ivu-btn-loading')){console.log(`childlist ${value} is waiting for the begin`);
                                                             await new Promise((resolve) => setTimeout(resolve, 5000))};
        likdbtn.click();await new Promise((resolve) => setTimeout(resolve, 500));
        lidkdbtn.click();await new Promise((resolve) => setTimeout(resolve, 500));
        lidropbtn.click();await new Promise((resolve) => setTimeout(resolve, 500));
        document.querySelectorAll('.ivu-select-dropdown-list')[6].children[value].click();await new Promise((resolve) => setTimeout(resolve, 500));
        liokbtn.click();await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(`childlist[${value}] kandeng completed`);
    };
	let currentpage =document.querySelector('.vxe-pager--num-btn.is--active').textContent;
	console.log(`round${i} - page${currentpage} completed`);


    if (document.querySelector('.vxe-pager--next-btn.is--disabled')){console.log(`i= ${i} nextbutton exists,breaking outerLoop`);break outerLoop;}else{linextbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));console.log(`i= ${i} nextbutton clicked`);continue outerLoop;};

};
