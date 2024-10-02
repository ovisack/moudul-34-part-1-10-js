function a(){
    console.log('aa');
    b();
    console.log('aa2');
}
function b(){
    console.log('bb');
    d()
    console.log('bb2');
}
function d(){
    console.log('dd');
}
a()