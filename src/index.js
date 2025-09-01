function tellJoke(response) {
    new Typewriter(jokeElement, {
      strings: response.data.answer,
      autoStart: true,
    });
  }

  function generateJoke() {

    let APIKey = "ad28f3a0557d8t5f574o89b184356e5a";
    let context = "You are a helpful assistant that generates IT Support , computers and everything IT jokes.be creative and funnier every time i ask create a short, funny, and clean joke.basic HTML and separate each line with a <br /> do not include ```html and show me different jokes everytime i ask;";
    let prompt = "Tell me a IT support Joke tell me a different joke each time I ask.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${APIKey}`;

    jokeElement.innerHTML = "😂 Generating a joke... please wait";

    axios.get(apiURL).then(tellJoke)
      
  }
  // Array of funny headlines
const headlines = [
  "😂 Click for a joke that's worse than the Wi-Fi here.",
  "💻 Need a byte of humor? Click me!",
  "🖱️ Debug your day with a corny IT joke.",
  "🤖 System alert: Joke incoming. Click to continue...",
  "🐛 Warning: This joke may contain bugs.",
  "😂 Click here for a dad-level IT joke."
];

// Pick a random one
const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];

// Replace the <h1> text
document.getElementById("headline").textContent = randomHeadline;


  

  let jokeButtonElement = document.querySelector("#joke_btn");

  let jokeElement = document.querySelector("#joke");
      jokeButtonElement.addEventListener("click", generateJoke);

