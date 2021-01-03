/* Configurando a utilização das variáveis de ambiente
 * presentes no arquivo .env.
 */
require('dotenv-safe').config();

// Importação de bibliotecas externas.
import {
  sign,
  verify
} from 'jsonwebtoken';

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
    { expiresIn: expireTime, algorithm: "HS256" }
  );

  return token;
}

export function verifyToken(token: string): number | string {
  let result: number | string = 0;

  try {
    const decoded = verify(
      token,
      String(process.env.SECRET),
      { algorithms: ["HS256"] }
    );

    result = decoded['id'];
  } catch(e) {
    result = 'unauthorized-user';
  }

  return result;
}
