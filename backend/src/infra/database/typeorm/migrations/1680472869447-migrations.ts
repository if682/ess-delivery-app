import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class migrations1680472869447 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Reservation',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'city',
            type: 'varchar',
          },
          {
            name: 'street',
            type: 'varchar',
          },
          {
            name: 'streetNumber',
            type: 'int',
          },
          {
            name: 'cep',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'checkIn',
            type: 'varchar',
          },
          {
            name: 'checkOut',
            type: 'varchar',
          },
          {
            name: 'guests',
            type: 'int',
          },
          {
            name: 'budget',
            type: 'float',
          },
          {
            name: 'additionalInfo',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'bedrooms',
            type: 'int',
          },
          {
            name: 'beds',
            type: 'int',
          },
          {
            name: 'bathrooms',
            type: 'int',
          },
          {
            name: 'photos',
            type: 'jsonb',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Reservation');
  }
}
