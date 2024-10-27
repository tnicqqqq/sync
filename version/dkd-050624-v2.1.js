//while 就是: meet true, 则loop在圈里;false p则ass
/*
0	JP-kuangxiaojian2024
1	US-kunyuzou1314
2	CA-kunyuzou1314
3	MX-kunyuzou1314
4	UK-shibin97
5	DE-shibin97
6	ES-shibin97
7	IT-shibin97
8	FR-shibin97
9	NL-shibin97
10	SE-shibin97
11	PL-shibin97
12	BE-shibin97
13	US-shibin97
14	CA-shibin97
15	MX-shibin97
16	JP-shibin97
17	UK-kunyuzou1314
18	DE-kunyuzou1314
19	ES-kunyuzou1314
20	IT-kunyuzou1314
21	FR-kunyuzou1314
22	NL-kunyuzou1314
23	SE-kunyuzou1314
24	PL-kunyuzou1314
25	BE-kunyuzou1314
26	JP-kunyuzou1314
27	BR-shibin97
28	UK-he3jia2jia
29	DE-he3jia2jia
30	ES-he3jia2jia
31	IT-he3jia2jia
32	FR-he3jia2jia
33	NL-he3jia2jia
34	SE-he3jia2jia
35	PL-he3jia2jia
36	BE-he3jia2jia
37	US-he3jia2jia
38	CA-he3jia2jia
39	MX-he3jia2jia
40	JP-he3jia2jia

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
const lichildlist=["0","5","29","17","18","16","26","40"];
outerLoop: for (let i=1;i<2;i++){

    await new Promise((resolve) => setTimeout(resolve, 1000));
    licbox.click();await new Promise((resolve) => setTimeout(resolve, 500));

    for (let value of lichildlist) {

        while(liokbtn.classList.contains('ivu-btn-loading')){console.log(`childlist ${value} is waiting for the begin`);
                                                             await new Promise((resolve) => setTimeout(resolve, 5000))};
        likdbtn.click();await new Promise((resolve) => setTimeout(resolve, 500));
        lidkdbtn.click();await new Promise((resolve) => setTimeout(resolve, 500));
        lidropbtn.click();await new Promise((resolve) => setTimeout(resolve, 500));
        try{document.querySelectorAll('.ivu-select-dropdown-list')[6].children[value].click();} catch (error) {"error catched"};
		await new Promise((resolve) => setTimeout(resolve, 500));
        liokbtn.click();await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(`childlist[${value}] kandeng completed`);
    };
	let currentpage =document.querySelector('.vxe-pager--num-btn.is--active').textContent;
	console.log(`round${i} - page${currentpage} completed`);


    if (document.querySelector('.vxe-pager--next-btn.is--disabled')){console.log(`i= ${i} nextbutton exists,breaking outerLoop`);break outerLoop;}else{linextbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));console.log(`i= ${i} nextbutton clicked`);continue outerLoop;};

};
