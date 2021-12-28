var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var repassword = document.getElementById("repassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  vaildation();
});

const vaildation = () => {
  const usernameval = username.value.trim();
  const emailval = email.value.trim();
  const passwordval = password.value.trim();
  const repassval = repassword.value.trim();

  if (usernameval === "") {
    document.getElementById("user").innerHTML = "** enter your name";
    return false;
  }
  if (usernameval.length <= 3 || usernameval.length > 20) {
    document.getElementById("user").innerHTML =
      "**  your name must have length in between 3  and 20";
    return false;
  }
 

  //  email

  if (emailval === "") {
    document.getElementById("Email").innerHTML = "** enter your email";
    return false;
  }
  if(emailval.indexOf('@')<=0){
      document.getElementById("Email").innerHTML = "** @ is at invalid postion ";
    return false;
  }


  //  password

  if (passwordval === "") {
    document.getElementById("Pass").innerHTML = "** enter your password";
    return false;
  }
  if (passwordval.length <= 5 || passwordval.length > 20) {
    document.getElementById("Pass").innerHTML =
      "**  your Pssword must have length in between 5  and 20";
    return false;
  }


  if (repassval != passwordval) {
    document.getElementById("RePass").innerHTML =
      "**  your did not matched password";
    return false;
  }
};