let test = document
  .getElementById("camera")
  .addEventListener("rotationChanged", (e) => {
    console.log("New rotation:", e.detail);
  });
