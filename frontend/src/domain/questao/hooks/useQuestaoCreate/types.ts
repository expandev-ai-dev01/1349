import type { CreateQuestaoDto, Questao } from '../../types';

export interface UseQuestaoCreateOptions {
  onSuccess?: (questao: Questao) => void;
  onError?: (error: Error) => void;
}

export interface UseQuestaoCreateReturn {
  create: (data: CreateQuestaoDto) => Promise<Questao>;
  isCreating: boolean;
  error: Error | null;
}
