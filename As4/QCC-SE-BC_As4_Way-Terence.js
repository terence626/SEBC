
// Part A and Part C: BMI
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



// Part B: Temperature conversion

let celsTemp = 37;

let fahrTemp = 108;

function celsToFahr (deg){
 return (deg *9/5)+32;

}
function fahrToCels(deg){
 return (deg-32)*5/9;
}

let cToF = celsToFahr(celsTemp);
alert(celsTemp + ' C is '+ cToF +" F.");

let fToC = fahrToCels(fahrTemp);
alert(fahrTemp + " F is "+ fToC + " C.");
