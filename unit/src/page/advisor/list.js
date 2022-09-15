import { Container, Grid, Typography } from "@mui/material";
import AdvisorItem from "../../component/advisor/AdvisorItem";
import data from "../../database/data.json";
import { useState } from "react";
import { AdvisorSearch } from "../../component/advisor/AdvisorSearch";

export const { items: advisorProfile } = data.data.advisorProfileCollection;

const AdvisorList = () => {
  const [fieldNameSearch, setFieldNameSearch] = useState("");
  // const [advisorData, setAdvisorData] = useState(advisorProfile);
  const [status, setStatus] = useState("0");

  /**
   * event when click search button
   */
  const onClickButtonSearch = (valueSearch) => {
    setFieldNameSearch(valueSearch);
  };
  /**
   * event when onChange status
   */
  const handleChangeStatus = (valueStatus) => {
    setStatus(valueStatus);
  };
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        p={2}
      >
        <Typography variant="h3" gutterBottom>
          Advisor List
        </Typography>
      </Grid>

      <AdvisorSearch
        status={status}
        onClickButtonSearch={onClickButtonSearch}
        handleChangeStatus={handleChangeStatus}
      />

      <AdvisorItem
        advisorData={advisorProfile}
        fieldNameSearch={fieldNameSearch}
        status={status}
      />
    </Container>
  );
};

export default AdvisorList;
