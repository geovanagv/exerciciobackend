/*9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.*/


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function calcularResultado(numero1, numero2) {
  if (isNaN(numero1) || isNaN(numero2)) {
    console.error('Erro: valores inválidos. Digite apenas números.');
    return; 
  }
  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);
  const resultado = (numero1 + numero2) * numero1;
  return resultado;
}
rl.question('Digite o primeiro número: ', (numero1) => {
  rl.question('Digite o segundo número: ', (numero2) => {
    const resultado = calcularResultado(numero1, numero2);
    console.log(`O resultado da operação é: ${resultado}`);
    rl.close();
  });
});
