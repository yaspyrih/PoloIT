import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./index.css";
import Nav from "./Navigation/Nav";
import Companies from "./Companies/Companies";
import Sidebar from "./Sidebar/Sidebar";
import { Center, SimpleGrid } from '@chakra-ui/react';
import CustomCard from "./components/Card";
import DarkMode from "./components/DarkMode/DarkMode";
import initScrollReveal from './utils/scrollRevealInit';


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

    return (
      <Center>
        <SimpleGrid columns={3} spacing={4}>
          {filteredItems.map(({ img, company, description, service, category, web, linkedin, email }, index) => (
            <CustomCard
              key={"empresa-" + index}
              img={img}
              company={company}
              description={description}
              service={service}
              category={category}
              web={web}
              linkedin={linkedin}
              email={email}
            />
          ))}
        </SimpleGrid>
      </Center>
    );
  }

  const result = filteredData(dataFromBackend, selectedCategory, query);

  useEffect(() => {
    initScrollReveal();
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/api/empresas')
      .then(response => {
        console.log('Datos obtenidos desde el backend:', response.data);
        setDataFromBackend(response.data.map((empresa)=>{
          return{
            img: empresa["Imagen"],
            company: empresa["Empresa"],
            description: empresa["Breve Descripción de tu empresa"],
            service: empresa["Servicios Verticales"],
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
