function footerComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
<div class="footer__container">
<h2 class="footer__logo">ALEX</h2>
<ul class="footer__social-media">
  <li> <a class="footer__social-media-link" href="https://www.instagram.com/alexbal12">Instagram</a>
       <img class="footer__social-media-logo" src="./images/instagram.svg" alt="instagram"/>
  </li>
  <li> <a class="footer__social-media-link" href="https://www.linkedin.com/in/alex-balieiro-7212b09b/">Linkedin</a>
       <img class="footer__social-media-logo" src="./images/linkedin.svg" alt="linkedin"/>
  </li>
  <li> <a class="footer__social-media-link" href="https://github.com/alexbal12">Github</a>
       <img class="footer__social-media-logo" src="./images/github.svg" alt="github"/>
  </li>
</ul>
</div>
`;
  el.appendChild(componentEl);
}
