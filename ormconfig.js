const config = require('./src/config/config');

module.exports = {
  type: 'mysql',
  host: config.database.host,
  port: parseInt(config.database.port, 10),
  database: config.database.database,
  username: config.database.username,
  password: config.database.password,
  logging: 'all',
  synchronize: false,
  dropSchema: false,
  entities: [ 'src/**/*.entity.ts' ],
  migrationsTableName: 'migrations',
  migrations: [ 'src/migrations/*.ts' ],
  cli: {
    migrationsDir: 'src/migrations'
  }
};
