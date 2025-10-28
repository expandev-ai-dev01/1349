import { useMutation, useQueryClient } from '@tanstack/react-query';
import { questaoService } from '../../services/questaoService';
import type { UseQuestaoUpdateOptions, UseQuestaoUpdateReturn } from './types';
import type { UpdateQuestaoDto } from '../../types';

/**
 * @hook useQuestaoUpdate
 * @summary Hook for updating questions
 * @domain questao
 * @type domain-hook
 * @category mutation
 *
 * @description
 * Provides question update functionality with automatic cache invalidation.
 */
export const useQuestaoUpdate = (options: UseQuestaoUpdateOptions = {}): UseQuestaoUpdateReturn => {
  const { onSuccess, onError } = options;
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateQuestaoDto }) =>
      questaoService.update(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['questoes'] });
      queryClient.invalidateQueries({ queryKey: ['questao', data.id_questao] });
      onSuccess?.(data);
    },
    onError: (err: Error) => {
      onError?.(err);
    },
  });

  return {
    update: (id, data) => mutateAsync({ id, data }),
    isUpdating: isPending,
    error: error as Error | null,
  };
};
