import { useQuery } from '@tanstack/react-query';
import { questaoService } from '../../services/questaoService';
import type { UseQuestaoListOptions, UseQuestaoListReturn } from './types';

/**
 * @hook useQuestaoList
 * @summary Hook for fetching and managing list of questions
 * @domain questao
 * @type domain-hook
 * @category data
 *
 * @description
 * Provides question list with filtering capabilities using TanStack Query
 * for caching and state management.
 */
export const useQuestaoList = (options: UseQuestaoListOptions = {}): UseQuestaoListReturn => {
  const { filters, enabled = true } = options;

  const queryKey = ['questoes', filters];

  const { data, isLoading, error, refetch } = useQuery({
    queryKey,
    queryFn: () => questaoService.list(filters),
    enabled,
    staleTime: 2 * 60 * 1000,
  });

  return {
    questoes: data,
    isLoading,
    error: error as Error | null,
    refetch,
  };
};
