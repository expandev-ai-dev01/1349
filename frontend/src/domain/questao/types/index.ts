export enum TipoQuestao {
  MultiplaEscolha = 'multipla_escolha',
  VerdadeiroFalso = 'verdadeiro_falso',
  AssociacaoColunas = 'associacao_colunas',
  MapaInterativo = 'mapa_interativo',
}

export enum NivelDificuldade {
  Facil = 'facil',
  Medio = 'medio',
  Dificil = 'dificil',
}

export interface Alternativa {
  texto: string;
  correta: boolean;
}

export interface Colunas {
  coluna_a: string[];
  coluna_b: string[];
  mapeamento_correto: Record<number, number>;
}

export interface Mapa {
  url_imagem: string;
  regioes_clicaveis: Array<{
    nome: string;
    coordenadas: number[];
  }>;
}

export interface RecursoMultimidia {
  tipo: 'imagem' | 'video' | 'audio';
  url: string;
}

export interface Questao {
  id_questao: string;
  tipo_questao: TipoQuestao;
  enunciado: string;
  nivel_dificuldade: NivelDificuldade;
  tema_geografico: string;
  alternativas?: Alternativa[];
  afirmacao?: string;
  resposta_correta?: boolean;
  colunas?: Colunas;
  mapa?: Mapa;
  recursos_multimidia?: RecursoMultimidia[];
  valor_pontos: number;
  data_criacao: string;
  id_professor: string;
}

export interface QuestaoListFilters {
  id_professor?: string;
  tipo_questao?: TipoQuestao;
  nivel_dificuldade?: NivelDificuldade;
  tema_geografico?: string;
}

export interface CreateQuestaoDto {
  tipo_questao: TipoQuestao;
  enunciado: string;
  nivel_dificuldade: NivelDificuldade;
  tema_geografico: string;
  alternativas?: Alternativa[];
  afirmacao?: string;
  resposta_correta?: boolean;
  colunas?: Colunas;
  mapa?: Mapa;
  recursos_multimidia?: RecursoMultimidia[];
  valor_pontos: number;
  id_professor: string;
}

export interface UpdateQuestaoDto {
  enunciado?: string;
  nivel_dificuldade?: NivelDificuldade;
  tema_geografico?: string;
  valor_pontos?: number;
}
