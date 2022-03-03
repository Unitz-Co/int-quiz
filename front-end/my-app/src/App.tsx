import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import TableView from "./components/TableView";
import "./data/data.json";
import DataJson from "./data/data.json";
import { IData } from "./models/IData";
function App() {
  const [data, setData] = useState<IData>(JSON.parse(JSON.stringify(DataJson)));
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <TableView users={data.data.advisorProfileCollection.items} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
