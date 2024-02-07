const box = document.getElementById("box");

let x = 0;
let y = 0;
let speed = 20;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" || e.key === "w") {
    // move up
    if (y > 0) {
      y -= speed;
      box.style.top = y + "px";
    }
  } else if (e.key === "ArrowDown" || e.key === "s") {
    // move down
    if (y + 100 < windowHeight) {
      y += speed;
      box.style.top = y + "px";
    }
  } else if (e.key === "ArrowLeft" || e.key === "a") {
    //move left
    if (x > 0) {
      x -= speed;
      box.style.left = x + "px";
    }
  } else if (e.key === "ArrowRight" || e.key === "d") {
    // move right
    if (x + 100 < windowWidth) {
      x += speed;
      box.style.left = x + "px";
    }
  }
  //   console log coordinates
  console.log(`The X coordinates is ${x}`);
  console.log(`The Y coordinates is ${y}`);
});

document.addEventListener("click", (e) => {
  // Get click coordinates
  const clickedX = e.clientX;
  const clickedY = e.clientY;
  // update to the clicked position
  x = clickedX;
  y = clickedY;
  // boundary check
  if (x + box.offsetWidth > windowWidth) {
    x = windowWidth - box.offsetWidth;
  }
  if (y + box.offsetHeight > windowHeight) {
    y = windowHeight - box.offsetHeight;
  }
  //  reposition
  box.style.left = x + "px";
  box.style.top = y + "px";
  //   console log coordinates
  console.log(`The X coordinates is ${x}`);
  console.log(`The Y coordinates is ${y}`);
});
