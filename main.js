const KBKeyWidths = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1.7], // Esc 14x1 Bksp
  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1],     // Tab 14x1 Del
  [2.6,1,1,1,1,1,1,1,1,1,1,1,2.5],   // Caps 11x1 Enter
  [3.2,1,1,1,1,1,1,1,1,1,1,1,2.2],   // LShift 11x1 RShift
  [1.7,1,1,5.5,1,1.7,1,1,1,1,1]    // LCtrl, Win, LAlt, Space, RAlt, Context menu, RCtrl, L, B, U, Fn
];

const KeyCaptionEn = [
  // line 1
  ['[]',  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '[]'],
  ['Esc', '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  
  // line 2
  ['[]',  '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '{', '}', '|', '[]'],
  ['Tab', 'q',  'w',  'e',  'r',  't',  'y',  'u',  'i',  'o',  'p',  '[', ']', '\\', 'Del'],
  
  // line 3
  ['[]',   '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', ':', '"', '[]'],
  ['Caps', 'a',  's',  'd',  'f',  'g',  'h',  'j',  'k',  'l',  ';', '\'', 'Enter'],
  
  // line 4
  ['[]',    '[]', '[]', '[]', '[]', '[]', '[]', '[]', '<', '>', '?', '[]', '[]'],
  ['Shift', 'z',  'x',  'c',  'v',  'b',  'n',  'm',  ',', '.', '/', '^',  'Shift'],
  
  // line 5
  ['[]',   '[]',  '[]',  '[]',    '[]',  '[]',  '[]',   '[]', '[]', '[]', '[]'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Mnu', 'Ctrl', '<',  'v',  '>',  'Fn']
];

const KeyCaptionRu = [
  // line 1
  ['[]',  '~', '"', '¹', ';', '%', ':', '?', '*', '(', ')', '_', '+', '[]'],
  ['¸',   '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  
  // line 2
  ['[]',  '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '/', '[]'],
  ['Tab', 'é',  'ö',  'ó',  'ê',  'å',  'í',  'ã',  'ø',  'ù',  'ç',  'õ',  'ú',  '\\', 'Del'],
  
  // line 3
  ['[]',   '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]'],
  ['Caps', 'ô',  'û',  'â',  'à',  'ï',  'ð',  'î',  'ë',  'ä',  'æ',  'ý',  'Enter'],
  
  // line 4
  ['[]',    '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', ',', '[]', '[]'],
  ['Shift', 'ÿ',  '÷',  'ñ',  'ì',  'è',  'ò',  'ü',  'á',  'þ',  '.',  '^', 'Shift'],
  
  // line 5
  ['[]',   '[]',  '[]',  '[]',    '[]',  '[]',  '[]',   '[]', '[]', '[]', '[]'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Mnu', 'Ctrl', '<',  'v',  '>',  'Fn']
];

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
        button.innerHTML = p_Widths[kbRow][col];
        div.appendChild(button);
      }
    }
  }

  drawCaptionsOnButtons(p_Captions) {
    for(let kbLine = 0; kbLine < p_Captions.length; ++kbLine)
    {
      let KBLine = p_Captions[kbLine];

      for(let j = 0; j < KBLine.length; ++j)
      {
        let buttonId = `${kbLine}-${j}`;
        let buttonElement = document.getElementById(buttonId);
        buttonElement.innerHTML = KBLine[j][0];
      }
    }
  }
}

class KBKey {
	constructor(p_caption, p_width=1) {
	/*
		this.caption = ['Esc'];
		this.caption = ['3','#']; // for example
		//this.charToOutput = '#';
		this.hasCharToOutput = true;
	*/
		this.caption = p_caption
		this.isPressed = false;
		this.width = 2.5;
	}
}

class Keyboard {
  constructor() {
  	this.layout = "en";
    this.KBLineCount = 5;
  	this.KBKeys = [];
  }

  createKeys() {
    for(let i = 0; i < this.KBLineCount * 2; i += 2)
    {
      let kbLine = [];
      // traverse the keys
      for(let j = 0; j < KeyCaptionEn[i].length; ++j)
      {
        let captions = [];

        let captionUpper = KeyCaptionEn[i][j];
        let captionBottom = KeyCaptionEn[i+1][j];

        captions.push(captionBottom);

        // A key has no another character to output
        if (captionUpper != '[]')
          captions.push(captionUpper);

        // Let's get the width
        let width = KBKeyWidths[i/2][j];

        kbLine.push(new KBKey(captions,width));
      }

      this.KBKeys.push(kbLine);

      //say(KeyCaptionEn[i].join('-'));
      //say(KeyCaptionEn[i+1].join('-'));

    }
  }

  getButtonWidths() {
    // ;-) Let's cheat a bit!
  	return KBKeyWidths;
  }

  getButtonCaptions() {
    let out_captionsArr = [];

    for(let kbLine = 0; kbLine < this.KBLineCount; ++kbLine)
    {
      let keysForLine = this.KBKeys[kbLine];

      let captionsForLine = [];
      for (let j = 0; j < keysForLine.length; ++j)
      {
        captionsForLine.push(keysForLine[j].caption);
      }

      out_captionsArr.push(captionsForLine);
    }

    return out_captionsArr;
  }
}

class Controller {
}

let keyboard = new Keyboard();
keyboard.createKeys();

window.addEventListener("DOMContentLoaded", function () {
  let v = new View();
  v.createButtons(keyboard.getButtonWidths());
  v.drawCaptionsOnButtons(keyboard.getButtonCaptions());
});