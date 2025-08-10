
# 📊 Calculadora de IMC - Índice de Massa Corporal

Este é um projeto simples de uma **calculadora de IMC** (Índice de Massa Corporal) feita com HTML, CSS e JavaScript. O objetivo é fornecer uma ferramenta prática para calcular o IMC com base no peso e altura informados pelo usuário, exibindo a classificação correspondente.

---

## 🚀 Funcionalidades

- Entrada de **peso (Kg)** e **altura (m)**.
- Botões para **calcular** e **limpar** os campos.
- Resultado dinâmico exibido na tela com o valor do IMC.
- Tabela explicativa com as faixas de classificação do IMC conforme a OMS.

---

## 💻 Tecnologias Utilizadas

- **HTML5** – Estrutura da página.
- **CSS3** – Estilização e layout responsivo.
- **JavaScript** – Lógica do cálculo e interação com o usuário.

---

## 📁 Estrutura de Arquivos

```
projeto-imc/
│
├── index.html
├── reset.css
├── /src
│   └── /style
│       ├── first-section.css
│       ├── second-section.css
│       └── responsividade.css
├── /js
│   └── script.js
```

---

## 🧮 Cálculo do IMC

A fórmula utilizada é:

```
IMC = peso / (altura * altura)
```

### Classificação do IMC

| IMC                  | Classificação       | Obesidade (Grau) |
|----------------------|---------------------|------------------|
| Menor que 18,5       | Magreza             | 0                |
| Entre 18,5 e 24,9    | Normal              | 0                |
| Entre 25,0 e 29,9    | Sobrepeso           | I                |
| Entre 30,0 e 39,9    | Obesidade           | II               |
| Maior ou igual a 40,0| Obesidade Grave     | III              |

---

## ⚙️ Como Executar

1. Baixe ou clone este repositório:
   ```bash
   git clone https://github.com/andersdev23/IMC.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd imc-web
   ```

3. Abra o arquivo `index.html` no navegador.

---

## 📄 Licença

Este projeto está sob a licença MIT. Fique à vontade para usar, modificar e compartilhar.

---

## 🙌 Contribuições

Sugestões e melhorias são bem-vindas! 