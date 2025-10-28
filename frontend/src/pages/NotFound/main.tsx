import { useNavigate } from 'react-router-dom';

/**
 * @page NotFoundPage
 * @summary 404 Not Found page
 * @domain core
 * @type page-component
 * @category error
 */
export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-xl text-gray-600">Página não encontrada</p>
        <p className="mt-2 text-sm text-gray-500">
          A página que você está procurando não existe ou foi movida.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Voltar para a página inicial
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
