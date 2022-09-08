console.log('---------- CALCULADORA SIMPLES ----------');

//const { exit } = require('process');

//Import do arquivo que realiza a funcao de calcular 
const { calcular } = require('./modulos/calculadora.js');

//Import da biblioteca readline
var readline = require('readline');

//Instacia o objeto para interagir com o usuario
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada do valor 1
entradaDados.question('Digite o numero 1: \n\t', function (valor1) {

    //Declarando a variavel e convertendo o valor digitado pelo usuario em float
    let num1 = parseFloat(valor1);

    //typeof() - verifica qual o tipo de dados de uma varivel ou um objeto
    //console.log(typeof(valor1));
    //console.log(typeof(num1));
      
    entradaDados.question('Digite o numero 2: \n\t', function (valor2) {
        let num2 = parseFloat(valor2);

        entradaDados.question('Escolha a operacao matematica a ser calculada: \nSomar[+] \nSubtrair[-] \nMultiplicar[*] \nDividir[/] \n', function (opcao) {
            //Declarando a variavel que vai receber o tipo de operacao matematica e 
            //convertendo o texto digitado em MAIUSCULO
            //toUpperCase() - converte em MAIUSCULO
            //toLowerCase() - converte em minusculo
            
            let operacao = opcao.toUpperCase();
            let resultado;

            //Chama a funcao que realiza os calculos matematicos 
            //resultado = calcular(num1, num2, operacao);
            if (resultado = calcular(num1, num2, operacao)) 
                console.log('O resultado é: ' + resultado);      
        });
    });
});