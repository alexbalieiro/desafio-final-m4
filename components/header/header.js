function headerComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <div class="header__container">
  <a class="header__logo" href="/index.html">ALEX</a>
  <div class="header__menu">
    <div class="header__hamburguer">
      <div class="header__hamburguer-rectangulo"></div>
      <div class="header__hamburguer-rectangulo"></div>
      <div class="header__hamburguer-rectangulo"></div>
    </div>
    <div class="header__links-container">
      <a class="header__link" href="./portfolio.html">Portfolio</a>
      <a class="header__link" href="./servicios.html">Servicios</a>
      <a class="header__link" href="./contacto.html">Contacto</a>
    </div>
    <div class="header__menu-mobile">
    <button class="header__button-close">X</button>
    <a href="./portfolio.html">Portfolio</a>
    <a href="./servicios.html">Servicios</a>
    <a href="./contacto.html">Contacto</a>
  </div>
  </div>
</div>
  `;
  el.appendChild(componentEl);
}
function openWindow() {
  const botonCierraVentanaEl = document.querySelector(".header__hamburguer");
  const ventanaEl = document.querySelector(".header__menu-mobile");
  botonCierraVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "flex";
  });
}
function closeWindow() {
  const botonCierraVentanaEl = document.querySelector(".header__button-close");
  const ventanaEl = document.querySelector(".header__menu-mobile");
  botonCierraVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "none";
  });
}
