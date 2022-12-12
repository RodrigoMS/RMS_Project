const light = document.querySelector(".light")
const background = document.querySelector(".background-hexagono")

const body = document.getElementsByTagName("body")[0]

body.addEventListener("mousemove", (e) => {
  light.style.left = `${(e.clientX) - 150}px`
  light.style.top = `${(e.clientY) - 150 }px`
})

// Cria os hexágonos.
function createHexagons() {
  let exchange = true
  let topValue = 42

  let back = `<div id="container0" class="container-hexagono position-2" style="top: -50px">`

  for (let index = 1; index < 49; index++) {

    if (exchange) {
      back += `<div id="container${index}" class="container-hexagono" style="top: ${topValue}px">`
      exchange = false
  
    } else {
      back += `<div id="container${index}" class="container-hexagono position-2" style="top: ${topValue}px">`
      exchange = true
    }

    topValue += 92

    for (let index = 0; index < 77; index++) {
      back += `<div class="hexagono"></div>`
    }

    back +=`</div>`
  }

  //background.innerHTML += back

  const hexagonosWallpaper = document.createElement("div")
  hexagonosWallpaper.innerHTML = back
  background.appendChild(hexagonosWallpaper)
}

createHexagons()

//Troca a cor dos hexágonos a cada 5 segundos.
/*setInterval(() => {


  let hexagon = document.querySelector("#light")


}, 5000);*/