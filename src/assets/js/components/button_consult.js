let buttonConsult = Array.from(document.querySelectorAll(".button_consult")),
  scrollSpeed = 0.1;

buttonConsult.forEach((button) => {
  button.addEventListener("click", clickScroll);
});

function clickScroll() {
  let scrollPos = window.pageYOffset,
    form = document.getElementById("form");

  let formPos = form.getBoundingClientRect().top,
    start = null;

  requestAnimationFrame(scroll);

  function scroll(time) {
    if (start === null) start = time;

    let progress = time - start,
      r =
        formPos < 0
          ? Math.max(scrollPos - progress / scrollSpeed, scrollPos + formPos)
          : Math.min(scrollPos + progress / scrollSpeed, scrollPos + formPos);

    window.scrollTo(0, r);

    if (r != scrollPos + formPos) {
      requestAnimationFrame(scroll);
    }
  }
}
