function checkData(){
        var entermail = document.getElementById('email').value;
        var enterpass = document.getElementById('password').value; 
      
        
        var getEmail = localStorage.getItem('useremail');
        var getpass = localStorage.getItem('userpass');
        var m = localStorage.getItem('n');
if(entermail == getEmail)
{
    if(enterpass == getpass)
    {
        m=1;
        localStorage.setItem('n',m);
        alert("Logged in successfully");
        document.location.href='bulletin.html';
       
    }
    else{
        alert("wrong password try again");
    }
}
else{
    alert("invalid details");
}
}