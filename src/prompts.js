export function askFileName() {
  return new Promise((resolve) => {
    process.stdout.write("Digite o nome do arquivo que voce quer ler: ");
    process.stdin.once("data", (data) => resolve(data.toString().trim()));
  });
}

export function askToContinue() {
  return new Promise((resolve) => {
    process.stdout.write("Deseja ler mais algum arquivo? (S/N): ");
    process.stdin.once("data", (data) => {
      const resp = data.toString().trim().toLowerCase();
      resolve(resp !== "n");
    });
  });
}
