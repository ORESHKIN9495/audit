document.addEventListener("DOMContentLoaded", () => {
  let menuButton = document.getElementById("menu_button");
  let popup = document.getElementById("popup");
  const mediaQuery = window.matchMedia("(min-width: 428px)");

  menuButton.addEventListener("click", () => {
    if (menuButton.classList.contains("active")) {
      menuButton.classList.remove("active");
      popup.style.transform = `translateY(-500px)`;
    } else {
      menuButton.classList.add("active");
      popup.style.transform = `translateY(0)`;
    }
  });

  mediaQuery.addEventListener("change", () => {
    if (mediaQuery) {
      menuButton.classList.remove("active");
      popup.style.transform = `translateY(-500px)`;
    }
  });
});
