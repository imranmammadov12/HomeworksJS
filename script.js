const apiUrl = 'https://rickandmortyapi.com/api/character';
let currentPage = 1;

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function displayCharacters(url) {
  const data = await fetchData(url);
  const characters = data.results.map(character => character.name);
  console.log(characters);
}

async function handlePrevClick() {
  if (currentPage > 1) {
    currentPage--;
    const url = `${apiUrl}?page=${currentPage}`;
    await displayCharacters(url);
  }
}

async function handleNextClick() {
  const url = `${apiUrl}?page=${currentPage + 1}`;
  await displayCharacters(url);
  currentPage++;
}

document.getElementById('prev').addEventListener('click', handlePrevClick);
document.getElementById('next').addEventListener('click', handleNextClick);

displayCharacters(apiUrl);
