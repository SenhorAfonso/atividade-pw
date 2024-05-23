function createHeader() {
  const header = document.querySelector('header');
  const headerAnchor = document.createElement('a');
  const headerHeading = document.createElement('h1');

  header.id = 'header';
  headerAnchor.href = '/atividade-pw/';
  headerHeading.textContent = 'Squirtle';
  headerAnchor.appendChild(headerHeading);

  header.appendChild(headerAnchor);
}

function createNavBar() {
  const nav = document.querySelector('nav');
  const navUl = document.createElement('ul');

  const navItem = new Map();
  navItem.set('#info-squirtle', 'Informações sobre Squirtle');
  navItem.set('#caracteristicas', 'Características');
  navItem.set('#curiosidades', 'Curiosidades');
  navItem.set('#artigo-squirtle', 'Artigo sobre Squirtle');
  navItem.set('#recursos', 'Recursos Adicionais');
  navItem.set('#evolucao', 'Evolução');

  for ([key, value] of navItem.entries()) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = key;
    a.textContent = value;
    li.appendChild(a);
    navUl.appendChild(li);
  }

  nav.appendChild(navUl);
}

function createSquirtle(main) {
  const squirtleInfoSection = document.createElement('section');
  const imagesContainer = document.createElement('div');
  const squirtleInfoHeading = document.createElement('h2');
  const firstImage = document.createElement('img');
  const secondImage = document.createElement('img');
  const infoSquirtleParagraph = document.createElement('p');

  squirtleInfoSection.id = 'info-squirtle';
  squirtleInfoHeading.textContent = 'Informações sobre Squirtle';
  squirtleInfoSection.appendChild(squirtleInfoHeading);

  firstImage.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png';
  firstImage.alt = 'Squirtle 1';
  secondImage.src =
    'https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png';
  secondImage.alt = 'Squirtle 2';
  imagesContainer.appendChild(firstImage);
  imagesContainer.appendChild(secondImage);

  squirtleInfoSection.appendChild(imagesContainer);

  infoSquirtleParagraph.textContent =
    'Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.';
  squirtleInfoSection.appendChild(infoSquirtleParagraph);

  main.appendChild(squirtleInfoSection);
}

function createCharacteristics(main) {
  const characteristicsSection = document.createElement('section');
  const characteristicsHeading = document.createElement('h2');
  const characteristicsParagraph = document.createElement('p');

  characteristicsSection.id = 'caracteristicas';
  characteristicsHeading.textContent = 'Características';
  characteristicsSection.appendChild(characteristicsHeading);
  characteristicsParagraph.textContent =
    'Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.';
  characteristicsSection.appendChild(characteristicsParagraph);

  main.appendChild(characteristicsSection);
}

function createFunFacts(main) {
  const funFactsSection = document.createElement('section');
  const funFactsHeading = document.createElement('h2');
  const funFactsUList = document.createElement('ul');

  funFactsSection.id = 'curiosidades';
  funFactsHeading.textContent = 'Curiosidades';
  funFactsSection.appendChild(funFactsHeading);

  const funFactsListItems = [
    'Squirtle é um dos Pokémon mais populares e adoráveis.',
    'Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).',
    'Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.',
  ];

  funFactsListItems.forEach((fact) => {
    const curiosity = document.createElement('li');
    curiosity.textContent = fact;
    funFactsUList.appendChild(curiosity);
  });

  funFactsSection.appendChild(funFactsUList);
  main.appendChild(funFactsSection);
}

function createArticle(main) {
  const articleSection = document.createElement('article');
  const articleHeading = document.createElement('h2');

  articleSection.id = 'artigo-squirtle';
  articleHeading.textContent = 'Squirtle: O Amigo Aquático';
  articleSection.appendChild(articleHeading);

  const paragraphContentList = [
    'Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.',
    'Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.',
    'Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.',
  ];

  paragraphContentList.forEach((text) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    articleSection.appendChild(paragraph);
  });

  main.appendChild(articleSection);
}

function extraInfo(main) {
  const resourcesSection = document.createElement('section');
  const resourceList = document.createElement('ul');
  const resourcesHeading = document.createElement('h2');

  resourcesSection.id = 'recursos';
  resourcesHeading.textContent = 'Recursos Adicionais';
  resourcesSection.appendChild(resourcesHeading);

  const addResource = (href, text) => {
    const resource = document.createElement('li');
    const resourceLink = document.createElement('a');
    resourceLink.href = href;
    resourceLink.target = '_blank';
    resourceLink.textContent = text;
    resource.appendChild(resourceLink);
    resourceList.appendChild(resource);
  };

  addResource('https://www.pokemon.com/br/pokedex/squirtle', 'Pokédex - Squirtle');
  addResource('https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)', 'Bulbapedia - Squirtle');

  resourcesSection.appendChild(resourceList);
  main.appendChild(resourcesSection);
}

function createEvolutions(main) {
  const evolutionSection = document.createElement('section');
  const evolutionHeading = document.createElement('h2');
  const evolutionUList = document.createElement('ul');

  evolutionSection.id = 'evolucao';
  evolutionHeading.textContent = 'Evoluções';
  evolutionSection.appendChild(evolutionHeading);

  let counter = 1;
  const addEvolution = (imageSource, imageAlt, evolutionName) => {
    const evolution = document.createElement('li');
    const evolutionFigCaption = document.createElement('figcaption');
    const evolutionFigure = document.createElement('figure');
    const evolutionImage = document.createElement('img');
    evolutionImage.src = imageSource;
    evolutionImage.alt = imageAlt;
    evolutionFigCaption.textContent = `${counter}. ${evolutionName}`;

    evolutionFigure.appendChild(evolutionImage);
    evolutionFigure.appendChild(evolutionFigCaption);
    evolution.appendChild(evolutionFigure);
    evolutionUList.appendChild(evolution);
    counter += 1;
  };

  addEvolution('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png', 'Squirtle', 'Squirtle');
  addEvolution('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png', 'Wartortle', 'Wartortle');
  addEvolution('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png', 'Blastoise', 'Blastoise');

  evolutionSection.appendChild(evolutionUList);
  main.appendChild(evolutionSection);
}

function createFooter() {
  const footer = document.querySelector('footer');

  const populateFooter = (href, text) => {
    const paragraph = document.createElement('p');
    const anchor = document.createElement('a');

    anchor.href = href;
    anchor.innerHTML = text;

    paragraph.appendChild(anchor);
    footer.appendChild(paragraph);
  };

  populateFooter('#', '&copy; 2024 Página do Pokémon Squirtle. Todos os direitos reservados.');
  populateFooter('mailto:contato@squirtlepage.com', 'Contato via e-mail');
  populateFooter('#header', 'Voltar para o topo');
  populateFooter('tel:+5555555555', 'Telefone: (55) 5555-5555');
}

function main() {
  const main = document.querySelector('main');

  createHeader();
  createNavBar();
  createSquirtle(main);
  createCharacteristics(main);
  createFunFacts(main);
  createArticle(main);
  extraInfo(main);
  createEvolutions(main);
  createFooter();
}

document.addEventListener('DOMContentLoaded', function () {
  main();
});
