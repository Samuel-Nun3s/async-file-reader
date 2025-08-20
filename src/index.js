import { readFileAsync } from "./reader.js";
import { askFileName, askToContinue } from "./prompts.js";

async function main() {
  let shouldContinue = true;

  while (shouldContinue) {
    const filename = await askFileName();

    try {
      const content = await readFileAsync(filename);
      console.log("============================================");
      console.log(`Conteudo do arquivo ${filename}: `);
      console.log(content);
    } catch (err) {
      console.log(err);
    }

    shouldContinue = await askToContinue();
  }

  console.log("Programa finalizado!");
  process.exit();
}

main();
