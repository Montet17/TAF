const { registerUser } = require("../../api-calls/users/api-user-registration");
const { expect } = require("../../configuration/config");


describe("POST /register", function () {
  it("registers a user, expects a 200", async function () {
    var registerUserReponse = await registerUser(
      {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
      }
    );
    expect(registerUserReponse.status).to.eql(200);
  });
});


describe("POST /register", function () {
  it("tries to register a user with missing email address, expects a 400", async function () {
    var registerUserReponse = await registerUser(
      {
        "password": "pistol"
      }
    );
    expect(registerUserReponse.status).to.eql(400);
  });
});

describe("POST /register", function () {
  it("tries to register a user with missing password, expects a 400", async function () {
    var registerUserReponse = await registerUser(
      {
        "password": "pistol"
      }
    );
    expect(registerUserReponse.status).to.eql(400);
  });
});