import React from "react";
import PropTypes from "prop-types";
import { Box, Chip, Grid, makeStyles, Typography } from "@material-ui/core";
import { THUMBNAIL_PLACEHOLDER } from "constants/index";
import { Divider } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    background: "#e3f2fd",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "1px 1px 30px 1px rgba(0, 0, 0, 0.2)",
  },
  left: {
    width: "250px",
    marginRight: theme.spacing(2),
  },
  imageBox: {
    "& > img": {
      height: "200px",
      width: "200px",
      border: "3px solid #0d47a1",
      borderRadius: "10PX",
      transition: ".5s ease",
      objectFit: "cover",
      "&:hover": {
        height: "210px",
        width: "210px",
        transition: ".5s ease",
      },
    },
  },
  center: {
    flex: "1 1 0",
  },
  right: {
    flex: "1 1 0",
    textAlign: "right",
  },
}));

Advisor.propTypes = {
  advisor: PropTypes.object,
};

function Advisor({ advisor }) {
  const classes = useStyle();
  const {
    avatarUrl,
    displayName,
    email,
    phone,
    categoriesCollection,
    servicesCollection,
    skillsCollection,
  } = advisor;

  const thumbnailUrl = avatarUrl ? `${avatarUrl?.url}` : THUMBNAIL_PLACEHOLDER;
  const thumbnailTitle = avatarUrl ? `${avatarUrl?.title}` : `${displayName}`;

  return (
    <Box padding={1} className={classes.root}>
      <Grid container>
        <Grid item className={classes.left}>
          <Box minHeight={215} className={classes.imageBox}>
            <img src={thumbnailUrl} alt={thumbnailTitle} width="100%" />
          </Box>
        </Grid>
        <Grid item padding={5} className={classes.center}>
          <Box py={2}>
            <Typography variant="h4">{displayName}</Typography>
            <Typography variant="subtitle1">{email}</Typography>
            <Typography variant="subtitle1">{phone}</Typography>
          </Box>
          <Typography variant="h5">Skills</Typography>
          <Divider width="80%" />
          {skillsCollection.items.length === 0 ? (
            <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
              N/A
            </Typography>
          ) : (
            <Box py={2}>
              {skillsCollection.items.map((idx) => (
                <Chip
                  style={{ marginRight: "10px" }}
                  label={idx.displayName}
                  key={idx.sys.id}
                  clickable={false}
                  size="medium"
                />
              ))}
            </Box>
          )}
        </Grid>
        <Grid item padding={5} className={classes.right}>
          <Box padding={5} py={2}>
            <Typography variant="h5">Category</Typography>
            <Divider />
            {categoriesCollection.items.length === 0 ? (
              <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
                N/A
              </Typography>
            ) : (
              <Box py={1}>
                {categoriesCollection.items.map((idx) => (
                  <Chip
                    style={{
                      margin: "5px 0 5px 5px",
                      backgroundColor: "#555",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                    label={idx.displayName}
                    key={idx.sys.id}
                    clickable={false}
                    size="small"
                  />
                ))}
              </Box>
            )}
          </Box>
          <Box padding={5} py={2}>
            <Typography variant="h5">Service</Typography>
            <Divider />
            {servicesCollection.items.length === 0 ? (
              <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
                N/A
              </Typography>
            ) : (
              <Box py={1}>
                {servicesCollection.items.map((idx) => (
                  <Chip
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#2979ff",
                      color: "#fff",
                    }}
                    label={idx.name}
                    key={idx.sys.id}
                    clickable={false}
                    size="small"
                  />
                ))}
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Advisor;
