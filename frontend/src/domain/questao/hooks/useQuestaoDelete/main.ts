import { useMutation, useQueryClient } from '@tanstack/react-query';
import { questaoService } from '../../services/questaoService';
import type { UseQuestaoDeleteOptions, UseQuestaoDeleteReturn } from './types';

/**
 * @hook useQuestaoDelete
 * @summary Hook for deleting questions
 * @domain questao
 * @type domain-hook
 * @category mutation
 *
 * @description
 * Provides question deletion functionality with automatic cache invalidation.
 */
export const useQuestaoDelete = (options: UseQuestaoDeleteOptions = {}): UseQuestaoDeleteReturn => {
  const { onSuccess, onError } = options;
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: questaoService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['questoes'] });
      onSuccess?.();
    },
    onError: (err: Error) => {
      onError?.(err);
    },
  });

  return {
    deleteQuestao: mutateAsync,
    isDeleting: isPending,
    error: error as Error | null,
  };
};
