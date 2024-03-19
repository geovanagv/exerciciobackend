/*1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética 
das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado 
para média inferior a 7.0.*/


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

  rl.question('Digite a segunda nota: ', (nota2) => {
    if (!isNumeric(nota2)) {
      console.error('Erro: valor inválido. Digite apenas números.');
      rl.close();
      return;
    }
    rl.question('Digite a terceira nota: ', (nota3) => {
      if (!isNumeric(nota3)) {
        console.error('Erro: valor inválido. Digite apenas números.');
        rl.close();
        return;
      }

      rl.question('Digite a quarta nota: ', (nota4) => {
        if (!isNumeric(nota4)) {
          console.error('Erro: valor inválido. Digite apenas números.');
          rl.close();
          return;
        }
        nota1 = Number(nota1);
        nota2 = Number(nota2);
        nota3 = Number(nota3);
        nota4 = Number(nota4);
        const media = (nota1 + nota2 + nota3 + nota4) / 4;
        console.log(`Média: ${media.toFixed(1)} - ${media >= 7.0 ? 'Aprovado' : 'Reprovado'}`);

        rl.close();
      });
    });
  });
});
