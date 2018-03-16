import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { join } from 'path';

import * as config from '../config/config';
import databaseLogger from '../shared/databaseLogger';

export async function connect(): Promise<Connection> {
  const options: ConnectionOptions = {
    type: 'mysql',
    host: config.database.host,
    port: parseInt(config.database.port, 10),
    database: config.database.database,
    username: config.database.username,
    password: config.database.password,
    logger: databaseLogger,
    synchronize: false,
    dropSchema: config.database.dropSchema,
    entities: [ join(__dirname, '../**/*.entity.{ts,js}') ]
  };

  return await createConnection(options);
}
