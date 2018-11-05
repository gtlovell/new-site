const client_id = 'e9359a3e6e0e84892f9c';
const client_secret = 'ad7ad9e70b0d256416893483c9122fe9e7f43004';
const repos_count = 6;
const repos_sort = 'created: asc';

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open(
  'GET',
  `https://api.github.com/users/gtlovell/repos?per_page=${repos_count}&sort=created&client_id=${client_id}&client_secret=${client_secret}`,
  true
);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  data.map(repo => {
    const card = document.createElement('div');
    card.setAttribute('id', 'repo-card');
    card.setAttribute('class', 'card');

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');
    cardBody.setAttribute('id', 'repo-card-body');

    const h5 = document.createElement('h5');
    h5.setAttribute('class', 'card-title');
    h5.textContent = `${repo.name}`;

    const p = document.createElement('p');
    p.setAttribute('class', 'card-text');
    p.setAttribute('style', 'text-align: left; padding-left: 0px;');
    p.textContent = `${repo.description}`;

    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card-content');

    const a = document.createElement('a');
    a.setAttribute('href', `${repo.html_url}`);
    a.setAttribute('target', '_blank');
    a.setAttribute('class', 'card-link');
    a.setAttribute('id', 'link-end');
    a.textContent = 'View';

    const repoLink = document.createElement('div');
    repoLink.setAttribute('class', 'repo-button');

    container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardDiv);
    cardDiv.appendChild(h5);
    cardDiv.appendChild(p);
    cardBody.appendChild(repoLink);
    repoLink.appendChild(a);
    // console.log(repo);
  });
};

request.send();

// class Github {
//   constructor() {
//     this.client_id = 'e9359a3e6e0e84892f9c';
//     this.client_secret = 'ad7ad9e70b0d256416893483c9122fe9e7f43004';
//     this.repos_count = 6;
//     this.repos_sort = 'created: asc';
//   }

//   async getUser() {
//     const repoResponse = await fetch(
//       `https://api.github.com/users/gtlovell/repos?per_page=${
//         this.repos_count
//       }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
//         this.client_secret
//       }`
//     );

//     const repos = await repoResponse.json();

//     return {
//       repos
//     };
//   }
// }
