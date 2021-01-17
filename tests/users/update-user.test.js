const { updateUser } = require("../../api-calls/users/api-update-user");
const { expect } = require("../../configuration/config");
const { createUser } = require("../../api-calls/users/api-create-user");

let createUserReponse;

before(async () => {
  createUserReponse = await createUser(
    {
      "name": "Jamie Lowe",
      "job": "unemployed"
    }
  );
})
describe("Patch /user", function () {
  it("updates a user, expects a 200, user details to be updated", async function () {
    let updateUserResponse = await updateUser(createUserReponse.body.id,
      {
        "name": "jlowe",
        "job": "cleaner"
      }
    )
    expect(updateUserResponse.status).to.eql(200);
    expect(updateUserResponse.body.name).to.eql("jlowe");
    expect(updateUserResponse.body.job).to.eql("cleaner");    
  });
});