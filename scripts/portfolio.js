function addPortfolioCard(params) {
  const template = document.querySelector("#portfolio-card-template");
  const container = document.querySelector(".portfolio-content");
  template.content.querySelector(".portfolio-img").src = params.image;
  template.content.querySelector(".portfolio-card-title").textContent =
    params.title;
  template.content.querySelector(".portfolio-card-text").textContent =
    params.description;
  template.content.querySelector(".portfolio-card-link").href = params.url;
  template.content.querySelector(".portfolio-card-link").textContent =
    params.descriptionlink;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}
function getPortfolio() {
  return fetch(
    "https://cdn.contentful.com/spaces/vrg688bghvvi/environments/master/entries?access_token=K5QmEdREnqy9urSSdESVllG6l2wbOcnLT0UB0JthHnc&content_type=portfolio"
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
          url: item.fields.url,
          descriptionlink: item.fields.descriptionlink,
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
  getPortfolio().then(function (portfolio) {
    for (const p of portfolio) {
      addPortfolioCard(p);
    }
  });
}

main();
