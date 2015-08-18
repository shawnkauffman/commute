var calcCost = function  (costOfGas, vehicleMPG, numMiles) {
  var dailyCost = (costOfGas / vehicleMPG) * (numMiles * 2);
  var weeklyCost = dailyCost * 5;
  var monthlyCost = weeklyCost * 4;

  return {
    dailyCost: dailyCost,
    weeklyCost: weeklyCost,
    monthlyCost: monthlyCost
  };
}

document.forms[0].onsubmit = function(e) {
  e.preventDefault();

  if (document.forms[0].costOfGas.value == '' || 
    document.forms[0].vehicleMPG.value == '' ||
    document.forms[0].numMiles.value == '') {
    return;
  } else {
    var userCostOfGas =  +document.forms[0].costOfGas.value;
    var userMPG =  +document.forms[0].vehicleMPG.value;
    var userNumMiles =  +document.forms[0].numMiles.value;
    document.forms[0].costOfGas.value = "";
    document.forms[0].vehicleMPG.value = "";
    document.forms[0].numMiles.value = "";

    var costs = calcCost(userCostOfGas, userMPG, userNumMiles);
    var calculatedMonthlyCost = document.getElementById("calculatedDailyCost");
    var calculatedMonthlyCost = document.getElementById("calculatedWeeklyCost");
    var calculatedMonthlyCost = document.getElementById("calculatedMonthlyCost");
    
    var inputReturned = document.getElementById("inputReturned");
    inputReturned.innerHTML = "For a car that gets " + userMPG + " MPG, driving " + userNumMiles + " miles to work each day at $" + userCostOfGas + "/gal:";

    calculatedDailyCost.innerHTML = "You're spending $" + parseInt(costs.dailyCost, 10) + " on gas every day.";
    calculatedWeeklyCost.innerHTML = "You're spending $" + parseInt(costs.weeklyCost, 10) + " on gas every week.";
    calculatedMonthlyCost.innerHTML = "You're spending $" + parseInt(costs.monthlyCost, 10) + " on gas each month.";
  }
};
