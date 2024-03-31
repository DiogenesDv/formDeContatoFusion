const form = document.querySelector("#form");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputAssunto = document.querySelector("#assunto");
const textArea = document.querySelector("#message")

form.addEventListener('submit', (event) => {
    event.preventDefault();//Evita enviar sem a validação

//----------------NOME VALIDACAO---------------------------------------------------
    if (inputName.value === "") {
        alert("Por favor preencha o campo NOME!");
        erroCampo(inputName);
        return;
    }
    if (inputName.value.length < 3) {
        alert("Por favor preencha o campo NOME com MAIS LETRAS");
        erroCampo(inputName);
        return;
    }
//----------------------------------------------------------------------------------

//********************EMAIL VALIDACAO************************************************
    if (inputEmail.value === "" || !validarEmailForm(inputEmail.value)) {
        alert("Por favor preencha o campo EMAIL CORRETO!");
        erroCampo(inputEmail);
        return;
    }
//***********************************************************************************

//__________________ASSUNTO VALIDACAO________________________________________________
    if (inputAssunto.value === "") {
        alert("Por favor preencha o campo Assunto!");
        erroCampo(inputAssunto);
        return;
    }
    if (inputAssunto.value.length < 4) {
        alert("Por favor preencha o campo Assunto com MAIS LETRAS");
        erroCampo(inputAssunto);
        return;
    }
//___________________________________________________________________________________

//##########################TEXT AREA VALIDACAO######################################
    if (textArea.value === "") {
        alert("Por favor preencha o CAMPO HABILIDADES!");
        erroCampo(textArea);
        return;
    }
    if (textArea.value.length < 10) {
        alert("Por favor preencha o campo com uma frase com mais de 10 letras");
        erroCampo(textArea);
        return;
    }
//####################################################################################

    //Se todas as validações forem verdadeiras o formulario sera enviado com a funçõa nativa do js!
    form.submit();
    mensagemDeEnvio();
});

//!!!!!!!!!!!!!!!!!!!!!!!!!!FUNCOES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function erroCampo(campo){
    campo.style.border = '3px solid red';
}

function removeErroCampo(campo){
    campo.style.border = '';
}

function mensagemDeEnvio(){
    alert('Dados Enviados com sucesso para lugar nenhum!')
}

function validarEmailForm(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        // /\S+@\S+\.\S+/
    );
    
    if (emailRegex.test(email)) {
        return true;
    }
    return false;
}