document.addEventListener("DOMContentLoaded", () => {
  startBackgroundEffect();
});

const startBackgroundEffect = () => {
  const backColors = [
    "#365314",
    "#14532d",
    "#064e3b",
    "#134e4a",
    "#164e63",
    "#0c4a6e",
    "#1e3a8a",
    "#312e81",
  ];
  const html = document.querySelector("html");
  let indexColor = 0;
  let increasing = true;

  setInterval(() => {
    if (indexColor === 7) increasing = false;
    if (indexColor === 0) increasing = true;
    indexColor = increasing ? indexColor + 1 : indexColor - 1;
    html.style.backgroundColor = backColors[indexColor];
  }, 1000);
};
