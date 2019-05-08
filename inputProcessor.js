class InputProcessor{
  init() {
    this.words = [
      "あいうえお",
      "わっちゃっしゃっほい",
      "あっし",
      "ふにゃっ",
      "まちがえちゃった"
    ];
    this.wordmap = createWordMap();
    this.currentWords = [];
    this.counter = 0;
    this.c = 0;
    this.typedWord = "";

    splitWord(this.words[0]).forEach(s=>this.currentWords.push(this.wordmap[s]));
    this.csp = this.currentWords[0];
    let retstr = "";
    this.currentWords.forEach(ch => retstr += ch[0]);
    return {
      state: "init",
      jpword: this.words[0],
      romaword: retstr
    };
  }



  process(key) {
    if(this.csp.length==0){
      console.log("already cleared!");
      return{
        state: "alreadycleared",
        jpword: "クリア！",
        romaword: ""
      };
    }
    let found = false;
    this.csp.forEach(ch =>{
      if(ch[0]==key){
        found = true;
      }
    });
    if(found){
      // typed key is head character of some candidate of current sub-word
      this.typedWord += key;
      this.csp = this.csp.filter(w => w[0]==key);
      this.csp = this.csp.map(w => w.substring(1));
      let spfinished = false;
      this.csp.forEach(w => spfinished |= w.length==0);
      if(spfinished){
        // finish typing current sub-word
        this.currentWords.shift();
        if(this.currentWords.length==0){
          // There is no more sub-word
          this.words.shift();
          if(this.words.length==0){
            // There is no more odai
            this.csp = [];
            return {
              state: "cleared",
              jpword: "クリア！",
              romaword: ""
            };
          }else{
            // There is remained odai
            splitWord(this.words[0]).forEach(s=>this.currentWords.push(this.wordmap[s]));
            this.csp = this.currentWords[0];
            this.typedWord = "";
          }
        }else{
          // There is remained sub-word
          this.csp = this.currentWords[0];
        }
      }
      let retstr = "<font color='red'>" + this.typedWord + "</font>";
      retstr += this.csp[0];
      for(let i=1;i<this.currentWords.length;i++) retstr += this.currentWords[i][0];
      return {
        state: "ongame",
        jpword: this.words[0],
        romaword: retstr
      }
    }else{
      // miss type
      console.log("error");
      return {
        state: "error"
      }
    }
  }
}
