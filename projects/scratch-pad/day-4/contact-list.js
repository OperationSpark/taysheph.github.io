// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //return an object with each property inside of it
    
   return {
       id: id,
       nameFirst: nameFirst,
       nameLast: nameLast
   };
    
} 



function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
       addContact: function(contact) {
           contacts.push(contact);
       },
       findContact: function(fullName) {
           for (var i = 0; i < contacts.length; i++) {
               var full = `${contacts[i].nameFirst} ${contacts[i].nameLast}`;
               if (full === fullName) {
                   return contacts[i];
               }
           }
       },
       removeContact: function(contact) {
           for (var i = 0; i < contacts.length; i++) {
               
               if (contacts[i].nameFirst === contact.nameFirst) {
                   contacts.splice(i, 1)
               }
           }
       },
       
       
       
       
       
       
       
       
       printAllContactNames: function() {
           
          //create string to add names to
          var string = "";
           
          //for loop to get acces to each contact in the array
          for (var i = 0; i < contacts.length; i++) {
            //last name shouldn't have a line break after it
                if (i === contacts.length - 1) {
                    var fullName = `${contacts[i].nameFirst} ${contacts[i].nameLast}`; 
                } else {
                    
            //get nameFirst and nameLast from each object
              var fullName = `${contacts[i].nameFirst} ${contacts[i].nameLast}\n`; 
               
                }
                
            //concatenate the names to make one string with a line break between each name
                string += fullName;
            
          }
           
          //return string
            return string;
        
        
    }
};
}



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
