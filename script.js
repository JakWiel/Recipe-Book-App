const URL = "https://api.sampleapis.com/recipes/recipes";

async function recipeGenerator() {
  const promise = await fetch(URL);
  const response = await promise.json();
  const list = document.querySelector("ul");

  // Iterate over the recipes and create list items
  for (let i = 0; i < 10; i++) {
    response.forEach((recipe) => {
      if (recipe.id === Math.floor(Math.random() * 60)) {
        console.log("Creating list item for recipe:", recipe.title);
        const listItem = document.createElement("li");
        const img = document.createElement("img");
        const title = document.createElement("h2");
        const ingredients = document.createElement("p");
        const link = document.createElement("a");

        listItem.className = "recipe-item";
        img.src = recipe.photoUrl;
        title.innerText = recipe.title;
        ingredients.innerHTML =
          "<strong>Ingredients:</strong> " + recipe.ingredients;
        link.href = recipe.source;
        link.innerText = "View Recipe";

        listItem.appendChild(img);
        listItem.appendChild(title);
        listItem.appendChild(ingredients);
        listItem.appendChild(link);

        list.appendChild(listItem);
      }
    });
  }
}

recipeGenerator();
