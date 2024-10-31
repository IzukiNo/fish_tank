function changeBackgroundImage() {
    // Array of image URLs
    const images = [
      "https://m.media-amazon.com/images/I/81A11CnquUL._AC_UF1000,1000_QL80_.jpg",  // Replace with your image URL
      "https://www.shutterstock.com/image-illustration/colorful-coral-reef-under-sea-600nw-2043152465.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqbtTx7wv0ScthOqL29wGJYrZ-la1S7xaew&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxVFCdR0sf_Dem3Yz-smYzwu55ZbCIBZpZw&s"
    ];
    // Select a random image
    const randomImage = images[Math.floor(Math.random() * images.length)];
    // Set the background image of the body
    document.body.style.backgroundImage = `url('${randomImage}')`;
  }