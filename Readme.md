# 📂 Leitor de Arquivos Assíncrono

Um sistema simples em **Node.js** para leitura assíncrona de arquivos de texto.
O programa permite que o usuário escolha qual arquivo deseja ler e, ao final, decide se quer continuar lendo outros arquivos ou encerrar a execução.

---

## 🚀 Tecnologias Utilizadas

* [Node.js](https://nodejs.org/)
* Módulo nativo **fs** para leitura de arquivos
* Módulo nativo **path** para manipulação de caminhos

---

## 📂 Estrutura de Pastas

```
meu-leitor-async/
├── files/              # Pasta onde ficam os arquivos de texto a serem lidos
│   ├── exemplo1.txt
│   ├── exemplo2.txt
│   └── ...
├── src/                # Código-fonte
│   ├── index.js        # Ponto de entrada do sistema
│   ├── reader.js       # Funções responsáveis pela leitura de arquivos
│   └── prompt.js       # Funções para interação com o usuário
├── package.json
└── README.md
```

---

## 📖 Como Funciona

1. O usuário inicia o programa:

   ```bash
   node src/index.js
   ```
2. O sistema pergunta qual arquivo da pasta `files/` deseja ser lido.
3. O conteúdo do arquivo é exibido no terminal.
4. Ao final, o programa pergunta se o usuário deseja:

   * Ler outro arquivo
   * Ou encerrar a execução

---

## 🛠️ Instalação e Uso

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/meu-leitor-async.git
   ```
2. Entre no diretório:

   ```bash
   cd meu-leitor-async
   ```
3. Instale as dependências (caso existam no futuro):

   ```bash
   npm install
   ```
4. Coloque seus arquivos de texto dentro da pasta `files/`.
5. Execute:

   ```bash
   node src/index.js
   ```

---

## 💡 Exemplos de Uso

### Lendo um arquivo chamado `teste.txt`:

```
Digite o nome do arquivo que deseja ler: teste.txt
----------------------------------------
[conteúdo do arquivo exibido aqui]
----------------------------------------
Deseja ler outro arquivo? (s/n):
```

---

## 📌 Próximos Passos

* Adicionar suporte para escolha de arquivos via menu (lista numerada).
* Melhorar o tratamento de erros para arquivos inexistentes.
* Adicionar testes automatizados.
* Publicar como pacote NPM no futuro.

---

## 📄 Licença

Este projeto é livre para uso e modificação.