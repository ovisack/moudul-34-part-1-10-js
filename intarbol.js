console.log(1);
console.log(2);
console.log(3);
setTimeout(() =>{
console.log('ami to make valo basi na');
},6000)
console.log(5);
console.log(6);
console.log(7);
console.log(8);


let num =0;

 const cook= setInterval(() => {
    num ++;
    // num += 1
    if(num >6){
        setInterval(cook)
    }
    console.log(cook,num);
}, 2000);