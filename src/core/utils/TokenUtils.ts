/* Configurando a utilização das variáveis de ambiente
 * presentes no arquivo .env.
 */
require('dotenv-safe').config();

// Importação de bibliotecas externas.
import { sign } from 'jsonwebtoken';

/* A função abaixo gera e retorna um novo token de
 * autenticação utilizando o id do usuário e a palavra
 * chave contida no arquivo .env da aplicação.
 */
export function createToken(id: number): string {
  // Tempo de expiração do token. É definido em segundos.
  const expireTime = 600;

  const token = sign(
    { id },
    String(process.env.SECRET),
    { expiresIn: expireTime, }
  );

  return token;
}