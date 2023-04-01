import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class migrations1679792781672 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'User',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'cpf',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'role',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  // password String
  // role     Role   @default(USER)

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('User');
  }
}
