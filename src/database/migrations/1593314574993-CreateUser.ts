import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUser1593314574993 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'telefone',
            type: 'varchar',
          },          
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'idade',
            type: 'integer',
          },   
          {
            name: 'peso',
            type: 'integer',
          },      
          {
            name: 'etnia',
            type: 'enum',
            enum: ['branco', 'negro', 'pardo'],
          },                           
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
