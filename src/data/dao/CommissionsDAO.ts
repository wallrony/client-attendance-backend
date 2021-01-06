import Commission from "../../core/models/Commission";
import { createError } from "../../core/utils/GeneralUtils";
import ICommissionsDAO from "../dao_interfaces/ICommissionsDAO";
import { createConnection } from "../database/Connection";

class CommissionsDAO extends ICommissionsDAO {
  async index(doctorId: number): Promise<Commission[]> {
    const connection = createConnection();

    const rows = await connection<Commission>(this.tableName)
      .select(
        `${this.tableName}.id`,
        `${this.tableName}.value`,
        `${this.tableName}.date`,
        `${this.tableName}.doctor_id`,
        `${this.tableName}.client_attendance_id`,
        'attendances.title',
      )
      .innerJoin('user_attendances', 'user_attendances.id', '=', `${this.tableName}.client_attendance_id`)
      .innerJoin('attendances', 'attendances.id', '=', 'user_attendances.attendance_id')
      .where(`${this.tableName}.doctor_id`, '=', String(doctorId));

    if(!rows) {
      throw createError('not-found', `${this.entityName} not found`);
    }

    for(const row of rows) {
      const secondRow = await connection('services')
        .select('services.name', 'services.duration')
        .innerJoin('user_attendance_services', 'user_attendance_services.service_id', '=', 'services.id')
        .innerJoin('user_attendances', 'user_attendances.id', '=', 'user_attendance_services.user_attendance_id')
        .where('user_attendances.id', '=', row['client_attendance_id']);

      row['services'] = secondRow;
    }

    await connection.destroy();

    return rows;
  }

  async add(data: Commission): Promise<Commission> {
    const connection = createConnection();

    const actualDate = new Date();
    const date = `${actualDate.getFullYear()}-${actualDate.getMonth()}-${actualDate.getDay()}T${actualDate.getHours()}-${actualDate.getMinutes()}-${actualDate.getSeconds()}.000Z`

    const trx = await connection.transaction();

    const row = await trx(this.tableName)
      .insert({
        ...data,
        date
      })
      .returning<Commission>('*');

    if(!row) {
      throw createError('internal-error', `error-inserting-${this.entityName}`);
    }

    const secondRow = await trx('user_attendances')
      .update({
        'realized': true,
      }).where('id', '=', data.client_attendance_id);

    if(!secondRow) {
      throw createError('internal-error', `error-inserting-${this.entityName}`);
    }

    await trx.commit();

    await trx.destroy();
    await connection.destroy();

    return row[0];
  }
}

export default CommissionsDAO;
