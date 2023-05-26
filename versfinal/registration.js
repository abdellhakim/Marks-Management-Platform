function addData(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    localStorage.setItem('useremail',email); 
    localStorage.setItem('userpass',pass);

}