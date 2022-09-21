import React, { useState } from "react";

//style søkefelt og knapp
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
        <h1>Search for a PEP</h1>
        <input
          type="text"
          placeholder="Search for a person"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={getPerson}>Search</button>
        <h2>Number of hits: {person.numberOfHits} </h2>
        <div className="person">
          {person.hits &&
            person.hits.map((person) => (
              <div key={person.id} className="perPerson">
                <h3>Full name: {person.name}</h3>
                <p>Aliases: {person.aliases}</p>
                <p>Birth Date: {person.birth_date}</p>
                <p>Countries: {person.countries}</p>
                <p>Dataset: {person.dataset}</p>
                <p>Emails: {person.emails}</p>
                <p>Phones: {person.phones}</p>
                <p>Sanctions: {person.sanctions}</p>
                
              </div>
            ))}

    
        </div>
      </div>
    );
}
