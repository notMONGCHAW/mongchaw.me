import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Hi 
        </h2>
        <br />
        <h1>
          I am MONGCHAW 
        </h1>
        <br />
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
