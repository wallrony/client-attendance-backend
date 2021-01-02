/* A função abaixo tem como objetivo iterar toda a lista
 * de campos obrigatórios fornecidos e verificar o corpo
 * da requisição fornecido contém todos os campos,
 * retornando a lista de campos que não estão presentes
 * no objeto.
 */
export function verifyFields(mandatoryFields: string[], reqBody: any) {
  const notFoundFields: string[] = [];

  for (const field of mandatoryFields) {
    if (!reqBody[field]) {
      notFoundFields.push(field);
    }
  }

  return notFoundFields;
}