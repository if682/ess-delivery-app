import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class migrations1680969152415 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'favorites',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
          },
          {
            name: 'reservationId',
            type: 'varchar',
          },
          {
            name: 'userId',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('favorites');
  }
}
