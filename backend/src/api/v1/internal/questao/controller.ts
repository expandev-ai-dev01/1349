import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { successResponse, errorResponse } from '@/utils/response';
import { HTTP_STATUS, ERROR_CODES } from '@/constants';
import {
  questaoCreate,
  questaoList,
  questaoGet,
  questaoUpdate,
  questaoDelete,
  TipoQuestao,
  NivelDificuldade,
} from '@/services/questao';

/**
 * @api {get} /internal/questao List Questions
 * @apiName ListQuestions
 * @apiGroup Question
 * @apiVersion 1.0.0
 *
 * @apiDescription Lists questions with optional filters
 *
 * @apiParam {String} [id_professor] Filter by professor ID
 * @apiParam {String} [tipo_questao] Filter by question type
 * @apiParam {String} [nivel_dificuldade] Filter by difficulty level
 * @apiParam {String} [tema_geografico] Filter by geographic theme
 *
 * @apiSuccess {Array} data List of questions
 */
export async function listHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const filters = {
      id_professor: req.query.id_professor as string | undefined,
      tipo_questao: req.query.tipo_questao as TipoQuestao | undefined,
      nivel_dificuldade: req.query.nivel_dificuldade as NivelDificuldade | undefined,
      tema_geografico: req.query.tema_geografico as string | undefined,
    };

    const questoes = await questaoList(filters);
    res.json(successResponse(questoes));
  } catch (error: any) {
    next(error);
  }
}

/**
 * @api {post} /internal/questao Create Question
 * @apiName CreateQuestion
 * @apiGroup Question
 * @apiVersion 1.0.0
 *
 * @apiDescription Creates a new question
 */
export async function createHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const bodySchema = z.object({
    tipo_questao: z.nativeEnum(TipoQuestao),
    enunciado: z.string().min(10).max(1000),
    nivel_dificuldade: z.nativeEnum(NivelDificuldade),
    tema_geografico: z.string().min(1),
    alternativas: z
      .array(
        z.object({
          texto: z.string(),
          correta: z.boolean(),
        })
      )
      .min(2)
      .max(5)
      .optional(),
    afirmacao: z.string().min(10).max(500).optional(),
    resposta_correta: z.boolean().optional(),
    colunas: z
      .object({
        coluna_a: z.array(z.string()).min(2).max(5),
        coluna_b: z.array(z.string()).min(2).max(5),
        mapeamento_correto: z.record(z.number()),
      })
      .optional(),
    mapa: z
      .object({
        url_imagem: z.string().url(),
        regioes_clicaveis: z.array(
          z.object({
            nome: z.string(),
            coordenadas: z.array(z.number()),
          })
        ),
      })
      .optional(),
    recursos_multimidia: z
      .array(
        z.object({
          tipo: z.enum(['imagem', 'video', 'audio']),
          url: z.string().url(),
        })
      )
      .optional(),
    valor_pontos: z.number().positive(),
    id_professor: z.string().uuid(),
  });

  try {
    const validated = bodySchema.parse(req.body);

    if (validated.tipo_questao === TipoQuestao.MultiplaEscolha && !validated.alternativas) {
      res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json(errorResponse('Alternativas são obrigatórias para questões de múltipla escolha'));
      return;
    }

    if (validated.tipo_questao === TipoQuestao.VerdadeiroFalso) {
      if (!validated.afirmacao || validated.resposta_correta === undefined) {
        res
          .status(HTTP_STATUS.BAD_REQUEST)
          .json(
            errorResponse(
              'Afirmação e resposta correta são obrigatórias para questões de verdadeiro/falso'
            )
          );
        return;
      }
    }

    if (validated.tipo_questao === TipoQuestao.AssociacaoColunas && !validated.colunas) {
      res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json(errorResponse('Colunas são obrigatórias para questões de associação'));
      return;
    }

    if (validated.tipo_questao === TipoQuestao.MapaInterativo && !validated.mapa) {
      res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json(errorResponse('Mapa é obrigatório para questões de mapa interativo'));
      return;
    }

    const questao = await questaoCreate(validated);
    res.status(HTTP_STATUS.CREATED).json(successResponse(questao));
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json(errorResponse('Dados inválidos', ERROR_CODES.VALIDATION_ERROR, error.errors));
    } else {
      next(error);
    }
  }
}

/**
 * @api {get} /internal/questao/:id Get Question
 * @apiName GetQuestion
 * @apiGroup Question
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets a specific question by ID
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    const questao = await questaoGet(id);

    if (!questao) {
      res
        .status(HTTP_STATUS.NOT_FOUND)
        .json(errorResponse('Questão não encontrada', ERROR_CODES.NOT_FOUND));
      return;
    }

    res.json(successResponse(questao));
  } catch (error: any) {
    next(error);
  }
}

/**
 * @api {put} /internal/questao/:id Update Question
 * @apiName UpdateQuestion
 * @apiGroup Question
 * @apiVersion 1.0.0
 *
 * @apiDescription Updates a question
 */
export async function updateHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const bodySchema = z.object({
    enunciado: z.string().min(10).max(1000).optional(),
    nivel_dificuldade: z.nativeEnum(NivelDificuldade).optional(),
    tema_geografico: z.string().min(1).optional(),
    valor_pontos: z.number().positive().optional(),
  });

  try {
    const { id } = req.params;
    const validated = bodySchema.parse(req.body);

    const questao = await questaoUpdate(id, validated);

    if (!questao) {
      res
        .status(HTTP_STATUS.NOT_FOUND)
        .json(errorResponse('Questão não encontrada', ERROR_CODES.NOT_FOUND));
      return;
    }

    res.json(successResponse(questao));
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json(errorResponse('Dados inválidos', ERROR_CODES.VALIDATION_ERROR, error.errors));
    } else {
      next(error);
    }
  }
}

/**
 * @api {delete} /internal/questao/:id Delete Question
 * @apiName DeleteQuestion
 * @apiGroup Question
 * @apiVersion 1.0.0
 *
 * @apiDescription Deletes a question
 */
export async function deleteHandler(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { id } = req.params;
    const deleted = await questaoDelete(id);

    if (!deleted) {
      res
        .status(HTTP_STATUS.NOT_FOUND)
        .json(errorResponse('Questão não encontrada', ERROR_CODES.NOT_FOUND));
      return;
    }

    res.status(HTTP_STATUS.NO_CONTENT).send();
  } catch (error: any) {
    next(error);
  }
}
