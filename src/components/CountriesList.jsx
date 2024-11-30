import React from "react";
import styles from "./CountriesList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

export default function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;

  const countries = [];

  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem city={country} />
      ))}
    </ul>
  );
}
