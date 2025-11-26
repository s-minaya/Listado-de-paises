import "../styles/App.scss";
import CountryList from "./CountryList";
import Filters from "./Filters";
import Header from "./Header";


function App() {
  return (
    <div>
      <header className="header">
        <Header/>
      </header>
       <main className="main">
      
        <Filters/>
        
        <CountryList/>
        
        </main>
     
    </div>
  );
}

export default App;
