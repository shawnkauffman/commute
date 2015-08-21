(function() {
  var ROUND_TRIP_COST = 2;
  var DAYS_IN_WEEK = 5;
  var WEEKS_IN_MONTH = 4;

  function calcCost(costOfGas, vehicleMPG, numMiles) {
    var dailyCost = (costOfGas / vehicleMPG) * (numMiles * ROUND_TRIP_COST);
    var weeklyCost = dailyCost * DAYS_IN_WEEK;
    var monthlyCost = weeklyCost * WEEKS_IN_MONTH;

    return {
      dailyCost: dailyCost,
      weeklyCost: weeklyCost,
      monthlyCost: monthlyCost
    };
  }

  var form = document.forms[0];

  form.onsubmit = function(e) {
    e.preventDefault();

    var userCostOfGas = +form.costOfGas.value;
    var userMPG = +form.vehicleMPG.value;
    var userNumMiles = +form.numMiles.value;

    var costs = calcCost(userCostOfGas, userMPG, userNumMiles);
    var inputReturned = document.getElementById("inputReturned");

    inputReturned.innerHTML = "For a car that gets " + userMPG + 
    " MPG, driving " + userNumMiles + " miles to work each day at $" + 
    userCostOfGas.toFixed(2) + "/gal:";

    calculatedDailyCost.innerHTML = "You're spending $" + costs.dailyCost.toFixed(2) + " on gas every day.";
    calculatedWeeklyCost.innerHTML = "You're spending $" + costs.weeklyCost.toFixed(2) + " on gas every week.";
    calculatedMonthlyCost.innerHTML = "You're spending $" + costs.monthlyCost.toFixed(2) + " on gas each month.";

    costOfGas.value = vehicleMPG.value = numMiles.value = '';
  };
})();