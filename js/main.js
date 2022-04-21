let text = "98c 900a 1z23 24x6";
let newArr = text.split(" ").map((element) => element.split("").sort().reverse().join(""));
console.log(newArr.sort().join(" "));