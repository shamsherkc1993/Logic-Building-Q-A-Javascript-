let stringList =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, corporis aperiam neque, autem omnis, incidunt ut obcaecati fuga recusandae eos similique asperiores totam odit earum dolorem maiores optio numquam temporibus?";
// console.log(stringList.length);

//1.Testing if a string contains a substring
if (stringList.endsWith("temporibus?")) {
  console.log(
    "Found Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, corporis aperiam neque, autem omnis, incidunt ut obcaecati fuga recusandae eos similique asperiores totam odit earum dolorem maiores optio numquam temporibus?!"
  );
} else {
  console.log("No temporibus?");
}
//2. Finding the position of a substring in a string
console.log(stringList.indexOf("ipsum"));

//3.extract a substring from a string using the slice() method
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"

//4. The string methods toLowerCase() and toUpperCase()
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

//5. replace one substring inside a string with another substring using the replace() method

const browser = "mozilla";
const updated = browser.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browser); // "mozilla"

//5. to change all occurrences, you can use replaceAll()

let replaceAll = "my name is shamsher. my house is big";
let replacedText = replaceAll.replaceAll("my", "My");
console.log(replacedText);
console.log(replaceAll);
