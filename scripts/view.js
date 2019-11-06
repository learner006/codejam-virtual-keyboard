class View {
  constructor() {
    this.kbdDiv = document.createElement("div");
    document.body.appendChild(kbdDiv);
  }

  createButtons(p_Widths) {
    let p = document.createElement("p");
    p.innerHTML = "Hello! :-)";

    this.kdbDiv.appendChild(p);
  }

}

module.exports = View;