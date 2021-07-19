const chai = require('chai');
const request = require("supertest")
const app = require("../app.js")

const { expect } = chai
const body_send = {
  email: 'admin@gmail.com',
  password: '12345',
}

const codeRespose = 200
const paginationTest = { page: 1, limit: 5, offset: 0, totalAll: 6, pages: 2 }
describe('Fetch post test', async () => {
  it('Shows all stock states', async () => {
    const { body, status } = await request(app)
      .post('/users/login',)
      .send(body_send)
      .set('Accept', 'application/json')
    // const { data, pagination, code } = body;
    // expect(status).to.equal(200);
    // expect(data[0]).to.deep.include(post);
    // expect(pagination).to.deep.include(paginationTest);
  });
});