// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

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

var maleCount = function(array){
    let count = 0;
    for(let el of array){
        if(el.gender === 'male'){
         count++;
        }
    }
    return count;
}

var femaleCount = function(arr){

    let females = _.reduce(arr, function(acc, curr){
        
        if(curr.gender === 'female'){
            acc++
        }
        //always make sure your are returning our accumulator
        return acc;
    }, 0)

    return females;
}

var oldestCustomer = function(arr){
//leave seed empty
   let oldest = _.reduce(arr, function(acc, el){
//acc starts out as first element in array, compare first element to  next element
      if(el.age > acc.age){ //if age value is greater than acc age value
       return el; //return element, becomes new acc
      } else { //pass accumultor to call back agian
         return acc;
      }

   })
   console.log(oldest, 'oldest')
  return oldest.name
}
//find the oldest customers name.
//reduce, returns an object
//if the current elements age is greater than seed objects age, replace seed object with age of current element
//

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

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