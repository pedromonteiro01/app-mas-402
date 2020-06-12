var chkPayPal = document.getElementById("inputOption1");
var chkCreditCard = document.getElementById("inputOption2");
var chkBitCoin = document.getElementById("inputOption3");


document.getElementById("btnSubmit").onclick = function() {
    if (document.getElementById("inputOption1").checked & document.getElementById("inputOption2").checked | document.getElementById("inputOption1").checked & document.getElementById("inputOption3").checked | document.getElementById("inputOption2").checked & document.getElementById("inputOption3").checked | document.getElementById("inputOption1").checked & document.getElementById("inputOption2").checked & document.getElementById("inputOption3").checked) {
        alert("Seleciona apenas 1 método!");
    } else if (!document.getElementById("inputOption1").checked & !document.getElementById("inputOption2").checked & !document.getElementById("inputOption3").checked) {
        alert("É necessário selecionar um método!");
    } else {
        if (document.getElementById("inputOption1").checked) {
            window.location.href = "https://www.paypal.com/pt/signin";
            alert("Será redirecionado para a página do paypal para efetuar pagamento.");
        }
        if (document.getElementById("inputOption2").checked) {
            window.location.href = "credito.html";
        }
        if (document.getElementById("inputOption3").checked) {
            window.location.href = "https://bitcoin.org/en/";
        }
    }
};