window.onload = () => {
  const btn = document.querySelector(".gamb");
  const mobile = document.querySelector(".mobile-nav");

  btn.onclick = () => {
    mobile.classList.toggle("show");
  };
};
