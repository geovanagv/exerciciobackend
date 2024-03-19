/*6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. 
Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, 
o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.*/


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function isNumeric(num) {
  return !isNaN(num);
}
rl.question('Digite o número de carros vendidos: ', (numCarrosVendidos) => {
  if (!isNumeric(numCarrosVendidos)) {
    console.error('Erro: valor inválido. Digite apenas números.');
    rl.close();
    return;
  }

  rl.question('Digite o valor total das vendas: ', (valorTotalVendas) => {
    if (!isNumeric(valorTotalVendas)) {
      console.error('Erro: valor inválido. Digite apenas números.');
      rl.close();
      return;
    }

    rl.question('Digite o salário fixo: ', (salarioFixo) => {
      if (!isNumeric(salarioFixo)) {
        console.error('Erro: valor inválido. Digite apenas números.');
        rl.close();
        return;
      }

      rl.question('Digite o valor por carro vendido: ', (valorPorCarro) => {
        if (!isNumeric(valorPorCarro)) {
          console.error('Erro: valor inválido. Digite apenas números.');
          rl.close();
          return;
        }

        numCarrosVendidos = parseInt(numCarrosVendidos);
        valorTotalVendas = parseFloat(valorTotalVendas);
        salarioFixo = parseFloat(salarioFixo);
        valorPorCarro = parseFloat(valorPorCarro);

        const comissaoVendas = valorTotalVendas * 0.05;

        let comissaoCarros = numCarrosVendidos * valorPorCarro;
        let salarioFinal = salarioFixo + comissaoCarros + comissaoVendas;

        console.log(`O salário final do vendedor é: R$ ${salarioFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);

        rl.close();
      });
    });
  });
});

