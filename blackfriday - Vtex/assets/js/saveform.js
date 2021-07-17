function saveForm() {
    if(localStorage.cont) {
        localStorage.cont = Number(localStorage.cont)+1;
    } else {
        localStorage.cont = 1;
    }
    dados = document.getElementById('email').value;
    localStorage.setItem("dados_" + localStorage.cont, dados)
}