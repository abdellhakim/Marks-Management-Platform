function checklogin() {
var k= localStorage.getItem('n');
if(k!=1){
    alert("please sign in or regester first to use this functionality");
    window.location.href='login.html';

}    
}
window.onload=checklogin;