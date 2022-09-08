window.onload = function getData() {
  let getCity = localStorage.getItem("город");
  if (getCity !== null) {
    buttonPopup.innerText = getCity;
  } else {
    buttonPopup.innerText = "Выберите город";
  }
};

let popUp = document.getElementById("city-popup"),
  popUp1 = document.getElementById("city-popup1"),
  buttonPopup = document.getElementById("popup"),
  citys = document.querySelectorAll(".city__items");

buttonPopup.onclick = function () {
  popUp.style.display = "block";
};

for (let key of citys) {
  const city = key;

  city.onclick = function () {
    let item = city.innerText;
    buttonPopup.innerText = item;
    localStorage.setItem("город", item);
  };
}

window.onclick = function (e) {
  if (e.target == popUp || e.target == popUp1) {
    popUp.style.display = "none";
  }
};
