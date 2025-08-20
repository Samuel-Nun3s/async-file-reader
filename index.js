const fs = require('fs');

function main() {
  console.log('============================================');
  process.stdout.write("Digite o nome do arquivo que voce quer ler: ");

  process.stdin.once("data", (data) => {
    const filename = data.toString().trim();

    readFiles(filename);
  });
}

function readFiles(name) {
  fs.readFile(name, 'utf8', (err, data) => {
    if (err) {
      return console.log("Arquivo nao encontrado!");
    }

    console.log('============================================');
    console.log(`Conteudo do arquivo ${name}: ${data}`);
  });

  setTimeout(() => {
    askToContinue();
  }, 3000);
  
}

function askToContinue() {
  console.log();
  process.stdout.write("Deseja ler mais algum arquivo? (S/N): ");
  console.log();

  process.stdin.once("data", (exit) => {
    const resp = exit.toString().trim();
    
    if (resp[0].toLowerCase() === 'n') {
      console.log('Programa finalizado!');
      return process.exit();
    }

    main();
  });
}

main();
