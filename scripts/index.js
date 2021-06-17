function addWelcome(params) {
  const template = document.querySelector("#welcome-template");
  const container = document.querySelector(".welcome__container");
  template.content.querySelector(".welcome__title").textContent = params.title;
  template.content.querySelector(".subtitle").textContent = params.subtitle;
  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}
function getWelcome() {
  return fetch(
    "https://cdn.contentful.com/spaces/vrg688bghvvi/environments/master/entries?access_token=K5QmEdREnqy9urSSdESVllG6l2wbOcnLT0UB0JthHnc&content_type=welcome"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        return {
          title: item.fields.title,
          subtitle: item.fields.subtitle,
        };
      });
      return fieldsCollections;
    });
}
function addAboutMe(params) {
  const template = document.querySelector("#about-me-template");
  const container = document.querySelector(".about-me__container");
  template.content.querySelector(".about-me__img").src = params.image;
  template.content.querySelector(".subtitle").textContent = params.title;
  template.content.querySelector(".about-me__text").textContent =
    params.description;
  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}
function getAboutMe() {
  return fetch(
    "https://cdn.contentful.com/spaces/vrg688bghvvi/environments/master/entries?access_token=K5QmEdREnqy9urSSdESVllG6l2wbOcnLT0UB0JthHnc&content_type=aboutme"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        return {
          image: item.fields.imgurl,
          title: item.fields.title,
          description: item.fields.description,
        };
      });
      return fieldsCollections;
    });
}
function addServicesCard(params) {
  const template = document.querySelector("#services__card-template");
  const container = document.querySelector(".services__content");
  template.content.querySelector(".services__img").src = params.image;
  template.content.querySelector(".services__card-title").textContent =
    params.title;
  template.content.querySelector(".services__card-text").textContent =
    params.description;
  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}
function getServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/vrg688bghvvi/environments/master/entries?access_token=K5QmEdREnqy9urSSdESVllG6l2wbOcnLT0UB0JthHnc&content_type=services"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        return {
          title: item.fields.title,
          description: item.fields.description,
          image: item.fields.imgurl,
        };
      });
      return fieldsCollections;
    });
}
function main() {
  headerComponent(document.querySelector(".header"));
  conctactComponent(document.querySelector(".contact"));
  footerComponent(document.querySelector(".footer"));
  openWindow();
  closeWindow();
  getWelcome().then(function (welcome) {
    for (const w of welcome) {
      addWelcome(w);
    }
  });
  getAboutMe().then(function (aboutMe) {
    for (const a of aboutMe) {
      addAboutMe(a);
    }
  });
  getServices().then(function (services) {
    for (const s of services) {
      addServicesCard(s);
    }
  });
}

main();
