let heading = document.querySelector("#heading");
heading.onclick = function () {
  heading.style.color = "red";
};
heading.onmouseover = function () {
  heading.style.color = "yellow";
};
heading.onmouseout = function () {
  heading.style.color = "";
};
