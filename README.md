# 🎮 LeveUP

CRUD completo desenvolvido com **NestJS** para o gerenciamento de uma **Loja de Games**, com foco nas entidades **Jogos** e **Categorias**.

![Banner](https://github.com/user-attachments/assets/1513d4d8-ed44-4a81-9a85-d823d4a665db)

---

## 🚀 Tecnologias Utilizadas

- ✅ [NestJS](https://nestjs.com/)
- ✅ [TypeORM](https://typeorm.io/)
- ✅ [MySQL](https://www.mysql.com/)
- ✅ [Insomnia](https://insomnia.rest/) — para testar as rotas da API

---

## 🧱 Entidades do Projeto

### 🗂️ Categoria
| Campo | Tipo   |
|-------|--------|
| id    | number |
| nome  | string |

### 🎮 Jogo
| Campo     | Tipo   |
|-----------|--------|
| id        | number |
| titulo    | string |
| descricao | string |
| preco     | number |
| categoria | Relação com Categoria |

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/leveup.git
cd leveup

2.  Instale as dependências
npm install

3. Configure o banco de dados MySQL no arquivo .env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=leveup

4. Rode a aplicação
npm run start:dev

📬 Testando com Insomnia
Use o Insomnia para testar todas as rotas da API:

📁 Categoria
GET /categoria

GET /categoria/:id

POST /categoria

PUT /categoria/:id

DELETE /categoria/:id

🎮 Jogos
GET /jogos

GET /jogos/:id

POST /jogos

PUT /jogos/:id

DELETE /jogos/:id
