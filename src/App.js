import logo from './logo.svg';
import tailwindLogo from './Tailwind_CSS_Logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="flex">
        <img src={logo} class="flex-none border" className="App-logo" alt="logo" />
        <img src={tailwindLogo} class="flex-1 animate-bounce border" alt="logo" />
      </div>
        <h2>
          Hi 
        </h2>
        <br />
        <h1>
          I am MONGCHAW 
        </h1>
        <br />
        <p class="animate-pulse">
          This site uses react.js and tailwindcss
        </p>
        <p>
          I will update this website some day in the future !!
        </p>
        <br />
        <div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
          <a href='https://github.com/MONGCHAW/mongchaw.me'>
          Check Out the Github Repo
          </a>
        </button>
      </div>
      </header>
    </div>
  );
}

export default App;
