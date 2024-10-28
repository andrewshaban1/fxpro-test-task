import request from 'supertest';
import app from '../app';

describe('Health Check', () => {
  it('Should return welcome message', async () => {
    const res = await request(app).get('/').expect(200);
    console.log(res.text);

    expect(res.text).toEqual('Welcome to the test task!');
  });
});
