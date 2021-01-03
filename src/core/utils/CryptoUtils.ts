const crypto = require('crypto');
require('dotenv-safe').config();

const cryptoData = {
  algorithm: 'aes256',
  secret: String(process.env.SECRET),
  type: 'hex',
  coding: 'utf8'
};

export function encriptPass(pass: string): string {
  const cipher = crypto.createCipher(
    cryptoData.algorithm, cryptoData.secret
  );

  cipher.update(pass);

  // @ts-ignore
  return cipher.final(cryptoData.type);
}

export function decriptPass(pass: string) {
  const cipher = crypto.createDecipher(
    cryptoData.algorithm, cryptoData.secret
  );

  // @ts-ignore
  cipher.update(pass, cryptoData.type);

  return cipher.final();
}