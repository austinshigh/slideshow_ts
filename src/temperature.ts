enum Direction {
  FtoC,
  CtoF,
}

function calculateTemperature(
  temperature: number,
  conversion: Direction
): Number {
  return Direction.FtoC === conversion
    ? ((temperature - 32.0) * 5.0) / 9.0
    : (temperature * 9.0) / 5.0 + 32.0;
}

document.addEventListener("DOMContentLoaded", () => {
  const cToFButton: HTMLElement = document.getElementById("f");
  const fToCButton: HTMLElement = document.getElementById("c");

  const input: HTMLInputElement = document.getElementById(
    "input"
  ) as HTMLInputElement;
  const result: HTMLElement = document.getElementById("result");

  cToFButton.addEventListener("click", () => {
    let temp: string = calculateTemperature(
      Number(input.value),
      Direction.CtoF
    ).toString();
    temp = temp.indexOf(".") >= 0 ? temp.slice(0, temp.indexOf(".") + 3) : temp;
    result.innerHTML = temp + " Degrees Fahrenheit";
    input.value = "";
  });

  fToCButton.addEventListener("click", () => {
    let temp: string = calculateTemperature(
      Number(input.value),
      Direction.FtoC
    ).toString();
    temp = temp.indexOf(".") >= 0 ? temp.slice(0, temp.indexOf(".") + 3) : temp;
    result.innerHTML = temp + " Degrees Celsius";
    input.value = "";
  });
});
