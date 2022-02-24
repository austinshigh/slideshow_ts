var Direction;
(function (Direction) {
    Direction[Direction["FtoC"] = 0] = "FtoC";
    Direction[Direction["CtoF"] = 1] = "CtoF";
})(Direction || (Direction = {}));
function calculateTemperature(temperature, conversion) {
    return Direction.FtoC === conversion
        ? ((temperature - 32.0) * 5.0) / 9.0
        : (temperature * 9.0) / 5.0 + 32.0;
}
document.addEventListener("DOMContentLoaded", () => {
    const cToFButton = document.getElementById("f");
    const fToCButton = document.getElementById("c");
    const input = document.getElementById("input");
    const result = document.getElementById("result");
    cToFButton.addEventListener("click", () => {
        let temp = calculateTemperature(Number(input.value), Direction.CtoF).toString();
        temp = temp.indexOf(".") >= 0 ? temp.slice(0, temp.indexOf(".") + 3) : temp;
        result.innerHTML = temp + " Degrees Fahrenheit";
        input.value = "";
    });
    fToCButton.addEventListener("click", () => {
        let temp = calculateTemperature(Number(input.value), Direction.FtoC).toString();
        temp = temp.indexOf(".") >= 0 ? temp.slice(0, temp.indexOf(".") + 3) : temp;
        result.innerHTML = temp + " Degrees Celsius";
        input.value = "";
    });
});
//# sourceMappingURL=temperature.js.map