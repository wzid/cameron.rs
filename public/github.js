fetch('https://gh-pinned-repos.egoist.dev/?username=wzid')
  .then(response => response.json())
  .then(data => {
    const myDataDiv = document.getElementById('github-data');
    let html = '';
    for (let i = 0; i < data.length; i++) {
      const repo = data[i];
      html += `
        <div class="repo">
          <h4>
            <a href="${repo.link}">${repo.repo}</a>
            &middot;
            <strong style="color: ${repo.languageColor}">${repo.language}</strong>
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