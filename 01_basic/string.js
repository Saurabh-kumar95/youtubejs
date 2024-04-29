const name="saurabh "
const repocount=40;

// console.log(name+repocount+ " VALUE");  This is not a right way

// console.log(`hello my name is ${name} and my repocount is ${repocount} and etc.`);

const gateName="Hello Saurabh";
// console.log(gateName.length);
// console.log(gateName.toUpperCase());

console.log(gateName.charAt(2));
console.log(gateName.indexOf('S'));

const newstring=gateName.substring(0,4)
console.log(newstring);

const newStr="   Saurabh    "
console.log(newStr);
console.log(newStr.trim());

const url="https://saurah.com/saurab%20hkumar"


console.log(url.replace('%20','-'));
console.log(url)

console.log(url.includes("saurab"));