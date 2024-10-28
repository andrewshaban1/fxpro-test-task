import request from 'supertest';
import app from '../app';

describe('Hello Check', () => {
  it('Should return welcome message', async () => {
    const userName = 'John';

    const res = await request(app).get(`/?user-name=${userName}`).expect(200);

    expect(res.body).toEqual(`Hello ${userName}!`);
  });

  it('Should return 400 when user-name is missing', async () => {
    const res = await request(app).get('/').expect(400);

    expect(res.body).toEqual({
      message: '"user-name" query parameter is required',
    });
  });

  it('Should return 400 when user-name is empty', async () => {
    const res = await request(app).get('/?user-name=').expect(400);

    expect(res.body).toEqual({
      message: '"user-name" query parameter is required',
    });
  });

  it('Should return 404 when route is not found', async () => {
    await request(app).get('/test').expect(404);
  });
});
