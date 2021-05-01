function data() {
  let requestURL = 'https://pokeapi.co/api/v2/pokemon/squirtle/';
  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function () {
    var quote_json = request.response;
    showPokemon(quote_json);
  };
  function showPokemon(jsonObj) {
    let section = document.querySelector('section');
    let block1 = document.createElement('div');
    let name = document.createElement('p');
    name.textContent = 'Name: ' + jsonObj.name;
    let height = document.createElement('p');
    height.textContent = 'Height: ' + jsonObj.height;
    let weight = document.createElement('p');
    weight.textContent = 'Weight: ' + jsonObj.weight;
    let pAbility = document.createElement('p');
    pAbility.textContent = 'Abilities: ';
    let abilities = document.createElement('ul');
    for (let i in jsonObj.abilities) {
      let ability = document.createElement('li');
      ability.textContent = jsonObj.abilities[i].ability.name;
      abilities.append(ability);
    }
    section.append(block1);
    block1.append(name);
    block1.append(height);
    block1.append(weight);
    block1.append(pAbility);
    block1.append(abilities);
  }
}
