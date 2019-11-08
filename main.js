function say(p_text) {
	console.log(p_text);
}

const KBKeyWidths = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1.7], // Esc 14x1 Bksp
  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1],     // Tab 14x1 Del
  [2.6,1,1,1,1,1,1,1,1,1,1,1,2.5],   // Caps 11x1 Enter
  [3.2,1,1,1,1,1,1,1,1,1,1,1,2.2],   // LShift 11x1 RShift
  [1.7,1,1,5.5,1,1.7,1,1,1,1,1,1]    // LCtrl, Win, LAlt, Space, RAlt, Context menu, RCtrl, L, B, U, Fn
];

const KeyCodes = [
  ['Escape', 'Backquote', 'Digit1', 'Digit2', 'Digit4', 'Digit3', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete' ],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'], 
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ContextMenu', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'FictionFnKey']
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
  ['[]',   '[]',  '[]',  '[]',    '[]',  '[]',  '[]',  '[]',   '[]', '[]', '[]', '[]'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Win', 'Mnu', 'Ctrl', '<',  'v',  '>',  'Fn']
];

const KeyCaptionRu = [
  // line 1
  ['[]',  '~', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '[]', '[]'],
  ['ё',   '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',  'Backspace'],
  
  // line 2
  ['[]',  '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '/', '[]'],
  ['Tab', 'й',  'ц',  'у',  'к',  'е',  'н',  'г',  'ш',  'щ',  'з',  'х',  'ъ',  '\\', 'Del'],
  
  // line 3
  ['[]',   '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]'],
  ['Caps', 'ф',  'ы',  'в',  'а',  'п',  'р',  'о',  'л',  'д',  'ж',  'э',  'Enter'],
  
  // line 4
  ['[]',    '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', '[]', ',', '[]', '[]'],
  ['Shift', 'я',  'ч',  'с',  'м',  'и',  'т',  'ь',  'б',  'ю',  '.',  '^', 'Shift'],
  
  // line 5
  ['[]',   '[]',  '[]',  '[]',    '[]',  '[]',  '[]',  '[]',   '[]', '[]', '[]', '[]'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Win', 'Mnu', 'Ctrl', '<',  'v',  '>',  'Fn']
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
        //buttonElement.innerHTML = KeyCodes[kbLine][j];
      }
    }
  }
}

class KBKey {
	constructor(p_width=1, p_caption=[]) {
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
    this.createKeys();
    // View class
    this.view = new View();
    this.view.createButtons(this.getButtonWidths());
  }

  createKeys() {
    for(let keyRow = 0; keyRow < KBKeyWidths.length; ++keyRow) {
      let kbLine = [];
      for(let j = 0; j < KBKeyWidths[keyRow].length; ++j) {
        let width = KBKeyWidths[keyRow][j];
        kbLine.push(new KBKey(width));
      }
      this.KBKeys.push(kbLine);
    }
  }

  setKeyCaptions() {
    let KeyCaptionArr = KeyCaptionEn;
    if (this.layout == "ru")
      KeyCaptionArr = KeyCaptionRu;

    for(let i = 0; i < this.KBLineCount * 2; i += 2)
    {
      // traverse the keys
      for(let j = 0; j < KeyCaptionArr[i].length; ++j)
      {
        let captions = [];

        let captionUpper = KeyCaptionArr[i][j];
        let captionBottom = KeyCaptionArr[i+1][j];

        captions.push(captionBottom);

        // A key has no another character to output
        if (captionUpper != '[]')
          captions.push(captionUpper);

        this.KBKeys[i/2][j].caption = captions;
        //say(captions);
      }
    }
    this.view.drawCaptionsOnButtons(this.getButtonCaptions());

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
  constructor() {
    this.keyboard = new Keyboard();
    this.keyboard.layout = "en";
    this.keyboard.setKeyCaptions();
  }
}

function callback()
{
  alert('xx');
}

function callback_keydown(p_KeyboardEvent)
{
  return;

  let e = p_KeyboardEvent;

  let str = "KeyboardEvent: key='" + event.key + "' | code='" +
            event.code + "'";
  let el = document.createElement("span");

  //el.innerHTML = event.code + "<br/>";
  el.innerHTML = event.code + '&nbsp;';
 
//  document.getElementById("output").appendChild(el);
  document.body.appendChild(el);
//  alert('callback_keydown');
  scroll(0,10000000);
}

function callback_keyup(p_KeyboardEvent)
{
//  alert('callback_keyup');
}

function getDebugControlsHTML()
{
  return 'Keyboard layout:\
    <select name="KBLayout" onChange="callback_KbLayoutChange(this.value)">\
    <option value="en" default>EN<br>\
    <option value="ru">RU<br>\
    </select>\
    \
    Caps Lock: \
    <select name="CapsLock" onChange="callback_CapsLockChange(this.value)">\
    <option value="off" default>OFF<br>\
    <option value="on">ON<br>\
    </select>\
    \
    Shift:\
    <select name="Shift" onChange="callback_ShiftChange(this.value)">\
    <option value="false" default>NOT pressed<br>\
    <option value="true">IS pressed<br>\
    </select><br><br>';
}

function createDebugControls() {
    let div = document.createElement("div");
    div.innerHTML = getDebugControlsHTML();

    document.body.appendChild(div);
}


function callback_KbLayoutChange(p_val) {
  controller.keyboard.layout = p_val;
  controller.keyboard.setKeyCaptions();
}

function callback_CapsLockChange(p_val) {
}

function callback_ShiftChange(p_val) {
}

let controller = null;

window.addEventListener("DOMContentLoaded", function () {
  createDebugControls();

  controller = new Controller();

  //let e = document.getElementById('0-0');
  //e.addEventListener('click',callback);
  document.addEventListener('keydown',callback_keydown);
  document.addEventListener('keydown',callback_keyup);
});