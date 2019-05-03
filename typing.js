document.getElementById("typed").innerHTML = "Namazu";

var words = [
  "あいうえお",
  "わっちゃっしゃっほい",
  "あっし",
  "ふにゃっ"
];

var wordmap = createWordMap();

words.forEach(w => splitWord(w).forEach(s=>console.log(wordmap[s])));

var itr = wordmap.keys()
for(var i=0;i<Object.keys(wordmap).length;i++){
  var k = itr.next().value;
  if(!k || k.length!=2) continue;
  var lhs = wordmap[k[0]];
  var rhs = wordmap[k[1]];
  lhs.forEach(l =>{
    rhs.forEach(r => {
      wordmap[k].push(l+r);
    });
  });
}

console.log(wordmap);

function onKeyDown(){
  console.log(event.key);
}

document.onkeydown = onKeyDown;
