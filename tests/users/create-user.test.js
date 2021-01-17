const { createUser } = require("../../api-calls/users/api-create-user");
const { expect } = require("../../configuration/config");

let createUserReponse;
before(async () => {
  createUserReponse = await createUser(
    {
      "name": "morpheus",
      "job": "leader"
    }
  );  
})
describe("POST /users", function () {
  it("creates a user, expects a 201", async function () {
    expect(createUserReponse.status).to.eql(201);  
    expect(parseInt(createUserReponse.body.id)).gt(0);
  });
});