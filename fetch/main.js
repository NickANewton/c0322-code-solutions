fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => {
    return response.json();
  })

  .then(data => {
    console.log(data);
  })

  .catch(error => console.error(error));
