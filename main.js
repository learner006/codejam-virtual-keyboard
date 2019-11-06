class View {
  constructor() {
    this.kbdDiv = document.createElement("div");
    document.body.appendChild(this.kbdDiv);
  }

  createButtons(p_Widths) {
    let p = document.createElement("p");
    p.innerHTML = "Hello! :-)";

    this.kbdDiv.appendChild(p);
  }

}

class Keyboard {
}

class Controller {
}

window.addEventListener("DOMContentLoaded", function () {
  let v = new View();
  v.createButtons();
});