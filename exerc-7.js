/*7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é 4 e 6.*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isNumeric(num) {
  return !isNaN(num);
}

rl.question('Digite a primeira nota: ', (nota1) => {
  if (!isNumeric(nota1)) {
    console.error('Erro: valor inválido. Digite apenas números.');
    rl.close();
    return;
  }
  if (nota1 < 0 || nota1 > 10) {
    console.error('Erro: a primeira nota deve estar entre 0 e 10.');
    rl.close();
    return;
  }
  rl.question('Digite a segunda nota: ', (nota2) => {
    if (!isNumeric(nota2)) {
      console.error('Erro: valor inválido. Digite apenas números.');
      rl.close();
      return;
    }
    if (nota2 < 0 || nota2 > 10) {
      console.error('Erro: a segunda nota deve estar entre 0 e 10.');
      rl.close();
      return;
    }
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);

    let mediaFinal = (nota1 * 4 + nota2 * 6) / (4 + 6);
    console.log(`A média final do aluno é: ${mediaFinal.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}`);

    rl.close();
  });
});
