const { getUsers } = require("../../api-calls/users/api-get-users");
const { expect } = require("../../configuration/config");

let getUsersResponse;
before(async()=>{
  getUsersResponse = await getUsers();
})
describe("GET /users", function () {
    it("gets users on first page, limited to 6", async function () {    
          expect(getUsersResponse.status).to.eql(200);      
          expect(getUsersResponse.body.data.length).to.eql(6); 
    });
  });