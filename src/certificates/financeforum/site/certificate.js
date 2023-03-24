import logo from "./logo.svg";
import tailwindLogo from "./Tailwind_CSS_Logo.svg";
import "./App.css";

function certificate() {
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
          <p>
          This certificate is presented to,
          <b> Provab Mongchaw Khyang </b>
          for his/her outstanding contribution as 
          <b>an organizer</b>
          of 
          <b>Microsoft authorized The EXCELIST 2022 powered by VUMI
          PRESENTED BY UIU FINANCE FORUM</b>
          DECEMBER OF 2022
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
