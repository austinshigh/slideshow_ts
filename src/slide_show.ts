import e from "express";

document.addEventListener("DOMContentLoaded", () => {
  enum Projects {
    "https://i.ibb.co/TTWRcnQ/Hot-Tub-Couch.jpg" = 0,
    "https://i.ibb.co/1RsLnh4/Exterior-Framing.jpg" = 1,
    "https://i.ibb.co/jv8h8HX/Steel-Staircase-Evergreen.jpg" = 2,
    "https://i.ibb.co/wp6yn9H/Mudroom-Rack.jpg" = 3,
  }

  const image: HTMLImageElement = document.getElementById(
    "image"
  ) as HTMLImageElement;

  const leftButton: HTMLButtonElement = document.getElementById(
    "left"
  ) as HTMLButtonElement;

  const rightButton: HTMLButtonElement = document.getElementById(
    "right"
  ) as HTMLButtonElement;

  leftButton.addEventListener("click", () => {
    let curr = Projects[image.src];
    if (curr === 0) {
      image.src = Projects[3];
    } else {
      image.src = Projects[curr - 1];
    }
  });

  rightButton.addEventListener("click", () => {
    let curr = Projects[image.src];
    if (curr === 3) {
      image.src = Projects[0];
    } else {
      image.src = Projects[curr + 1];
    }
  });
});
