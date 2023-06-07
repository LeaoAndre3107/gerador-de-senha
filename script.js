 let sliderElement = document.querySelector("#slider");
 let buttonElement = document.querySelector("#button"); 

 let sizePassword = document.querySelector("#Valor");
 let password = document.querySelector("#password");

 let countainerPassword = document.querySelector("#container-password");

 let charset = "abcdefghijklmnopqrstuvwxyzABCEDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()";
 let novasenha= "";

 sizePassword.innerHTML = sliderElement.value;
 
 sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
 }

 function generatePassword(){
   
   let pass= ""

   for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
      pass += charset.charAt(Math.floor(Math.random() * n ));
      
   }
   countainerPassword.classList.remove("hide");
   password.innerHTML = pass;
   novasenha = pass;
 }
 
function copyPassword(){
   alert("Senha copiada com sucesso!")
   navigator.clipboard.writeText(novasenha);
}
