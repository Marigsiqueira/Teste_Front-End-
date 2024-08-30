/* Função Regra de Três */

function RegradeTres(){

    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const valor3 = parseFloat(document.getElementById('valor3').value);
    const valorX = document.getElementById('valor4');
    
    const calculo = (valor2 * valor3) / valor1;

    valorX.placeholder = calculo.toFixed(2);
}

