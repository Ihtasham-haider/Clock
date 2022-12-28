const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondl = document.querySelector('.second');

function updateClock() {
  const currdate = new Date();

  const hour = currdate.getHours();

  const minute = currdate.getMinutes();
  const second = currdate.getSeconds();

  const hourdeg = (hour / 12) * 360;
  hourEl.style.transform = `rotate(${hourdeg}deg)`;
  const minutedeg = (minute / 60) * 360;
  minuteEl.style.transform = `rotate(${minutedeg}deg)`;
  const secdeg = (second / 60) * 360;
  secondl.style.transform = `rotate(${secdeg}deg)`;
}
setInterval(updateClock, 1000);
