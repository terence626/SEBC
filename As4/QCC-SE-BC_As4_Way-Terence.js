// Parts A & C: BMI
//BMI = WEIGHT / (HEIGHT*HEIGHT)

document.write("QCC SEBC Assignment 4 by Terence Way<BR>");
document.write("Parts A & C - BMI:<BR><BR><BR>");

let peterBMI = 92/(1.95*1.95);
let lucasBMI = 78/(1.69*1.69);

if(lucasBMI >= peterBMI)
  {
    document.write("Lucas's BMI of ("+ lucasBMI + ") is higher than Peter's BMI of ("+ peterBMI + ").");
    }
else if(peterBMI > lucasBMI){
    document.write("Peter's BMI of ("+ peterBMI + ") is higher than Lucas' BMI of ("+ lucasBMI + ").");
    }



// Parts B & D: Temperature conversion

//C to F

function celsToFahr (deg){
  return (deg *9/5)+32;
  }

let celsTemp = 100;
let cToF = celsToFahr(celsTemp);
alert(celsTemp + ' C is '+ cToF +" F.");

let celsTemp2 = 0;
let cToF2 = celsToFahr(celsTemp2);
alert(celsTemp2 + ' C is '+ cToF2 +" F.");

let celsTemp3 = 10;
let cToF3 = celsToFahr(celsTemp3);
alert(celsTemp3 + ' C is '+ cToF3 +" F.");



//F to C

function fahrToCels(deg){
  return (deg-32)*5/9;
  }

let fahrTemp = 32;
let fToC = fahrToCels(fahrTemp);
alert(fahrTemp + " F is "+ fToC + " C.");

let fahrTemp2 = 10;
let fToC2 = fahrToCels(fahrTemp2);
alert(fahrTemp2 + " F is "+ fToC2 + " C.");

let fahrTemp3 = 102;
let fToC3 = fahrToCels(fahrTemp3);
alert(fahrTemp3 + " F is "+ fToC3 + " C.");

document.write("<BR><BR>");
document.write("© Copyright 2022 Terence Way");
