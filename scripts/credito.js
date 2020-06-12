/*document.getElementById("form1").onabort('submit', function() {
    document.getElementById("btnSubmit").onclick = function() {
        if (document.getElementById("inputName").value == "" ||
            document.getElementById("inputName").value.length < 8) {
            alert("Preencha campo TITULAR DO CARTÃO corretamente!");
            document.dados.Name.focus();
            return false;
        }

        var patternData = /^(((0)[0-9])|((1)[0-2]))(\/)\d{2}$/;
        if (!patternData.test(getElementById("inputVal"))) {
            alert("Preencha campo VALIDADE corretamente!");
            document.getElementById("inputVal").focus();
            return false;
        }

        if (document.getElementById("inputCvc").value == "") {
            alert("Preencha o campo CVC!");
            document.dados.tx_mensagem.focus();
            return false;
        }

        return true;
    };
})*/

/*-----------------------------------------------------------------------------*/
var formulario = document.getElementById("form1");

function teste() {
    var nome = formulario.Name;
    var num = formulario.number;
    var validade = formulario.validade;
    var cvc = formulario.cvc;
    /*var patternData = /^(0?[1-9]|1[012])[\/\-]\d{4}$/;
    var patternCvc = /^((?!(-1))[0-9]{3})$/;
    var patternNumber = /^((?!(-1))[0-9]{16})$/;*/

    if (nome.value == "") {
        alert("Insira um nome válido.");
        return false;
    } else if (nome.value.length < 8) {
        alert("Nome muito pequeno!");
        return false;
    } else if (num.value == "") {
        alert("campo NUMERO DO CARTAO não preenchido!");
        return false;
    } else if (validade.value == "") {
        alert("campo VALIDADE não preenchido!");
        return false;
    } else if (cvc.value == "") {
        alert("campo CVC não preenchido!");
        return false;
    } else {
        alert("Pagamento efetuado com sucesso!");
        window.location.href = "sucesso3.html";
    }
};

$(formulario).submit(function() {
    return false;
});

/*document.getElementById("form1").onsubmit('submit', validacao());*/