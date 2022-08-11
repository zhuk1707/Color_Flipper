//Array of color names
const colorNames = [
  'IndianRed', 'LightCoral', 'Salmon',
  'DarkSalmon', 'LightSalmon', 'Crimson',
  'Red', 'FireBrick', 'DarkRed',
  'Pink', 'LightPink', 'HotPink',
  'DeepPink', 'MediumVioletRed', 'PaleVioletRed',
  'LightSalmon', 'Coral', 'Tomato',
  'OrangeRed', 'DarkOrange', 'Orange', 
  'Gold', 'Yellow', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip',
  'Moccasin', 'PeachPuff', 'PaleGoldenrod',
  'Khaki', 'DarkKhaki', 'Lavender',
  'Thistle', 'Plum', 'Violet',
  'Orchid', 'Fuchsia', 'Magenta',
  'MediumOrchid', 'MediumPurple',  'BlueViolet', 
  'DarkViolet',  'DarkOrchid',  'DarkMagenta',
  'Purple', 'Indigo',  'SlateBlue',
  'DarkSlateBlue', 'Cornsilk', 'BlanchedAlmond',
  'Bisque', 'NavajoWhite', 'Wheat',
  'BurlyWood', 'Tan', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenRod',
  'Peru', 'Chocolate', 'SaddleBrown',
  'Sienna', 'Brown', 'Maroon',
  'GreenYellow',   'Chartreuse', 
  'LawnGreen', 'Lime', 'LimeGreen', 
  'PaleGreen', 'LightGreen', 'MediumSpringGreen', 
  'SpringGreen', 'MediumSeaGreen', 'SeaGreen', 
  'ForestGreen', 'Green', 'DarkGreen',
  'YellowGreen', 'OliveDrab', 'Olive', 
  'DarkOliveGreen', 'MediumAquamarine', 'DarkSeaGreen', 
  'LightSeaGreen', 'DarkCyan', 'Teal',
  'Aqua', 'Cyan', 'LightCyan',
  'PaleTurquoise', 'Aquamarine', 'Turquoise', 
  'MediumTurquoise', 'DarkTurquoise', 'CadetBlue', 
  'SteelBlue', 'LightSteelBlue', 'PowderBlue',
  'LightBlue', 'SkyBlue', 'LightSkyBlue', 
  'DeepSkyBlue', 'DodgerBlue', 'CornflowerBlue', 
  'MediumSlateBlue', 'RoyalBlue', 'Blue', 
  'MediumBlue', 'DarkBlue', 'Navy', 
  'MidnightBlue',  'White', 'Snow', 
  'Honeydew', 'MintCream', 'Azure', 
  'AliceBlue', 'GhostWhite', 'WhiteSmoke', 
  'Seashell', 'Beige', 'OldLace', 
  'FloralWhite', 'Ivory', 'AntiqueWhite', 
  'Linen', 'LavenderBlush', 'MistyRose',
  'Gainsboro', 'LightGrey', 'LightGray',
  'Silver', 'DarkGray', 'DarkGrey', 'Gray',
  'Grey', 'DimGray', 'DimGrey', 'LightSlateGray',
  'LightSlateGrey', 'SlateGray', 'SlateGrey',
  'DarkSlateGray', 'DarkSlateGrey', 'Black'
]

//Array of hex symbols
const hex = [
  1, 2, 3, 4, 5, 6, 7, 8,
  9, 'A', 'B', 'C', 'D', 'E', 'F'
]

let mode = "simple"
let modeButtons = document.querySelectorAll('.mode-btn')
let simpleBtn = document.querySelector('.panel__btn_left')
let hexBtn = document.querySelector('.panel__btn_right')
let textToCopy = document.querySelector('.panel__info span')
let notification = document.querySelector('.main__notification')

function getGeneratedColor(arr) {
  let randomValue
  randomValue = Math.floor(Math.random() * arr.length)
  return arr[randomValue]
}

function generateColor() {
  let generatedColor

  if (mode === 'simple') {
    generatedColor = getGeneratedColor(colorNames)

  } else {
    generatedColor = "#"
    for (let i = 0; i < 6; i++) {
      generatedColor += getGeneratedColor(hex)
    }
  }

  document.querySelector('.panel__info span').innerHTML = generatedColor
  document.body.style.backgroundColor = generatedColor
}

function copyOnClick(e) {
  navigator.clipboard.writeText(e.target.innerHTML)
    .then(function () {
      notification.style.opacity = '1'
      setTimeout(function(){
        notification.style.opacity = '0'
      }, 2500)
    })
}

modeButtons.forEach( (button) => {
  button.addEventListener("click", (e) => {
    if (e.currentTarget.innerText === "Simple") {
      mode = 'simple'
      simpleBtn.classList.add('active')
      hexBtn.classList.remove('active')
    }
    else {
      mode = 'hex'
      simpleBtn.classList.remove('active')
      hexBtn.classList.add('active')
    }
    
    generateColor()
  })
})

textToCopy.addEventListener('click', copyOnClick)

generateColor()