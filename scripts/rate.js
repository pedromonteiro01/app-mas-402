function teste() {
    var formulario = document.getElementById("form");
    var email = formulario.email;
    var pw = formulario.Pass;

    if (email.value == "") {
        alert("Preencha o campo EMAIL!");
        return false;
    } else if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        alert("Insira um email válido");
        return false;
    } else if (pw.value == "") {
        alert("Preencha o campo PASSWORD!");
        return false;
    } else {
        alert("Formulario enviado");
        window.location.href = "sucesso2.html";
        return false;
    }
};