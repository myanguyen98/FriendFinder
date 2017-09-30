var allUsers = require("./allUsers.js")


module.exports = function(app){

	

	app.get("/api/friends", function(req, res) {
	  res.json(allUsers);
	});


	app.post("/api/friends", function(req,res){
		
		var newUser = req.body;
	  newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();

	  console.log(newUser);

	  allUsers.push(newUser);

	  res.json(newUser);
	})

}