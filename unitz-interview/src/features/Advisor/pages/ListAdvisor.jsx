import { React, useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import data from "data/data.json";
import AdvisorSkeleton from "../components/AdvisorSkeleton";
import AdvisorList from "../components/AdvisorList";
import AdvisorFilter from "../components/AdvisorFilter";
const useStyle = makeStyles((theme) => ({
  root: {},
  filter: {
    width: "100%",
  },
  accordion: {
    boxShadow: "none",
  },
  data: {
    flex: "1 1 1",
  },
}));
function ListAdvisor() {
  const classes = useStyle();
  const listAdvisor = data.data.advisorProfileCollection.items;
  const [listAdvisorSearched, setListAdvisorSearched] = useState([]);
  const [filter, setFilter] = useState({
    searchName: "",
    searchCategory: "",
  });
  useEffect(() => {
    const results = listAdvisor.filter((item) => {
      return item.displayName
        .toLowerCase()
        .includes(filter.searchName.toLowerCase());
    });
    setListAdvisorSearched(results);
  }, [filter.searchName, listAdvisor]);

  const handleChange = (newFilters) => {
    setFilter({
      ...filter,
      searchName: newFilters.searchName,
    });
  };
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.filter}>
            <Paper elevation={0}>
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5">Filters</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <AdvisorFilter onChange={handleChange} />
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item className={classes.data}>
            <Paper elevation={0}>
              {!listAdvisorSearched ? (
                <AdvisorSkeleton length={listAdvisorSearched.length} />
              ) : (
                <AdvisorList data={listAdvisorSearched} />
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListAdvisor;
