import { useState } from 'react';
import { QuestaoList } from '@/domain/questao/components/QuestaoList';
import type {
  Questao,
  QuestaoListFilters,
  TipoQuestao,
  NivelDificuldade,
} from '@/domain/questao/types';
import { useQuestaoDelete } from '@/domain/questao/hooks/useQuestaoDelete';
import type { QuestaoManagementPageProps } from './types';

/**
 * @page QuestaoManagementPage
 * @summary Question bank management page
 * @domain questao
 * @type management-page
 * @category questao-management
 *
 * @routing
 * - Path: /questoes
 * - Params: none
 * - Query: { tipo?: string, dificuldade?: string, tema?: string }
 * - Guards: Authentication required
 *
 * @layout
 * - Layout: RootLayout
 * - Sections: Header, Filters, Question List
 * - Navigation: None
 *
 * @data
 * - Sources: Question API
 * - Loading: Skeleton loading states
 * - Caching: 2 minutes stale time
 */
export const QuestaoManagementPage = (props: QuestaoManagementPageProps) => {
  const [filters, setFilters] = useState<QuestaoListFilters>({});
  const { deleteQuestao } = useQuestaoDelete({
    onSuccess: () => {
      alert('Questão excluída com sucesso!');
    },
    onError: (error: Error) => {
      alert(`Erro ao excluir questão: ${error.message}`);
    },
  });

  const handleFilterChange = (key: keyof QuestaoListFilters, value: string) => {
    if (value === '') {
      const newFilters = { ...filters };
      delete newFilters[key];
      setFilters(newFilters);
    } else {
      setFilters({ ...filters, [key]: value });
    }
  };

  const handleView = (questao: Questao) => {
    alert(`Visualizar questão: ${questao.enunciado}`);
  };

  const handleEdit = (questao: Questao) => {
    alert(`Editar questão: ${questao.enunciado}`);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta questão?')) {
      try {
        await deleteQuestao(id);
      } catch (error: unknown) {
        console.error('Erro ao excluir questão:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Banco de Questões</h2>
            <p className="mt-1 text-sm text-gray-600">
              Gerencie as questões disponíveis para criação de provas
            </p>
          </div>
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            onClick={() => alert('Criar nova questão')}
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Nova Questão
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Questão
            </label>
            <select
              id="tipo"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              value={filters.tipo_questao || ''}
              onChange={(e) => handleFilterChange('tipo_questao', e.target.value as TipoQuestao)}
            >
              <option value="">Todos os tipos</option>
              <option value="multipla_escolha">Múltipla Escolha</option>
              <option value="verdadeiro_falso">Verdadeiro/Falso</option>
              <option value="associacao_colunas">Associação de Colunas</option>
              <option value="mapa_interativo">Mapa Interativo</option>
            </select>
          </div>

          <div>
            <label htmlFor="dificuldade" className="block text-sm font-medium text-gray-700 mb-1">
              Nível de Dificuldade
            </label>
            <select
              id="dificuldade"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              value={filters.nivel_dificuldade || ''}
              onChange={(e) =>
                handleFilterChange('nivel_dificuldade', e.target.value as NivelDificuldade)
              }
            >
              <option value="">Todas as dificuldades</option>
              <option value="facil">Fácil</option>
              <option value="medio">Médio</option>
              <option value="dificil">Difícil</option>
            </select>
          </div>

          <div>
            <label htmlFor="tema" className="block text-sm font-medium text-gray-700 mb-1">
              Tema Geográfico
            </label>
            <input
              type="text"
              id="tema"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              placeholder="Filtrar por tema"
              value={filters.tema_geografico || ''}
              onChange={(e) => handleFilterChange('tema_geografico', e.target.value)}
            />
          </div>
        </div>
      </div>

      <QuestaoList
        filters={filters}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default QuestaoManagementPage;
