import { useState } from "react";
import "../styles/App.scss";
import CountryList from "./CountryList";
import Filters from "./Filters";
import Header from "./Header";
import countries from "./countries";

function App() {

  const [country, setCountry] = useState(countries);
  const [filterText, setFilterText] = useState("");
  const [filterContinent, setFilterContinent] = useState("")

  return (
    <div>
      <header className="header">
        <Header/>
      </header>
       <main className="main">
      
        <Filters filterText = {filterText} setFilterText = {setFilterText} filterContinent = {filterContinent} setFilterContinent={setFilterContinent}/>

        <CountryList country = {country} filterText = {filterText} filterContinent={filterContinent}/>
        
        </main>
     
    </div>
  );
}

export default App;
