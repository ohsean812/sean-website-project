const plane = document.getElementById("plane");

function movePlaneLeft() {
  const leftNumbers = plane.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 20) {
    plane.style.left = `${left - 20}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    movePlaneLeft();
  }
});

function movePlaneRight() {
    const leftNumbers = plane.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 1090) {
      plane.style.left = `${left + 20}px`;
    }
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      movePlaneRight();
    }
  });

const input = document.getElementById('plane');

function clickAlert() {
  alert('"Wherever you go, go with all your heart" - Confucius');
  alert('Thanks for visiting my website.  Have a nice day!');
}

input.addEventListener('click', clickAlert);