function splitWord(w){
  var str = "";
  var cnt = 0;
  var ret = [];
  for(var i=0;i<w.length;i++){
    if(w[i]=="っ"){
      if(str!=""){
        ret.push(str);
        cnt = 0;
      }
      str = w[i];
    } else if (
      w[i]=="ぁ" ||
      w[i]=="ぃ" ||
      w[i]=="ぅ" ||
      w[i]=="ぇ" ||
      w[i]=="ぉ" ||
      w[i]=="ゃ" ||
      w[i]=="ゅ" ||
      w[i]=="ょ"){
      str += w[i];
      ret.push(str);
      str = "";
      cnt = 0;
    } else {
      if(cnt>=1){
        ret.push(str);
        str = w[i];
        cnt = 1;
      } else {
        str += w[i];
        cnt ++;
      }
    }
    if(i==w.length-1){
      ret.push(str);
    }
  }
  return ret;
}

