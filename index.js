//Buscamos los nodos:

const alturaInput = document.getElementById("height");
const pesoInput = document.getElementById("weight");
const botonElement = document.getElementById("btn");
const bmiResultInput = document.getElementById("bmi-result");
const weightConditionInput = document.getElementById("weight-condition");

//Le decimos al botón que esté atento y cuando alguien pulse el botón ejecute la función:

botonElement.addEventListener("click", function(){

    //Convertimos los strings a números

    const alturaValue = parseFloat(alturaInput.value);
    const pesoValue = parseFloat(pesoInput.value);

    //Pasamos la altura de centímetros a metros

    const alturaEnMetros = alturaValue / 100;

    //Calculamos el IMC

    const bmiValue = pesoValue / (alturaEnMetros * alturaEnMetros);

    //Mostramos el resultado en el input correspondiente con dos decimales

    bmiResultInput.value = bmiValue.toFixed(2);

    //Mostramos mensaje de la condición de peso según el IMC

    if (bmiValue < 18.5) {
        weightConditionInput.textContent = "Bajo peso";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionInput.textContent = "Peso normal";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionInput.textContent = "Sobrepeso";
    } else {
        weightConditionInput.textContent = "Obesidad";
    }
});

