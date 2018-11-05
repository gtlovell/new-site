class UI {
  constructor() {
    this.profile = document.querySelector('profile');
  }

  // Show repos
  showRepos(repos) {
    let output = '';

    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-pill badge-info">Stars: ${
                repo.stargazer_count
              }</span>
              <span class="badge badge-pill badge-info">Watchers: ${
                repo.watchers_count
              }</span>
              <span class="badge badge-pill badge-info">Forks: ${
                repo.forks_count
              }</span>
            </div>
          </div>
        </div>
      `;
    });

    document.querySelector('repos').innerHTML = output;
  }
}
