///////////////////////
if (document.body.clientWidth >= 1000) {
  window.onscroll = () => {
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

//Portfolio img
const box_img = document.querySelectorAll(".img_box");
console.log(box_img);
const observer2 = new IntersectionObserver((ens) => {
  ens.forEach((en) => {
    console.log(en);
    if (en.isIntersecting) {
      en.target.classList.add("box_img_show");
    } else {
      en.target.classList.remove("box_img_show");
    }
  });
});

box_img.forEach((el) => observer2.observe(el));

//all h2 of sections
const heading = document.querySelectorAll(".heading2");
const observer = new IntersectionObserver((ens) => {
  ens.forEach((en) => {
    if (en.isIntersecting) {
      en.target.classList.add("show");
    } else {
      en.target.classList.remove("show");
    }
  });
});

heading.forEach((el) => observer.observe(el));

window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  let i = document.querySelector("nav i");
  i.classList.toggle("black" ,window.scrollY)
  header.classList.toggle("sticky", window.scrollY);
});
