import { useQuestaoList } from '../../hooks/useQuestaoList';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { ErrorMessage } from '@/core/components/ErrorMessage';
import type { QuestaoListProps } from './types';
import {
  getQuestaoListClassName,
  getQuestaoCardClassName,
  getQuestaoHeaderClassName,
  getQuestaoActionsClassName,
  getQuestaoButtonClassName,
  getBadgeClassName,
} from './variants';

/**
 * @component QuestaoList
 * @summary Displays list of questions with actions
 * @domain questao
 * @type domain-component
 * @category display
 *
 * @description
 * Lists questions with filtering, viewing, editing, and deletion capabilities.
 */
export const QuestaoList = (props: QuestaoListProps) => {
  const { filters, onEdit, onDelete, onView } = props;

  const { questoes, isLoading, error, refetch } = useQuestaoList({ filters });

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorMessage title="Erro ao carregar questões" message={error.message} onRetry={refetch} />
    );
  }

  if (!questoes || questoes.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhuma questão encontrada</h3>
        <p className="mt-1 text-sm text-gray-500">
          Comece criando uma nova questão para o banco de dados.
        </p>
      </div>
    );
  }

  return (
    <div className={getQuestaoListClassName({})}>
      {questoes.map((questao) => (
        <div key={questao.id_questao} className={getQuestaoCardClassName()}>
          <div className={getQuestaoHeaderClassName()}>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={getBadgeClassName('tipo')}>{questao.tipo_questao}</span>
                <span className={getBadgeClassName('dificuldade')}>
                  {questao.nivel_dificuldade}
                </span>
                <span className="text-xs text-gray-500">{questao.valor_pontos} pontos</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{questao.enunciado}</h3>
              <p className="text-sm text-gray-600">Tema: {questao.tema_geografico}</p>
            </div>
            <div className={getQuestaoActionsClassName()}>
              {onView && (
                <button
                  onClick={() => onView(questao)}
                  className={getQuestaoButtonClassName('view')}
                  aria-label="Visualizar questão"
                >
                  Visualizar
                </button>
              )}
              {onEdit && (
                <button
                  onClick={() => onEdit(questao)}
                  className={getQuestaoButtonClassName('edit')}
                  aria-label="Editar questão"
                >
                  Editar
                </button>
              )}
              {onDelete && (
                <button
                  onClick={() => onDelete(questao.id_questao)}
                  className={getQuestaoButtonClassName('delete')}
                  aria-label="Excluir questão"
                >
                  Excluir
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
