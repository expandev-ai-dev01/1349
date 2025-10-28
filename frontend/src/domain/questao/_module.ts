/**
 * @module questao
 * @summary Question management domain module
 * @domain functional
 * @dependencies TanStack Query, Axios, React Hook Form, Zod
 * @version 1.0.0
 * @author Development Team
 * @lastModified 2024-01-15
 */

export * from './types';
export * from './services/questaoService';
export * from './hooks/useQuestaoList';
export * from './hooks/useQuestaoCreate';
export * from './hooks/useQuestaoUpdate';
export * from './hooks/useQuestaoDelete';
export * from './components/QuestaoList';

export const moduleMetadata = {
  name: 'questao',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: ['QuestaoList'],
  publicHooks: ['useQuestaoList', 'useQuestaoCreate', 'useQuestaoUpdate', 'useQuestaoDelete'],
  publicServices: ['questaoService'],
  dependencies: {
    internal: ['@/core/lib/api', '@/core/components'],
    external: ['react', 'react-router-dom', '@tanstack/react-query', 'axios'],
    domains: [],
  },
  exports: {
    components: ['QuestaoList'],
    hooks: ['useQuestaoList', 'useQuestaoCreate', 'useQuestaoUpdate', 'useQuestaoDelete'],
    services: ['questaoService'],
    types: [
      'Questao',
      'TipoQuestao',
      'NivelDificuldade',
      'CreateQuestaoDto',
      'UpdateQuestaoDto',
      'QuestaoListFilters',
    ],
  },
} as const;
