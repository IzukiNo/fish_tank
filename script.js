function changeBackgroundImage() {
    const images = [
      "img/background2.png",
      "img/background3.png",
      "img/background4.png",
      "img/background.png"
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url('${randomImage}')`;
  }