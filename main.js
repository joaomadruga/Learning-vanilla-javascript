//fazer o botão de editar/excluir as contas
var Salario = localStorage.getItem('Salario');
var BarraLateral = document.querySelector(".BarraLateral");
var nome = localStorage.getItem('Nome');
var date = localStorage.getItem('Data');
var valor = localStorage.getItem('Valor');
var valorLuz = localStorage.getItem('Valor da conta de Luz');
var SomaJaneiro = localStorage.getItem('Soma de Janeiro') || 0;
var SomaFevereiro = localStorage.getItem('Soma de Fevereiro') || 0;
var SomaMarço = localStorage.getItem('Soma de Março') || 0;
var SomaAbril = localStorage.getItem('Soma de Abril') || 0;
var SomaMaio = localStorage.getItem('Soma de Maio') || 0;
var SomaJunho = localStorage.getItem('Soma de Junho') || 0;
var SomaJulho = localStorage.getItem('Soma de Julho') || 0;
var SomaAgosto = localStorage.getItem('Soma de Agosto') || 0;
var SomaSetembro = localStorage.getItem('Soma de Setembro') || 0;
var SomaOutubro = localStorage.getItem('Soma de Outubro') || 0;
var SomaNovembro = localStorage.getItem('Soma de Novembro') || 0;
var SomaDezembro = localStorage.getItem('Soma de Dezembro') || 0;

var SalarioJaneiro = localStorage.getItem('Salario de Janeiro') || 0;
var SalarioFev = localStorage.getItem('Salario de Fevereiro') || 0;
var SalarioMar = localStorage.getItem('Salario de Março') || 0;
var SalarioAbr = localStorage.getItem('Salario de Abril') || 0;
var SalarioMaio = localStorage.getItem('Salario de Maio') || 0;
var SalarioJun = localStorage.getItem('Salario de Junho') || 0;
var SalarioJul = localStorage.getItem('Salario de Julho') || 0;
var SalarioAgo = localStorage.getItem('Salario de Agosto') || 0;
var SalarioSet = localStorage.getItem('Salario de Setembro') || 0;
var SalarioOut = localStorage.getItem('Salario de Outubro') || 0;
var SalarioNov = localStorage.getItem('Salario de Novembro') || 0;
var SalarioDez = localStorage.getItem('Salario de Dezembro') || 0;

var ValorAguaJaneiro = localStorage.getItem('Valor Agua de Janeiro') || 0;
var ValorAguaFevereiro = localStorage.getItem('Valor Agua de Fevereiro') || 0;
var ValorAguaMarço = localStorage.getItem('Valor Agua de Março') || 0;
var ValorAguaAbril = localStorage.getItem('Valor Agua de Abril') || 0;
var ValorAguaMaio = localStorage.getItem('Valor Agua de Maio') || 0;
var ValorAguaJunho = localStorage.getItem('Valor Agua de Junho') || 0;
var ValorAguaJulho = localStorage.getItem('Valor Agua de Julho') || 0;
var ValorAguaAgosto = localStorage.getItem('Valor Agua de Agosto') || 0;
var ValorAguaSetembro = localStorage.getItem('Valor Agua de Setembro') || 0;
var ValorAguaOutubro = localStorage.getItem('Valor Agua de Outubro') || 0;
var ValorAguaNovembro = localStorage.getItem('Valor Agua de Novembro') || 0;
var ValorAguaDezembro = localStorage.getItem('Valor Agua de Dezembro') || 0;

var ValorLuzJaneiro = localStorage.getItem('Valor Luz de Janeiro') || 0;
var ValorLuzFevereiro = localStorage.getItem('Valor Luz de Fevereiro') || 0;
var ValorLuzMarço = localStorage.getItem('Valor Luz de Março') || 0;
var ValorLuzAbril = localStorage.getItem('Valor Luz de Abril') || 0;
var ValorLuzMaio = localStorage.getItem('Valor Luz de Maio') || 0;
var ValorLuzJunho = localStorage.getItem('Valor Luz de Junho') || 0;
var ValorLuzJulho = localStorage.getItem('Valor Luz de Julho') || 0;
var ValorLuzAgosto = localStorage.getItem('Valor Luz de Agosto') || 0;
var ValorLuzSetembro = localStorage.getItem('Valor Luz de Setembro') || 0;
var ValorLuzOutubro = localStorage.getItem('Valor Luz de Outubro') || 0;
var ValorLuzNovembro = localStorage.getItem('Valor Luz de Novembro') || 0;
var ValorLuzDezembro = localStorage.getItem('Valor Luz de Dezembro') || 0;
if (ValorAguaJaneiro != null || ValorAguaFevereiro != null || ValorAguaMarço != null || ValorAguaAbril != null || ValorAguaMaio != null || ValorAguaJunho != null || ValorAguaJulho != null || ValorAguaAgosto != null || ValorAguaSetembro != null || ValorAguaOutubro != null || ValorAguaNovembro != null || ValorAguaDezembro != null) {

  var ctx = document.getElementsByClassName("WaterChart")
  var chartGraph = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      datasets: [
        {
          label: "Conta de Água",
          data: [ValorAguaJaneiro, ValorAguaFevereiro, ValorAguaMarço, ValorAguaAbril, ValorAguaMaio, ValorAguaJunho, ValorAguaJulho, ValorAguaAgosto, ValorAguaSetembro, ValorAguaOutubro, ValorAguaNovembro, ValorAguaDezembro],
          borderWidth: 2,
          borderColor: [
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
          ],
          backgroundColor: [
            'rgba(61, 193, 182, 1)',
            'rgba(234, 139, 14, 1)',
            'rgba(77, 62, 212, 1)',
            'rgba(43, 193, 41, 1)',
            'rgba(254, 240, 67, 1)',
            'rgba(214, 58, 56, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(133, 47, 141, 1)',
            'rgba(235, 143, 243, 1)',
            'rgba(162, 210, 245, 1)',
            'rgba(255, 20, 20, 1)'


            
          ],
          pointBackgroundColor: 'white'
        },
      ]
    },
    options: {
      animation: {
        easing: 'easeInOutQuad',
        duration: 520
      },
    }
  });
}
if (ValorLuzJaneiro != null || ValorLuzFevereiro != null || ValorLuzMarço != null || ValorLuzAbril != null || ValorLuzMaio != null || ValorLuzJunho != null || ValorLuzJulho != null || ValorLuzAgosto != null || ValorLuzSetembro != null || ValorLuzOutubro != null || ValorLuzNovembro != null || ValorLuzDezembro != null) {
  var ctx = document.getElementsByClassName("EnergyChart")
  var chartGraph = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      datasets: [
        {
          label: "Conta de luz",
          data: [ValorLuzJaneiro, ValorLuzFevereiro, ValorLuzMarço, ValorLuzAbril, ValorLuzMaio, ValorLuzJunho, ValorLuzJulho, ValorLuzAgosto, ValorLuzSetembro, ValorLuzOutubro, ValorLuzNovembro, ValorLuzDezembro],
          borderWidth: 2,
          borderColor: [
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(29, 29, 29, 1)',
          ],
          backgroundColor: [
            'rgba(61, 193, 182, 1)',
            'rgba(234, 139, 14, 1)',
            'rgba(77, 62, 212, 1)',
            'rgba(43, 193, 41, 1)',
            'rgba(254, 240, 67, 1)',
            'rgba(214, 58, 56, 1)',
            'rgba(29, 29, 29, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(133, 47, 141, 1)',
            'rgba(235, 143, 243, 1)',
            'rgba(162, 210, 245, 1)',
            'rgba(255, 20, 20, 1)'


            
          ],
          pointBackgroundColor: 'white'
        },
      ]
    },
    options: {
      animation: {
        easing: 'easeInOutQuad',
        duration: 520
      },
    }
  });
}
if (nome != null) {
  var b = -1;
  var c = 0;
  for (var x = 0; x < JSON.parse(nome).length; x++) {
    var line = document.createElement("span");
    line.setAttribute("class", "line");
    BarraLateral.appendChild(line)
    for (var i = 0; i < 3; i++) {
      if (i == 0) {
        var text = document.createElement('p');
        text.setAttribute("class", "nome");
        BarraLateral.appendChild(text);
        text.appendChild(document.createTextNode(JSON.parse(nome)[x]));
        
      } else if (i == 1) {
        var text = document.createElement('p');
        text.setAttribute("class", "date");
        BarraLateral.appendChild(text);
        text.appendChild(document.createTextNode("Data: " + JSON.parse(date)[x]));

      } else if (i == 2) {
        var text = document.createElement('p');
        text.setAttribute("class", "valor");
        BarraLateral.appendChild(text);
        text.appendChild(document.createTextNode("Preço: " + JSON.parse(valor)[x] + " R$"));
        var EditarTexto = document.createElement('a');
        EditarTexto.setAttribute("class", "EditarTexto");
        EditarTexto.setAttribute("name", "EditarTexto " + c);
        EditarTexto.appendChild(document.createTextNode("Editar "));
        BarraLateral.appendChild(EditarTexto);
        EditarTexto.onclick = function(){
          c = c + 1;
          var teste99 = this.name.split(" ")[1];
          Swal.fire({
            html:
              '<h4>Qual o novo nome da conta?</h4>' +
              '<input class="swal2-input" id="NomeEditado" type="text" placeholder="Exemplo: Luz, Telefone, Seguro do carro...">' +
              '<h4>Qual o novo valor da conta?</h4>' +
              '<input class="swal2-input" id="ValorEditado" type="number" placeholder="Valor da conta">' +
              '<h4>Qual a nova data?</h4>' +
              '<input class="swal2-input" id="DateEditado" type="date">' +
              '<button type="button" id="BtnAddEditar" class="swal2-confirm swal2-styled" aria-label="" style="display: inline-block;">Editar</button>'
            ,
            title: '<strong>Editar contas</strong>',
            showConfirmButton: false,
            showCloseButton: true,
          })
          function Editar(EditarTextoNumero){
            var DataEditar = JSON.parse(localStorage.getItem('Data'));
            var NomeEditar = JSON.parse(localStorage.getItem('Nome'));
            var ValorEditar = JSON.parse(localStorage.getItem('Valor'));
            if(document.getElementById("ValorEditado").value !== ''){
              BarraLateral.removeChild(document.getElementsByClassName("valor")[EditarTextoNumero]);
              ValorEditar.splice(EditarTextoNumero, 1);
              ValorEditar.push(document.getElementById("ValorEditado").value);
              localStorage.setItem('Valor', JSON.stringify(ValorEditar));
            }
             if(document.getElementById("NomeEditado").value !== ''){
              BarraLateral.removeChild(document.getElementsByClassName("nome")[EditarTextoNumero]);
              NomeEditar.splice(EditarTextoNumero, 1);
              NomeEditar.push(document.getElementById("NomeEditado").value);
              localStorage.setItem('Nome', JSON.stringify(NomeEditar));
              console.log("Mudei o nome")
            }  
            if(document.getElementById("DateEditado").value !== ''){
              BarraLateral.removeChild(document.getElementsByClassName("date")[EditarTextoNumero]);
              DataEditar.splice(EditarTextoNumero, 1);
             DataEditar.push(document.getElementById("DateEditado").value);
             localStorage.setItem('Data', JSON.stringify(DataEditar));
            } 
             
            
             window.location.reload()
          }
          BtnAddEditar.onclick = function(){
            
            console.log(teste99)
            Editar(teste99);
            
            EditarTexto.innerHTML = "";
          }
        }
        var ExcluirTexto = document.createElement('a');
        b = b + 1
        var DataApagar = JSON.parse(localStorage.getItem('Data'));
        var NomeApagar = JSON.parse(localStorage.getItem('Nome'));
        var ValorApagar = JSON.parse(localStorage.getItem('Valor'));
        ExcluirTexto.setAttribute("class", "ExcluirTexto ");
        ExcluirTexto.setAttribute("name", "Botao " + b);
        ExcluirTexto.appendChild(document.createTextNode("Excluir"))
        BarraLateral.appendChild(ExcluirTexto);
        function apagar(ExcluirTextoNumero){
          BarraLateral.removeChild(document.getElementsByClassName("line")[ExcluirTextoNumero]);
           BarraLateral.removeChild(document.getElementsByClassName("valor")[ExcluirTextoNumero]);
           BarraLateral.removeChild(document.getElementsByClassName("date")[ExcluirTextoNumero]);
           BarraLateral.removeChild(document.getElementsByClassName("nome")[ExcluirTextoNumero]);
           DataApagar.splice(ExcluirTextoNumero, 1);
           localStorage.setItem('Data', JSON.stringify(DataApagar));
           NomeApagar.splice(ExcluirTextoNumero, 1);
           localStorage.setItem('Nome', JSON.stringify(NomeApagar));
           ValorApagar.splice(ExcluirTextoNumero, 1);
           localStorage.setItem('Valor', JSON.stringify(ValorApagar));
           window.location.reload()
        }
        ExcluirTexto.onclick = function(){
            apagar(this.name.split(" ")[1]);
            this.innerHTML = "";
        }
        
          


      }
      
    }
  }
  SomaJaneiro = localStorage.getItem('Soma de Janeiro') || 0 ;
  SomaFevereiro = localStorage.getItem('Soma de Fevereiro') || 0 ;
  SomaMarço = localStorage.getItem('Soma de Março') || 0 ;
  SomaAbril = localStorage.getItem('Soma de Abril') || 0 ;
  SomaMaio = localStorage.getItem('Soma de Maio') || 0 ;
  SomaJunho = localStorage.getItem('Soma de Junho') || 0 ;
  SomaJulho = localStorage.getItem('Soma de Julho') || 0 ;
  SomaAgosto = localStorage.getItem('Soma de Agosto') || 0 ;
  SomaSetembro = localStorage.getItem('Soma de Setembro') || 0 ;
  SomaOutubro = localStorage.getItem('Soma de Outubro') || 0 ;
  SomaNovembro = localStorage.getItem('Soma de Novembro') || 0 ;
  SomaDezembro = localStorage.getItem('Soma de Dezembro') || 0 ;
  SalarioJaneiro = localStorage.getItem('Salario de Janeiro') || 0 ;
  SalarioFev = localStorage.getItem('Salario de Fevereiro') || 0 ;
  SalarioMar = localStorage.getItem('Salario de Março') || 0 ;
  SalarioAbr = localStorage.getItem('Salario de Abril') || 0 ;
  SalarioMaio = localStorage.getItem('Salario de Maio') || 0 ;
  SalarioJun = localStorage.getItem('Salario de Junho') || 0 ;
  SalarioJul = localStorage.getItem('Salario de Julho') || 0 ;
  SalarioAgo = localStorage.getItem('Salario de Agosto') || 0 ;
  SalarioSet = localStorage.getItem('Salario de Setembro') || 0 ;
  SalarioOut = localStorage.getItem('Salario de Outubro') || 0 ;
  SalarioNov = localStorage.getItem('Salario de Novembro') || 0 ;
  SalarioDez = localStorage.getItem('Salario de Dezembro') || 0 ;
  var ValorIndefinido = document.getElementsByClassName('valor');

  var valores = [];
  var soma = 0;
  for (var i = 0; i < ValorIndefinido.length; i++) {
    var NovoValor = ValorIndefinido[i].innerHTML.split(" ")[1];
    valores[i] = NovoValor;
    soma += parseInt(valores[i]);
    console.log(soma);
  }
  //criando grafico
  var ctx = document.getElementsByClassName("chart")
  var chartGraph = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      datasets: [
        {
          label: "Salário",
          data: [SalarioJaneiro, SalarioFev, SalarioMar, SalarioAbr, SalarioMaio, SalarioJun, SalarioJul, SalarioAgo, SalarioSet, SalarioOut, SalarioNov, SalarioDez],
          borderWidth: 2,
          borderColor: [
            'rgba(13, 115, 119, 1)'
          ],
          backgroundColor: [
            'rgba(13, 115, 119, 0)',
          ],
          pointBackgroundColor: 'white'
        },
        {
          label: "Custo Mensal",
          data: [SomaJaneiro, SomaFevereiro, SomaMarço, SomaAbril, SomaMaio, SomaJunho, SomaJulho, SomaAgosto, SomaSetembro, SomaOutubro, SomaNovembro, SomaDezembro],
          borderWidth: 2,
          borderColor: [
            'rgba(236, 236, 236, 1)',
          ],
          backgroundColor: [
            'rgba(236, 236, 236, 0)',
          ],
          pointBackgroundColor: 'white'
        },
      ]
    },
    options: {
      animation: {
        easing: 'easeInOutQuad',
        duration: 520
      },
    }
  });
  date = localStorage.getItem('Data');
  var meses = date.split('-')[1];
  if (meses === "12") {
    chartGraph.data.datasets[1].data[11] = soma;
    console.log(chartGraph.data.datasets[1].data[11]);
  } else if (meses === "11") {
    chartGraph.data.datasets[1].data[10] = soma;
    console.log(chartGraph.data.datasets[1].data[10]);
  } else if (meses === "10") {
    chartGraph.data.datasets[1].data[9] = soma;
    console.log(chartGraph.data.datasets[1].data[9]);
  } else if (meses === "09") {
    chartGraph.data.datasets[1].data[8] = soma;
    console.log(chartGraph.data.datasets[1].data[8]);
  } else if (meses === "08") {
    chartGraph.data.datasets[1].data[7] = soma;
    console.log(chartGraph.data.datasets[1].data[7]);
  } else if (meses === "07") {
    chartGraph.data.datasets[1].data[6] = soma;
    console.log(chartGraph.data.datasets[1].data[6]);
  } else if (meses === "06") {
    chartGraph.data.datasets[1].data[5] = soma;
    console.log(chartGraph.data.datasets[1].data[5]);
  } else if (meses === "05") {
    chartGraph.data.datasets[1].data[4] = soma;
    console.log(chartGraph.data.datasets[1].data[4]);
  } else if (meses === "04") {
    chartGraph.data.datasets[1].data[3] = soma;
    console.log(chartGraph.data.datasets[1].data[3]);
  } else if (meses === "03") {
    chartGraph.data.datasets[1].data[2] = soma;
    console.log(chartGraph.data.datasets[1].data[2]);
  } else if (meses === "02") {
    chartGraph.data.datasets[1].data[1] = soma;
    console.log(chartGraph.data.datasets[1].data[1]);
  } else if (meses === "01") {
    chartGraph.data.datasets[1].data[0] = soma;
    console.log(chartGraph.data.datasets[1].data[0]);
  }
  //Estilizando
  var SobraTitulo = document.querySelector(".SobraTitulo");
  var texto = document.createElement('p');
  texto.setAttribute("class", "SobraTituloValor");
  SobraTitulo.appendChild(texto);
  texto.appendChild(document.createTextNode((SalarioJaneiro || SalarioFev || SalarioMar || SalarioJun || SalarioJul || SalarioAgo || SalarioSet || SalarioOut || SalarioNov || SalarioDez) - soma));
}
//InitialAlert
if (SalarioJaneiro == 0 && SalarioFev == 0 && SalarioMar == 0 && SalarioAbr == 0 && SalarioMaio == 0 && SalarioJun == 0 && SalarioJul == 0 && SalarioAgo == 0 && SalarioSet == 0 && SalarioOut == 0 && SalarioNov == 0 && SalarioDez == 0) {

  Swal.fire({
    title: 'Qual o valor que você recebeu no mês?',
    icon: 'info',
    input: 'number',
    inputLabel: 'Qual o salário?',
    html: '<label for="swal2-input" class="swal2-input-label">Qual a data?</label> <input class="swal2-input" id="SalarioDate" type="date">',
  })
  var BtnOK = document.querySelector(".swal2-confirm.swal2-styled");
  var inputValue = document.getElementsByClassName("swal2-input")[1];
  var SalarioDate = document.getElementById("SalarioDate");
  var BtnCancel = document.querySelector(".swal2-cancel.swal2-styled");
  BtnOK.onclick = function () {
    if (SalarioDate.value.split("-")[1] == "12") {
      localStorage.setItem('Salario de Dezembro', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "11") {
      localStorage.setItem('Salario de Novembro', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "10") {
      localStorage.setItem('Salario de Outubro', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "9") {
      localStorage.setItem('Salario de Setembro', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "8") {
      localStorage.setItem('Salario de Agosto', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "7") {
      localStorage.setItem('Salario de Julho', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "6") {
      localStorage.setItem('Salario de Junho', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "5") {
      localStorage.setItem('Salario de Maio', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "4") {
      localStorage.setItem('Salario de Abril', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "3") {
      localStorage.setItem('Salario de Março', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "2") {
      localStorage.setItem('Salario de Fevereiro', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "01") {
      localStorage.setItem('Salario de Janeiro', inputValue.value);
    }
    SalarioJaneiro = localStorage.getItem('Salario de Janeiro') || 0;
    SalarioFev = localStorage.getItem('Salario de Fevereiro') || 0;
    SalarioMar = localStorage.getItem('Salario de Março') || 0;
    SalarioAbr = localStorage.getItem('Salario de Abril') || 0;
    SalarioMaio = localStorage.getItem('Salario de Maio') || 0;
    SalarioJun = localStorage.getItem('Salario de Junho') || 0;
    SalarioJul = localStorage.getItem('Salario de Julho') || 0;
    SalarioAgo = localStorage.getItem('Salario de Agosto') || 0;
    SalarioSet = localStorage.getItem('Salario de Setembro') || 0;
    SalarioOut = localStorage.getItem('Salario de Outubro') || 0;
    SalarioNov = localStorage.getItem('Salario de Novembro') || 0;
    SalarioDez = localStorage.getItem('Salario de Dezembro') || 0;
    if (inputValue.value === '' || SalarioDate.value === '') {
      window.location.reload();
    } else {
      Swal.fire({
        title: 'Qual o valor que você recebeu no mês?',
        icon: 'info',
        input: 'number',
        inputLabel: 'Digite o salário aqui',
        showCancelButton: true,
        timer: 1,
        html: '<label for="swal2-input" class="swal2-input-label">Qual a data?</label> <input class="swal2-input" id="SalarioDate" type="date">'
      })

      console.log(inputValue.value);

      //GRAPH
      if (nome == null) {
        var ctx = document.getElementsByClassName("chart")
        var chartGraph = new Chart(ctx, {

          type: 'line',
          data: {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            datasets: [
              {
                label: "Salário",
                data: [SalarioJaneiro, SalarioFev, SalarioMar, SalarioAbr, SalarioMaio, SalarioJun, SalarioJul, SalarioAgo, SalarioSet, SalarioOut, SalarioNov, SalarioDez],
                borderWidth: 2,
                borderColor: [
                  'rgba(13, 115, 119, 1)'
                ],
                backgroundColor: [
                  'rgba(13, 115, 119, 0)'
                ],
                pointBackgroundColor: 'white'
              },{
                label: "Custo Mensal",
                data: [SomaJaneiro, SomaFevereiro, SomaMarço, SomaAbril, SomaMaio, SomaJunho, SomaJulho, SomaAgosto, SomaSetembro, SomaOutubro, SomaNovembro, SomaDezembro],
                borderWidth: 2,
                borderColor: [
                  'rgba(236, 236, 236, 1)',
                ],
                backgroundColor: [
                  'rgba(236, 236, 236, 0)',
                ],
                pointBackgroundColor: 'white'
              },
            ]
          }
        });

      }
    }
  }
}else if(SalarioJaneiro == 0 || SalarioFev == 0 || SalarioMar == 0 || SalarioAbr == 0 || SalarioMaio == 0 || SalarioJun == 0 || SalarioJul == 0 || SalarioAgo == 0 || SalarioSet == 0 || SalarioOut == 0 || SalarioNov == 0 || SalarioDez == 0){
  var ctx = document.getElementsByClassName("chart")
  var chartGraph = new Chart(ctx, {

    type: 'line',
    data: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      datasets: [
        {
          label: "Salário",
          data: [SalarioJaneiro, SalarioFev, SalarioMar, SalarioAbr, SalarioMaio, SalarioJun, SalarioJul, SalarioAgo, SalarioSet, SalarioOut, SalarioNov, SalarioDez],
          borderWidth: 2,
          borderColor: [
            'rgba(13, 115, 119, 1)'
          ],
          backgroundColor: [
            'rgba(13, 115, 119, 0)'
          ],
          pointBackgroundColor: 'white'
        },{
          label: "Custo Mensal",
          data: [SomaJaneiro, SomaFevereiro, SomaMarço, SomaAbril, SomaMaio, SomaJunho, SomaJulho, SomaAgosto, SomaSetembro, SomaOutubro, SomaNovembro, SomaDezembro],
          borderWidth: 2,
          borderColor: [
            'rgba(236, 236, 236, 1)',
          ],
          backgroundColor: [
            'rgba(236, 236, 236, 0)',
          ],
          pointBackgroundColor: 'white'
        },
      ]
    }
  });
}



//Add alert

var icon = document.getElementsByClassName("swal2-icon-content");
var inputSearch = document.getElementsByClassName("search");
var BtnAdd = document.getElementById("add");
var nome;
var BarraLateral = document.querySelector(".BarraLateral");
BtnAdd.onclick = function () {
  Swal.fire({
    html:
      '<h4>Qual conta você deseja adicionar?</h4>' +
      '<input class="swal2-input" id="nome" type="text" placeholder="Exemplo: Luz, Telefone, Seguro do carro...">' +
      '<h4>Qual o valor da conta?.</h4>' +
      '<input class="swal2-input" id="valor" type="number" placeholder="Valor da conta">' +
      '<h4>Qual a data?.</h4>' +
      '<input class="swal2-input" id="date" type="date">' +
      '<h5> Caso seja uma conta de luz ou água, marque abaixo: </h6>' +
      '<select class="swal2-select" style="display: flex; id="teste" "><option value=""></option><option value="Conta de Luz">Conta de Luz</option><option value="Conta de Água">Conta de Água</option></select>' +
      '<button type="button" id="BtnAdd" class="swal2-confirm swal2-styled" aria-label="" style="display: inline-block;">Adicionar</button>'
    ,
    title: '<strong>Adicionar contas</strong>',
    showConfirmButton: false,
    showCloseButton: true,

  })

  document.getElementById("BtnAdd").onclick = function () {

    var line = document.createElement("span");
    line.setAttribute("class", "line");
    nome = document.getElementById("nome").value;
    valor = document.getElementById("valor").value;
    date = document.getElementById("date").value;
    console.log(nome);
    console.log(valor);
    console.log(date);
    var NomeArray = JSON.parse(localStorage.getItem('Nome')) || [];
    NomeArray.push(nome);
    localStorage.setItem('Nome', JSON.stringify(NomeArray));
    var ValorArray = JSON.parse(localStorage.getItem('Valor')) || [];
    ValorArray.push(valor);
    localStorage.setItem('Valor', JSON.stringify(ValorArray));
    var DateArray = JSON.parse(localStorage.getItem('Data')) || [];
    DateArray.push(date);
    localStorage.setItem('Data', JSON.stringify(DateArray));
    if (nome == '') {
      Swal.fire({
        icon: 'error',
        title: 'Algo deu errado...',
        text: 'Você deixou algum campo vazio!',
      })
    } else if (valor == '') {
      Swal.fire({
        icon: 'error',
        title: 'Algo deu errado...',
        text: 'Você deixou algum campo vazio!',
      })
    } else if (date == '') {
      Swal.fire({
        icon: 'error',
        title: 'Algo deu errado...',
        text: 'Você deixou algum campo vazio!',
      })
    } else {
      BarraLateral.appendChild(line);
      BtnAdd.setAttribute("id", "addafter");
      for (var i = 0; i < 3; i++) {
        if (i == 0) {
          var text = document.createElement('p');
          text.setAttribute("class", "nome");
          BarraLateral.appendChild(text);
          text.appendChild(document.createTextNode(nome));
        } else if (i == 1) {
          var text = document.createElement('p');
          text.setAttribute("class", "date");
          BarraLateral.appendChild(text);
          text.appendChild(document.createTextNode("Data: " + date));
        } else if (i == 2) {
          var text = document.createElement('p');
          text.setAttribute("class", "valor");
          BarraLateral.appendChild(text);
          text.appendChild(document.createTextNode("Preço: " + valor + " R$"));
        }
      }
      //FUNCTION VERIFICAPREÇO:
      SomaJaneiro = localStorage.getItem('Soma de Janeiro') || 0;
      SomaFevereiro = localStorage.getItem('Soma de Fevereiro') || 0;
      SomaMarço = localStorage.getItem('Soma de Março') || 0;
      SomaAbril = localStorage.getItem('Soma de Abril') || 0;
      SomaMaio = localStorage.getItem('Soma de Maio') || 0;
      SomaJunho = localStorage.getItem('Soma de Junho') || 0;
      SomaJulho = localStorage.getItem('Soma de Julho') || 0;
      SomaAgosto = localStorage.getItem('Soma de Agosto') || 0;
      SomaSetembro = localStorage.getItem('Soma de Setembro') || 0;
      SomaOutubro = localStorage.getItem('Soma de Outubro') || 0;
      SomaNovembro = localStorage.getItem('Soma de Novembro') || 0;
      SomaDezembro = localStorage.getItem('Soma de Dezembro') || 0;

      SalarioJaneiro = localStorage.getItem('Salario de Janeiro') || 0 ;
      SalarioFev = localStorage.getItem('Salario de Fevereiro') || 0;
      SalarioMar = localStorage.getItem('Salario de Março') || 0;
      SalarioAbr = localStorage.getItem('Salario de Abril') || 0;
      SalarioMaio = localStorage.getItem('Salario de Maio') || 0;
      SalarioJun = localStorage.getItem('Salario de Junho') || 0;
      SalarioJul = localStorage.getItem('Salario de Julho') || 0;
      SalarioAgo = localStorage.getItem('Salario de Agosto') || 0;
      SalarioSet = localStorage.getItem('Salario de Setembro') || 0;
      SalarioOut = localStorage.getItem('Salario de Outubro') || 0;
      SalarioNov = localStorage.getItem('Salario de Novembro') || 0;
      SalarioDez = localStorage.getItem('Salario de Dezembro') || 0;
      var ValorIndefinido = document.getElementsByClassName('valor');
      var valores = [];
      var soma = 0;
      for (var i = 0; i < ValorIndefinido.length; i++) {
        var NovoValor = ValorIndefinido[i].innerHTML.split(" ")[1];
        valores[i] = NovoValor;
        soma += parseInt(valores[i]);
      }
      console.log(valores);
      console.log(soma);
      //GRAPH
      var ctx = document.getElementsByClassName("chart")
      var chartGraph2 = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
          datasets: [
            {
              label: "Salário",
              data: [SalarioJaneiro, SalarioFev, SalarioMar, SalarioAbr, SalarioMaio, SalarioJun, SalarioJul, SalarioAgo, SalarioSet, SalarioOut, SalarioNov, SalarioDez],
              borderWidth: 2,
              borderColor: [
                'rgba(13, 115, 119, 1)'
              ],
              backgroundColor: [
                'rgba(13, 115, 119, 0)',
              ],
              pointBackgroundColor: 'white'
            },
            {
              label: "Custo Mensal",
              data: [SomaJaneiro, SomaFevereiro, SomaMarço, SomaAbril, SomaMaio, SomaJunho, SomaJulho, SomaAgosto, SomaSetembro, SomaOutubro, SomaNovembro, SomaDezembro],
              borderWidth: 2,
              borderColor: [
                'rgba(236, 236, 236, 1)',
              ],
              backgroundColor: [
                'rgba(236, 236, 236, 0)',
              ],
              pointBackgroundColor: 'white'
            },
          ]
        },
        options: {
          animation: {
            easing: 'easeInOutQuad',
            duration: 520
          },
        }
      });
    }
    //Estilizando
    var SobraTitulo = document.querySelector(".SobraTitulo");
    var texto = document.createElement('p');
    texto.setAttribute("class", "SobraTituloValor");
    SobraTitulo.appendChild(texto);
    texto.appendChild(document.createTextNode(Salario - soma));
    var Sobra = document.getElementsByClassName("SobraTituloValor");
    console.log(Sobra);
    if (Sobra.length > 1) {
      for (var i = 1; i < Sobra.length; i++) {
        Sobra[i - 1].innerHTML = "";
      }
    }
    var select = document.querySelector('select');
    var SelectText = select.options[select.selectedIndex].text;
    if (SelectText === 'Conta de Água') {
      if (date.split("-")[1] == 12) {
        localStorage.setItem('Valor Agua de Dezembro', valor);
      } else if (date.split("-")[1] == 11) {
        localStorage.setItem('Valor Agua de Novembro', valor);
      } else if (date.split("-")[1] == 10) {
        localStorage.setItem('Valor Agua de Outubro', valor);
      } else if (date.split("-")[1] == 09) {
        localStorage.setItem('Valor Agua de Setembro', valor);
      } else if (date.split("-")[1] == 08) {
        localStorage.setItem('Valor Agua de Agosto', valor);
      } else if (date.split("-")[1] == 07) {
        localStorage.setItem('Valor Agua de Julho', valor);
      } else if (date.split("-")[1] == 06) {
        localStorage.setItem('Valor Agua de Junho', valor);
      } else if (date.split("-")[1] == 05) {
        localStorage.setItem('Valor Agua de Maio', valor);
      } else if (date.split("-")[1] == 04) {
        localStorage.setItem('Valor Agua de Abril', valor);
      } else if (date.split("-")[1] == 03) {
        localStorage.setItem('Valor Agua de Março', valor);
      } else if (date.split("-")[1] == 02) {
        localStorage.setItem('Valor Agua de Fevereiro', valor);
      } else if (date.split("-")[1] == 01) {
        localStorage.setItem('Valor Agua de Janeiro', valor);
      }

      ValorAguaJaneiro = localStorage.getItem('Valor Agua de Janeiro') || 0;
      ValorAguaFevereiro = localStorage.getItem('Valor Agua de Fevereiro') || 0;
      ValorAguaMarço = localStorage.getItem('Valor Agua de Março') || 0;
      ValorAguaAbril = localStorage.getItem('Valor Agua de Abril') || 0;
      ValorAguaMaio = localStorage.getItem('Valor Agua de Maio') || 0;
      ValorAguaJunho = localStorage.getItem('Valor Agua de Junho') || 0;
      ValorAguaJulho = localStorage.getItem('Valor Agua de Julho') || 0;
      ValorAguaAgosto = localStorage.getItem('Valor Agua de Agosto') || 0;
      ValorAguaSetembro = localStorage.getItem('Valor Agua de Setembro') || 0;
      ValorAguaOutubro = localStorage.getItem('Valor Agua de Outubro') || 0;
      ValorAguaNovembro = localStorage.getItem('Valor Agua de Novembro') || 0;
      ValorAguaDezembro = localStorage.getItem('Valor Agua de Dezembro') || 0;
      var ctx = document.querySelector(".WaterChart");
      var EnergyChart = new Chart(ctx, {

        type: 'line',
        data: {
          labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
          datasets: [
            {
              label: "Salário",
              data: [ValorLuzJaneiro, ValorLuzFevereiro, ValorLuzMarço, ValorLuzAbril, ValorLuzMaio, ValorLuzJunho, ValorLuzJulho, ValorLuzAgosto, ValorLuzSetembro, ValorLuzOutubro, ValorLuzNovembro, ValorLuzDezembro],
              borderWidth: 2,
              borderColor: [
                'rgba(13, 115, 119, 1)',
                'rgba(13, 115, 119, 1)',
                'rgba(13, 115, 119, 1)',
                'rgba(13, 115, 119, 1)',
                'rgba(13, 115, 119, 1)',
                'rgba(13, 115, 119, 1)'
              ],
              backgroundColor: [
                'rgba(13, 115, 119, 0)'
              ],
              pointBackgroundColor: 'white'
            },
          ]
        }
      });
    }

    if (SelectText === 'Conta de Luz') {
      if (date.split("-")[1] == 12) {
        localStorage.setItem('Valor Luz de Dezembro', valor);
      } else if (date.split("-")[1] == 11) {
        localStorage.setItem('Valor Luz de Novembro', valor);
      } else if (date.split("-")[1] == 10) {
        localStorage.setItem('Valor Luz de Outubro', valor);
      } else if (date.split("-")[1] == 09) {
        localStorage.setItem('Valor Luz de Setembro', valor);
      } else if (date.split("-")[1] == 08) {
        localStorage.setItem('Valor Luz de Agosto', valor);
      } else if (date.split("-")[1] == 07) {
        localStorage.setItem('Valor Luz de Julho', valor);
      } else if (date.split("-")[1] == 06) {
        localStorage.setItem('Valor Luz de Junho', valor);
      } else if (date.split("-")[1] == 05) {
        localStorage.setItem('Valor Luz de Maio', valor);
      } else if (date.split("-")[1] == 04) {
        localStorage.setItem('Valor Luz de Abril', valor);
      } else if (date.split("-")[1] == 03) {
        localStorage.setItem('Valor Luz de Março', valor);
      } else if (date.split("-")[1] == 02) {
        localStorage.setItem('Valor Luz de Fevereiro', valor);
      } else if (date.split("-")[1] == 01) {
        localStorage.setItem('Valor Luz de Janeiro', valor);
      }

      ValorLuzJaneiro = localStorage.getItem('Valor Luz de Janeiro');
      ValorLuzFevereiro = localStorage.getItem('Valor Luz de Fevereiro');
      ValorLuzMarço = localStorage.getItem('Valor Luz de Março');
      ValorLuzAbril = localStorage.getItem('Valor Luz de Abril');
      ValorLuzMaio = localStorage.getItem('Valor Luz de Maio');
      ValorLuzJunho = localStorage.getItem('Valor Luz de Junho');
      ValorLuzJulho = localStorage.getItem('Valor Luz de Julho');
      ValorLuzAgosto = localStorage.getItem('Valor Luz de Agosto');
      ValorLuzSetembro = localStorage.getItem('Valor Luz de Setembro');
      ValorLuzOutubro = localStorage.getItem('Valor Luz de Outubro');
      ValorLuzNovembro = localStorage.getItem('Valor Luz de Novembro');
      ValorLuzDezembro = localStorage.getItem('Valor Luz de Dezembro');
      var ctx = document.getElementsByClassName("EnergyChart");
      var EnergyChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
          datasets: [
            {
              label: "Conta de Agua",
              data: [ValorAguaJaneiro, ValorAguaFevereiro, ValorAguaMarço, ValorAguaAbril, ValorAguaMaio, ValorAguaJunho, ValorAguaJulho, ValorAguaAgosto, ValorAguaSetembro, ValorAguaOutubro, ValorAguaNovembro, ValorAguaDezembro],
              borderWidth: 2,
              borderColor: [
                'rgba(13, 115, 119, 1)'
              ],
              backgroundColor: [
                'rgba(13, 115, 119, 0)',
              ],
              pointBackgroundColor: 'white'
            },
          ]
        },
        options: {
          animation: {
            easing: 'easeInOutQuad',
            duration: 500,
            showLines: false
          },
        }
      });


    }
    window.location.reload();
  }
}
const SaveMonth = document.getElementById("SaveMonth");
const AddSalary = document.getElementById("AddSalary");
SaveMonth.onclick = function () {
  Swal.fire({
    html: '<input class="swal2-input" id="Savedate" type="date">',
    title: 'Qual a data que você está salvando?',
    icon: 'info',
  })
  const btnOk2 = document.querySelector(".swal2-confirm.swal2-styled");
  btnOk2.onclick = function () {
    const Savedate = document.getElementById("Savedate").value.split('-')[1];
    if (Savedate == 12) {
      localStorage.setItem('Soma de Dezembro', soma);
    } else if (Savedate == 11) {
      localStorage.setItem('Soma de Novembro', soma);
    } else if (Savedate == 10) {
      localStorage.setItem('Soma de Outubro', soma);
    } else if (Savedate == 09) {
      localStorage.setItem('Soma de Setembro', soma);
    } else if (Savedate == 08) {
      localStorage.setItem('Soma de Agosto', soma);
    } else if (Savedate == 07) {
      localStorage.setItem('Soma de Julho', soma);
    } else if (Savedate == 06) {
      localStorage.setItem('Soma de Junho', soma);
    } else if (Savedate == 05) {
      localStorage.setItem('Soma de Maio', soma);
    } else if (Savedate == 04) {
      localStorage.setItem('Soma de Abril', soma);
    } else if (Savedate == 03) {
      localStorage.setItem('Soma de Março', soma);
    } else if (Savedate == 02) {
      localStorage.setItem('Soma de Fevereiro', soma);
    } else if (Savedate == 01) {
      localStorage.setItem('Soma de Janeiro', soma);
    }
    soma = 0;
    Salario = null;
  }
}
AddSalary.onclick = function () {
  Swal.fire({
    title: 'Qual o valor que você recebeu no mês?',
    icon: 'info',
    input: 'number',
    inputLabel: 'Qual o salário?',
    html: '<label for="swal2-input" class="swal2-input-label">Qual a data?</label> <input class="swal2-input" id="SalarioDate" type="date">',
  })
  var BtnOK5 = document.querySelector(".swal2-confirm.swal2-styled");
  var inputValue = document.getElementsByClassName("swal2-input")[1];
  var SalarioDate = document.getElementById("SalarioDate");
  BtnOK5.onclick = function () {
    if (SalarioDate.value.split("-")[1] == "12") {
      localStorage.setItem('Salario de Dezembro', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "11") {
      localStorage.setItem('Salario de Novembro', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "10") {
      localStorage.setItem('Salario de Outubro', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "9") {
      localStorage.setItem('Salario de Setembro', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "8") {
      localStorage.setItem('Salario de Agosto', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "7") {
      localStorage.setItem('Salario de Julho', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "6") {
      localStorage.setItem('Salario de Junho', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "5") {
      localStorage.setItem('Salario de Maio', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "4") {
      localStorage.setItem('Salario de Abril', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "3") {
      localStorage.setItem('Salario de Março', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "2") {
      localStorage.setItem('Salario de Fevereiro', inputValue.value);
    } else if (SalarioDate.value.split("-")[1] == "1") {
      localStorage.setItem('Salario de Janeiro', inputValue.value);
    }
    SalarioJaneiro = localStorage.getItem('Salario de Janeiro') || 0;
    SalarioFev = localStorage.getItem('Salario de Fevereiro') || 0;
    SalarioMar = localStorage.getItem('Salario de Março') || 0;
    SalarioAbr = localStorage.getItem('Salario de Abril') || 0;
    SalarioMaio = localStorage.getItem('Salario de Maio') || 0;
    SalarioJun = localStorage.getItem('Salario de Junho') || 0;
    SalarioJul = localStorage.getItem('Salario de Julho') || 0;
    SalarioAgo = localStorage.getItem('Salario de Agosto') || 0;
    SalarioSet = localStorage.getItem('Salario de Setembro') || 0;
    SalarioOut = localStorage.getItem('Salario de Outubro') || 0;
    SalarioNov = localStorage.getItem('Salario de Novembro') || 0;
    SalarioDez = localStorage.getItem('Salario de Dezembro') || 0;
    if (inputValue.value === '' || SalarioDate.value === '') {
      Swal.fire({
        showClass: {
          popup: 'animate__animated animate__tada'
        },
        title: 'Qual o valor que você recebeu no mês?',
        icon: 'info',
        input: 'number',
        inputLabel: 'Digite o salário aqui',
        showCancelButton: true,
        html: '<div class="swal2-validation-message" id="swal2-validation-message" style="display: flex;">Você precisa digitar algo!</div> <label for="swal2-input" class="swal2-input-label">Qual a data?</label> <input class="swal2-input" id="SalarioDate" type="date">',
      })
    } else {
      Swal.fire({
        title: 'Qual o valor que você recebeu no mês?',
        icon: 'info',
        input: 'number',
        inputLabel: 'Digite o salário aqui',
        showCancelButton: true,
        timer: 1,
        html: '<label for="swal2-input" class="swal2-input-label">Qual a data?</label> <input class="swal2-input" id="SalarioDate" type="date">'
      })

      //GRAPH
      if (nome == null) {
        var ctx = document.getElementsByClassName("chart")
        var chartGraph = new Chart(ctx, {

          type: 'line',
          data: {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            datasets: [
              {
                label: "Salário",
                data: [SalarioJaneiro, SalarioFev, SalarioMar, SalarioAbr, SalarioMaio, SalarioJun, SalarioJul, SalarioAgo, SalarioSet, SalarioOut, SalarioNov, SalarioDez],
                borderWidth: 2,
                borderColor: [
                  'rgba(13, 115, 119, 1)'

                ],
                backgroundColor: [
                  'rgba(13, 115, 119, 0)'
                ],
                pointBackgroundColor: 'white'
              },
            ]
          }
        });

      }
    }
    
  }
  window.location.reload();
}




