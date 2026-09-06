// ¡Buena suerte!
const alturaInput = document.getElementById("height");
const pesoInput = document.getElementById("weight");
const btnElement = document.getElementById("btn");
const bmiResultInput = document.getElementById("bmi-result");
const weightConditionInput = document.getElementById("weight-condition");

function calculateBMI() {
    const heightValue = parseFloat(alturaInput.value);
    const weightValue = parseFloat(pesoInput.value);

    const heightInMeters = heightValue / 100;
    const bmiValue = weightValue / (heightInMeters * heightInMeters);
    bmiResultInput.value = bmiValue.toFixed(2);

    if (bmiValue < 18.5) {
        weightConditionInput.textContent = "Bajo peso";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionInput.textContent = "Peso normal";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionInput.textContent = "Sobrepeso";
    } else {
        weightConditionInput.textContent = "Obesidad";
    }
}

btnElement.addEventListener("click", calculateBMI);