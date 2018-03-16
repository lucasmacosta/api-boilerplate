import { Logger, QueryRunner } from 'typeorm';
import { LoggerInstance } from 'winston';

import apiLogger from './logger';

export class DatabaseLogger implements Logger {

  constructor(private logger: LoggerInstance) { }

  public logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner): any {
    this.logger.info(`[DB Query]: ${query}`, parameters);
  }

  public logQueryError(error: string, query: string, parameters?: any[], queryRunner?: QueryRunner): any {
    this.logger.error(`[DB Error]: ${query}`, parameters);
  }

  public logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner): any {
    this.logger.debug(`[DB Slow Query]: ${query} (${time})`, parameters);
  }

  public logSchemaBuild(message: string, queryRunner?: QueryRunner): any {
    this.logger.info(`[DB Schema Build]: ${message}`);
  }

  public logMigration(message: string, queryRunner?: QueryRunner): any {
    this.logger.info(`[DB Migration]: ${message}`);
  }

  public log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner): any {
    switch (level) {
      case 'log':
        this.logger.debug(`[DB Log]: ${message}`);
        break;
      case 'info':
        this.logger.info(`[DB Log]: ${message}`);
        break;
      case 'warn':
        this.logger.warn(`[DB Log]: ${message}`);
    }
  }

}

export default new DatabaseLogger(apiLogger);
