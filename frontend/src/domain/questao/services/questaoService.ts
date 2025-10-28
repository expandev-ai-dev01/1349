import { authenticatedClient } from '@/core/lib/api';
import type { Questao, QuestaoListFilters, CreateQuestaoDto, UpdateQuestaoDto } from '../types';

/**
 * @service questaoService
 * @summary Question management service for authenticated endpoints
 * @domain questao
 * @type rest-service
 * @apiContext internal
 *
 * @description
 * All methods in this service use authenticatedClient which targets:
 * /api/v1/internal/questao/...
 *
 * Authentication token is automatically added by interceptor.
 */
export const questaoService = {
  /**
   * @endpoint GET /api/v1/internal/questao
   * @summary Fetches list of questions with filters
   */
  async list(filters?: QuestaoListFilters): Promise<Questao[]> {
    const response = await authenticatedClient.get('/questao', { params: filters });
    return response.data.data;
  },

  /**
   * @endpoint GET /api/v1/internal/questao/:id
   * @summary Fetches single question by ID
   */
  async getById(id: string): Promise<Questao> {
    const response = await authenticatedClient.get(`/questao/${id}`);
    return response.data.data;
  },

  /**
   * @endpoint POST /api/v1/internal/questao
   * @summary Creates new question
   */
  async create(data: CreateQuestaoDto): Promise<Questao> {
    const response = await authenticatedClient.post('/questao', data);
    return response.data.data;
  },

  /**
   * @endpoint PUT /api/v1/internal/questao/:id
   * @summary Updates existing question
   */
  async update(id: string, data: UpdateQuestaoDto): Promise<Questao> {
    const response = await authenticatedClient.put(`/questao/${id}`, data);
    return response.data.data;
  },

  /**
   * @endpoint DELETE /api/v1/internal/questao/:id
   * @summary Deletes question
   */
  async delete(id: string): Promise<void> {
    await authenticatedClient.delete(`/questao/${id}`);
  },
};
