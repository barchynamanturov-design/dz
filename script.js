let div = document.createElement('div')
let img = document.createElement('img') 
let h1 = document.createElement('h1')
let h2 = document.createElement('h2')
let button = document.createElement('button')

div.classList.add('card')
img.src='images 2.png'
h1 .textContent='Barchyn Amanturov'
h2 .textContent='Frontend Developer'


document.body.append(div)
div.append(img)
div.append(h1)
div.append(h2)
button.textContent='Message'
div.append(button)