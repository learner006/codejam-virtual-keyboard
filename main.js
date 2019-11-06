class View {
  constructor() {
    this.kbdDiv = document.createElement("div");
    document.body.appendChild(this.kbdDiv);
  }

  createButtons(p_Widths) {
    for(let kbdRow = 0; kbdRow < p_Widths.length; ++kbdRow) {
      const div = document.createElement("div");
      this.kbdDiv.appendChild(div);
      for (let col = 0; col < p_Widths[kbdRow].length; ++col) {
        const button = document.createElement("button");
        div.appendChild(button);
      }
    }
  }

}

class Keyboard {
  constructor() {
  }

  getButtonWidths() {
    let a = [
      [1.7,1,1,1,1,1,1,1,1,1,1,1,1,1,1.7], // Esc 13x1 Bksp
      [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1],     // Tab 14x1 Del
      [2.6,1,1,1,1,1,1,1,1,1,1,1,1,2.5],   // Caps 11x1 Enter
      [3.2,1,1,1,1,1,1,1,1,1,1,1,1,2.2],   // LShift 11x1 RShift
      [1.7,1,1,5.5,1,1.7,1,1,1,1]    // LCtrl, Win, LAlt, Space, RAlt, Context menu, RCtrl, L, B, U, Fn
    ];

    return a;
  }
}

class Controller {
}

let keyboard = new Keyboard();

window.addEventListener("DOMContentLoaded", function () {
  let v = new View();
  v.createButtons(keyboard.getButtonWidths());
});