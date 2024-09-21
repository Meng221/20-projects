const celcius = document.querySelector("#celcius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");
const tempInput = document.querySelectorAll("input");

tempInput.forEach(input => {
    input.addEventListener('input', (e) => {
        const tempValue = parseFloat(e.target.value);
        const tempName = e.target.name;
        // console.log(tempValue)
        // console.log(tempName)
        
        if (e.target.value === "") {
            celcius.value = null;
            fahrenheit.value = null;
            kelvin.value = null;
            return
        }

        if (tempName === "celcius") {
            let fahrenheitValue = tempValue * 1.8 + 32;
            fahrenheit.value = fahrenheitValue.toFixed(2);

            let kelvinValue = tempValue + 273;
            kelvin.value = kelvinValue.toFixed(2);
        }

        if (tempName === "fahrenheit") {
            let celciusValue = (tempValue - 32) / 1.8;
            celcius.value = celciusValue.toFixed(2)
            
            let kelvinValue = (tempValue - 32) / 1.8 + 273;
            kelvin.value = kelvinValue.toFixed(2);
        }
        if (tempName === "kelvin") {
            let celciusValue = tempValue - 273;
            celcius.value = celciusValue.toFixed(2)
            
            let fahrenheitValue = (tempValue - 273) * 1.8 + 32;
            fahrenheit.value = fahrenheitValue.toFixed(2);
        }
    })
})