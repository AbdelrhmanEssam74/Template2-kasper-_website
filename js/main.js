//menu icon
const menuicon = document.querySelector("i");
//menu
const menu = document.getElementById("menu");
menuicon.addEventListener("click", () => {
  menu.classList.toggle("menu");
});

const search = document.querySelector("#search");
const Search = document.querySelector(".search");
const input = document.querySelector("input");
search.addEventListener("click", () => {
  input.classList.toggle("input");
  Search.style.width = "160px";
});

//get left & right button
const changeBackgroundleft = document.querySelector(".fa-angle-left");
const changeBackgroundright = document.querySelector(".fa-angle-right");

//get content
const p = document.querySelector("#info2");
const p2 = document.querySelector("#info");
const h2 = document.querySelector("#h2");
const content = document.querySelector(".content");
const c1 = document.querySelector("#c1");
const c2 = document.querySelector("#c2");

changeBackgroundright.addEventListener("click", () => {
  p.style.transform = "translateX(0px)";
  p.style.opacity = "1";
  p2.style.transform = "translateX(-333px)";
  p2.style.opacity = "0";
  c1.classList.remove("active");
  c2.classList.add("active");
});

changeBackgroundleft.addEventListener("click", () => {
  p.style.transform = "translateX(-300px)";
  p.style.opacity = "0";
  p2.style.transform = "translateX(0px)";
  p2.style.opacity = "1";
  c1.classList.add("active");
  c2.classList.remove("active");
});

//button to go to the top of the page
//get the button element
const btn = document.querySelector(".up");
//using windo.onscroll() method
document.onscroll = () => {
  if (this.scrollY >= 400) {
    //add className to the butoon "show"
    btn.classList.add("show");
  } else {
    //remove className to the butoon "show"
    btn.classList.remove("show");
  }
};
//then click on the button to go to the top of page
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
//////////////////////////////////


