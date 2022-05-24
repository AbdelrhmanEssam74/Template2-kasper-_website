

///////////////////////
if (document.body.clientWidth >= 800) {
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
}
