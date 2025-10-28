# Sistema de Aplicação de Provas de Geografia - Backend API

Backend API para o Sistema de Aplicação de Provas de Geografia para alunos do 6º ano do ensino fundamental 2.

## Tecnologias

- **Runtime**: Node.js
- **Framework**: Express.js
- **Linguagem**: TypeScript
- **Arquitetura**: REST API
- **Armazenamento**: In-memory (arrays e objetos)

## Estrutura do Projeto

```
src/
├── api/                    # API Controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   ├── v1/                 # Version 1 routes
│   └── index.ts            # Main router
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── tests/                  # Global test utilities
└── server.ts               # Application entry point
```

## Instalação

```bash
# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env
```

## Desenvolvimento

```bash
# Modo desenvolvimento com hot reload
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Executar testes
npm test

# Executar testes com coverage
npm run test:coverage

# Lint
npm run lint
npm run lint:fix
```

## Endpoints da API

A API está disponível em:
- **Desenvolvimento**: `http://localhost:3000/api/v1`
- **Produção**: `https://api.yourdomain.com/api/v1`

### Health Check
```
GET /health
```

## Configuração

Variáveis de ambiente disponíveis no arquivo `.env`:

- `NODE_ENV`: Ambiente de execução (development/production)
- `PORT`: Porta do servidor (padrão: 3000)
- `API_VERSION`: Versão da API (padrão: v1)
- `CORS_ORIGINS`: URLs permitidas para CORS
- `CACHE_TTL`: Tempo de vida do cache em segundos
- `CACHE_CHECK_PERIOD`: Período de verificação do cache

## Padrões de Código

- **Indentação**: 2 espaços
- **Aspas**: Single quotes
- **Ponto e vírgula**: Obrigatório
- **Comprimento de linha**: Máximo 120 caracteres
- **Imports**: Organizados (externos → internos → relativos)

## Testes

Todos os testes devem ser colocados junto aos arquivos fonte:
- Testes unitários: `*.test.ts`
- Testes de integração: `*Integration.ts`
- Utilitários globais de teste: `tests/` directory

## Versionamento da API

A API utiliza versionamento por URL path:
- Versão atual: `/api/v1`
- Futuras versões: `/api/v2`, `/api/v3`, etc.

## Licença

ISC