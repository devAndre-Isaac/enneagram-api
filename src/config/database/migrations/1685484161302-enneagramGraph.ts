import { MigrationInterface, QueryRunner } from 'typeorm';

export class EnneagramGraph1685484161302 implements MigrationInterface {
  name = 'EnneagramGraph1685484161302';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "client" ADD "ennegramGraph" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "ennegramGraph"`);
  }
}
