import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Companies from "./Companies/Companies";
import Sidebar from "./Sidebar/Sidebar";

// ---------Database---------

import companies from './db/data';
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

// ---------Input filter-----------

  

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filteredItems = companies.filter(company => company.company.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!==-1)
  );

// ---------Radio filter-----------

const handleChange = event => {
  setSelectedCategory(event.target.value)
}

// ---------Buttons filter-----------
/* const handleClick = event =>{
  setSelectedCategory(event.target.value)
} */

function filteredData(companies, selected, query) {
  let filteredCompanies = companies

//Filtering input items
  if (query){
    filteredCompanies = filteredItems
  }

  //Selected filter

  if(selected) {
    filteredCompanies = filteredCompanies.filter(
      ({category, company, service})=>
      category === selected||
      company===selected || 
      service===selected
      );
  }

  return filteredCompanies.map(({img, company, description, service, category, web, linkedin, email})=>(
    <Card 
    key={Math.random()}
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

const result = filteredData(companies, selectedCategory, query)

  return (
  <>
  <Sidebar handleChange={handleChange}/>
  <Navigation/>
  <Companies/>
  </>
);
}

export default App;