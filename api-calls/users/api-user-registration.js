const { request } = require("../../configuration/config");

 module.exports.registerUser = async function (userData) {  
    return await request.post("register")
    .send(userData);
 }


