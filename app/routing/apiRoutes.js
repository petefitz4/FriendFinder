// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var friends = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
 
  app.post("/api/friends", function(req, res) {
 //=====================================================   
    
    //CODE
    //object to hold the closestMatch
        var closestMatch ={
            name:"",
            photo: "",
            scoreDifference: 1000
        };

        //Process results from survey.html
        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;

        var totalDifference = 0;

        // Loop through all the possible matches. 
		for  (var i=0; i< friends.length; i++) {
            
            console.log(friends[i].name);
            totalDifference = 0;
            
            // Loop through the scores of each entry
            for (var j=0; j< friends[i].scores[j]; j++){
            
                //Calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                
                // If the sum of differences is less then the differences of the current "best match"
                if (totalDifference <= closestMatch.scoreDifference){
            
                    // Reset the closestMatch to be the new friend. 
                    closestMatch.name = friends[i].name;
                    closestMatch.photo = friends[i].photo;
                    closestMatch.scoreDifference = totalDifference;
                }
            }
        }
            
        
        friends.push(userData);
            
     
        res.json(closestMatch);

  });
};
