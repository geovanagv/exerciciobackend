/*4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e 
dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os 
impostos de 45%, escrever um script para ler o custo de fábrica de um carro, 
calcular e escrever o custo final ao consumidor.*/


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function isNumeric(num) {
  return !isNaN(num);
}
rl.question('Digite o custo de fábrica do carro: ', (custoFabrica) => {
  if (!isNumeric(custoFabrica)) {
    console.error('Erro: valor inválido. Digite apenas números.');
    rl.close();
    return;
  }
  custoFabrica = parseFloat(custoFabrica);

  const percentualDistribuidor = 0.28;
  const percentualImpostos = 0.45;

  let custoFinal = custoFabrica + (custoFabrica * percentualDistribuidor) + (custoFabrica * percentualImpostos);
  console.log(`O custo final ao consumidor é: R$ ${custoFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);

  rl.close();
});


