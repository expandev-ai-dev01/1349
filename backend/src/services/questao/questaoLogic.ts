/**
 * @summary
 * Question business logic (in-memory storage)
 *
 * @module services/questao/questaoLogic
 */

import { v4 as uuidv4 } from 'uuid';
import {
  QuestaoCreateRequest,
  QuestaoEntity,
  QuestaoListItem,
  TipoQuestao,
  NivelDificuldade,
} from './questaoTypes';

const questoes: QuestaoEntity[] = [];

/**
 * @summary
 * Creates a new question in memory
 *
 * @function questaoCreate
 * @module services/questao/questaoLogic
 *
 * @param {QuestaoCreateRequest} params - Question creation parameters
 *
 * @returns {Promise<QuestaoEntity>} Created question entity
 *
 * @throws {Error} When validation fails
 */
export async function questaoCreate(params: QuestaoCreateRequest): Promise<QuestaoEntity> {
  const questao: QuestaoEntity = {
    id_questao: uuidv4(),
    tipo_questao: params.tipo_questao,
    enunciado: params.enunciado,
    nivel_dificuldade: params.nivel_dificuldade,
    tema_geografico: params.tema_geografico,
    alternativas: params.alternativas || null,
    afirmacao: params.afirmacao || null,
    resposta_correta: params.resposta_correta ?? null,
    colunas: params.colunas || null,
    mapa: params.mapa || null,
    recursos_multimidia: params.recursos_multimidia || null,
    valor_pontos: params.valor_pontos,
    data_criacao: new Date(),
    id_professor: params.id_professor,
  };

  questoes.push(questao);
  return questao;
}

/**
 * @summary
 * Lists questions with optional filters
 *
 * @function questaoList
 * @module services/questao/questaoLogic
 *
 * @param {object} filters - Filter parameters
 * @param {string} [filters.id_professor] - Filter by professor ID
 * @param {TipoQuestao} [filters.tipo_questao] - Filter by question type
 * @param {NivelDificuldade} [filters.nivel_dificuldade] - Filter by difficulty level
 * @param {string} [filters.tema_geografico] - Filter by geographic theme
 *
 * @returns {Promise<QuestaoListItem[]>} List of questions
 */
export async function questaoList(filters?: {
  id_professor?: string;
  tipo_questao?: TipoQuestao;
  nivel_dificuldade?: NivelDificuldade;
  tema_geografico?: string;
}): Promise<QuestaoListItem[]> {
  let filtered = questoes;

  if (filters?.id_professor) {
    filtered = filtered.filter((q) => q.id_professor === filters.id_professor);
  }

  if (filters?.tipo_questao) {
    filtered = filtered.filter((q) => q.tipo_questao === filters.tipo_questao);
  }

  if (filters?.nivel_dificuldade) {
    filtered = filtered.filter((q) => q.nivel_dificuldade === filters.nivel_dificuldade);
  }

  if (filters?.tema_geografico) {
    filtered = filtered.filter((q) => q.tema_geografico === filters.tema_geografico);
  }

  return filtered.map((q) => ({
    id_questao: q.id_questao,
    tipo_questao: q.tipo_questao,
    enunciado: q.enunciado,
    nivel_dificuldade: q.nivel_dificuldade,
    tema_geografico: q.tema_geografico,
    valor_pontos: q.valor_pontos,
    data_criacao: q.data_criacao,
  }));
}

/**
 * @summary
 * Gets a specific question by ID
 *
 * @function questaoGet
 * @module services/questao/questaoLogic
 *
 * @param {string} id_questao - Question ID
 *
 * @returns {Promise<QuestaoEntity | null>} Question entity or null if not found
 */
export async function questaoGet(id_questao: string): Promise<QuestaoEntity | null> {
  const questao = questoes.find((q) => q.id_questao === id_questao);
  return questao || null;
}

/**
 * @summary
 * Updates a question
 *
 * @function questaoUpdate
 * @module services/questao/questaoLogic
 *
 * @param {string} id_questao - Question ID
 * @param {Partial<QuestaoCreateRequest>} updates - Fields to update
 *
 * @returns {Promise<QuestaoEntity | null>} Updated question or null if not found
 */
export async function questaoUpdate(
  id_questao: string,
  updates: Partial<QuestaoCreateRequest>
): Promise<QuestaoEntity | null> {
  const index = questoes.findIndex((q) => q.id_questao === id_questao);

  if (index === -1) {
    return null;
  }

  questoes[index] = {
    ...questoes[index],
    ...updates,
  };

  return questoes[index];
}

/**
 * @summary
 * Deletes a question
 *
 * @function questaoDelete
 * @module services/questao/questaoLogic
 *
 * @param {string} id_questao - Question ID
 *
 * @returns {Promise<boolean>} True if deleted, false if not found
 */
export async function questaoDelete(id_questao: string): Promise<boolean> {
  const index = questoes.findIndex((q) => q.id_questao === id_questao);

  if (index === -1) {
    return false;
  }

  questoes.splice(index, 1);
  return true;
}
