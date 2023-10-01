document.getElementById("calculateBtn").addEventListener("click", calculateBMI);

function calculateBMI() {
  const weightInput = document.getElementById("weight");
  const heightFeetInput = document.getElementById("height-feet");
  const heightInchesInput = document.getElementById("height-inches");
  const resultDiv = document.getElementById("result");

  const weightPounds = parseFloat(weightInput.value);
  const heightFeet = parseFloat(heightFeetInput.value);
  const heightInches = parseFloat(heightInchesInput.value);

  if (
    isNaN(weightPounds) ||
    isNaN(heightFeet) ||
    isNaN(heightInches) ||
    weightPounds <= 0 ||
    heightFeet <= 0 ||
    heightInches < 0 ||
    heightInches >= 12
  ) {
    resultDiv.textContent = "Please enter valid values.";
    resultDiv.style.color = "#f00";
    return;
  }

  const heightInchesTotal = heightFeet * 12 + heightInches;

  // BMI calculation in pounds and feet
  const bmi = (weightPounds / (heightInchesTotal * heightInchesTotal)) * 703;
  const bmiRounded = bmi.toFixed(2);

  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  resultDiv.innerHTML = `Your BMI is <span> ${bmiRounded}</span>.<br> Category: <span> ${category} </span>`;
  resultDiv.style.color = "#000";
  const resultSpan = resultDiv.querySelectorAll("span");
  resultSpan.forEach((item) => {
    if (bmi < 18.5) {
      item.style.color = "red";
    }
  });
}
