const licbox=document.querySelector('.vxe-cell--checkbox');
const likdbtn=document.querySelector('.ivu-btn');
const lidkdbtn=document.querySelectorAll('.ivu-radio-input')[5];
const litkdbtn=document.querySelectorAll('.ivu-radio-input[name="ivuRadioGroup_1717499714228_5"]')[2];
const liokbtn=document.querySelectorAll('.ivu-btn-success')[1];
const linextbtn=document.querySelector('.vxe-pager--next-btn');
const lidropbtn=document.querySelectorAll('.ivu-select-input')[4];
//if paused by uncaught, copy from there, add outLoop:, change break outerLoop;,replace console.log(i), copy and paste; when it's finished, start next full loop
/*
0	JP-kuangxiaojian2024
1	UK-shibin97
2	DE-shibin97		y
3	ES-shibin97		y
4	IT-shibin97		y
5	FR-shibin97		y
6	NL-shibin97		y
7	SE-shibin97
8	PL-shibin97
9	BE-shibin97
10	US-shibin97
11	CA-shibin97		y
12	MX-shibin97		y
13	JP-shibin97		y
*/
outerLoop: for (let i=1;i<2000;i++){//done four pages=>i=100,it run to fifth page but didn't start(although, sometimes it does)
	while(!liokbtn.classList.contains('ivu-btn-loading')){
		//finish the first click;
		await new Promise((resolve) => setTimeout(resolve, 40000));
		licbox.click();await new Promise((resolve) => setTimeout(resolve, 1000));
		likdbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
		lidkdbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
		lidropbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
		document.querySelectorAll('.ivu-select-dropdown-list')[6].children[13].click();await new Promise((resolve) => setTimeout(resolve, 1000));
		document.querySelectorAll('.ivu-select-dropdown-list')[6].children[13].click();await new Promise((resolve) => setTimeout(resolve, 1000));
		liokbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));		console.log("proceed 1");

		for(let j=1;j<1000;j++){
			while(!liokbtn.classList.contains('ivu-btn-loading')){
				//finish second
				//licbox.click();await new Promise((resolve) => setTimeout(resolve, 1000));
				likdbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
				lidkdbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
				lidropbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
				document.querySelectorAll('.ivu-select-dropdown-list')[6].children[2].click();await new Promise((resolve) => setTimeout(resolve, 1000));
				document.querySelectorAll('.ivu-select-dropdown-list')[6].children[2].click();await new Promise((resolve) => setTimeout(resolve, 1000));
				liokbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));		console.log("proceed 2");

				for(let k=1;k<1000;k++){
					while(!liokbtn.classList.contains('ivu-btn-loading')){
						//finish third
						//licbox.click();await new Promise((resolve) => setTimeout(resolve, 1000));
						likdbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
						lidkdbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
						lidropbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
						document.querySelectorAll('.ivu-select-dropdown-list')[6].children[3].click();await new Promise((resolve) => setTimeout(resolve, 1000));
						document.querySelectorAll('.ivu-select-dropdown-list')[6].children[3].click();await new Promise((resolve) => setTimeout(resolve, 1000));
						liokbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));		console.log("proceed 3");

						for(let l=1;l<1000;l++){
							while(!liokbtn.classList.contains('ivu-btn-loading')){
								//finish forth
								//licbox.click();await new Promise((resolve) => setTimeout(resolve, 1000));
								likdbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
								lidkdbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
								lidropbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
								document.querySelectorAll('.ivu-select-dropdown-list')[6].children[4].click();await new Promise((resolve) => setTimeout(resolve, 1000));
								document.querySelectorAll('.ivu-select-dropdown-list')[6].children[4].click();await new Promise((resolve) => setTimeout(resolve, 1000));
								liokbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));		console.log("proceed 4");

								for(let m=1;m<1000;m++){
									while(!liokbtn.classList.contains('ivu-btn-loading')){
										//finish fifth
										//licbox.click();await new Promise((resolve) => setTimeout(resolve, 1000));
										likdbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
										lidkdbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
										lidropbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
										document.querySelectorAll('.ivu-select-dropdown-list')[6].children[5].click();await new Promise((resolve) => setTimeout(resolve, 1000));
										document.querySelectorAll('.ivu-select-dropdown-list')[6].children[5].click();await new Promise((resolve) => setTimeout(resolve, 1000));
										liokbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));console.log("proceed 5");

										for(let n=1;n<1000;n++){
											while(!liokbtn.classList.contains('ivu-btn-loading')){
											//finish sixth
												//licbox.click();await new Promise((resolve) => setTimeout(resolve, 1000));
												likdbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
												lidkdbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
												lidropbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
												document.querySelectorAll('.ivu-select-dropdown-list')[6].children[6].click();await new Promise((resolve) => setTimeout(resolve, 1000));
												document.querySelectorAll('.ivu-select-dropdown-list')[6].children[6].click();await new Promise((resolve) => setTimeout(resolve, 1000));
												liokbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));		console.log("proceed 6");

												for(let o=1;o<1000;o++){
													while(!liokbtn.classList.contains('ivu-btn-loading')){
													//finish twlveth
														//licbox.click();await new Promise((resolve) => setTimeout(resolve, 1000));
														likdbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
														lidkdbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
														lidropbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
														document.querySelectorAll('.ivu-select-dropdown-list')[6].children[11].click();await new Promise((resolve) => setTimeout(resolve, 1000));
														document.querySelectorAll('.ivu-select-dropdown-list')[6].children[11].click();await new Promise((resolve) => setTimeout(resolve, 1000));
														liokbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));		console.log("proceed 11");

														for(let p=1;p<1000;p++){
															while(!liokbtn.classList.contains('ivu-btn-loading')){
															//finish twlveth
																//licbox.click();await new Promise((resolve) => setTimeout(resolve, 1000));
																likdbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
																lidkdbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
																lidropbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));
																document.querySelectorAll('.ivu-select-dropdown-list')[6].children[12].click();await new Promise((resolve) => setTimeout(resolve, 1000));
																document.querySelectorAll('.ivu-select-dropdown-list')[6].children[12].click();await new Promise((resolve) => setTimeout(resolve, 1000));
																liokbtn.click();await new Promise((resolve) => setTimeout(resolve, 1000));		console.log("proceed 12");

																linextbtn.click();await new Promise((resolve) => setTimeout(resolve, 2000));
																if (document.querySelector('.vxe-pager--next-btn.is--disabled')){break outerLoop;}else{continue outerLoop;};

															};console.log(`"reload 12"${o}`);console.log(i);await new Promise((resolve) => setTimeout(resolve, 7000));
														};
													};console.log(`"reload 11"${o}`);console.log(i);await new Promise((resolve) => setTimeout(resolve, 7000));
												};
											};console.log(`"reload 6"${n}`);console.log(i);await new Promise((resolve) => setTimeout(resolve, 7000));
										};
									};console.log(`"reload 5"${m}`);console.log(i);await new Promise((resolve) => setTimeout(resolve, 7000));
								};
							};console.log(`"reload 4"${l}`);console.log(i);await new Promise((resolve) => setTimeout(resolve, 7000));
						};
					};console.log(`"reload 3"${k}`);console.log(i);await new Promise((resolve) => setTimeout(resolve, 7000));
				};
			};console.log(`"reload 2"${j}`);console.log(i);await new Promise((resolve) => setTimeout(resolve, 7000));
		};
	};console.log(`"reload 1"${i}`);console.log(i);await new Promise((resolve) => setTimeout(resolve, 7000));
};
