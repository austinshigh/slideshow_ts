"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener("DOMContentLoaded", () => {
    let Projects;
    (function (Projects) {
        Projects[Projects["https://i.ibb.co/TTWRcnQ/Hot-Tub-Couch.jpg"] = 0] = "https://i.ibb.co/TTWRcnQ/Hot-Tub-Couch.jpg";
        Projects[Projects["https://i.ibb.co/1RsLnh4/Exterior-Framing.jpg"] = 1] = "https://i.ibb.co/1RsLnh4/Exterior-Framing.jpg";
        Projects[Projects["https://i.ibb.co/jv8h8HX/Steel-Staircase-Evergreen.jpg"] = 2] = "https://i.ibb.co/jv8h8HX/Steel-Staircase-Evergreen.jpg";
        Projects[Projects["https://i.ibb.co/wp6yn9H/Mudroom-Rack.jpg"] = 3] = "https://i.ibb.co/wp6yn9H/Mudroom-Rack.jpg";
    })(Projects || (Projects = {}));
    const image = document.getElementById("image");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    leftButton.addEventListener("click", () => {
        let curr = Projects[image.src];
        if (curr === 0) {
            image.src = Projects[3];
        }
        else {
            image.src = Projects[curr - 1];
        }
    });
    rightButton.addEventListener("click", () => {
        let curr = Projects[image.src];
        if (curr === 3) {
            image.src = Projects[0];
        }
        else {
            image.src = Projects[curr + 1];
        }
    });
});
//# sourceMappingURL=slide_show.js.map