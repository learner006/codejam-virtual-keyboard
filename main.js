class View {
  constructor() {
    this.kbDiv = document.createElement("div");
    document.body.appendChild(this.kbDiv);
  }

  createButtons(p_Widths) {
    for(let kbRow = 0; kbRow < p_Widths.length; ++kbRow) {
      const div = document.createElement("div");
      this.kbDiv.appendChild(div);
      for (let col = 0; col < p_Widths[kbRow].length; ++col) {
        const button = document.createElement("button");
        button.id = `${kbRow}-${col}`;
        div.appendChild(button);
      }
    }
  }
  drawCaptionsOnButtons(p_Captions) {
  }


}

class Keyboard {
  constructor() {
  	this.layout = "en";
  }

  getButtonWidths() {
    let a = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1.7], // 14x1 Bksp
      [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1],     // Tab 14x1 Del
      [2.6,1,1,1,1,1,1,1,1,1,1,1,1,2.5],   // Caps 11x1 Enter
      [3.2,1,1,1,1,1,1,1,1,1,1,1,1,2.2],   // LShift 11x1 RShift
      [1.7,1,1,5.5,1,1.7,1,1,1,1]    // LCtrl, Win, LAlt, Space, RAlt, Context menu, RCtrl, L, B, U, Fn
    ];

    return a;
  }

  getButtonCaptions {
  	let en = [
  		
  	];

  	return en
  }
}

class Controller {
}

let keyboard = new Keyboard();

window.addEventListener("DOMContentLoaded", function () {
  let v = new View();
  v.createButtons(keyboard.getButtonWidths());
});