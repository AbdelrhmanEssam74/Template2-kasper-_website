///////////////////////
/* if (document.body.clientWidth >= 1000) {
  window.onscroll = () => {
    let portfolio = document.querySelector(".imgs-container");
    const rect2 = portfolio.getBoundingClientRect();
    if (rect2.top >= -550.875 && rect2.top <= 495.875) {
      portfolio.style.opacity = "1";
    } else {
      portfolio.style.opacity = "0";
    }
    let designImag = document.querySelector(".image");
    const rect = designImag.getBoundingClientRect();
    if (rect.top >= -300.875 && rect.top <= 300.875) {
      designImag.style.right = "0px";
      designImag.style.opacity = "1";
    } else {
      designImag.style.right = "510px";
    }
  };
} */

//increasing number

let nums = document.querySelectorAll(".box .number");

let section = document.querySelector(".stats");

let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 10);
}

console.log(window.scrollY)
console.log(section.offsetTop)