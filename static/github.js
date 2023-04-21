fetch('https://gh-pinned-repos.egoist.dev/?username=wzid')
  .then(response => response.json())
  .then(data => {
    const myDataDiv = document.getElementById('github-data');
    let html = '';
    for (let i = 0; i < 3; i++) {
      const repo = data[i];
      html += `
        <div id="repo" class="repo">
        <a href="${repo.link}"></a>
          <h2>
            <span style="color:var(--text-color);">
              ${repo.repo}
            </span>
            <span>
            &middot;
            </span>
            <div id="language" style="background-color: ${repo.languageColor}">
              ${repo.language}
            </div>
            ${repo.stars ? `<div id="stars"> ${repo.stars} &#11088 </div>` : ''}
          </h2>
          ${repo.description ? `<p>${repo.description}</p>` : ''}
        </div>
      `;
    }
    myDataDiv.innerHTML = html;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
