import useCountries from "../hooks/useCountries";
import Card from "../components/Card";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { numberWithCommas } from "../utils/numbersComma";
import React, { useState, useMemo} from "react"
import Select from "react-select"
import countryList from "react-select-country-list"
import {Link } from "react-router-dom"

function Stats() {
  const url = "https://restcountries.eu/rest/v2/all";
  const { countries, isPending, error } = useCountries(url);
  const [value, setValue] = useState()
  const options = useMemo(() => countryList().getData(), [])
  const changeHandeler = value => {
      setValue(value)}
  return (
    <section className="">
      <div className="container">
          <h1>List Of countries</h1> 
          <h2 className="text-center">Currently showing for : </h2>
       <Select options={options} value={value} onChange={changeHandeler }>
       </Select>
        <div className="row text-center">
          {isPending && <Loading />}
          {error && <Error />}
          {countries && 
            countries.map((country) => (
              <Card
                name={country.name}
                img={country.flag}
                population={numberWithCommas(country.population)}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
export default Stats;