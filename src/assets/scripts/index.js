function toggle() {
  const html = document.documentElement
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light');
  }
  const img = document.querySelector('#profile img')
  const desc = document.querySelector("#profile .text")
  // Update img attribute
  if(html.classList.contains('light')) {
    img.setAttribute("src","./src/assets/images/avatar-light.jpg");
  } else {
    img.setAttribute("src","./src/assets/images/avatar.jpg");
  }

  // Update text
  if(html.classList.contains('light')) {
    desc.textContent = "@Mrc.Junior";
  } else {
    desc.textContent = "Contact : #mrcjuuh";
  }
}