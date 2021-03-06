// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
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
 *    npm start --prefix ./taysheph.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
  var males = _.filter(array, function(customerObj, i, array) {
      return customerObj.gender === "male";
   });
   return males.length;
};

var femaleCount;

var oldestCustomer;

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount = function(array) {
  
  var getCountObj = function(resultObj, customerObj) {
    // if resultObj has the key for the object's gender
      //if so add to that count
      if (resultObj[customerObj.gender]) {
        resultObj[customerObj.gender] += 1;
        //if not add a new key value pair for that gender
      } else {
        resultObj[customerObj.gender] = 1;
      }
    return resultObj
  }
  
  return _.reduce(array, getCountObj , {});
  
  
  // _.reduce(array, function(resultObj, customerObj) {
  //   // if resultObj has the key for the object's gender
  //     //if so add to that count
  //     if (resultObj[customerObj.gender]) {
  //       resultObj[customerObj.gender] += 1;
  //       //if not add a new key value pair for that gender
  //     } else {
  //       resultObj[customerObj.gender] = 1;
  //     }
  //   return resultObj
  // }, {});
  
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
