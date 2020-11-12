import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Property from "./Property";
import SectionTitle from "../sectionTitle";
import { properties } from "../../demoData/demoData";
import { API_BASE_URL } from "../../constants/apiConstants";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function PropertiesList() {
  const [newProperties, setNewProperties] = useState(properties);
  const displayProperties = newProperties.slice(0, 3);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(API_BASE_URL + "/properties");
      setNewProperties(result.data.property);
      console.log(result.data.property)
    }
    fetchData();
  }, []);
  return (
    <div>
      <SectionTitle>Lastest Listed Properties</SectionTitle>
      <Box p={(2, 4)}>
        <Grid container justify="center" alignItems="center">
          {displayProperties.map((property) => (
            <Grid key={property.id} item xs={4}>
              <Link to={`/properties/${property.id}`}>
                <Property
                  image={property.image}
                  title={property.title}
                  address={property.location}
                  link={property.id}
                  {...property}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default PropertiesList;
