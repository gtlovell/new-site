// Init GitHub & UI
const github = new Github();
const ui = new UI();

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const garrett = github.getUser('gtlovell').then(data => {
  data.repos.map(repo => {
    // console.log(repo);

    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const h1 = document.createElement('h1');
    h1.textContent = repo.name;

    // const p = document.createElement('p');
    // repo.description = repo.description.substring(0, 300);
    // p.textContent = `${repo.description}...`;

    container.appendChild(card);
    card.appendChild(h1);
    // card.appendChild(p);
  });
});

garrett.send();
