window.addEventListener("load", function () {
  var download = document.getElementById("download");
  var slider = document.getElementById("myRange");
  var sliderB = document.getElementById("myRange2");
  var sliderContrast = document.getElementById("myRange3");
  var sliderGray = document.getElementById("myRange5");
  var sliderHue = document.getElementById("myRange6");
  var sliderInvert = document.getElementById("myRange7");
  var sliderOpacity = document.getElementById("myRange8");
  var sliderSaturate = document.getElementById("myRange9");
  var sliderSepia = document.getElementById("myRange10");
  var reset = document.getElementById("reset");

  const canvas = document.getElementById("demo");

  document
    .querySelector('input[type="file"]')
    .addEventListener("change", function () {
      if (this.files && this.files[0]) {
        var img = document.querySelector("img");
        img.onload = () => {
          URL.revokeObjectURL(img.src); // no longer needed, free memory
          var image = document.getElementById("image");
          const canvas = document.getElementById("demo");
          const ctx = canvas.getContext("2d");

          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        };

        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
    });

  slider.oninput = () => {
    const canvas = document.getElementById("demo");
    const ctx = canvas.getContext("2d");
    ctx.filter =
      "brightness(" +
      sliderB.value +
      "%) blur(" +
      slider.value +
      "px)" +
      "contrast(" +
      sliderContrast.value +
      "%)" +
      "grayscale(" +
      sliderGray.value +
      "%)" +
      "hue-rotate(" +
      sliderHue.value +
      "deg)" +
      "invert(" +
      sliderInvert.value +
      "%)" +
      "saturate(" +
      sliderSaturate.value +
      ")" +
      "opacity(" +
      sliderOpacity.value +
      "%)" +
      "sepia(" +
      sliderSepia.value +
      "%)";
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  sliderB.oninput = () => {
    const canvas = document.getElementById("demo");
    const ctx = canvas.getContext("2d");
    ctx.filter =
      "brightness(" +
      sliderB.value +
      "%) blur(" +
      slider.value +
      "px)" +
      "contrast(" +
      sliderContrast.value +
      "%)" +
      "grayscale(" +
      sliderGray.value +
      "%)" +
      "hue-rotate(" +
      sliderHue.value +
      "deg)" +
      "invert(" +
      sliderInvert.value +
      "%)" +
      "saturate(" +
      sliderSaturate.value +
      ")" +
      "opacity(" +
      sliderOpacity.value +
      "%)" +
      "sepia(" +
      sliderSepia.value +
      "%)";
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  sliderContrast.oninput = () => {
    const canvas = document.getElementById("demo");
    const ctx = canvas.getContext("2d");
    ctx.filter =
      "brightness(" +
      sliderB.value +
      "%) blur(" +
      slider.value +
      "px)" +
      "contrast(" +
      sliderContrast.value +
      "%)" +
      "grayscale(" +
      sliderGray.value +
      "%)" +
      "hue-rotate(" +
      sliderHue.value +
      "deg)" +
      "invert(" +
      sliderInvert.value +
      "%)" +
      "saturate(" +
      sliderSaturate.value +
      ")" +
      "opacity(" +
      sliderOpacity.value +
      "%)" +
      "sepia(" +
      sliderSepia.value +
      "%)";
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  sliderGray.oninput = () => {
    const canvas = document.getElementById("demo");
    const ctx = canvas.getContext("2d");
    ctx.filter =
      "brightness(" +
      sliderB.value +
      "%) blur(" +
      slider.value +
      "px)" +
      "contrast(" +
      sliderContrast.value +
      "%)" +
      "grayscale(" +
      sliderGray.value +
      "%)" +
      "hue-rotate(" +
      sliderHue.value +
      "deg)" +
      "invert(" +
      sliderInvert.value +
      "%)" +
      "saturate(" +
      sliderSaturate.value +
      ")" +
      "opacity(" +
      sliderOpacity.value +
      "%)" +
      "sepia(" +
      sliderSepia.value +
      "%)";
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  sliderHue.oninput = () => {
    const canvas = document.getElementById("demo");
    const ctx = canvas.getContext("2d");
    ctx.filter =
      "brightness(" +
      sliderB.value +
      "%) blur(" +
      slider.value +
      "px)" +
      "contrast(" +
      sliderContrast.value +
      "%)" +
      "grayscale(" +
      sliderGray.value +
      "%)" +
      "hue-rotate(" +
      sliderHue.value +
      "deg)" +
      "invert(" +
      sliderInvert.value +
      "%)" +
      "saturate(" +
      sliderSaturate.value +
      ")" +
      "opacity(" +
      sliderOpacity.value +
      "%)" +
      "sepia(" +
      sliderSepia.value +
      "%)";
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  sliderInvert.oninput = () => {
    const canvas = document.getElementById("demo");
    const ctx = canvas.getContext("2d");
    ctx.filter =
      "brightness(" +
      sliderB.value +
      "%) blur(" +
      slider.value +
      "px)" +
      "contrast(" +
      sliderContrast.value +
      "%)" +
      "grayscale(" +
      sliderGray.value +
      "%)" +
      "hue-rotate(" +
      sliderHue.value +
      "deg)" +
      "invert(" +
      sliderInvert.value +
      "%)" +
      "saturate(" +
      sliderSaturate.value +
      ")" +
      "opacity(" +
      sliderOpacity.value +
      "%)" +
      "sepia(" +
      sliderSepia.value +
      "%)";
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  // saturate
  sliderSaturate.oninput = () => {
    const canvas = document.getElementById("demo");
    const ctx = canvas.getContext("2d");
    ctx.filter =
      "brightness(" +
      sliderB.value +
      "%) blur(" +
      slider.value +
      "px)" +
      "contrast(" +
      sliderContrast.value +
      "%)" +
      "grayscale(" +
      sliderGray.value +
      "%)" +
      "hue-rotate(" +
      sliderHue.value +
      "deg)" +
      "invert(" +
      sliderInvert.value +
      "%)" +
      "saturate(" +
      sliderSaturate.value +
      ")" +
      "opacity(" +
      sliderOpacity.value +
      "%)" +
      "sepia(" +
      sliderSepia.value +
      "%)";
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  // opacity
  sliderOpacity.oninput = () => {
    const canvas = document.getElementById("demo");
    const ctx = canvas.getContext("2d");
    ctx.filter =
      "brightness(" +
      sliderB.value +
      "%) blur(" +
      slider.value +
      "px)" +
      "contrast(" +
      sliderContrast.value +
      "%)" +
      "grayscale(" +
      sliderGray.value +
      "%)" +
      "hue-rotate(" +
      sliderHue.value +
      "deg)" +
      "invert(" +
      sliderInvert.value +
      "%)" +
      "saturate(" +
      sliderSaturate.value +
      ")" +
      "opacity(" +
      sliderOpacity.value +
      "%)" +
      "sepia(" +
      sliderSepia.value +
      "%)";
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  sliderSepia.oninput = () => {
    const canvas = document.getElementById("demo");
    const ctx = canvas.getContext("2d");
    ctx.filter =
      "brightness(" +
      sliderB.value +
      "%) blur(" +
      slider.value +
      "px)" +
      "contrast(" +
      sliderContrast.value +
      "%)" +
      "grayscale(" +
      sliderGray.value +
      "%)" +
      "hue-rotate(" +
      sliderHue.value +
      "deg)" +
      "invert(" +
      sliderInvert.value +
      "%)" +
      "saturate(" +
      sliderSaturate.value +
      ")" +
      "opacity(" +
      sliderOpacity.value +
      "%)" +
      "sepia(" +
      sliderSepia.value +
      "%)";
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  download.onclick = () => {
    let anchor = document.createElement("a");
    anchor.download = "download." + "jpg";
    anchor.href = canvas.toDataURL("image/jpg");
    anchor.click();
    anchor.remove();
  };

  reset.onclick = () => {
    slider.value = 0;
    sliderB.value = 100;
    sliderContrast.value = 100;
    sliderGray.value = 0;
    sliderHue.value = 0;
    sliderInvert.value = 0;
    sliderOpacity.value = 100;
    sliderSaturate.value = 1;
    sliderSepia.value = 0;
    const canvas = document.getElementById("demo");
    const ctx = canvas.getContext("2d");
    ctx.filter =
      "brightness(" +
      sliderB.value +
      "%) blur(" +
      slider.value +
      "px)" +
      "contrast(" +
      sliderContrast.value +
      "%)" +
      "grayscale(" +
      sliderGray.value +
      "%)" +
      "hue-rotate(" +
      sliderHue.value +
      "deg)" +
      "invert(" +
      sliderInvert.value +
      "%)" +
      "saturate(" +
      sliderSaturate.value +
      ")" +
      "opacity(" +
      sliderOpacity.value +
      "%)" +
      "sepia(" +
      sliderSepia.value +
      "%)";
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };
});
