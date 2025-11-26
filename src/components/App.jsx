import { useState } from "react";
import "../styles/App.scss";
import CountryList from "./CountryList";
import Filters from "./Filters";
import Header from "./Header";
import countries from "./countries";

function App() {

  const [country, setCountry] = useState(countries);
  const [filterText, setFilterText] = useState("");

  return (
    <div>
      <header className="header">
        <Header/>
      </header>
       <main className="main">
      
        <Filters filterText = {filterText} setFilterText = {setFilterText}/>

        <CountryList country = {country} filterText = {filterText}/>
        
        </main>
     
    </div>
  );
}

export default App;
