// import 'reflect-metadata';
// import {createConnection} from 'typeorm';
// import {User} from './entity/User';

// createConnection().then(async connection => {

//     console.log('Inserting a new user into the database...');
//     const user = new User();
//     user.firstName = 'Timber';
//     user.lastName = 'Saw';
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log('Saved a new user with id: ' + user.id);

//     console.log('Loading users from the database...');
//     const users = await connection.manager.find(User);
//     console.log('Loaded users: ', users);

//     console.log('Here you can setup and run express/koa/any other framework.');

// }).catch(error => console.log(error));

import * as koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as compress from 'koa-compress';

import config from './config/config';

import apiRouter from './routes/api.routes';

const app = new koa();

if (config.api.compression) {
  app.use(compress());
}

app.use(bodyParser());

app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());

const server = app.listen(config.api.port);

const serverPromise = Promise.resolve(server);

export default serverPromise;
