import type { QuestaoListFilters, Questao } from '../../types';

export interface UseQuestaoListOptions {
  filters?: QuestaoListFilters;
  enabled?: boolean;
}

export interface UseQuestaoListReturn {
  questoes: Questao[] | undefined;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}
