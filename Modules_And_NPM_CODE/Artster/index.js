// REMEMBER TO RUN "npm install" in your terminal (in the same directory as this file)
const figlet = require("figlet");
const colors = require("colors");
const f1 = figlet('I  love  YOU  POORVA  PATHAK!! ', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.green)
});

figlet('Mujhse   SHAADI   KAROGI ?? ', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.green)
});

//const cowsay = require("cowsay");
//const str = "HI THERE....!";
//const str2 = "oO"
//const str3 = 'U'


//console.log(cowsay.say({
//   text: str.green,
//   e: str2.yellow,
//   T: str2.red,
//  }));