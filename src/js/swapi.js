import template from '../templates/swapi.hbs';
const baseURL ='https://swapi.dev/api/people/';



console.log(template)
const tableBode = document.querySelector('#swapi-planets tbody');

fetch(baseURL).then(item => {
  console.log(item);
  return item.json();

}).then(responsed => {

  const actors = responsed.results;

  const markup = actors.map( item => template(item)).join('');

  renderTable(tableBode, markup);
});

function renderTable(table, actors) {
table.insertAdjacentHTML('beforebegin', actors)
}