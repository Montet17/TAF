const { request } = require("../../configuration/config");

 module.exports.getUsers = async function () {  
    return await request.get("users");          
 }


