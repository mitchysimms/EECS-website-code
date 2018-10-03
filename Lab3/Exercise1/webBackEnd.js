function validatePassword(){

     let firstPassword = document.getElementById("password").value;
     let secondPassword = document.getElementById("password2").value;

     if(firstPassword.length < 8 || secondPassword.length < 8){
          alert("Your password must be at least 8 characters long");
     }
     else if(firstPassword != secondPassword){
          alert("The passwords did not match");
     }
     else{
          alert("Your password was accepted");
     }
}
