/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    
    // store the map function under a new variable
    // use the map function on arr to multiply each element by 2
    const doubleElements = arr.map(function(val){
        return val * 2;
    })
    // return variable
    return doubleElements;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    // in filter, determine if element is divisible evenly by 2, return true
    return arr.filter(function(el){
        return el % 2 === 0;
    })
    // return the variable storing filter method
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    // use map method on array
    return arr.map(function(el){
        return el[0] + el[el.length-1];
    })
        // return el at index 0 plus the el at index at the length of the string
}

/*
Write a function called addKeyAndValue which accepts an array of objects, 
a key, and a value (to be added to each object) and returns the array passed to 
the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    // use map method on array
    return arr.map(function(el){
        el[key] = value;
        return el;
    })
        // return element with a new key value pair
}



/*
Write a function called vowelCount which accepts a string and 
returns an object with the keys as the vowel and the values as 
the number of times the vowel appears in the string. This function 
should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
   const vowels = "aeiou";
   const arrayOfLetters = str.split("");
   let obj = {};    
    arrayOfLetters.forEach(function(ele){
        if (vowels.includes(ele)) {

            if (obj[ele]){
                obj[ele]++;
            } else {
                obj[ele] = 1;
            }
        }
    })
    return obj;
}
// use forEach^^^


/*
Write a function called doubleValuesWithMap 
which accepts an array and returns a new 
array with all the values in the array passed
to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    let doubledValues = arr.map(function(val){
        return val*2;
    })
}

/*
Write a function called valTimesIndex which accepts 
an array and returns a new array with each value 
multiplied by the index it is currently at in 
the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    let valTimesIndexAnswer = arr.map(function(ele){
        let index = arr.indexOf(ele);
        let product = ele * index
        return product;
    })
    return valTimesIndexAnswer;
}

/*
Write a function called extractKey 
which accepts an array of objects 
and some key and returns a new array 
with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    
    return arr.map(function(objEle){
        return objEle[key];
    })
    
    // use map method to iterate through array of objects
        // return value at specified key
}

/*
Write a function called extractFullName 
which accepts an array of objects and 
returns a new array with the value of 
the key with a name of "first" and the 
value of a key with the name of  "last" 
in each object, concatenated together 
with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map(function(objEle){
        return objEle.first + " " + objEle.last;
    })
}

/*
Write a function called filterByValue
 which accepts an array of objects 
 and a key and returns a new array with
 all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, 
    {first: 'Tim', last:"Garcia", isCatOwner: true}, 
    {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele",
     isCatOwner: true}], 'isCatOwner') 
     // [{first: 'Tim', last:"Garcia", isCatOwner: true}, 
     {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter((function(objEle){
        return objEle[key];
    }))
}

/*
Write a function called find which 
accepts an array and a value and 
returns the first element in the 
array that has the same value as 
the second parameter or undefined 
if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    return arr.find(el => searchValue === el);
}

/*
Write a function called findInObj 
which accepts an array of objects, 
a key, and some value to search 
for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, 
    {first: 'Tim', last:"Garcia", isCatOwner: true}, 
    {first: 'Matt', last:"Lane"}, 
    {first: 'Colt', last:"Steele", isCatOwner: true}],
     'isCatOwner',true) 
    // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    return arr.filter(function(el){
        return el[key] === searchValue;
    })[0];
}
/*
Write a function called removeVowels which accepts a string 
and returns a new string with all of the vowels 
(both uppercased and lowercased) removed. Every character 
in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    const lowerCaseArr = str.toLowerCase().split("");
    const vowels = 'aeiou';
    let noVowelsStr = '';
    lowerCaseArr.forEach(function(el){
        if (!vowels.includes(el)){
            console.log(noVowelsStr);
            noVowelsStr += el;
        }
    })
    return noVowelsStr;
}

/*
Write a function called doubleOddNumbers which accepts
 an array and returns a new array with all of the odd
  numbers doubled (HINT - you can use map and filter to
     double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    console.log('array: ', arr)
    const doubleEls = arr.map(function(el){
        return el * 2;
    })
    console.log('doubled array: ', doubleEls);

    return doubleEls.filter(function(el){
        return el % 2 !== 0;
    })

}
