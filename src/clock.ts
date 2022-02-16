class Clock {
  clock: HTMLElement;

  constructor(targetClock: HTMLElement | null) {
    this.clock = targetClock;
  }

  updateClock() {
    const date = new Date();
    let h: string | number = Number(date.getHours());
    let m: string | number = Number(date.getMinutes());
    let s: string | number = Number(date.getSeconds());

    if (h > 12) h = h - 12;
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    let time: string = `${h}:${m}:${s}`;
    this.clock.innerHTML = time;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const clock: Clock = new Clock(document.getElementById("clock"));

  window.setInterval(function () {
    clock.updateClock();
  }, 1000);
});
