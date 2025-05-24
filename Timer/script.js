const days = document.getElementById("days");
const hours = document.getElementById("hours");   
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const target = new Date("November 30, 2025 00:00:00").getTime();


function countdown() {
    const crnttime = new Date().getTime();
    const diff = target - crnttime;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));       
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

   

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}
countdown();
setInterval(countdown, 1000);
