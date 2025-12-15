//Create a Map of Student IDs and Names
// let stu = new Map ([[12,"Ramesh"],[15,"hyouzu"],[16,"ansh"],[19,"Rosemary"]]);
// stu.set(13,'DOK');
// console.log(stu);
// console.log(stu.get(12));
// stu.delete(12);
// console.log(stu);

//2. Create a Set of Programming Languages
// let PL = new Set(['HTML','CSS','JS','React','Python','Django','C','C++','Rust','HTML','CSS']);
// for (let value of PL){
//     console.log(value);
// }

//3. Compare Object vs Map for Key-Value Storage
// const myObj = {
//     1: 'Html',
//     2: 'CSS',
//     3: 'JS',
//     4: 'React',
//     5:'Python'
// };

// const myMap = new Map([[1,"Html"],[2,"CSS"],[3,"JS"],[4,"React"],[5,"Python"]]);
// myObj[6] = 'C';
// myMap.set(6,"C");
// console.log(myMap);
// console.log(myObj);

//Objects key are always converted to string whereas Map keys are as they are

//4. Build a contact list using map:

// let conList = new Map([[98412,'Apple'],[98654,'Banana'],[98765,'Cherry'],[98764,'Dragon Fruit']]);
// conList.set(98734,'Guava');
// conList.delete(98412);
// conList.set(98765,'Mango');

// const searchNum = 98765;
// if (conList.has(98765)){
//     console.log("Contact Found"),console.log(conList.get(searchNum));
// }
// else
//     console.log("Not found");
// console.log(conList);

//5. Remove duplicates form array using set

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
// const fruit = new Set(fruits);
// console.log(fruit);

//6. Track user logins withs set

// let loggedInUsers = new Set();
// loggedInUsers.add(101);
// loggedInUsers.add(102);
// loggedInUsers.add(103);

// let userToCheck = 102;

// if(loggedInUsers.has(userToCheck)){
//     console.log("User is logged in");
// }
// else{
//     console.log("User is not logged in.");
// }

// //loggingOut
// loggedInUsers.delete(102);
// console.log(loggedInUsers);

//7. Create a map of book titles and authors:

// let books = new Map([['The Secret Seven','Enid Blyton'],['The Subtle Art of Not Giving a Fck','Mark Mansion'],['Atomic Habit','James Clear'],['How to win friends and influence people','Dale Carnegie'],['Meditations','Marcus Aurelius']]);

// books.set('Atomic Habit','James Unclear');

// console.log(books);
// console.log(books.size);

//8. associate metadata with Dom elements using weak Map

//10. Bulid a shopping Cart using Map
//Id =  key, quantity = values 
// let shoppingCart = new Map([[512,30],[976,40],[431,70],[247,55]]);

// shoppingCart.set(141,60);
// shoppingCart.set(512,60);

// let quantArr = shoppingCart.values();
// console.log(quantArr);

// let sum = 0;
// for(let value of quantArr){
//     sum+=value;
// }
// console.log("Total quantity is:",sum);

//11.Anagram Checker with set

// function checkAnagram(word1,word2)
// {
//     const set1 = new Set(word1);
//     const set2 = new Set(word2);
    
//     for (val of set1)
//     {
//         if (set2.has(val))
//         {
//             console.log(`${val} is present in ${word2}`);
//         }
//         else{
//             console.log(`${val} is not present in ${word2}`);
//         }
//     }
// }

// checkAnagram('cato','act');

//12. First non-repeating  character with map.

// function firstNonRepeatingChar(str)
// {
//     const charFreq = new Map();
//     for (let char of str){
//         if(charFreq.has(char))
//         {
//             charFreq.set(char,charFreq.get(char) + 1);
//         }
//         else{
//             charFreq.set(char,1);
//         }
//     }
//     for (let char of  str){
//         if(charFreq.get(char)===1){
//             return char;
//         }
//     }
//     return null;
// }

// console.log(firstNonRepeatingChar("Apple"));


//13. Measure Performance: Object vs Map

// const obj = {};

// console.time('Object insertion');

// for (let i=0; i<100000; i++)
// {
//     obj['key'+i] = 'value' + i;
// }
// console.timeEnd('Object insertion');
// console.time('Map insertion');
// const map1 = new Map();
// for (let i= 0; i<100000; i++)
// {
//     map1.set('key'+i,'value'+i);
// }
// console.timeEnd('Map insertion');

//14. Voting app with set to prevent duplicate votes;


let voterId = new Set([101,102,103,104,105]);
console.log(voterId);

function check(id)
{
    if(voterId.has(id))
    {
        console.log("User has already voted.");
    }
    else{
        voterId.add(id);
    }
}
check(101);
check(107);
console.log(voterId);

//15. Employee registry using object keys in map.