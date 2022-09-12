window.onload = function getData() {
  let getCity = localStorage.getItem("город");
  if (getCity !== null) {
    buttonPopup.innerText = getCity;
  } else {
    buttonPopup.innerText = "Выберите город";
  }
};

let popUp = document.getElementById("city-popup"),
  buttonPopup = document.getElementById("popup"),
  citys = document.querySelectorAll(".city__items");

buttonPopup.addEventListener("click", () => {
  popUp.style.display = "block";
});

for (let key of citys) {
  const city = key;

  city.addEventListener("click", (e) => {
    let item = city.innerText;
    buttonPopup.innerText = item;
    localStorage.setItem("город", item);

    if (e.target == city) {
      popUp.style.display = "none";
    }
  });
}
