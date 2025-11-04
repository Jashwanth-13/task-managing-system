let timer = 0;
let interval;
const timerDisplay = document.getElementById("timer");
const frame = document.getElementById("docFrame");
const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", e => {
  const file = e.target.files[0];
  if (file) {
    frame.src = URL.createObjectURL(file);
    timer = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      timer++;
      timerDisplay.innerText = Time: ${timer}s;
      if (timer % 60 === 0) {
        new Notification("Neon Study", { body: You've been studying for ${timer/60} min! });
      }
    }, 1000);
  }
});

if (Notification.permission !== "granted") {
  Notification.requestPermission();
}
