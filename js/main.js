// ATIVIDADE UM

// 1 Mudando a tag do header que contem o nome do usuario
let avatar = document.querySelector(".avatar-content div");
avatar.innerHTML = "<p> Nome do usuário </p>";

// 2 Alterando o nome do input name
let formAuth = document.querySelector(".form-auth");
// let inputName = document.querySelector("input[name='name']");
formAuth[1].setAttribute("placeholder", "Primeiro nome");

// SEGUNDO METODO

// 1 Usando o getElementsByName
let formName = document.getElementsByName("name"); 
//let formName = document.getElementsByName("name") [0];
formName[0].setAttribute("placeholder", "Primeiro nome");

// 2 Usando o getElementByClassName()
let avatar2 = document.getElementsByClassName("avatar-content");
avatar2[0].children[1].innerHTML = "<p> Nome do usuário </p>";

// ATIVIDADE DOIS
// 1 Alterando a bordas dos formularios
let formInput = document.querySelectorAll(".form-auth input");
for (let i =0; i<formInput.length;i++){
    formInput[i].style.cssText = "border-radius: 8px; width: 85%";
}
let formButton = document.querySelector(".form-auth button");
formButton.style.cssText= "width: 100%; border-radius: 8px"

let bodyCadastroInstagram = document.querySelector("body");
bodyCadastroInstagram.style.backgroundColor= "#fafafa";

