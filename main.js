// 1. What does the following code return? 

new Set([1,1,2,2,3,4])

//2. What does the following code return? 

[... new Set("referee")].join("")

//3. What does the Map m lopok like after running the following code?

let m = new Map ();
m.set([1,2,3], true);
m.set([1,2,3], false);


//4. Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

//5. vowelCount accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }



