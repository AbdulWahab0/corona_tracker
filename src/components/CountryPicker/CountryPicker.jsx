import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./Country.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  //console.log("countery", handleCountryChange);
  const [fecthedCounteries, setFecthedCounteries] = useState([]);
  useEffect(() => {
    const fecthApi = async () => {
      setFecthedCounteries(await fetchCountries());
    };
    fecthApi();
  }, [setFecthedCounteries]);
  //console.log(fecthedCounteries);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>>
        {fecthedCounteries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
