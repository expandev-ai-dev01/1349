import type { UpdateQuestaoDto, Questao } from '../../types';

export interface UseQuestaoUpdateOptions {
  onSuccess?: (questao: Questao) => void;
  onError?: (error: Error) => void;
}

export interface UseQuestaoUpdateReturn {
  update: (id: string, data: UpdateQuestaoDto) => Promise<Questao>;
  isUpdating: boolean;
  error: Error | null;
}
