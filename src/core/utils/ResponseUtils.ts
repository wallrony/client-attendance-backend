// Importações
import { Response } from 'express';

/* A função abaixo é responsável por retornar uma
 * response utilizando o "Response" fornecido pela
 * biblioteca "express", enviando os dados junto do
 * código da resposta através do tipo de resposta 
 * fornecido pelo controlador.
 */
export function makeResponse(
  response: Response, status: string = 'bad-req',
  data: any = undefined
) {
  if(!status.length) status = 'bad-req';

  /* Adquirindo o código da resposta a partir do tipo
   * de resposta fornecido na camada anterior (controller).
   */
  const code = statusCode[status];

  if(typeof(data) === 'string') {
    data = {
      message: data
    };
  }

  /* Retornando uma resposta utilizando o código adquirido
   * e os dados passados pela variável data.
   * */
  return response.status(code).json(data);
}

/* A variável abaixo foi declarada a fim de, utilizando
 * o padrão JavaScript Pattern, recuperar um código que
 * corresponda a um tipo de resultado final de uma
 * funcionalidade requisitada.
 */
const statusCode: Record<string, number> = {
  'success': 200,
  'created': 201,
  'no-data': 400,
  'bad-req': 400,
  'unauthorized': 401,
  'not-found': 404,
  'internal-error': 500
};
