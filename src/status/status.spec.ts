import * as requestPromise from 'request-promise';

import * as config from '../config/config';

const baseUrl = 'http://localhost:3001/api/status';

const request = requestPromise.defaults({ json: true });

describe('Status', () => {

  it('should return a successful ping response', async () => {
    const response = await request.get(`${baseUrl}/ping`, { resolveWithFullResponse: true });
    expect(response.statusCode).toEqual(200);
  });

});
