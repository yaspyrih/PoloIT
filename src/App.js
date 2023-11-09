import { useState } from "react";
import "./index.css";
import Nav from "./Navigation/Nav";
import Companies from "./Companies/Companies";
import data from "./db/data";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import DarkMode from "./components/DarkMode/DarkMode";


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(data, selected, query) {
    let filteredItems = data;

    if (query) {
      filteredItems = filteredItems.filter((item) =>
        item.company.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selected) {
      filteredItems = filteredItems.filter(
        ({ company, service, category }) =>
          company === selected || service === selected || category === selected
      );
    }

    return filteredItems.map(
      ({ img, company, description, service, category, web, linkedin, email }) => (
        <Card
          key={company}
          img={img}
          company={company}
          description={description}
          service={service}
          category={category}
          web={web}
          linkedin={linkedin}
          email={email}
        />
      )
    );
  }

  const result = filteredData(data, selectedCategory, query);

  return (
    <>
    <div className="nav-and-toggle-container"> 
      <div className="nav-container">
        <Nav query={query} handleInputChange={handleInputChange} className="nav"/>
      </div> 
      <div className="toggle-container">
        <DarkMode/>
      </div> 
    </div> 
      <Sidebar handleChange={handleChange} className="sidebar"/>
      <Companies result={result} className="card-container"/>
      
    </>
  );
}

export default App;
