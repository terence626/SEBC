
// Parts A & C: BMI
//BMI = WEIGHT / (HEIGHT*HEIGHT)

document.write("QCC SEBC Assignment 4 by Terence Way<BR>");
document.write("Part A & Part C - BMI:<BR><BR><BR>");

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

let celsTemp = 100;
function celsToFahr (deg){
  return (deg *9/5)+32;
  }

let cToF = celsToFahr(celsTemp);
alert(celsTemp + ' C is '+ cToF +" F.");


let celsTemp2 = 0;
function celsToFahr (deg){
  return (deg *9/5)+32;
  }

let cToF2 = celsToFahr(celsTemp2);
alert(celsTemp2 + ' C is '+ cToF2 +" F.");


let celsTemp3 = 10;
function celsToFahr (deg){
  return (deg *9/5)+32;
  }

let cToF3 = celsToFahr(celsTemp3);
alert(celsTemp3 + ' C is '+ cToF3 +" F.");









let fahrTemp = 32;
function fahrToCels(deg){
  return (deg-32)*5/9;
  }

let fToC = fahrToCels(fahrTemp);
alert(fahrTemp + " F is "+ fToC + " C.");



let fahrTemp2 = 10;
function fahrToCels(deg){
  return (deg-32)*5/9;
  }

let fToC2 = fahrToCels(fahrTemp2);
alert(fahrTemp2 + " F is "+ fToC2 + " C.");


let fahrTemp3 = 102;
function fahrToCels(deg){
  return (deg-32)*5/9;
  }

let fToC3 = fahrToCels(fahrTemp3);
alert(fahrTemp3 + " F is "+ fToC3 + " C.");
