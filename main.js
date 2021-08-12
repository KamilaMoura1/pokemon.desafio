const pokemonPromises = []

const fecthPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    

    for (let i = 1; i <= 150; i++) {
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))

    }

    Promise.all(pokemonPromises)
        .then(pokemons => {

            const listPokemon = pokemons.reduce((accumulator, pokemon) => {


                const types = pokemon.types.map(typeInfo => typeInfo.type.name)
                if (pokemon.id >= 0 && pokemon.id <= 9) {
                    accumulator +=

                        `<div id="flip">
            <div class="card">
            <div class="front-card">
              <div><img  class="image" src="https://www.serebii.net/pokemongo/pokemon/00${pokemon.id}.png"></div>
              <h3 class="text">${pokemon.id}. ${pokemon.name}</h3>
            </div>
            <div class="back-card">
              <div class="text-back-card">
                
                <h3 class="back-title">Tipo</h3>
                <p class="legend">${types.join(' | ')}</p>
                <h3 class="back-title">Evolução</h3>
                <p class="legend"></p>
               
              </div> 
            </div>
        </div>
        </div>`

                    return accumulator
                } else if (pokemon.id >= 10 && pokemon.id <= 99) {
                    accumulator +=

                        `<div id=flip>
            <div class="card">
            <div class="front-card">
              <div><img  class="image" src="https://www.serebii.net/pokemongo/pokemon/0${pokemon.id}.png"></div>
              <h3 class="text">${pokemon.id}. ${pokemon.name}</h3>

            </div>
            <div class="back-card">
              <div class="text-back-card">
                
                <h3 class="back-title">Tipo</h3>
                <p class="legend">${types.join(' | ')}</p>
                <h3 class="back-title">Evolução</h3>
                <p class="legend"></p>
                
              
              </div> 
            </div>
        </div>
        </div>`

                    return accumulator
                } else{
                    accumulator +=

                        `<div id=flip>
            <div class="card">
            <div class="front-card">
              <div><img  class="image" src="https://www.serebii.net/pokemongo/pokemon/${pokemon.id}.png"></div>
              <h3 class="text">${pokemon.id}. ${pokemon.name}</h3>
              
            </div>
            <div class="back-card">
              <div class="text-back-card">
                
                <h3 class="back-title">Tipo</h3>
                <p class="legend">${types.join(' | ')}</p>
                <h3 class="back-title">Evolução</h3>
                <p class="legend"></p>
                 
              
              </div> 
            </div>
        </div>
        </div>`

                    return accumulator
                }
            }, '')

            const lista = document.querySelector('#resultado')

            lista.innerHTML = listPokemon

            const buscarPorLetra = (pokemom, name) => {
                return pokemom.filter(results => results.name.toLowerCase().includes(name.toLowerCase()));
            }
        
            const procura = document.getElementById("input-procurar")
        
            function search(e) {
                e.preventDefault();
        
                const pesquisaNome = procura.value;
                const filtroNome = (buscarPorLetra(pokemom.results, pesquisaNome));
        
                listPokemon(filtroNome);
            }
            document.getElementById("btn-procurar").addEventListener("click", search);
        })
        }




    

fecthPokemon()

