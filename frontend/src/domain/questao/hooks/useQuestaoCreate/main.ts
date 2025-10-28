import { useMutation, useQueryClient } from '@tanstack/react-query';
import { questaoService } from '../../services/questaoService';
import type { UseQuestaoCreateOptions, UseQuestaoCreateReturn } from './types';

/**
 * @hook useQuestaoCreate
 * @summary Hook for creating new questions
 * @domain questao
 * @type domain-hook
 * @category mutation
 *
 * @description
 * Provides question creation functionality with automatic cache invalidation.
 */
export const useQuestaoCreate = (options: UseQuestaoCreateOptions = {}): UseQuestaoCreateReturn => {
  const { onSuccess, onError } = options;
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: questaoService.create,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['questoes'] });
      onSuccess?.(data);
    },
    onError: (err: Error) => {
      onError?.(err);
    },
  });

  return {
    create: mutateAsync,
    isCreating: isPending,
    error: error as Error | null,
  };
};
