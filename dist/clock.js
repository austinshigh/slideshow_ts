function startClock() {
    const date = new Date();
    let h = Number(date.getHours());
    let m = Number(date.getMinutes());
    let s = Number(date.getSeconds());
    if (h > 12)
        h = h - 12;
    if (h < 10)
        h = "0" + h;
    if (m < 10)
        m = "0" + m;
    if (s < 10)
        s = "0" + s;
    let time = `${h}:${m}:${s}`;
    document.getElementById("clock").innerHTML = time;
}
window.setInterval(function () {
    startClock();
}, 1000);
//# sourceMappingURL=clock.js.map