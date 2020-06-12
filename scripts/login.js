var formulario = document.getElementById("form2");

function teste() {
    var nome = formulario.nome;
    var pw = formulario.pass;

    if (nome.value == "") {
        alert("Insira um nome válido.");
        return false;
    } else if (nome.value.length < 8) {
        alert("Nome muito pequeno!");
        return false;
    } else if (pw.value == "") {
        alert("campo PALAVRA PASSE não preenchido!");
        return false;
    } else {
        alert("Login!");
        window.location.href = "sucesso2.html";
        return false;
    }
};