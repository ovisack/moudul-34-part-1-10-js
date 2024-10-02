function clack() {
    const number=document.getElementById('ago');
    const ago =number.Value;
    const errorTab=document.getElementById('error')
console.log(ago);

try{
const ago =parseInt(agoText);
if(isNaN(ago)){
    throw "please enter qa number ";

}
else if(ago <18){
    throw " bura chengge ra not all"
}
}
catch(err){
    console.log('error',err);
    errorTab.innerHTML='Something rowing'


}
console.log(11111);
}