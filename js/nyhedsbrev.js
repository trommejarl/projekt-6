
const fornavnInput = document.querySelector("#fornavn");
const efternavnInput = document.querySelector("#efternavn");
const email = document.querySelector("#email");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


function validateForm(){

clearMessages();
let errorFlag = false;

if(fornavnInput.value.length < 1){
  errorNodes[0].innerText = "Fornavn skal udfyldes";
  fornavnInput.classList.add("error-border");
  errorFlag = true;
}

if(efternavnInput.value.length < 1){
  errorNodes[1].innerText = "Efternavn skal udfyldes";
  efternavnInput.classList.add("error-border");
  errorFlag = true;
}

if(!emailIsValid(email.value)){
  errorNodes[2].innerText = "Ugyldig email";
  email.classList.add("error-border");
  errorFlag = true;
}
if(!errorFlag){
document.getElementById('success').innerText = 'Du er nu tilmeldt!'
}

}

function clearMessages(){
  for(let i = 0; i < errorNodes.length; i++){
    errorNodes[i].innerText = "";
  }
  success.innerText = "";
  fornavnInput.classList.remove("error-border");
  efternavnInput.classList.remove("error-border");
  email.classList.remove("error-border");
}

function emailIsValid(email){
  let pattern = /\S+@\S+/;
  return pattern.test(email);
}


  document.getElementById('button').addEventListener('click', function(){
    document.getElementById('bg-modal').style.display = 'flex';
  });

  document.getElementById('close').addEventListener('click', function(){
    document.getElementById('bg-modal').style.display = 'none';
  });
