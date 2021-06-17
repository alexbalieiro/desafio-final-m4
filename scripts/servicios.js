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
  footerComponent(document.querySelector(".footer"));
  openWindow();
  closeWindow();
  getServices().then(function (services) {
    for (const s of services) {
      addServicesCard(s);
    }
  });
}

main();
