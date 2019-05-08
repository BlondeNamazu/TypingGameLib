document.getElementById("typed").innerHTML = "Namazu";

var words = [
  "あいうえお",
  "わっちゃっしゃっほい",
  "あっし",
  "ふにゃっ",
  "まちがえちゃった"
];

var wordmap = createWordMap();
var currentWords = [];
var counter = 0;
var csp;

//words.forEach(w => splitWord(w).forEach(s=>console.log(wordmap[s])));
splitWord(words[0]).forEach(s=>currentWords.push(wordmap[s]));
csp = currentWords[0];
console.log(currentWords);
document.getElementById("jpword").innerHTML = words[0];
document.getElementById("typed").innerHTML = "";
currentWords.forEach(ch => document.getElementById("typed").innerHTML += ch[0]);
var c = 0;
var typedWord = "";

//console.log(wordmap);

function onKeyDown(){
  if(csp.length==0){
    console.log("already cleared!");
    return;
  }
  var found = false;
  csp.forEach(ch =>{
    if(ch[0]==event.key){
      found = true;
    }
  });
  if(found){
    // typed key is head character of some candidate of current sub-word
    typedWord += event.key;
    csp = csp.filter(w => w[0]==event.key);
    csp = csp.map(w => w.substring(1));
    var spfinished = false;
    csp.forEach(w => spfinished |= w.length==0);
    if(spfinished){
      // finish typing current sub-word
      currentWords.shift();
      if(currentWords.length==0){
        // There is no more sub-word
        words.shift();
        if(words.length==0){
          // There is no more odai
          csp = [];
          document.getElementById("jpword").innerHTML = "クリア！";
          document.getElementById("typed").innerHTML = "";
          console.log("cleared!");
          return;
        }else{
          // There is remained odai
          document.getElementById("jpword").innerHTML = words[0];
          splitWord(words[0]).forEach(s=>currentWords.push(wordmap[s]));
          csp = currentWords[0];
          typedWord = "";
        }
      }else{
        // There is remained sub-word
        csp = currentWords[0];
      }
    }
    document.getElementById("typed").innerHTML = "<font color='red'>" + typedWord + "</font>";
    document.getElementById("typed").innerHTML += csp[0];
    for(var i=1;i<currentWords.length;i++) document.getElementById("typed").innerHTML += currentWords[i][0];
  }else{
    console.log("error");
  }
}

document.onkeydown = onKeyDown;
