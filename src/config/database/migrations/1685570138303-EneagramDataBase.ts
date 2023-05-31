import { MigrationInterface, QueryRunner } from "typeorm";

export class EneagramDataBase1685570138303 implements MigrationInterface {
    name = 'EneagramDataBase1685570138303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ADD "ennegramGraph" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "ennegramGraph"`);
    }

}
