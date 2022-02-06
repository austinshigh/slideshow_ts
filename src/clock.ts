function startClock() {
  const date = new Date();
  let h: string | number = Number(date.getHours());
  let m: string | number = Number(date.getMinutes());
  let s: string | number = Number(date.getSeconds());

  if (h > 12) h = h - 12;
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  let time: string = `${h}:${m}:${s}`;
  document.getElementById("clock").innerHTML = time;
}

window.setInterval(function () {
  startClock();
}, 1000);
