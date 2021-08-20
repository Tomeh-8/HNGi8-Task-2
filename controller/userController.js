const Users = require("../model/userModel");

const userController = {
getPage: async (req, res) => {
   res.render("index");
},

getUser:  async(req, res) => {
    Users(req.body).save(function(err,data){
    if (err) throw err;
    console.log('post request incoming!');
    console.log(Object.values(data));
    res.json(data);
 });
},

};

module.exports = userController;