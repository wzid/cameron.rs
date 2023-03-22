fetch('https://gh-pinned-repos.egoist.dev/?username=wzid')
  .then(response => response.json())
  .then(data => {
    const myDataDiv = document.getElementById('github-data');
    let html = '';
    for (let i = 0; i < data.length; i++) {
      const repo = data[i];
      html += `
        <div id="repo" class="repo">
        <a href="${repo.link}"></a>
          <h4>
            <span style="color:var(--pink)">
              ${repo.repo}
            </span>
            &middot;
            <div id="language" style="background-color: ${repo.languageColor}">
              ${repo.language}
            </div>
            ${repo.stars ? `<div id="stars"> ${repo.stars} &#11088 </div>` : ''}
          </h4>
          ${repo.description ? `<p>${repo.description}</p>` : ''}
        </div>
      `;
    }
    myDataDiv.innerHTML = html;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
