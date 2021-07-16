const chai = require('chai');
const request = require("supertest")
const app = require("../app.js")

const { expect } = chai
const post = {
  id: 1,
  userId: 1,
  images: 'cool.jpg',
  likes: 1,
  captions: null,
  createdAt: '2021-07-14T03:20:53.070Z',
  updatedAt: '2021-07-14T03:20:53.070Z',
  user: { username: 'Admin', email: 'admin@gmail.com' }
}

const codeRespose = 200
const paginationTest = { page: 1, limit: 5, offset: 0, totalAll: 6, pages: 2 }
describe('Fetch post test', async () => {
  it('Shows all stock states', async () => {
    const { body, status } = await request(app).post('/users/login',);
    const { data, pagination, code } = body;
    expect(status).to.equal(200);
    expect(data[0]).to.deep.include(post);
    expect(pagination).to.deep.include(paginationTest);
  });
});