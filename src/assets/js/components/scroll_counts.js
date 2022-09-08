let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

let ofset = 1889;

document.addEventListener("scroll", scroll);

function scroll() {
  if (scrollTop < ofset) {
    outNum(10, "about-a");
    outNum(1020, "about-b");
    outNum(980, "about-c");
    outNum(1200, "about-d");
  }

  document.removeEventListener("scroll", scroll);
}
