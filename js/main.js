const bedFeatureHeader = document.querySelectorAll(".bed-feature__header");
for (let e = 0; e < bedFeatureHeader.length; e++)
  bedFeatureHeader[e].addEventListener("click", function (e) {
    this.classList.toggle("active"),
      this.lastElementChild.classList.toggle("active");
    const t = this.nextElementSibling;
    "block" == t.style.display
      ? (t.style.display = "none")
      : (t.style.display = "block");
  });
const selection = {
  size: 10,
  color: 70,
  headboard: 130,
  base_depth: 190,
  storage_option: 240,
};
let oldPrice = 0,
  newPrice;
function createBed(e, t, o) {
  const s = document.querySelectorAll("." + t);
  for (let e = 0; e < s.length; e++)
    s[e].className = s[e].className.replace("active", "");
  (e.currentTarget.className += " active"),
    (selection[t] = o),
    (oldPrice = newPrice),
    (newPrice = calculatePrice()),
    showMessages("oldPrice", oldPrice),
    showMessages("price", newPrice);
}
function calculatePrice() {
  for (var e in ((total = 0), selection)) total += selection[e];
  return total;
}
function showMessages(e, t) {
  const o = document.querySelector("#" + e);
  o.innerText = t;
}
function showOptions() {
  ["size", "colour", "headboard", "base_depth", "storage_option"].map((e) => {
    showMessages(e, document.querySelectorAll("." + e).length);
  });
}
window.addEventListener("DOMContentLoaded", function () {
  console.log("ready"),
    (newPrice = calculatePrice()),
    showMessages("price", newPrice);
}),
  showOptions();
