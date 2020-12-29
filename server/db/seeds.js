const { Db } = require("mongodb");

use fancy_rats;
db.dropDatabase();

db.rats.insertMany([

    {
        name: "Madness",
        age: {
            years: 1,
            months: 2
            },
        coloring: "agouti",
        eyes: "black",
        markings: "capped",
        body: "Top Ear",
        coat: "standard"
        
    },

    {
        name: "Folly",
        age: {
            years: 2,
            months: 3
            },
        coloring: "cinnamon",
        eyes: "pink",
        markings: "Irish",
        body: "Dumbo",
        coat: "standard"
        
    },

    {
        name: "Splinter",
        age: {
            years: 3,
            months: 4
            },
        coloring: "fawn",
        eyes: "odd-eyed",
        markings: "variegated",
        body: "Manx",
        coat: "Harley"
        
    },

    {
        name: "Firmin",
        age: {
            years: 1,
            months: 5
            },
        coloring: "beige",
        eyes: "ruby",
        markings: "blazed",
        body: "Top Ear",
        coat: "standard"
        
    },

    {
        name: "Yag",
        age: {
            years: 6,
            months: 9
            },
        coloring: "black",
        eyes: "ruby",
        markings: "self",
        body: "Top Ear",
        coat: "satin"
        
    },

    {
        name: "Dangerous Beans",
        age: {
            years: 1,
            months: 9
            },
        coloring: "blue",
        eyes: "black",
        markings: "hooded",
        body: "Dumbo",
        coat: "rex"
        
    },

    {
        name: "Rat King",
        age: {
            years: 6,
            months: 9
            },
        coloring: "chocolate",
        eyes: "black",
        markings: "Berkshire",
        body: "Top Ear",
        coat: "standard"
        
    },

    {
        name: "White",
        age: {
            years: 2,
            months: 7
            },
        coloring: "agouti",
        eyes: "ruby",
        markings: "Himalayan",
        body: "Dumbo",
        coat: "standard"
        
    },
    {
        name: "Scabbers",
        age: {
            years: 5,
            months: 10
            },
        coloring: "agouti",
        eyes: "black",
        markings: "self",
        body: "Dumbo",
        coat: "hairless"
        
    }
]);