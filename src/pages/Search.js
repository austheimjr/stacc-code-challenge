import React, { useState } from "react";


export default function Search() {

   const [search, setSearch] = useState("");
   const [person, setPerson] = useState([]);

  const getPerson = async () => {
    try {
      const response = await fetch(`https://code-challenge.stacc.dev/api/pep?name=${search}`);
      const json = await response.json();
      setPerson(json);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  
  

    

    return (
      <div className="search">
        <h1>Search</h1>
        <input
          type="text"
          placeholder="Search for a person"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={getPerson}>Search</button>
        <h1>{person.numberOfHits} </h1>
    
    </div>
    );
  }
