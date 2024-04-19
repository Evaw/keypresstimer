(function () {
  const output = document.getElementById("output");
  let pressed = {};
  const mapping = {
    3: [
      {
        Key: "Cancel",
        Code: "Pause",
        Unicode: "",
        Description: "break",
      },
    ],
    8: [
      {
        Key: "Backspace",
        Code: "Backspace",
        Unicode: "⌫",
        Description: "backspace / delete",
      },
    ],
    9: [
      {
        Key: "Tab",
        Code: "Tab",
        Unicode: "↹",
        Description: "tab",
      },
    ],
    12: [
      {
        Key: "Clear",
        Code: "NumLock",
        Unicode: "⌧",
        Description: "clear",
      },
    ],
    13: [
      {
        Key: "Enter",
        Code: "Enter",
        Unicode: "↵",
        Description: "Enter / Return",
      },
    ],
    16: [
      {
        Key: "Shift",
        Code: "ShiftLeft",
        Unicode: "⇧",
        Description: "shift",
      },
      {
        Key: "Shift",
        Code: "ShiftRight",
        Unicode: "⇧",
        Description: "shift",
      },
    ],
    17: [
      {
        Key: "Control",
        Code: "ControlLeft",
        Unicode: "^",
        Description: "ctrl",
      },
      {
        Key: "Control",
        Code: "ControlRight",
        Unicode: "^",
        Description: "ctrl",
      },
    ],
    18: [
      {
        Key: "Alt",
        Code: "AltLeft",
        Unicode: "⎇ / ⌥",
        Description: "Alt / Option",
      },
      {
        Key: "Alt",
        Code: "AltRight",
        Unicode: "⎇ / ⌥",
        Description: "Alt / Option",
      },
    ],
    19: [
      {
        Key: "Pause",
        Code: "Pause",
        Unicode: "",
        Description: "pause/break",
      },
    ],
    20: [
      {
        Key: "CapsLock",
        Code: "CapsLock",
        Unicode: "⇪",
        Description: "caps lock",
      },
    ],
    21: [
      {
        Key: "Unidentified",
        Code: "Lang1",
        Unicode: "",
        Description: "hangul",
      },
    ],
    25: [
      {
        Key: "Unidentified",
        Code: "Lang2",
        Unicode: "",
        Description: "hanja",
      },
    ],
    27: [
      {
        Key: "Escape",
        Code: "Escape",
        Unicode: "⎋",
        Description: "escape",
      },
    ],
    28: [
      {
        Key: "henkan",
        Code: "",
        Unicode: "",
        Description: "conversion",
      },
    ],
    29: [
      {
        Key: "muhenkan",
        Code: "",
        Unicode: "",
        Description: "non-conversion",
      },
    ],
    32: [
      {
        Key: "(blank space)",
        Code: "Space",
        Unicode: "",
        Description: "spacebar",
      },
    ],
    33: [
      {
        Key: "PageUp",
        Code: "Numpad9",
        Unicode: "⇞",
        Description: "page up",
      },
    ],
    34: [
      {
        Key: "PageDown",
        Code: "Numpad3",
        Unicode: "⇟",
        Description: "page down",
      },
    ],
    35: [
      {
        Key: "End",
        Code: "Numpad1",
        Unicode: "",
        Description: "end",
      },
    ],
    36: [
      {
        Key: "Home",
        Code: "Numpad7",
        Unicode: "⌂",
        Description: "home",
      },
    ],
    37: [
      {
        Key: "ArrowLeft",
        Code: "ArrowLeft",
        Unicode: "←",
        Description: "left arrow",
      },
    ],
    38: [
      {
        Key: "ArrowUp",
        Code: "ArrowUp",
        Unicode: "↑",
        Description: "up arrow",
      },
    ],
    39: [
      {
        Key: "ArrowRight",
        Code: "ArrowRight",
        Unicode: "→",
        Description: "right arrow",
      },
    ],
    40: [
      {
        Key: "ArrowDown",
        Code: "ArrowDown",
        Unicode: "↓",
        Description: "down arrow",
      },
    ],
    41: [
      {
        Key: "Select",
        Code: "",
        Unicode: "",
        Description: "select",
      },
    ],
    42: [
      {
        Key: "Print",
        Code: "",
        Unicode: "",
        Description: "print",
      },
    ],
    43: [
      {
        Key: "Execute",
        Code: "",
        Unicode: "",
        Description: "execute",
      },
    ],
    44: [
      {
        Key: "F13",
        Code: "F13",
        Unicode: "⎙",
        Description: "Print Screen / F13 (firefox)",
      },
    ],
    45: [
      {
        Key: "Insert",
        Code: "Numpad0",
        Unicode: "x",
        Description: "insert",
      },
    ],
    46: [
      {
        Key: "Delete",
        Code: "NumpadDecimal",
        Unicode: "⌦",
        Description: "delete",
      },
    ],
    47: [
      {
        Key: "Help",
        Code: "",
        Unicode: "⍰",
        Description: "help",
      },
    ],
    48: [
      {
        Key: "0",
        Code: "Digit0",
        Unicode: "⓪",
        Description: "0",
      },
      {
        Key: "’",
        Code: "Digit0",
        Unicode: "",
        Description: "apostrophe",
      },
      {
        Key: "º",
        Code: "Digit0",
        Unicode: "º",
        Description: "ordinal indicator",
      },
    ],
    49: [
      {
        Key: "1",
        Code: "Digit1",
        Unicode: "①",
        Description: "1 Key",
      },
      {
        Key: "!",
        Code: "Digit1",
        Unicode: "!",
        Description: "exclamation mark",
      },
      {
        Key: "¡",
        Code: "Digit1",
        Unicode: "¡",
        Description: "inverted exclamation mark",
      },
    ],
    50: [
      {
        Key: "2",
        Code: "Digit2",
        Unicode: "②",
        Description: "2 Key",
      },
      {
        Key: "@",
        Code: "Digit2",
        Unicode: "@",
        Description: "at sign",
      },
      {
        Key: "²",
        Code: "Digit2",
        Unicode: "²",
        Description: "sqaure",
      },
      {
        Key: "™",
        Code: "Digit2",
        Unicode: "™",
        Description: "trademark",
      },
    ],
    51: [
      {
        Key: "3",
        Code: "Digit3",
        Unicode: "③",
        Description: "3 Key",
      },
      {
        Key: "#",
        Code: "Digit3",
        Unicode: "#",
        Description: "hash",
      },
      {
        Key: "³",
        Code: "Digit3",
        Unicode: "³",
        Description: "cube",
      },
      {
        Key: "£",
        Code: "Digit3",
        Unicode: "£",
        Description: "pound",
      },
    ],
    52: [
      {
        Key: "4",
        Code: "Digit4",
        Unicode: "④",
        Description: "4 Key",
      },
      {
        Key: "¤",
        Code: "Digit4",
        Unicode: "¤",
        Description: "currency",
      },
      {
        Key: "¢",
        Code: "Digit4",
        Unicode: "¢",
        Description: "cent",
      },
    ],
    53: [
      {
        Key: "5",
        Code: "Digit5",
        Unicode: "⑤",
        Description: "5 Key",
      },
      {
        Key: "%",
        Code: "Digit5",
        Unicode: "%",
        Description: "percent",
      },
      {
        Key: "€",
        Code: "Digit5",
        Unicode: "€",
        Description: "euro",
      },
      {
        Key: "∞",
        Code: "Digit5",
        Unicode: "∞",
        Description: "infinity",
      },
    ],
    54: [
      {
        Key: "6",
        Code: "Digit6",
        Unicode: "⑥",
        Description: "6 Key",
      },
      {
        Key: "§",
        Code: "Digit6",
        Unicode: "§",
        Description: "section sign",
      },
      {
        Key: "¼",
        Code: "Digit6",
        Unicode: "¼",
        Description: "one quarter",
      },
    ],
    55: [
      {
        Key: "7",
        Code: "Digit7",
        Unicode: "⑦",
        Description: "7 Key",
      },
      {
        Key: "&",
        Code: "Digit7",
        Unicode: "&",
        Description: "and",
      },
      {
        Key: "½",
        Code: "Digit7",
        Unicode: "½",
        Description: "half",
      },
    ],
    56: [
      {
        Key: "8",
        Code: "Digit8",
        Unicode: "⑧",
        Description: "8 Key",
      },
      {
        Key: "¾",
        Code: "Digit8",
        Unicode: "¾",
        Description: "three quarters",
      },
      {
        Key: "•",
        Code: "Digit8",
        Unicode: "•",
        Description: "bullet",
      },
    ],
    57: [
      {
        Key: "9",
        Code: "Digit9",
        Unicode: "⑨",
        Description: "9 Key",
      },
      {
        Key: "(",
        Code: "Digit9",
        Unicode: "(",
        Description: "parentheses left",
      },
      {
        Key: "‘",
        Code: "Digit9",
        Unicode: "",
        Description: "inverted apostrophe",
      },
      {
        Key: "ª",
        Code: "Digit9",
        Unicode: "ª",
        Description: "feminine ordinal indicator",
      },
    ],
    58: [
      {
        Key: ":",
        Code: "Period",
        Unicode: "",
        Description: ":",
      },
    ],
    59: [
      {
        Key: ";",
        Code: "Semicolon",
        Unicode: "",
        Description: "semicolon (firefox), equals",
      },
    ],
    60: [
      {
        Key: "<",
        Code: "Backquote",
        Unicode: "",
        Description: "<",
      },
    ],
    61: [
      {
        Key: "=",
        Code: "Equal",
        Unicode: "",
        Description: "equals (firefox)",
      },
    ],
    63: [
      {
        Key: "ß",
        Code: "Minus",
        Unicode: "",
        Description: "ß / ?",
      },
    ],
    64: [
      {
        Key: "@",
        Code: "",
        Unicode: "",
        Description: "@ (firefox)",
      },
    ],
    65: [
      {
        Key: "a",
        Code: "KeyA",
        Unicode: "",
        Description: "a",
      },
      {
        Key: "á",
        Code: "KeyA",
        Unicode: "á",
        Description: "a acute",
      },
    ],
    66: [
      {
        Key: "b",
        Code: "KeyB",
        Unicode: "",
        Description: "b",
      },
      {
        Key: "∫",
        Code: "KeyB",
        Unicode: "∫",
        Description: "integral",
      },
    ],
    67: [
      {
        Key: "c",
        Code: "KeyC",
        Unicode: "",
        Description: "c",
      },
      {
        Key: "©",
        Code: "KeyC",
        Unicode: "©",
        Description: "copywright",
      },
    ],
    68: [
      {
        Key: "d",
        Code: "KeyD",
        Unicode: "",
        Description: "d",
      },
      {
        Key: "ð",
        Code: "KeyD",
        Unicode: "ð",
        Description: "voiced dental fricative",
      },
      {
        Key: "∂",
        Code: "KeyD",
        Unicode: "∂",
        Description: "partial",
      },
    ],
    69: [
      {
        Key: "e",
        Code: "KeyE",
        Unicode: "",
        Description: "e",
      },
      {
        Key: "Dead",
        Code: "KeyE",
        Unicode: "",
        Description: "e",
      },
      {
        Key: "é",
        Code: "KeyE",
        Unicode: "é",
        Description: "e acute",
      },
    ],
    70: [
      {
        Key: "f",
        Code: "KeyF",
        Unicode: "",
        Description: "f",
      },
      {
        Key: "ƒ",
        Code: "KeyF",
        Unicode: "ƒ",
        Description: "f with hook",
      },
    ],
    71: [
      {
        Key: "g",
        Code: "KeyG",
        Unicode: "",
        Description: "g",
      },
    ],
    72: [
      {
        Key: "h",
        Code: "KeyH",
        Unicode: "",
        Description: "h",
      },
      {
        Key: "˙",
        Code: "KeyH",
        Unicode: "˙",
        Description: "overdot",
      },
      {
        Key: "˚",
        Code: "KeyH",
        Unicode: "˚",
        Description: "small degree",
      },
    ],
    73: [
      {
        Key: "i",
        Code: "KeyI",
        Unicode: "",
        Description: "i",
      },
      {
        Key: "Dead",
        Code: "KeyI",
        Unicode: "",
        Description: "i",
      },
      {
        Key: "^",
        Code: "KeyI",
        Unicode: "^",
        Description: "caret",
      },
      {
        Key: "í",
        Code: "KeyI",
        Unicode: "í",
        Description: "i acute",
      },
    ],
    74: [
      {
        Key: "j",
        Code: "KeyJ",
        Unicode: "",
        Description: "j",
      },
      {
        Key: "∆",
        Code: "KeyJ",
        Unicode: "∆",
        Description: "delta",
      },
    ],
    75: [
      {
        Key: "k",
        Code: "KeyK",
        Unicode: "",
        Description: "k",
      },
      {
        Key: "°",
        Code: "KeyK",
        Unicode: "°",
        Description: "degree",
      },
    ],
    76: [
      {
        Key: "l",
        Code: "KeyL",
        Unicode: "",
        Description: "l",
      },
      {
        Key: "ø",
        Code: "KeyL",
        Unicode: "ø",
        Description: "close mid front rounded vowel",
      },
    ],
    77: [
      {
        Key: "m",
        Code: "KeyM",
        Unicode: "",
        Description: "m",
      },
      {
        Key: "µ",
        Code: "KeyM",
        Unicode: "µ",
        Description: "one millionth",
      },
    ],
    78: [
      {
        Key: "n",
        Code: "KeyN",
        Unicode: "",
        Description: "n",
      },
      {
        Key: "Dead",
        Code: "KeyN",
        Unicode: "",
        Description: "n",
      },
      {
        Key: "ñ",
        Code: "KeyN",
        Unicode: "ñ",
        Description: "n with tilde",
      },
      {
        Key: "~",
        Code: "KeyN",
        Unicode: "~",
        Description: "tilde",
      },
    ],
    79: [
      {
        Key: "o",
        Code: "KeyO",
        Unicode: "",
        Description: "o",
      },
      {
        Key: "ó",
        Code: "KeyO",
        Unicode: "ó",
        Description: "o acute",
      },
    ],
    80: [
      {
        Key: "p",
        Code: "KeyP",
        Unicode: "",
        Description: "p",
      },
      {
        Key: "ö",
        Code: "KeyP",
        Unicode: "ö",
        Description: "o with umlaut",
      },
      {
        Key: "π",
        Code: "KeyP",
        Unicode: "π",
        Description: "pi",
      },
    ],
    81: [
      {
        Key: "q",
        Code: "KeyQ",
        Unicode: "",
        Description: "q",
      },
      {
        Key: "ä",
        Code: "KeyQ",
        Unicode: "ä",
        Description: "open central unrounded vowel",
      },
      {
        Key: "œ",
        Code: "KeyQ",
        Unicode: "œ",
        Description: "open mid front rounded vowel",
      },
    ],
    82: [
      {
        Key: "r",
        Code: "KeyR",
        Unicode: "",
        Description: "r",
      },
      {
        Key: "®",
        Code: "KeyR",
        Unicode: "®",
        Description: "registered trademark",
      },
    ],
    83: [
      {
        Key: "s",
        Code: "KeyS",
        Unicode: "",
        Description: "s",
      },
      {
        Key: "ß",
        Code: "KeyS",
        Unicode: "ß",
        Description: "sharp s",
      },
    ],
    84: [
      {
        Key: "t",
        Code: "KeyT",
        Unicode: "",
        Description: "t",
      },
      {
        Key: "þ",
        Code: "KeyT",
        Unicode: "þ",
        Description: "thorn",
      },
      {
        Key: "†",
        Code: "KeyT",
        Unicode: "†",
        Description: "obelus",
      },
    ],
    85: [
      {
        Key: "u",
        Code: "KeyU",
        Unicode: "",
        Description: "u",
      },
      {
        Key: "Dead",
        Code: "KeyU",
        Unicode: "",
        Description: "u",
      },
      {
        Key: "ú",
        Code: "KeyU",
        Unicode: "ú",
        Description: "u acute",
      },
      {
        Key: "¨",
        Code: "KeyU",
        Unicode: "¨",
        Description: "umlaut",
      },
    ],
    86: [
      {
        Key: "v",
        Code: "KeyV",
        Unicode: "",
        Description: "v",
      },
      {
        Key: "√",
        Code: "KeyV",
        Unicode: "√",
        Description: "sqaure root",
      },
    ],
    87: [
      {
        Key: "w",
        Code: "KeyW",
        Unicode: "",
        Description: "w",
      },
      {
        Key: "å",
        Code: "KeyW",
        Unicode: "å",
        Description: "open mid back unrounded vowel",
      },
      {
        Key: "Σ",
        Code: "KeyW",
        Unicode: "Σ",
        Description: "sigma",
      },
      {
        Key: "∑",
        Code: "KeyW",
        Unicode: "∑",
        Description: "summation sigma",
      },
    ],
    88: [
      {
        Key: "x",
        Code: "KeyX",
        Unicode: "",
        Description: "x",
      },
      {
        Key: "≈",
        Code: "KeyX",
        Unicode: "≈",
        Description: "approximate",
      },
    ],
    89: [
      {
        Key: "y",
        Code: "KeyY",
        Unicode: "",
        Description: "y",
      },
      {
        Key: "¥",
        Code: "KeyY",
        Unicode: "¥",
        Description: "yen",
      },
      {
        Key: "ü",
        Code: "KeyY",
        Unicode: "ü",
        Description: "u with umlaut",
      },
    ],
    90: [
      {
        Key: "z",
        Code: "KeyZ",
        Unicode: "",
        Description: "z",
      },
      {
        Key: "æ",
        Code: "KeyZ",
        Unicode: "æ",
        Description: "near open front unrounded vowel",
      },
      {
        Key: "Ω",
        Code: "KeyZ",
        Unicode: "Ω",
        Description: "ohm",
      },
    ],
    91: [
      {
        Key: "Meta",
        Code: "MetaLeft",
        Unicode: "⌘ ⊞",
        Description: "Windows Key / Left ⌘ / Chromebook Search key",
      },
    ],
    92: [
      {
        Key: "Meta",
        Code: "MetaRight",
        Unicode: "⌘ ⊞",
        Description: "Right Windows",
      },
    ],
    93: [
      {
        Key: "ContextMenu",
        Code: "ContextMenu",
        Unicode: "▤",
        Description: "Windows Menu / Right ⌘",
      },
    ],
    95: [
      {
        Key: "Standby",
        Code: "",
        Unicode: "☾",
        Description: "sleep",
      },
    ],
    96: [
      {
        Key: "0",
        Code: "Numpad0",
        Unicode: "⓪",
        Description: "Number Pad 0",
      },
    ],
    97: [
      {
        Key: "1",
        Code: "Numpad1",
        Unicode: "①",
        Description: "Number Pad 1",
      },
    ],
    98: [
      {
        Key: "2",
        Code: "Numpad2",
        Unicode: "②",
        Description: "Number Pad 2",
      },
    ],
    99: [
      {
        Key: "3",
        Code: "Numpad3",
        Unicode: "③",
        Description: "Number Pad 3",
      },
    ],
    100: [
      {
        Key: "4",
        Code: "Numpad4",
        Unicode: "④",
        Description: "Number Pad 4",
      },
    ],
    101: [
      {
        Key: "5",
        Code: "Numpad5",
        Unicode: "⑤",
        Description: "Number Pad 5",
      },
    ],
    102: [
      {
        Key: "6",
        Code: "Numpad6",
        Unicode: "⑥",
        Description: "Number Pad 6",
      },
    ],
    103: [
      {
        Key: "7",
        Code: "Numpad7",
        Unicode: "⑦",
        Description: "Number Pad 7",
      },
    ],
    104: [
      {
        Key: "8",
        Code: "Numpad8",
        Unicode: "⑧",
        Description: "Number Pad 8",
      },
    ],
    105: [
      {
        Key: "9",
        Code: "Numpad9",
        Unicode: "⑨",
        Description: "Number Pad 9",
      },
    ],
    106: [
      {
        Key: "*",
        Code: "NumpadMultiply",
        Unicode: "×",
        Description: "multiply",
      },
    ],
    107: [
      {
        Key: "+",
        Code: "NumpadAdd",
        Unicode: "",
        Description: "add",
      },
    ],
    108: [
      {
        Key: ",",
        Code: "NumpadDecimal",
        Unicode: "",
        Description: "numpad period (firefox)",
      },
    ],
    109: [
      {
        Key: "-",
        Code: "NumpadSubtract",
        Unicode: "",
        Description: "subtract",
      },
    ],
    110: [
      {
        Key: ".",
        Code: "NumpadDecimal",
        Unicode: "",
        Description: "decimal point",
      },
    ],
    111: [
      {
        Key: "/",
        Code: "NumpadDivide",
        Unicode: "÷",
        Description: "divide",
      },
    ],
    112: [
      {
        Key: "F1",
        Code: "F1",
        Unicode: "",
        Description: "f1",
      },
    ],
    113: [
      {
        Key: "F2",
        Code: "F2",
        Unicode: "",
        Description: "f2",
      },
    ],
    114: [
      {
        Key: "F3",
        Code: "F3",
        Unicode: "",
        Description: "f3",
      },
    ],
    115: [
      {
        Key: "F4",
        Code: "F4",
        Unicode: "",
        Description: "f4",
      },
    ],
    116: [
      {
        Key: "F5",
        Code: "F5",
        Unicode: "",
        Description: "f5",
      },
    ],
    117: [
      {
        Key: "F6",
        Code: "F6",
        Unicode: "",
        Description: "f6",
      },
    ],
    118: [
      {
        Key: "F7",
        Code: "F7",
        Unicode: "",
        Description: "f7",
      },
    ],
    119: [
      {
        Key: "F8",
        Code: "F8",
        Unicode: "",
        Description: "f8",
      },
    ],
    120: [
      {
        Key: "F9",
        Code: "F9",
        Unicode: "",
        Description: "f9",
      },
    ],
    121: [
      {
        Key: "F10",
        Code: "F10",
        Unicode: "",
        Description: "f10",
      },
    ],
    122: [
      {
        Key: "F11",
        Code: "F11",
        Unicode: "",
        Description: "f11",
      },
    ],
    123: [
      {
        Key: "F12",
        Code: "F12",
        Unicode: "",
        Description: "f12",
      },
    ],
    124: [
      {
        Key: "F13",
        Code: "F13",
        Unicode: "",
        Description: "f13",
      },
    ],
    125: [
      {
        Key: "F14",
        Code: "F14",
        Unicode: "",
        Description: "f14",
      },
    ],
    126: [
      {
        Key: "F15",
        Code: "F15",
        Unicode: "",
        Description: "f15",
      },
    ],
    127: [
      {
        Key: "F16",
        Code: "F16",
        Unicode: "",
        Description: "f16",
      },
    ],
    128: [
      {
        Key: "F17",
        Code: "F17",
        Unicode: "",
        Description: "f17",
      },
    ],
    129: [
      {
        Key: "F18",
        Code: "F18",
        Unicode: "",
        Description: "f18",
      },
    ],
    130: [
      {
        Key: "F19",
        Code: "F19",
        Unicode: "",
        Description: "f19",
      },
    ],
    131: [
      {
        Key: "F20",
        Code: "F20",
        Unicode: "",
        Description: "F20",
      },
    ],
    132: [
      {
        Key: "F21",
        Code: "F21",
        Unicode: "",
        Description: "F21",
      },
    ],
    133: [
      {
        Key: "F22",
        Code: "F22",
        Unicode: "",
        Description: "F22",
      },
    ],
    134: [
      {
        Key: "F23",
        Code: "F23",
        Unicode: "",
        Description: "F23",
      },
    ],
    135: [
      {
        Key: "F24",
        Code: "F24",
        Unicode: "",
        Description: "F24",
      },
    ],
    136: [
      {
        Key: "F25",
        Code: "F25",
        Unicode: "",
        Description: "F25",
      },
    ],
    137: [
      {
        Key: "F26",
        Code: "F26",
        Unicode: "",
        Description: "F26",
      },
    ],
    138: [
      {
        Key: "F27",
        Code: "F27",
        Unicode: "",
        Description: "F27",
      },
    ],
    139: [
      {
        Key: "F28",
        Code: "F28",
        Unicode: "",
        Description: "F28",
      },
    ],
    140: [
      {
        Key: "F29",
        Code: "F29",
        Unicode: "",
        Description: "F29",
      },
    ],
    141: [
      {
        Key: "F30",
        Code: "F30",
        Unicode: "",
        Description: "F30",
      },
    ],
    142: [
      {
        Key: "F31",
        Code: "F31",
        Unicode: "",
        Description: "F31",
      },
    ],
    143: [
      {
        Key: "F32",
        Code: "F32",
        Unicode: "",
        Description: "F32",
      },
    ],
    144: [
      {
        Key: "NumLock",
        Code: "NumLock",
        Unicode: "⇭",
        Description: "num lock",
      },
    ],
    145: [
      {
        Key: "ScrollLock",
        Code: "ScrollLock",
        Unicode: "⤓",
        Description: "scroll lock",
      },
    ],
    151: [
      {
        Key: "",
        Code: "",
        Unicode: "",
        Description: "airplane mode",
      },
    ],
    160: [
      {
        Key: "^",
        Code: "BracketLeft",
        Unicode: "",
        Description: "^",
      },
    ],
    161: [
      {
        Key: "Dead",
        Code: "BracketRight",
        Unicode: "",
        Description: "!",
      },
    ],
    162: [
      {
        Key: "",
        Code: "",
        Unicode: "",
        Description: '؛ (arabic semicolon) / " / ¢',
      },
    ],
    163: [
      {
        Key: "#",
        Code: "Backquote",
        Unicode: "",
        Description: "#",
      },
    ],
    164: [
      {
        Key: "$",
        Code: "Backslash",
        Unicode: "",
        Description: "$",
      },
    ],
    165: [
      {
        Key: "^ù",
        Code: "Quote",
        Unicode: "",
        Description: "ù",
      },
    ],
    166: [
      {
        Key: "BrowserBack",
        Code: "",
        Unicode: "",
        Description: "browser page backward",
      },
    ],
    167: [
      {
        Key: "BrowserForward",
        Code: "",
        Unicode: "",
        Description: "browser page forward",
      },
    ],
    168: [
      {
        Key: "BrowserRefresh",
        Code: "",
        Unicode: "",
        Description: "browser refresh",
      },
    ],
    169: [
      {
        Key: ")",
        Code: "Minus",
        Unicode: "",
        Description: "closing paren (AZERTY)",
      },
    ],
    170: [
      {
        Key: "*",
        Code: "Backslash",
        Unicode: "",
        Description: "*",
      },
    ],
    171: [
      {
        Key: "+",
        Code: "BracketRight",
        Unicode: "",
        Description: "~ + * key",
      },
    ],
    172: [
      {
        Key: "|",
        Code: "",
        Unicode: "",
        Description: "home key, pipe key",
      },
    ],
    173: [
      {
        Key: "-",
        Code: "Minus",
        Unicode: "",
        Description: "minus (firefox), mute/unmute",
      },
    ],
    174: [
      {
        Key: "AudioVolumeDown",
        Code: "",
        Unicode: "",
        Description: "decrease volume level",
      },
    ],
    175: [
      {
        Key: "AudioVolumeUp",
        Code: "",
        Unicode: "",
        Description: "increase volume level",
      },
    ],
    176: [
      {
        Key: "MediaTrackNext",
        Code: "MediaTrackNext",
        Unicode: "",
        Description: "next",
      },
    ],
    177: [
      {
        Key: "MediaTrackPrevious",
        Code: "MediaTrackPrevious",
        Unicode: "",
        Description: "previous",
      },
    ],
    178: [
      {
        Key: "MediaStop",
        Code: "",
        Unicode: "",
        Description: "stop",
      },
    ],
    179: [
      {
        Key: "MediaPlayPause",
        Code: "",
        Unicode: "",
        Description: "play/pause",
      },
    ],
    180: [
      {
        Key: "LaunchMail",
        Code: "",
        Unicode: "✉",
        Description: "e-mail",
      },
    ],
    181: [
      {
        Key: "AudioVolumeMute",
        Code: "VolumeMute",
        Unicode: "",
        Description: "mute/unmute (firefox)",
      },
    ],
    182: [
      {
        Key: "AudioVolumeDown",
        Code: "VolumeDown",
        Unicode: "",
        Description: "decrease volume level (firefox)",
      },
    ],
    183: [
      {
        Key: "AudioVolumeUp",
        Code: "VolumeUp",
        Unicode: "",
        Description: "increase volume level (firefox)",
      },
    ],
    186: [
      {
        Key: ";",
        Code: "Semicolon",
        Unicode: "",
        Description: "semi-colon / ñ",
      },
      {
        Key: "¶",
        Code: "Semicolon",
        Unicode: "¶",
        Description: "pilcrow",
      },
      {
        Key: "…",
        Code: "Semicolon",
        Unicode: "…",
        Description: "ellipsis",
      },
    ],
    187: [
      {
        Key: "=",
        Code: "Equal",
        Unicode: "",
        Description: "equal sign",
      },
      {
        Key: "±",
        Code: "Equal",
        Unicode: "±",
        Description: "plus minus",
      },
      {
        Key: "×",
        Code: "Equal",
        Unicode: "×",
        Description: "multiply",
      },
      {
        Key: "≠",
        Code: "Equal",
        Unicode: "≠",
        Description: "not equal",
      },
    ],
    188: [
      {
        Key: ",",
        Code: "Comma",
        Unicode: "",
        Description: "comma",
      },
      {
        Key: "ç",
        Code: "Comma",
        Unicode: "ç",
        Description: "c cedilla",
      },
      {
        Key: "≥",
        Code: "Comma",
        Unicode: "≥",
        Description: "greater than or equal",
      },
    ],
    189: [
      {
        Key: "-",
        Code: "Minus",
        Unicode: "",
        Description: "dash",
      },
      {
        Key: "–",
        Code: "Minus",
        Unicode: "–",
        Description: "dash",
      },
      {
        Key: "_",
        Code: "Minus",
        Unicode: "_",
        Description: "underscore",
      },
    ],
    190: [
      {
        Key: ".",
        Code: "Period",
        Unicode: "",
        Description: "period",
      },
      {
        Key: ">",
        Code: "Period",
        Unicode: ">",
        Description: "greater than",
      },
      {
        Key: "≤",
        Code: "Period",
        Unicode: "≤",
        Description: "less than or equal",
      },
    ],
    191: [
      {
        Key: "/",
        Code: "Slash",
        Unicode: "",
        Description: "forward slash / ç",
      },
      {
        Key: "?",
        Code: "Slash",
        Unicode: "?",
        Description: "question mark",
      },
      {
        Key: "¿",
        Code: "Slash",
        Unicode: "¿",
        Description: "inverted question mark",
      },
      {
        Key: "÷",
        Code: "Slash",
        Unicode: "÷",
        Description: "division",
      },
    ],
    192: [
      {
        Key: "`",
        Code: "Backquote",
        Unicode: "",
        Description: "Backtick / grave accent / ñ / æ / ö / § / ±",
      },
      {
        Key: "Dead",
        Code: "IntlBackslash",
        Unicode: "",
        Description: "Backtick / grave accent / ñ / æ / ö / § / ±",
      },
    ],
    193: [
      {
        Key: "/",
        Code: "IntlRo",
        Unicode: "",
        Description: "?, / or °",
      },
    ],
    194: [
      {
        Key: ".",
        Code: "NumpadComma",
        Unicode: "",
        Description: "numpad period (chrome)",
      },
    ],
    219: [
      {
        Key: "[",
        Code: "BracketLeft",
        Unicode: "",
        Description: "open bracket",
      },
      {
        Key: "{",
        Code: "BracketLeft",
        Unicode: "{",
        Description: "braces left",
      },
      {
        Key: "«",
        Code: "BracketLeft",
        Unicode: "«",
        Description: "left guillemet",
      },
      {
        Key: "”",
        Code: "BracketLeft",
        Unicode: "”",
        Description: "right double quotation",
      },
      {
        Key: "“",
        Code: "BracketLeft",
        Unicode: "“",
        Description: "inverted double quotation",
      },
    ],
    220: [
      {
        Key: "\\",
        Code: "Backslash",
        Unicode: "",
        Description: "back slash",
      },
      {
        Key: "¬",
        Code: "Backslash",
        Unicode: "¬",
        Description: "logical negation",
      },
    ],
    221: [
      {
        Key: "]",
        Code: "BracketRight",
        Unicode: "",
        Description: "close bracket / å",
      },
      {
        Key: "}",
        Code: "BracketRight",
        Unicode: "}",
        Description: "braces right",
      },
      {
        Key: "»",
        Code: "BracketRight",
        Unicode: "»",
        Description: "right guillemet",
      },
    ],
    222: [
      {
        Key: "'",
        Code: "Quote",
        Unicode: "",
        Description: "single quote / ø / ä",
      },
      {
        Key: "\tQuote\t",
        Code: "double quote",
        Unicode: "",
        Description: "",
      },
      {
        Key: "´",
        Code: "Quote",
        Unicode: "´",
        Description: "accent",
      },
    ],
    223: [
      {
        Key: "`",
        Code: "Backquote",
        Unicode: "",
        Description: "`",
      },
    ],
    224: [
      {
        Key: "Meta",
        Code: "OSLeft",
        Unicode: "⌘",
        Description: "left or right ⌘ key (firefox)",
      },
    ],
    225: [
      {
        Key: "AltGraph",
        Code: "AltRight",
        Unicode: "⎇ or ⌥",
        Description: "altgr",
      },
    ],
    226: [
      {
        Key: "\\",
        Code: "IntlBackslash",
        Unicode: "",
        Description: "< /git >, left back slash",
      },
    ],
    229: [
      {
        Key: "Dead",
        Code: "Backquote",
        Unicode: "",
        Description: "",
      },
    ],
    230: [
      {
        Key: "",
        Code: "",
        Unicode: "",
        Description: "GNOME Compose Key",
      },
    ],
    231: [
      {
        Key: "",
        Code: "",
        Unicode: "",
        Description: "ç",
      },
    ],
    233: [
      {
        Key: "",
        Code: "",
        Unicode: "",
        Description: "XF86Forward / é",
      },
    ],
    234: [
      {
        Key: "",
        Code: "",
        Unicode: "",
        Description: "XF86Back / ê",
      },
    ],
    235: [
      {
        Key: "",
        Code: "",
        Unicode: "",
        Description: "non-conversion / ë",
      },
    ],
    240: [
      {
        Key: "Alphanumeric",
        Code: "",
        Unicode: "",
        Description: "alphanumeric / ð",
      },
    ],
    242: [
      {
        Key: "HiraganaKatakana",
        Code: "",
        Unicode: "",
        Description: "hiragana/katakana / ò",
      },
    ],
    243: [
      {
        Key: "ZenkakuHankaku",
        Code: "",
        Unicode: "",
        Description: "half-width/full-width / ó",
      },
    ],
    244: [
      {
        Key: "KanjiMode",
        Code: "",
        Unicode: "",
        Description: "kanji / ô",
      },
    ],
    251: [
      {
        Key: "",
        Code: "",
        Unicode: "",
        Description: "unlock track pad (Chrome/Edge) / û",
      },
    ],
    255: [
      {
        Key: "WakeUp",
        Code: "WakeUp",
        Unicode: "",
        Description: "WakeUp",
      },
    ],
    "": [
      {
        Key: "Unidentified",
        Code: "Unidentified",
        Unicode: "",
        Description: "These keys do not have a key code",
      },
    ],
  };
  window.onkeydown = function (e) {
    if (pressed[e.which]) return;
    pressed[e.which] = e.timeStamp;
  };
  let lines = [];
  window.onkeyup = function (e) {
    if (!pressed[e.which]) return;
    var duration = (e.timeStamp - pressed[e.which]) / 1000;
    lines.push(
      "<p>Key " +
        e.which +
        " was pressed for " +
        duration +
        " seconds mapped to " +
        mapping[e.which][0].Key +
        " </p>"
    );
    if (lines.length > 10) {
      lines = lines.slice(10);
    }
    output.innerHTML = lines.join("");
    pressed[e.which] = 0;
  };
})();
