const time = 1400;
const step = 1;

function outNum(num, elem) {
  let l = document.querySelector("#" + elem);
  let n = 0;
  let t = Math.round(time / (num / step));
  let int = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(int);
    }
    l.innerHTML = n;
  }, t);
}

outNum(80, "count-a");
outNum(16, "count-b");

function num(numb) {
  let e = document.getElementById("count-c");
  let n = 0;
  let t = Math.round(time / (numb / step));

  let int = setInterval(() => {
    n = n + step;
    if (n == numb) {
      clearInterval(int);
    }

    e.innerHTML = n + "," + "9" + "%";
  }, t);
}

num(99);
