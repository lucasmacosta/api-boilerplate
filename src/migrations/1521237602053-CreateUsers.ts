import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1521237602053 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'CREATE TABLE `users` (' +
      '  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,' +
      '  `firstName` varchar(255) NOT NULL,' +
      '  `lastName` varchar(255) NOT NULL' +
      ') ENGINE=InnoDB'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TABLE `users`');
  }

}
