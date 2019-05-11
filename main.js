function processKey(ret){
  if(ret.state=="alreadycleared" || ret.state=="miss"){
    return;
  }
  if(ret.state=="init" || ret.state=="ongame" || ret.state=="cleared"){
    document.getElementById("jpword").innerHTML = ret.jpword;
    document.getElementById("romaword").innerHTML = ret.romaword;
    return;
  }

}
function onKeyDown(){
  processKey(ip.process(event.key));
}

let ip = new InputProcessor();
let xhr = new XMLHttpRequest();
xhr.open("GET","wordlist.csv",true);
xhr.onload = function(){
  console.log(xhr.responseText);
  processKey(ip.init(xhr.responseText));
}
xhr.send();

document.onkeydown = onKeyDown;
