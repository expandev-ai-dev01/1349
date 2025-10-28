import type { Questao, QuestaoListFilters } from '../../types';

export interface QuestaoListProps {
  filters?: QuestaoListFilters;
  onEdit?: (questao: Questao) => void;
  onDelete?: (id: string) => void;
  onView?: (questao: Questao) => void;
}
