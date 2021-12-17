import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1639753869233 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "categories",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    generationStrategy: "uuid",
                },
                {
                    name: "name",
                    type: "varchar",
                    isUnique: true,
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },

            ]
        }), true)

        



    }
    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories");
    }
}
