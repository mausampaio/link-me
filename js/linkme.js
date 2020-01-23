function enviar() {
    var emailValue = document.getElementById('emailTxt').value;
    var areaValue = document.getElementById('areaTxt').value;
    var timestamp = new Date().getTime();
    // A variavel database vai receber as funcoes de acesso ao database
    var database = firebase.database();
    database.ref(timestamp).set({
        email: emailValue,
        mensagem: areaValue
    });
}