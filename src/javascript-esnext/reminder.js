class Reminder {
    constructor(text) {
      this.text = text;
    }
  
    remindMe(delay) {
      //setTimeout(function() {
      setTimeout(() =>  {
        console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
      }, delay * 1000);
    }
}

const rem = new Reminder("imprimiendo nuevo mensaje");
rem.remindMe(5);


/* No funcionaba, porque function() hace un bind de su propio this, mientras que una arrow function hereda los this del padre */