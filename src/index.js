function displayRecipe(response) {
  console.log("Recipe generated");

  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let userInstructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0cod3f6efbetca0af47e36320cff442c";
  let context =
    "You are a well versed baker who loves to write simple cookie recipes. Please generate the short cookie recipe in basic HTML, but do not include references to HTML. Make sure to follow user instructions. Sign the recipe off with <strong>Created by SheCodes AI Assistant</strong>.";
  let prompt = `User instructions are: Generate a cookie recipe in metric measurements about ${userInstructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayRecipe);

  console.log("Generating cookie recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  new Typewriter("#recipe", {
    strings: "Generating cookie recipe 🍪",
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
