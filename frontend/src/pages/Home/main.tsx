import { useNavigate } from 'react-router-dom';

/**
 * @page HomePage
 * @summary Home page of the application
 * @domain core
 * @type page-component
 * @category public
 */
export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Bem-vindo ao Sistema de Provas de Geografia
        </h2>
        <p className="text-gray-600">
          Este é um sistema completo para aplicação de provas de geografia para alunos do 6º ano do
          ensino fundamental.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          onClick={() => navigate('/questoes')}
          className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow text-left"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
            <svg
              className="w-6 h-6 text-primary-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Banco de Questões</h3>
          <p className="text-sm text-gray-600">
            Gerencie questões com recursos multimídia e diferentes tipos de avaliação.
          </p>
        </button>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-secondary-100 rounded-lg mb-4">
            <svg
              className="w-6 h-6 text-secondary-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Criar Provas</h3>
          <p className="text-sm text-gray-600">
            Crie e configure provas selecionando questões do banco de dados.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Analisar Resultados</h3>
          <p className="text-sm text-gray-600">
            Visualize relatórios de desempenho e análise de resultados dos alunos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
