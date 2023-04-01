import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class migrations1680365214930 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'AdmContact',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'userId',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'phone_number',
            type: 'varchar',
          },
          {
            name: 'state',
            type: 'varchar',
          },
          {
            name: 'city',
            type: 'varchar',
          },
          {
            name: 'neighborhood',
            type: 'varchar',
          },
          {
            name: 'street',
            type: 'varchar',
          },
          {
            name: 'complement',
            type: 'varchar',
          },
          {
            name: 'reference',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('AdmContact');
  }
}
