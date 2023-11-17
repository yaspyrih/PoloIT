import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./index.css";
import Nav from "./Navigation/Nav";
import Companies from "./Companies/Companies";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import DarkMode from "./components/DarkMode/DarkMode";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [dataFromBackend, setDataFromBackend] = useState([]);

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
        {
          console.log(item.company)
        return item.company && item.company.toString().toLowerCase().includes(query.toLowerCase());
        }
      );
    }

    if (selected) {
      filteredItems = filteredItems.filter(
        ({ company, service, category }) =>
          company === selected || service === selected || category === selected
      );
    }

    return filteredItems.map(
      ({ img, company, description, service, category, web, linkedin, email }, index) => (
        <Card
          key={"empresa-"+index}
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

  const result = filteredData(dataFromBackend, selectedCategory, query);

  useEffect(() => {
    axios.get('http://localhost:8080/api/empresas')
      .then(response => {
        console.log('Datos obtenidos desde el backend:', response.data);
        setDataFromBackend(response.data.map((empresa)=>{
          return{
            img:"test",
            company:empresa["Empresa"],
            description: empresa["Breve Descripción de tu empresa"],
            service:"test",
            category:"test",
            web:"test",
            linkedin:"test",
            email:"test"
          }
        })
        );
      })
      .catch(error => {
        console.error('Error fetching data from backend:', error);
      });
  }, []);

  return (
    <>
      <div className="nav-and-toggle-container">
        <div className="nav-container">
          <Nav query={query} handleInputChange={handleInputChange} className="nav" />
        </div>
        <div className="toggle-container">
          <DarkMode />
        </div>
      </div>
      <Sidebar handleChange={handleChange} className="sidebar" />
      <Companies result={result} className="card-container" />
    </>
  );
}

export default App;
