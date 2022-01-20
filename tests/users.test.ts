import supertest from 'supertest';

import server from '@/server';
import { User } from '@/models/user';

describe('CRUD /v1/users', () => {
  const user: User = {
    first_name: 'Test',
    last_name: 'Test',
    email: 'test@test.com',
    gender: 'Test',
    ip_address: '0.0.0.0',
  };

  let ID = 0;

  test('PUT /v1/users', async () => {
    const response = await supertest(server).put('/v1/users').send(user);
    ID = response.body.data[0].id;

    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body.data)).toBeTruthy();
    expect(response.body.data.length).toEqual(1);
  });

  test('GET /v1/users', async () => {
    const response = await supertest(server).get('/v1/users');

    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body.data)).toBeTruthy();
    expect(response.body.data.length).toBeGreaterThanOrEqual(1);
  });

  test(`GET /v1/users/:id`, async () => {
    const response = await supertest(server).get(`/v1/users/${ID}`);

    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body.data)).toBeTruthy();
    expect(response.body.data[0].id).toEqual(ID);
  });

  test(`PATCH /v1/users/:id`, async () => {
    const user: Partial<User> = {
      first_name: 'Test 1',
      last_name: 'Test 1',
    };
    const response = await supertest(server).patch(`/v1/users/${ID}`).send(user);

    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body.data)).toBeTruthy();
    expect(response.body.data[0].id).toEqual(ID);
    expect(response.body.data[0].first_name).toEqual(user.first_name);
    expect(response.body.data[0].last_name).toEqual(user.last_name);
  });

  test(`DELETE /v1/users/:id`, async () => {
    const response = await supertest(server).delete(`/v1/users/${ID}`);

    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body.data)).toBeTruthy();
    expect(response.body.data[0].id).toEqual(ID);
    expect(response.body.data[0].active).toEqual('0');
  });
});
