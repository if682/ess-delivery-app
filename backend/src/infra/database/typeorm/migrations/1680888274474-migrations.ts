import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1680888274474 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE reservation ADD COLUMN owner VARCHAR(255) DEFAULT NULL',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE reservation DROP COLUMN owner');
  }
}
