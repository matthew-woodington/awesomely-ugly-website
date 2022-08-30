(function () {
  const image = document.querySelector(".pug-image");
  const btn = document.querySelector(".swap-image");

  btn.addEventListener("click", changeImage);

  function changeImage() {
    if (image.src.match("../awesomely-ugly-website/images/sad_pug.jpg")) {
      image.src = "../awesomely-ugly-website/images/sad_pug2.jpg";
    } else {
      image.src = "../awesomely-ugly-website/images/sad_pug.jpg";
    }
  }
})();
