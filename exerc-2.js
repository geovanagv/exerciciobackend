
/*2. Escreva um script para ler o número total de eleitores de um município, 
o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um 
representa em relação ao total de eleitores.*/ 



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function isNumeric(num) {
  return !isNaN(num);
}
rl.question('Digite o número total de eleitores: ', (totalEleitores) => {
  if (!isNumeric(totalEleitores)) {
    console.error('Erro: valor inválido. Digite apenas números.');
    rl.close();
    return;
  }
  rl.question('Digite o número de votos em branco: ', (votosBranco) => {
    if (!isNumeric(votosBranco)) {
      console.error('Erro: valor inválido. Digite apenas números.');
      rl.close();
      return;
    }
    rl.question('Digite o número de votos nulos: ', (votosNulos) => {
      if (!isNumeric(votosNulos)) {
        console.error('Erro: valor inválido. Digite apenas números.');
        rl.close();
        return;
      }
      rl.question('Digite o número de votos válidos: ', (votosValidos) => {
        if (!isNumeric(votosValidos)) {
          console.error('Erro: valor inválido. Digite apenas números.');
          rl.close();
          return;
        }
        if (votosValidos > totalEleitores) {
          console.error('Erro: número de votos válidos não pode ser maior que o total de eleitores.');
          rl.close();
          return;
        }
        totalEleitores = parseInt(totalEleitores);
        votosBranco = parseInt(votosBranco);
        votosNulos = parseInt(votosNulos);
        votosValidos = parseInt(votosValidos);

        let percentualBranco = (votosBranco / totalEleitores) * 100;
        let percentualNulos = (votosNulos / totalEleitores) * 100;
        let percentualValidos = (votosValidos / totalEleitores) * 100;

        percentualBranco = percentualBranco.toFixed(2);
        percentualNulos = percentualNulos.toFixed(2);
        percentualValidos = percentualValidos.toFixed(2);

        console.log('**Apuração dos Votos**');
        console.log(`Total de Eleitores: ${totalEleitores}`);
        console.log(`Votos em Branco: ${votosBranco} (${percentualBranco}%)`);
        console.log(`Votos Nulos: ${votosNulos} (${percentualNulos}%)`);
        console.log(`Votos Válidos: ${votosValidos} (${percentualValidos}%)`);

        rl.close();
      });
    });
  });
});

