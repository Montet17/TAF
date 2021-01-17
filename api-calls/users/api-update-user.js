const { request } = require("../../configuration/config");

 module.exports.updateUser = async function (userId,user) {  
   return await request.patch('user/'+userId)
   .send(user);
 }


