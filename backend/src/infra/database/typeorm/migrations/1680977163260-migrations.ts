import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class migrations1680977163260 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'evaluation',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
          },
          {
            name: 'userName',
            type: 'varchar',
          },
          {
            name: 'text',
            type: 'varchar',
          },
          {
            name: 'star',
            type: 'int',
          },
          {
            name: 'reservationId',
            type: 'varchar',
          },
          {
            name: 'userId',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('evaluation');
  }
}
