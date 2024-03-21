// Mad Lib with JavaScript

// second mad lib

// Event listener
document
  .getElementById("mad-lib-btn2")
  .addEventListener("click", buildSecondMadLib);

document.getElementById("mad-lib-btn2").addEventListener("click", changeStyle);

// Mad lib 1

document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);

document
  .getElementById("mad-lib-btn")
  .addEventListener("click", changeSecondStyle);

// Event Function

function buildSecondMadLib() {
  // Input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("Noun").value;
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;

  // process
  let secondResult = `My ${city} is a train wreck! There are too many ${pluralNoun} in this ${adjective} City! somebody has to ${verb} one of the ${noun} to fix it. Maybe ${name} can help me fix my city!`;

  // Output
  document.getElementById("result").innerHTML = secondResult;
  alert(secondResult);
}

// change style of mad lib 1

function changeStyle() {
  document.getElementById("html").style.backgroundImage =
    "url(images/download2.jpg)";
  document.getElementById("result").style.fontFamily = "Papyrus";
  document.getElementById("result").style.border = "2px solid red";
}

// First Mad Lib
function buildMadLib() {
  // Input'
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("Noun").value;
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;

  // Process
  let result = `There are too many ${pluralNoun} on this ${adjective} airplane!, I screamed. Somebody has to ${verb} one the ${noun} to solve this problem. Maybe ${name}  can help me get off at ${city}. `;

  // Output
  document.getElementById("result").innerHTML = result;
  alert(result);
}

function changeSecondStyle() {
  document.getElementById("html").style.backgroundImage =
    "url(images/plane.jpg)";
  document.getElementById("result").style.fontFamily =
    " Arial, Helvetica, sans-serif";
  document.getElementById("result").style.border = "2px solid orange";
}

// Random sentence generator

document.getElementById("btn3").addEventListener("click", sentence);

document.getElementById("btn3").addEventListener("click", changeThirdStyle);

var verbs, nouns, adjectives, adverbs, preposition;
nouns = [
  "bird",
  "clock",
  "boy",
  "plastic",
  "duck",
  "teacher",
  "old lady",
  "professor",
  "hamster",
  "dog",
];
verbs = [
  "kicked",
  "ran",
  "flew",
  "dodged",
  "sliced",
  "rolled",
  "died",
  "breathed",
  "slept",
  "killed",
];
adjectives = [
  "beautiful",
  "lazy",
  "professional",
  "lovely",
  "dumb",
  "rough",
  "soft",
  "hot",
  "vibrating",
  "slimy",
];
adverbs = [
  "slowly",
  "elegantly",
  "precisely",
  "quickly",
  "sadly",
  "humbly",
  "proudly",
  "shockingly",
  "calmly",
  "passionately",
];
preposition = [
  "down",
  "into",
  "up",
  "on",
  "upon",
  "below",
  "above",
  "through",
  "across",
  "towards",
];

function randGen() {
  return Math.floor(Math.random() * 5);
}

function sentence() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var rand3 = Math.floor(Math.random() * 10);
  var rand4 = Math.floor(Math.random() * 10);
  var rand5 = Math.floor(Math.random() * 10);
  var rand6 = Math.floor(Math.random() * 10);

  var content =
    "The " +
    adjectives[rand1] +
    " " +
    nouns[rand2] +
    " " +
    adverbs[rand3] +
    " " +
    verbs[rand4] +
    " because some " +
    nouns[rand1] +
    " " +
    adverbs[rand1] +
    " " +
    verbs[rand1] +
    " " +
    preposition[rand1] +
    " a " +
    adjectives[rand2] +
    " " +
    nouns[rand5] +
    " which, became a " +
    adjectives[rand3] +
    ", " +
    adjectives[rand4] +
    " " +
    nouns[rand6] +
    ".";

  document.getElementById("result").innerHTML = content;
}

function changeThirdStyle() {
  document.getElementById("html").style.backgroundImage =
    "url(images/word.jpg)";
  document.getElementById("result").style.fontFamily = " times new roman ";
  document.getElementById("result").style.border = "2px solid purple";
}
