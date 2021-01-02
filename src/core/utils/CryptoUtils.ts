import Crypto from 'crypto';
require('dotenv-safe').config();

const cryptoData = {
  algorithm: 'aes256',
  secret: process.env.SECRET,
  type: 'hex',
  coding: 'utf8'
};

export function encriptPass(pass: string) {
  const cipher = Crypto.createCipher(
    cryptoData.algorithm, cryptoData.secret
  );

  cipher.update(pass);

  // @ts-ignore
  return cipher.final(cryptoData.type);
}

export function decriptPass(pass: string) {
  const cipher = Crypto.createDecipher(
    cryptoData.algorithm, cryptoData.secret
  );

  // @ts-ignore
  cipher.update(pass, cryptoData.type);

  return cipher.final();
}