import React, { useState } from "react";

//style søkefelt og knapp
export default function CompanySearch() {

    const [search, setSearch] = useState("");
    const [company, setCompany] = useState("");

    const getCompany = async () => {
        try {
            const response = await fetch(`https://code-challenge.stacc.dev/api/enheter?orgNr=${search}`);
            const json = await response.json();
            setCompany(json);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    };

        return (
            <div className="search">
                <h1>Search for a company</h1>
                <input
                    type="string"
                    placeholder="Org. number"
                    onChange={(event) => setSearch(event.target.value)}
                />
                <button onClick={getCompany}>Search</button>
                
                    <h1>{company.navn}</h1>
                    
                    {company.forretningsadresse && company.naeringskode1 && company.organisasjonsform && (
                        <div className="company">
                            <p>Number of employees: {company.antallAnsatte}</p>
                            <p>Address: {company.forretningsadresse.adresse}</p>
                            <p>Postal code: {company.forretningsadresse.postnummer}</p>
                            <p>City: {company.forretningsadresse.poststed}</p>
                            <p>Country: {company.forretningsadresse.land}</p>
                            <p>Commercial activities: {company.naeringskode1.beskrivelse}</p>
                            <p>Organizational form: {company.organisasjonsform.beskrivelse}</p>
                        </div>
                    )}
                    

                
            </div>
        );
    
}