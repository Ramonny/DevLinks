function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Ramonny, de óculos escuro, olhando para frente"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
