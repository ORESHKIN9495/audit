if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  const slider = document.querySelector(".feedback"),
    slides = Array.from(document.querySelectorAll(".item"));

  let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = 0;

  slides.forEach((slide, index) => {
    slide.addEventListener("touchstart", touchStart(index));
    slide.addEventListener("touchend", touchEnd);
    slide.addEventListener("touchmove", touchMove);
  });

  // Prevent Start Down Menu
  window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  function touchStart(index) {
    return function (event) {
      isDragging = true;
      currentIndex = index;
      startPos = getPositionX(event);
      animationID = requestAnimationFrame(animation);
      slider.classList.add("grabbing");
    };
  }

  function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;
    slider.classList.remove("grabbing");
    setPositionByIndex();
  }

  function touchMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      currentTranslate = prevTranslate + currentPosition - startPos;
    }
  }

  function getPositionX(event) {
    return event.touches[0].clientX;
  }

  function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
  }

  function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }

  function setPositionByIndex() {
    currentTranslate = currentIndex * -680;
    prevTranslate = currentTranslate;
    setSliderPosition();
  }
}

const slider = document.querySelector(".feedback");
let slideOffset = 0;
let slideL = document.getElementById("slide_left");
let slideR = document.getElementById("slide_right");

if (slideOffset == 0) {
  slideR.classList.add("sliderR");
}

slideL.addEventListener("click", () => {
  slideOffset += 800;
  slider.style.transform = `translateX(${slideOffset}px)`;

  if (slideOffset >= 0) {
    slideL.classList.remove("sliderL");
  } else if (slideOffset <= 0) {
    slideR.classList.add("sliderR");
  }
});

slideR.addEventListener("click", () => {
  slideOffset -= 800;
  slider.style.transform = `translateX(${slideOffset}px)`;

  if (slideOffset <= -2400) {
    console.log(slideOffset);
    slideR.classList.remove("sliderR");
  } else if (slideOffset >= -800) {
    slideL.classList.add("sliderL");
  }
});
