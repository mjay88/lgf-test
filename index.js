// #!/usr/bin/env node

"use strict";

var customers = require("./data/customers.json");
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./lgf-test
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function (array) {
  let count = 0;
  for (let el of array) {
    if (el.gender === "male") {
      count++;
    }
  }
  return count;
};

var femaleCount = function (arr) {
  let females = _.reduce(
    arr,
    function (acc, curr) {
      if (curr.gender === "female") {
        acc++;
      }
      //always make sure your are returning our accumulator
      return acc;
    },
    0
  );

  return females;
};
//find the oldest customers name.
//reduce, returns an object
//if the current elements age is greater than seed objects age, replace seed object with age of current element
var oldestCustomer = (arr) => {
  //leave seed empty
  let oldest = _.reduce(arr, function (acc, el) {
    //acc starts out as first element in array, compare first element to  next element
    if (el.age > acc.age) {
      //if age value is greater than acc age value
      return el; //return element, becomes new acc
    } else {
      //pass accumultor to call back agian
      return acc;
    }
  });
  //   console.log(oldest, "oldest");
  return oldest.name;
};
//same as above
//use reduce to compare elements in the array, returning the fitting our condition
var youngestCustomer = (arr) => {
  let youngest = _.reduce(arr, (acc, el) => {
    //if the current element age is less than acc age
    if (el.age < acc.age) {
      //if we find a younger age, return that el
      return el;
    } else {
      //return acc
      return acc;
    }
  });
  //return result of reduce
  return youngest.name;
};
//need to convert average balance to usable string
//use reduce
//set seed to 0
//convert balance to usable string and add to acc

var averageBalance = (arr) => {
  let averageB = _.reduce(
    arr,
    (acc, el) => {
      return (acc += Number(el.balance.replace(/^(-)|[^0-9.]+/g, "$1")));
    },
    0
  );

  //return average by dividing by length of array
  return averageB.toFixed(2) / arr.length;
};
//find out how many customers names begin with a given letter
//use filter
var firstLetterCount = (arr, letter) => {
  let beginsWith = _.filter(arr, (el) => {
    return el.name[0].toLowerCase() === letter.toLowerCase();
  });
  //
  return beginsWith.length;
};
//find how many friends of a given customer have names that start with a given letter
var friendFirstLetterCount = (arr, customer, letter) => {
  //get customer
  let customerObj = _.filter(arr, (el) => el.name === customer);
  //get customers frineds
  let friendsArray = customerObj[0].friends;
  //return friends counts
  return firstLetterCount(friendsArray, letter);
};
//find customers who share a given friends
//use filter
var friendsCount = (arr, name) => {
  let haveSameFriend = _.filter(arr, (el) => {
    if (
      _.some(el.friends, (friend) => {
        return friend.name === name;
      })
    ) {
      return el;
    }
  });
  
  haveSameFriend = _.map(haveSameFriend, (el) => {
    return el.name;
  })
  return haveSameFriend;
};
//returns an array of top tags
//iterate through elements,
 //iterate through tags array

var topThreeTags = (arr) => {
 //simplify data
  let onlyTags = _.map(arr, (el) => el.tags)
//flatten onlyTags with reduce
let flattened = _.reduce(onlyTags, (acc, el) => {
  return acc.concat(el);
}, [])
//create hash table of tags using reduce
let hash = _.reduce(flattened, (acc, el) => {
    
  acc[el] ? acc[el]++ : acc[el] = 1;
  return acc
    

}, {})
// console.log(hash);
//convert hash to array of key value pairs
let arrayOfCounts = Object.entries(hash);
//  console.log(arrayOfCounts, 'fffffffffffffffffffffffffffffffffffffffffffffuckkkkkkkkkkkkkkkkkkkkkkk')
let popularTags = _.filter(arrayOfCounts, (el) => {
   
  return el[1] > 2;

})
console.log(popularTags, 'fuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuckkkkkkkkkkkk');
return _.map(popularTags, (el) => el[0]);

}

var genderCount = (arr) => {
    
  let count = _.reduce(arr, (acc, el) => {
     
    if(acc[el.gender]){
     acc[el.gender]++
    } else {
      acc[el.gender] = 1;
    }
    return acc;

  }, {})
console.log(count, 'fuckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
return count;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
