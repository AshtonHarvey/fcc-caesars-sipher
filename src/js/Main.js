//WORK IN PROGRESS!

let input = document.getElementById("input");
let output = document.getElementById("output");
let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function handleSubmit() {
  output.innerHTML = solve();
  console.log("hit submit button");
  console.log(alphabet.length);
}

function solve() {
  let encodedString = input.value.toUpperCase().trim();
  let characters = encodedString.split("");
  let converted = characters.map(convertLetters);
  let answer = " ";
  for (let i = 0; i < converted.length; i++) {
    answer += converted[i];
  }
  console.log(converted);
  console.log(answer);
  return answer;
}

function convertLetters(character) {
  // alphabet.find(character)
  let index = alphabet.indexOf(character);
  if (index === -1) {
    return character;
  }
  return index > 12 ? alphabet[index + 13 - 26] : alphabet[index + 13];
}
