import Knex from 'knex';
import Service from '../../../core/models/Service';

export async function seed(knex: Knex) {
  const services: Service[] = [];

  services.push({
    attendance_id: 1,
    duration: 600,
    name: 'Limpeza nos Olhos (Limpeza Ocular)',
    description: 'A limpeza tem como objetivo remover impurezas da região ocular.',
    price: 100,
  });

  services.push({
    attendance_id: 1,
    duration: 600,
    name: 'Exame de Grau',
    description: 'O exame têm como objetivo encontrar o grau diferencial distorcido que o olho adquiriu até então.',
    price: 150,
  });

  services.push({
    attendance_id: 2,
    duration: 600,
    name: 'Clareamento Dentário',
    description: 'O processo de clareamento dentário remove impurezas e limpa os dentes, deixando-os na cor branca original.',
    price: 60,
  });

  services.push({
    attendance_id: 2,
    duration: 600,
    name: 'Extração',
    description: 'A extração remove um dente que esteja danificado ou comprometido.',
    price: 50,
  });

  return await knex('services').insert(services);
}
