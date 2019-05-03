document.getElementById("typed").innerHTML = "Namazu";

var words = [
  "あいうえお",
  "わっちゃっしゃっほい",
  "あっし",
  "ふにゃっ",
  "まちがえちゃった"
];

var wordmap = createWordMap();

words.forEach(w => splitWord(w).forEach(s=>console.log(wordmap[s])));

console.log(wordmap);

function onKeyDown(){
  console.log(event.key);
}

document.onkeydown = onKeyDown;
