/*3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
Calcular e escrever o valor do novo salário.*/



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isNumeric(num) {
  return !isNaN(num);
}

rl.question('Digite o salário mensal atual: ', (salarioAtual) => {
  if (!isNumeric(salarioAtual)) {
    console.error('Erro: valor inválido. Digite apenas números.');
    rl.close();
    return;
  }

  rl.question('Digite o percentual de reajuste: ', (reajuste) => {
    if (!isNumeric(reajuste)) {
      console.error('Erro: valor inválido. Digite apenas números.');
      rl.close();
      return;
    }
    salarioAtual = parseFloat(salarioAtual);
    reajuste /= 100;
    const novoSalario = salarioAtual + (salarioAtual * reajuste);

    console.log(`Salário atual: R$${salarioAtual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    console.log(`Novo salário: R$${novoSalario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);

    rl.close();
  });
});

