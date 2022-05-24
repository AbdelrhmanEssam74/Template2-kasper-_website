//portfolio li
let all = document.querySelector("#all");
let app = document.querySelector("#app");
let design = document.querySelector("#design");
let web = document.querySelector("#web");
let draw = document.querySelector("#drawing");
let other = document.querySelector("#other");

//imges
let appImg1 = document.getElementById("img1");
let appImg2 = document.getElementById("img2");
let designImg3 = document.getElementById("img3");
let designImg4 = document.getElementById("img4");
let webImg5 = document.getElementById("img5");
let webImg6 = document.getElementById("img6");
let drawImg7 = document.getElementById("img7");
let drawImg8 = document.getElementById("img8");
let otherImg9 = document.getElementById("img9");
let otherImg10 = document.getElementById("img10");

//all
all.addEventListener("click", () => {
  all.classList.add("activeH2");
  all.style.color = "white";
  app.style.color = "black";
  design.style.color = "black";
  web.style.color = "black";
  draw.style.color = "black";
  app.classList.remove("activeH2");
  design.classList.remove("activeH2");
  web.classList.remove("activeH2");
  draw.classList.remove("activeH2");
  other.classList.remove("activeH2");
  // img
  appImg1.classList.remove("heddenImg");
  appImg2.classList.remove("heddenImg");
  designImg3.classList.remove("heddenImg");
  designImg4.classList.remove("heddenImg");
  webImg5.classList.remove("heddenImg");
  webImg6.classList.remove("heddenImg");
  drawImg7.classList.remove("heddenImg");
  drawImg8.classList.remove("heddenImg");
  otherImg9.classList.remove("heddenImg");
  otherImg10.classList.remove("heddenImg");
});

//app
app.addEventListener("click", () => {
  app.classList.add("activeH2");
  app.style.color = "white";
  all.style.color = "black";
  design.style.color = "black";
  web.style.color = "black";
  draw.style.color = "black";
  all.classList.remove("activeH2");
  design.classList.remove("activeH2");
  web.classList.remove("activeH2");
  draw.classList.remove("activeH2");
  other.classList.remove("activeH2");
  // img
  appImg1.classList.remove("heddenImg");
  appImg2.classList.remove("heddenImg");
  designImg3.classList.add("heddenImg");
  designImg4.classList.add("heddenImg");
  webImg5.classList.add("heddenImg");
  webImg6.classList.add("heddenImg");
  drawImg7.classList.add("heddenImg");
  drawImg8.classList.add("heddenImg");
  otherImg9.classList.add("heddenImg");
  otherImg10.classList.add("heddenImg");
});

//design
design.addEventListener("click", () => {
  design.classList.add("activeH2");
  design.style.color = "white";
  app.style.color = "black";
  all.style.color = "black";
  web.style.color = "black";
  draw.style.color = "black";
  app.classList.remove("activeH2");
  all.classList.remove("activeH2");
  web.classList.remove("activeH2");
  draw.classList.remove("activeH2");
  other.classList.remove("activeH2");
  //img
  appImg1.classList.add("heddenImg");
  appImg2.classList.add("heddenImg");
  designImg3.classList.remove("heddenImg");
  designImg4.classList.remove("heddenImg");
  webImg5.classList.add("heddenImg");
  webImg6.classList.add("heddenImg");
  drawImg7.classList.add("heddenImg");
  drawImg8.classList.add("heddenImg");
  otherImg9.classList.add("heddenImg");
  otherImg10.classList.add("heddenImg");
});

//web
web.addEventListener("click", () => {
  web.classList.add("activeH2");
  web.style.color = "white";
  app.style.color = "black";
  all.style.color = "black";
  design.style.color = "black";
  draw.style.color = "black";
  app.classList.remove("activeH2");
  all.classList.remove("activeH2");
  design.classList.remove("activeH2");
  draw.classList.remove("activeH2");
  other.classList.remove("activeH2");
  //img
  appImg1.classList.add("heddenImg");
  appImg2.classList.add("heddenImg");
  designImg3.classList.add("heddenImg");
  designImg4.classList.add("heddenImg");
  webImg5.classList.remove("heddenImg");
  webImg6.classList.remove("heddenImg");
  drawImg7.classList.add("heddenImg");
  drawImg8.classList.add("heddenImg");
  otherImg9.classList.add("heddenImg");
  otherImg10.classList.add("heddenImg");
});

//drawing
draw.addEventListener("click", () => {
  draw.classList.add("activeH2");
  draw.style.color = "white";
  app.style.color = "black";
  all.style.color = "black";
  design.style.color = "black";
  web.style.color = "black";
  other.style.color = "black";
  app.classList.remove("activeH2");
  all.classList.remove("activeH2");
  design.classList.remove("activeH2");
  web.classList.remove("activeH2");
  other.classList.remove("activeH2");
  //img
  appImg1.classList.add("heddenImg");
  appImg2.classList.add("heddenImg");
  designImg3.classList.add("heddenImg");
  designImg4.classList.add("heddenImg");
  webImg5.classList.add("heddenImg");
  webImg6.classList.add("heddenImg");
  drawImg7.classList.remove("heddenImg");
  drawImg8.classList.remove("heddenImg");
  otherImg9.classList.add("heddenImg");
  otherImg10.classList.add("heddenImg");
});

//other
other.addEventListener("click", () => {
  other.classList.add("activeH2");
  other.style.color = "white";
  app.style.color = "black";
  all.style.color = "black";
  design.style.color = "black";
  web.style.color = "black";
  draw.style.color = "black";
  app.classList.remove("activeH2");
  all.classList.remove("activeH2");
  design.classList.remove("activeH2");
  web.classList.remove("activeH2");
  draw.classList.remove("activeH2");
  //img
  appImg1.classList.add("heddenImg");
  appImg2.classList.add("heddenImg");
  designImg3.classList.add("heddenImg");
  designImg4.classList.add("heddenImg");
  webImg5.classList.add("heddenImg");
  webImg6.classList.add("heddenImg");
  drawImg7.classList.add("heddenImg");
  drawImg8.classList.add("heddenImg");
  otherImg9.classList.remove("heddenImg");
  otherImg10.classList.remove("heddenImg");
});
