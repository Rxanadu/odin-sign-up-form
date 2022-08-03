const password = document.getElementById("pass");
const passwordConfirm = document.getElementById("pass-confirm");
const errorMessage = document.querySelector(".error-message");
const submit = document.getElementById("submit");

  passwordConfirm.addEventListener("input", function(event){
    if(passwordConfirm.value != password.value || 
      password.value != passwordConfirm.value){
        //set up error stating passwords do not match
        password.classList.add('error');
        passwordConfirm.classList.add('error');
        errorMessage.removeAttribute("hidden");

    }
    else{
        //show nothing for error message
        password.classList.remove('error');
        passwordConfirm.classList.remove('error');
        errorMessage.setAttribute("hidden", "");
    }
  });

submit.addEventListener("click", function(event){
  if(password.value != passwordConfirm.value){
    //do not submit
    event.preventDefault();
    alert("invalid");
    
  }
});