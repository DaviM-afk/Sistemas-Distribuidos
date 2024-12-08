##  Sistema de Gerenciamento de Biblioteca - Sistema  Sistemas  Distribuídos


📄Descrição do projeto
-------------------------------------


🛠️Como baixar o repositório e fluxo de trabalho
-------------------------------------
### 📋 Definição do Fluxo de Trabalho

Este projeto utiliza o **Git Flow** simplificado para organizar o desenvolvimento. As principais práticas incluem:

1. **Branch Principal (`main`)**:
   - Contém a versão estável e pronta para produção do projeto.
   - Não realizar commits diretos nesta branch.

2. **Branch de Desenvolvimento (`dev`)**:
   - Principal branch de integração, onde as novas funcionalidades e correções são mescladas antes de serem enviadas para produção.

3. **Branches de Funcionalidades (`feature/nome-da-funcionalidade`)**:
   - Criadas a partir de `dev` para adicionar novas funcionalidades.
   - Mescladas de volta em `dev` após serem concluídas e testadas.

4. **Branches de Correção (`hotfix/nome-da-correção`)**:
   - Criadas a partir de `main` para corrigir problemas críticos na produção.
   - Mescladas de volta em `main` e `dev` após a conclusão.

### 📖 Lista de Comandos Git Utilizados

#### 🔄 Configuração Inicial
```bash
# Clonar o repositório
git clone <url-do-repositorio>

# Entrar no diretório do projeto
cd <nome-do-repositorio>

# Configurar o usuário (apenas se necessário)
git config user.name "Seu Nome"
git config user.email "seuemail@exemplo.com"
```

Pré-requisitos
-------------------------------------
## 📋 Pré-requisitos

Antes de começar, certifique-se de que seu ambiente atenda aos seguintes requisitos:

### 🐳 Docker (opcional para uso com contêineres)
- **Docker Desktop** (Windows/Mac) ou **Docker Engine** (Linux).
  - Instale o Docker Desktop a partir do site oficial: [https://www.docker.com/get-started](https://www.docker.com/get-started).
  - Instale o Docker no WSL2 no Windows: [https://code.visualstudio.com/blogs/2020/03/02/docker-in-wsl2](Usando o docker no Subsistema do Windows para Linux - versão 2)

### 🌐 Node.js e npm
- **Node.js** na versão `18.20.4`.
  - Baixe e instale a versão específica de Node.js pelo site oficial: [https://nodejs.org](https://nodejs.org).
- **npm** (Node Package Manager) na versão mais recente.
  - Após instalar o Node.js, atualize o npm com o comando:
    ```bash
    npm install -g npm@latest
    ```

### ⚛️ React
- O projeto utiliza o **React** para o frontend.
  - Verifique se você possui o React instalado globalmente ou no projeto com o comando:
    ```bash
    npx create-react-app --version
    ```

### ⚙️ Outros Pré-requisitos
- **Editor de Código**: Recomendado o uso do [Visual Studio Code](https://code.visualstudio.com/).
- **Gerenciador de Pacotes**: Se preferir, pode usar o Yarn:
  ```bash
  npm install -g yarn
🚀 Verificação
Após a instalação, execute os comandos abaixo para confirmar as versões instaladas:

### Verificar versão do Node.js
```
node -v
```
### Verificar versão do npm
```
npm -v
```
### Verificar se o Docker está funcionando
```
docker --version
```
>💡Observação
Para executar o projeto como contêiner, é necessário configurar o Dockerfile e o docker-compose.yml (já incluídos no projeto, se aplicável).
Caso não utilize contêineres, o ambiente local com Node.js e React será suficiente para rodar a aplicação.

Contribuindo
-------------------------------------
- Você pode estar usando [CONTRIBUTING.md](https://github.com/DaviM-afk/Sistemas-Distribuidos/blob/main/CONTRIBUTING.md).

Equipe
-------------------------------------
* Scrum Master - [Alex F.](https://github.com/alexfrnn)
* Configuration Manager  -[Davi Morato](https://github.com/DaviM-afk)
* Developer - [Izabelly Freitas](https://github.com/Izahfreitas)
* Developer - [Marcos Vinícius](https://github.com/Marcosvfnascimento)

Licença
-------------------------------------
Pode ser conferida em [LICENSE](https://github.com/DaviM-afk/Sistemas-Distribuidos/blob/main/LICENSE)
