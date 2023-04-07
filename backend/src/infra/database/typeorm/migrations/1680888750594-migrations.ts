import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class migrations1680888750594 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE enum_accepted AS ENUM ('aceito', 'negado', 'espera')`,
    );

    await queryRunner.createTable(
      new Table({
        name: 'reservation_connection',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
          },
          {
            name: 'userId',
            type: 'varchar',
          },
          {
            name: 'reservationId',
            type: 'varchar',
          },
          {
            name: 'accepted',
            type: 'enum_accepted',
            default: `'espera'`,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('reservation_connection');
    await queryRunner.query(`DROP TYPE enum_accepted`);
  }
}
