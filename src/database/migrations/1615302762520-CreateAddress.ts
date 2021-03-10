import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAddress1615302762520 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'address',
              columns: [
                {
                  name: 'id',
                  type: 'varchar',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                },
                {
                  name: 'endereco',
                  type: 'varchar',
                },
                {
                  name: 'numero',
                  type: 'integer',
                },          
                {
                  name: 'complemento',
                  type: 'varchar',                  
                },
                {
                  name: 'cep',
                  type: 'integer',
                },   
                {
                  name: 'cidade',
                  type: 'varchar',
                },      
                {
                  name: 'estado',
                  type: 'varchar',                
                },        
                {
                    name: 'user_id',
                    type: 'varchar',
                    isNullable: true,
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
    }

}
