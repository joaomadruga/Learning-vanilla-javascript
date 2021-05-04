Swal.fire({
    title: 'Qual o valor que você recebeu esse mês?',
    icon: 'info',
    input: 'number',
    inputLabel: 'Digite o salário aqui',
    showCancelButton: true,  
})
var BtnOK = document.querySelector(".swal2-confirm.swal2-styled");
var inputValue = document.querySelector(".swal2-input");
var BtnCancel = document.querySelector(".swal2-cancel.swal2-styled");
var Salario = inputValue.value;
BtnOK.onclick = function(){
    if(inputValue.value === ''){
        Swal.fire({
            showClass: {
                popup: 'animate__animated animate__tada'
              },
            title: 'Qual o valor que você recebeu esse mês?',
            icon: 'info',
            input: 'number',
            inputLabel: 'Digite o salário aqui',
            showCancelButton: true,  
            html: '<div class="swal2-validation-message" id="swal2-validation-message" style="display: flex;">Você precisa digitar algo!</div>'
        })   
    }else{
        Swal.fire({
        title: 'Qual o valor que você recebeu esse mês?',
        icon: 'info',
        input: 'number',
        inputLabel: 'Digite o salário aqui',
        showCancelButton: true,  
        timer: 1,
        })
    console.log(inputValue.value);
}}


