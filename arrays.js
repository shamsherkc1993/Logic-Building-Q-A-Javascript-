//1. modify an item in an array by giving a single array item a new value.

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
shopping[0] = "tahini";
console.log(shopping);

// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]

//2. accessing multidimensional array
const random = ["tree", 795, [0, 1, 2]];
console.log(random[2][2]);

//3.Finding the index of items in an array

const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1 (if there is no item in the array it will return -1)

//4. Adding items

const cities = ["Manchester", "Liverpool"];
cities.push("London");
let neLength = cities.push("Leister, Bermingham");

console.log(cities);
console.log(neLength);

//5. To add an item to the start of the array, use unshift():

const country = ["Nepal", "India"];
country.unshift("Bhutan", "Myanmar");
console.log(country);

//6. To remove the last item from the array, use pop().

const food = ["Burger", "Pizza"];
food.pop();
console.log(food);

//7. To remove the first item from the array, use shift().

const NepaliFood = ["Bhat", "Donuts", "WaiWai"];
NepaliFood.shift();
console.log(NepaliFood);

//8. Converting between strings and arrays
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const city = data.split(",");
console.log(data);
console.log(city);
console.log(city.length);
console.log(city[5]);

//9. Another way of converting an array to a string is to use the toString() method.
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
let newDogs = dogNames.toString(); // Rocket,Flash,Bella,Slugger
console.log(newDogs);
