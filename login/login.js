// var nome = "Rafael Araujo";
// const nome = "Rafael Araujo";

// let nome = "Rafael Araujo";

// console.log(nome);

const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha");


btnSenha.addEventListener("click", function () {

    // if(campoSenha.type == "password") {
    //     campoSenha.type = "text";
    //     console.log("Senha visível");

    // } else {
    //     campoSenha.type = "password";
    //     console.log("Senha oculta");
    // }

    campoSenha.type = campoSenha.type == "password" ? "text" : "password";
    // O campoSenha.type é igual a "password" ? então campoSenha.type recebe "text" : caso contrário,
    // campoSenha.type recebe "password".

    
});

