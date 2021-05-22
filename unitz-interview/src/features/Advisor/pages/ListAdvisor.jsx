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
  console.log(listAdvisor);
  const [loading, setLoading] = useState(true);
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
    if (results) setLoading(false);
    setListAdvisorSearched(results);
  }, [filter.searchName, listAdvisor]);

  const handleFilterChange = (newFilters) => {
    setFilter({
      ...filter,
      ...newFilters,
    });
  };
  return (
    <Box pt={5}>
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
                  <AdvisorFilter
                    filters={filter}
                    onChange={handleFilterChange}
                  />
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item className={classes.data}>
            <Paper elevation={0}>
              {loading ? (
                <AdvisorSkeleton length={10} />
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
