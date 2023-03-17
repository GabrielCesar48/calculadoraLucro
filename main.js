const inputBuyRef = document.querySelector('#inputBuy');

const inputSellRef = document.querySelector('#inputSell');

const lucroVendaRef = document.querySelector('#lucroVenda')

const percentualVendaRef = document.querySelector('#percentualVenda');

const btnCalcularRef = document.querySelector('#btnCalcular');




btnCalcularRef.addEventListener('click',  () => {

    var buyValor = parseFloat(inputBuyRef.value.replace(",","."))
    var sellValor = parseFloat(inputSellRef.value.replace(",","."))

    // var buyValorFormated =parseFloat(buyValor.toFixed(2).replace(".",","));
    // var sellValorFormated =parseFloat(sellValor.toFixed(2).replace(".",","));
    

    var lucro = (sellValor - buyValor)
    var porcentagem = ((sellValor / buyValor)-1) *100

    var resultadoLucro = `
    <p>R$ ${lucro.toFixed(2)}</p>
    
    `
    var resultadoPorcentagem = `
    <p>${porcentagem.toFixed(2)}%</p>
    `

    lucroVendaRef.innerHTML = resultadoLucro

    percentualVendaRef.innerHTML = resultadoPorcentagem

    inputBuyRef.value = ''
    inputSellRef.value = ''


})