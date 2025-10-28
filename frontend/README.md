# Sistema de Provas de Geografia - 6º Ano

Sistema completo para aplicação de provas de geografia para alunos do sexto ano do ensino fundamental 2.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Axios 1.7.7
- Zustand 5.0.1
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── main.tsx           # Entry point
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Providers globais
│   └── router.tsx         # Configuração de rotas
├── core/                   # Componentes e lógica compartilhada
│   ├── components/        # Componentes genéricos
│   ├── lib/              # Configurações de bibliotecas
│   ├── types/            # Tipos globais
│   └── utils/            # Funções utilitárias
├── domain/                # Domínios de negócio
├── pages/                 # Páginas da aplicação
│   └── layouts/          # Layouts compartilhados
└── assets/               # Recursos estáticos
    └── styles/           # Estilos globais
```

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:3001`

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Configuração

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Funcionalidades

- ✅ Estrutura base configurada
- ✅ Roteamento com React Router
- ✅ Gerenciamento de estado com TanStack Query
- ✅ Integração com API REST
- ✅ Componentes de UI base
- ✅ Sistema de layouts
- ⏳ Funcionalidades de domínio (a serem implementadas)

## Próximos Passos

1. Implementar autenticação
2. Criar módulo de gestão de provas
3. Desenvolver sistema de aplicação de avaliações
4. Implementar relatórios e análises
5. Adicionar recursos multimídia

## Licença

Todos os direitos reservados © 2024