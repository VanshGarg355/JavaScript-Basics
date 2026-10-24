// fetch = Function used for making HTTP requests
// to fetch resources (JSON data, images, files).
// Used for interacting with APIs asynchronously.

// fetch(url, {options})

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase()
      .trim();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();

    console.log(data);

    const pokemonSprite = data.sprites.front_default;

    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;

    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);

    document.getElementById("pokemonSprite").style.display = "none";
  }
}
