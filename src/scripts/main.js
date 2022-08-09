let colorNames = [
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
  'Khaki', 'DarkKhaki'
]

function generateColor() {
  let randomValue = Math.floor(Math.random() * colorNames.length)

  let generatedColor = colorNames[randomValue]
  
  document.querySelector('.panel__info span').innerHTML = generatedColor
  
  document.body.style.backgroundColor = generatedColor
}