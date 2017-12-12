// ===============================================================================
// DATA
// ===============================================================================

var friends = [
    {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
    }
    ,
    {
    "name":"Bob",
    "photo":"https://peopledotcom.files.wordpress.com/2017/09/39.jpg?crop=1px%2C0px%2C1998px%2C1332.897574124px&resize=742%2C495",
    "scores":[
        2,
        4,
        3,
        3,
        1,
        3,
        5,
        2,
        4,
        2
        ]
    }
]
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;