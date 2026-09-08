// ¡Buena suerte!
const alturaInput = document.getElementById("height");
const pesoInput = document.getElementById("weight");
const btnElement = document.getElementById("btn");
const bmiResultInput = document.getElementById("bmi-result");
const weightConditionInput = document.getElementById("weight-condition");

function calculateBMI() {
    //Convertimos los strings a números
    const heightValue = parseFloat(alturaInput.value);
    const weightValue = parseFloat(pesoInput.value);
    //Pasamos la altura de centímetros a metros
    const heightInMeters = heightValue / 100;
    //Calculamos el IMC
    const bmiValue = weightValue / (heightInMeters * heightInMeters);
    //Mostramos el resultado en el input correspondiente con dos decimales
    bmiResultInput.value = bmiValue.toFixed(2);
    //Mostramos la condición de peso según el IMC
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