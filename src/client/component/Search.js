import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./search.module.scss";
import { Box, TextField, Button } from "@material-ui/core";


const SearchExample = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [examples, setExamples] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call the API to search for examples here
      const response = await axios.get(
        `http://localhost:8000/examples?entry=${searchTerm}`
      );
      setExamples(response.data.slice(1,-1).split(","));
      

    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  };

return (
  <Box className={`${styles.root} `}>
    <h1>Welcome to mini Morfix</h1>
    <form className={`${styles.form}`} onSubmit={handleSubmit}>
      <TextField
        label="Search word"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>

      {examples?.length > 0 && (
        <Box className={styles.root}>
          <div>
            {examples?.map((example) =>
              example != "ul" ? (
                <div dangerouslySetInnerHTML={{ __html: example }} />
              ) : (
                <b>Please enter a valid word</b>
              )
            )}
          </div>
        </Box>
      )}
    </form>
  </Box>
);

};

export default SearchExample;
