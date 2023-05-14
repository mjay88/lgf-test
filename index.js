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
  let count = _.filter(array, (el) => el.gender === "male");
  return count.length;
};

var femaleCount = (arr) => {
  let females = _.reduce(
    arr,
    (acc, curr) => {
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
  let oldest = _.reduce(arr, (acc, el) => {
    //acc starts out as first element in array, compare first element to  next element
    if (el.age > acc.age) {
      //if age value is greater than acc age value
      return el; //return element, becomes new acc
    } else {
      //pass accumultor to call back agian
      return acc;
    }
  });
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
      //convert strings to number, remove all nonalphanumeric,
      return (acc += Number(el.balance.replace(/^(-)|[^0-9.]+/g, "$1")));
    },
    0
  );
  //return average by dividing by length of array, and return only two decimals
  return averageB.toFixed(2) / arr.length;
};

//find out how many customers names begin with a given letter
//use filter
var firstLetterCount = (arr, letter) => {
  let beginsWith = _.filter(arr, (el) => {
    //compare first index of name to target letter
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
  //return friends counts by using firstLetterCount function above
  return firstLetterCount(friendsArray, letter);
};
//find customers' who share a given friend
//use filter
var friendsCount = (arr, name) => {
  let haveSameFriend = _.filter(arr, (el) => {
    //need to return a boolean, so use some
    if (
      //iterate through friends array, look at each friends
      _.some(el.friends, (friend) => {
        //return true if a friend in friends array is equal to our target name
        return friend.name === name;
      })
    ) {
      //if we find target in friends array, return that element
      return el;
    }
  });
  //pull the name out of haveSameFriends array, which is an array of objects
  haveSameFriend = _.map(haveSameFriend, (el) => {
    return el.name;
  });
  return haveSameFriend;
};
//returns an array of top tags
//iterate through elements,
//iterate through tags array

var topThreeTags = (arr) => {
  //simplify data
  let onlyTags = _.map(arr, (el) => el.tags);
  //flatten onlyTags with reduce into one array
  let flattened = _.reduce(
    onlyTags,
    (acc, el) => {
      return acc.concat(el);
    },
    []
  );
  //create hash table of tag counts using reduce
  let hash = _.reduce(
    flattened,
    //iterate through flattened, acc is object/hash, el is string
    (acc, el) => {
      //if the string exists as a property, add to its count total, otherwise create property and initialize with value of 1
      acc[el] ? acc[el]++ : (acc[el] = 1);
      //don't forget to return acc
      return acc;
    },
    {}
  );
  // console.log(hash, 'dirty old hassssssssh**********************************************');

  //convert hash to array of key value pairs
  let arrayOfCounts = Object.entries(hash);
  //  console.log(arrayOfCounts, 'arrayofcounts**********************************************')
  //filter for elements with counts greater than 2, can't use sort
  let popularTags = _.filter(arrayOfCounts, (el) => {
    return el[1] > 2;
  });
  // console.log(popularTags, "********************************************************");
  //remove count from elements so we just have an array of strings
  return _.map(popularTags, (el) => el[0]);
};

var genderCount = (arr) => {
  //use reduce passing object as seed
  let count = _.reduce(
    arr,
    //iterate through array
    (acc, el) => {
      //if gender exists as a property in seed objects
      if (acc[el.gender]) {
        //add to it's value
        acc[el.gender]++;
        //if it doesn't, create it and increment by 1
      } else {
        acc[el.gender] = 1;
      }
      //don't forget to return the accumulator
      return acc;
    },
    {}
  );
  // console.log(count, "count***********************************************************************");
  return count;
};

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
