function render(data) {
  const main = document.querySelector('main');
  const results = data.results;
  console.dir(results);
  results.map((item, i) => {
    const html = `
            <article>
              <h2>${item.titles[0]}</h2>
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <img src="${
                item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
              }">
            </article>
          `;
    main.insertAdjacentHTML('beforeend', html);
  });
}

export {
  render
}