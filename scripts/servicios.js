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
        const image = buscarAsset(item.fields.image.sys.id, data);
        const imgUrl = image.fields.file.url;
        return {
          title: item.fields.title,
          description: item.fields.description,
          image: imgUrl,
        };
      });
      return fieldsCollections;
    });
}
function buscarAsset(id, data) {
  const imgEncontrado = data.includes.Asset.find((img) => {
    return img.sys.id == id;
  });
  return imgEncontrado;
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
