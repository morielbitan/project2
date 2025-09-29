const boxes = [
        {  src: "imgs/game.png", link: "https://playtictactoe.org/" },
        {
          src: "imgs/ball-of-basketball.png",
          link: "https://basketball-stars.io/",
        },
        { src: "imgs/snake.png", link: "https://snake.io/" },
      ];

      let currentIndex = 0;
      const carousel = document.getElementById("carousel");

      function showBox(index) {
        // Remove existing image if any
        const existing = carousel.querySelector("a");
        if (existing) existing.remove();

        // Insert new image and link
        carousel.insertAdjacentHTML(
          "beforeend",
          `<a href="${boxes[index].link}">
           <img src="${boxes[index].src}" alt="Image ${index + 1}">
         </a>`
        );
      }

      // Arrow handlers
      document.getElementById("prev").onclick = () => {
        currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
        showBox(currentIndex);
      };

      document.getElementById("next").onclick = () => {
        currentIndex = (currentIndex + 1) % boxes.length;
        showBox(currentIndex);
      };
showBox(currentIndex);

      