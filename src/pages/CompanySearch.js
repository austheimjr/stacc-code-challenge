import React, { useState } from "react";


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
        };
    };

        return (
            <div className="search">
                <h1>Search for a company</h1>
                <label className="input-style">
                <input
                    type="string"
                    placeholder="Org. number"
                    onChange={(event) => setSearch(event.target.value)}
                />
                <button className="button-style" onClick={getCompany}>Search</button>
                </label>
                    <h1>{company.navn}</h1>
                    {company.forretningsadresse && company.naeringskode1 && company.organisasjonsform && (
                        <div className="perPerson">
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
    
};