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
  'DarkSlateBlue'
]

const hex = [
  1, 2, 3, 4, 5, 6, 7, 8,
  9, 'A', 'B', 'C', 'D', 'E', 'F'
]

let mode = "simple"
let modeButtons = document.querySelectorAll('.mode-btn')
let simpleBtn = document.querySelector('.panel__btn_left')
let hexBtn = document.querySelector('.panel__btn_right')

modeButtons.forEach( (button) => {
  button.addEventListener("click", (e) => {
    if (e.currentTarget.innerText === "Simple") {
      mode = 'simple'
    }
    else {
      mode = 'hex'
    }

    if (mode === 'simple') {
      simpleBtn.classList.toggle('active')
      hexBtn.classList.toggle('active')
      generateColor()
    } else {
      simpleBtn.classList.toggle('active')
      hexBtn.classList.toggle('active')
      generateColor()

    }
  })
  
})

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