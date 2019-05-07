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
document.getElementById("typed").innerHTML = "";
currentWords.forEach(ch => document.getElementById("typed").innerHTML += ch[0]);
var c = 0;

//console.log(wordmap);

function onKeyDown(){
  //console.log(event.key);
  //console.log(currentWords);
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
    //console.log("before : " + csp);
    csp = csp.filter(w => w[0]==event.key);
    csp = csp.map(w => w.substring(1));
    //console.log("after : " + csp);
    var spfinished = false;
    csp.forEach(w => spfinished |= w.length==0);
    if(spfinished){
      currentWords.shift();
      if(currentWords.length==0){
        words.shift();
        if(words.length==0){
          csp = [];
          document.getElementById("typed").innerHTML = "";
          console.log("cleared!");
          return;
        }else{
          splitWord(words[0]).forEach(s=>currentWords.push(wordmap[s]));
          csp = currentWords[0];
        }
      }else{
        csp = currentWords[0];
      }
    }
    document.getElementById("typed").innerHTML = csp[0];
    for(var i=1;i<currentWords.length;i++) document.getElementById("typed").innerHTML += currentWords[i][0];
  }else{
    console.log("error");
  }
}

document.onkeydown = onKeyDown;
