    const dots = document.getElementById("dots");
    const frames = ["", ".", "..", "..."];
    let i = 0;

    setInterval(() => {
      dots.textContent = frames[i];
      i = (i + 1) % frames.length;
    }, 400);

    let timeUP = function() {
      alert("This site is currently being updated!");
    }
    setTimeout(timeUP, 3000);
