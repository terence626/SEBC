
// Part A: BMI
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



// Part B: The temperature converter

let celsTemp = 37;

let fahrTemp = 108;

function tempToFa (deg){
 return (deg *9/5)+32;

}
function tempToCel(deg){
 return (deg-32)*5/9;
}

let celToFa = tempToFa(celsTemp);

alert(celsTemp + ' C is '+ celToFa +" F.");

let faToCel = tempToCel(fahrTemp);
alert( fahrTemp + " F is "+ faToCel + " C.");
