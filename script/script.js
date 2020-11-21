disappearOffScreen(1);
disappearOffScreen(2);
disappearOffScreen(3);
disappearOffScreen(4);
disappearOffScreen(5);

function disappearOffScreen(i) {
  let toogle = document.getElementById(`tog${i}`);
  let res = document.getElementById(`res${i}`);
  let title = document.getElementById(`title${i}`);
  let icon = document.getElementById(`icon${i}`);
  toogle.addEventListener("click", () => {
    if (getComputedStyle(res).display != "none") {
      res.style.display = "none";
      title.style.color = "#787887";
      title.style.fontWeight = "400";
      icon.style.rotate = "360deg";
    } else {
      res.style.display = "block";
      icon.style.rotate = "180deg";
      title.style.color = "#1d1e35";
      title.style.fontWeight = "700";
    }
  });
}
