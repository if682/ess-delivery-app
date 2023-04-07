import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class migrations1680888274474 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE Reservation ADD COLUMN owner VARCHAR(255) DEFAULT NULL',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE Reservation DROP COLUMN owner');
  }
}
