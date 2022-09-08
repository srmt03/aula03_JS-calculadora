/*******************************************************
 * Objetivo: Arquivo que contem todas as funcoes para calculos matematicos
 * Autor: Samuel Matos
 * Data de Criacao: 01/08/2022
 * Data de Modificacao: 
 * Versao: 1.0
 ******************************************************/
//Metodo de criacao de funcao utilizando o padrao de Call Back 
const calcular = function(valor1, valor2, opcaoCalculo) 
{
    let num1 = valor1;
    let num2 = valor2;
    let operacao = opcaoCalculo.toUpperCase();
    let resultado;
    let erro = false;

    //isNaN() - funcao para validar se o conteudo de uma variavel e numero 
    if (isNaN(num1) || isNaN(num2)) 
        {
            erro = true;
            console.log('ERRO: Não é um número válido');
        }
        else
        {
            //Colocar chaves "{}"" em ifelse se torna opicional quando temos apenas UMA(1) linha de código dentro do bloco, a partir disso se torna obrigatória
            // if (operacao == 'SOMAR' || operacao == '+') 
            //     resultado = num1 + num2;
            // else if (operacao == 'SUBTRAIR' || operacao == '-')    
            //     resultado = num1 - num2;
            // else if (operacao == 'MULTIPLICAR' || operacao == '*') 
            //     resultado = num1 * num2;
            // else if (operacao == 'DIVIDIR' || operacao == '/') 
            //     resultado = num1 / num2;
            // else 
            // {
            //     resultado = 'ERRO: Não  foi escolhida uma operação válida';
            //     erro = true;
            // }
            switch (operacao) 
            {
                case 'SOMAR':
                case '+':
                    resultado = somar(num1, num2);
                    break;
                case 'SUBTRAIR':
                case '-':
                    resultado = subtrair(num1, num2);
                    break;
                case 'MULTIPLICAR':
                case '*':
                    resultado = multiplicar(num1, num2);
                    break;
                case 'DIVIDIR':
                case '/':
                    if (num2 == 0) 
                    {
                        erro = true;
                        console.log('ERRO: Não foi escolhida um numero válido');
                    } else 
                        resultado = dividir(num1, num2);
                        break;
                default:
                    erro = true;
                    console.log('ERRO: Não foi escolhida uma operação válida');
                    break;
            }
        }
        if (erro) 
            return false;
        else 
            return resultado.toFixed(2); 
}

//Modelo de função Arrow Function 
const somar = (valor1, valor2) => parseFloat(valor1) + parseFloat(valor2);
const subtrair = (valor1, valor2) => parseFloat(valor1) - parseFloat(valor2);
const multiplicar = (valor1, valor2) => parseFloat(valor1) * parseFloat(valor2);
const dividir = (valor1, valor2) => parseFloat(valor1) / parseFloat(valor2);

    module.exports = {
        calcular
    }
