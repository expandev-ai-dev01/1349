export interface UseQuestaoDeleteOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export interface UseQuestaoDeleteReturn {
  deleteQuestao: (id: string) => Promise<void>;
  isDeleting: boolean;
  error: Error | null;
}
