import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleWordChange(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        What word would you like to look up?
        <br />
        <em>example: love</em>
        <form onSubmit={search}>
          <input type="search" onChange={handleWordChange} />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
