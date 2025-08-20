import fs from 'fs';

export function readFileAsync(name) {
  return new Promise((resolve, reject) => {
    fs.readFile(name, 'utf8', (err, data) => {
      if (err) reject("Arquivo nao encontrado!");
      else resolve(data);
    });
  });
}
