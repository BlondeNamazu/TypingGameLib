let ip = new InputProcessor();
processKey(ip.init());

function processKey(ret){
  if(ret.state=="alreadycleared" || ret.state=="error"){
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

document.onkeydown = onKeyDown;
