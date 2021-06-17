function conctactComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <div class="contact__container">
    <h2 class="contact__title">Escribime</h2>
      <form class="contact__form">
        <div class="contact__fieldset">
          <label class="contact__label" for="nombre">NOMBRE</label>
          <input class="contact__input" id="nombre" type="text" />
        </div>
        <div class="contact__fieldset">
          <label class="contacto__label" for="email">EMAIL</label>
          <input class="contact__input" id="email" type="email" />
        </div>
        <div class="contact__fieldset">
          <label class="contact__label" for="message">MENSAJE</label>
          <textarea class="contact__input text-area" id="message"></textarea>
        </div>
        <div class="contact__submit-cont">
          <button class="contact__submit-button">Enviar</button>
        </div>
      </form>
  </div>
  `;
  el.appendChild(componentEl);
  const form = document.querySelector(".contact__form");
  const name = form[0];
  const email = form[1];
  const text = form[2];
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: email.value,
        message: "Hola, soy " + name.value + " " + text.value,
      }),
    });
    alert("El mensaje fue enviado");
    name.value = "";
    email.value = "";
    text.value = "";
  });
}
