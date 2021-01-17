const { request } = require("../../configuration/config");

 module.exports.createUser = async function (userData) {  
    return await request.post("users")
    .send(userData);
 }


