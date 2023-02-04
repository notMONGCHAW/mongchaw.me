import logo from "./logo.svg";
import tailwindLogo from "./Tailwind_CSS_Logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="flex">
          <img
            src={logo}
            class="flex-none border"
            className="App-logo "
            alt="logo"
          />
          <img src={tailwindLogo} class="misc-logo flex-1 animate-bounce " alt="logo" />
        </div>
        <div>
          <h1 class="text-5xl">Hi</h1>
          <h1 class="text-3xl space-x-4">I am MONGCHAW</h1>
          <br />
          <p class="animate-pulse">This site uses react.js and tailwindcss</p>
          <p>I will update this website some day in the future !!</p>
          <br />
          <div>
            <button
              class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded space-x-4"
              type="button"
            >
              <a href="https://github.com/MONGCHAW/mongchaw.me">
                Check Out the Github Repo
              </a>
            </button>
          </div>
          <br />
          <div>
            <button
              class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded space-x-4"
              type="button"
            >
              <a href="https://www.youtube.com/@notmongchaw4619/">
                My youtube channel
              </a>
            </button>
          </div>
          <br />
          <div>
            <button
              class="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded space-x-4"
              type="button"
            >
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                A cool website with no HTML (firefox only)
              </a>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
