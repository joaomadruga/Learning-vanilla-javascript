function VerificaPreço(){
    var ValorIndefinido = document.getElementsByClassName('valor');
    var valores = [];
    var soma = 0;
    for(var i = 0; i < ValorIndefinido.length; i++){
        var NovoValor = ValorIndefinido[i].innerHTML.split(" ")[1];
        valores[i] = NovoValor;
        soma += parseInt(valores[i]);
    }
    console.log(valores);
    console.log(soma);
  }