import React, { useCallback } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Alert,
  Avatar,
  IconButton,
  Box,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const AdvisorItem = ({
  advisorData = [],
  fieldNameSearch = "",
  status = "all",
}) => {
  //display list advisor
  const advisorDataUpdate = useCallback(() => {
    let advisorDataUpdate = advisorData;

    if (fieldNameSearch !== "") {
      advisorDataUpdate = advisorData.filter((advisor) => {
        return (
          advisor.displayName
            .toLowerCase()
            .includes(fieldNameSearch.toLowerCase()) ||
          advisor.categoriesCollection.items.some((category) => {
            return category.displayName
              .toLowerCase()
              .includes(fieldNameSearch.toLowerCase());
          })
        );
      });
    }

    if (status === "1") {
      advisorDataUpdate = advisorDataUpdate.filter((advisor) => {
        return advisor.status === "1";
      });
    } else if (status === "2") {
      advisorDataUpdate = advisorDataUpdate.filter((advisor) => {
        return advisor.status === "2";
      });
    }
    return advisorDataUpdate;
  }, [fieldNameSearch, status]);

  return (
    <Grid container spacing={2} p={2}>
      {advisorDataUpdate().length > 0 ? (
        advisorDataUpdate().map((advisor, index) => {
          const {
            sys: { id },
            avatarUrl,
            displayName,
            email,
            phone,
            status,
            ...advisorItem
          } = advisor;
          return (
            <Grid
              container
              item
              p={2}
              xs={12}
              sm={6}
              md={4}
              key={`${id}-${index}`}
            >
              <Card sx={{ width: "100%" }}>
                <Box sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 151, height: 200 }}
                    image={
                      avatarUrl?.url
                        ? avatarUrl.url
                        : "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                    }
                    alt={avatarUrl?.title ? avatarUrl.title : "updating"}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="subtitle1">
                      {displayName ? displayName : ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {phone ? phone : ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {email ? email : ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Status:{" "}
                      {status === "1" ? (
                        <Typography variant="caption" color="text.secondary">
                          Online
                          <IconButton color="success" size="small">
                            <FiberManualRecordIcon />
                          </IconButton>
                        </Typography>
                      ) : (
                        <Typography variant="caption" color="text.secondary">
                          Offline
                          <IconButton size="small">
                            <FiberManualRecordIcon />
                          </IconButton>
                        </Typography>
                      )}
                    </Typography>
                  </CardContent>
                </Box>
                <CardContent>
                  <Box mb={2}>
                    <Typography gutterBottom variant="subtitle1">
                      Categories Collection:
                    </Typography>
                    <Grid container spacing={2}>
                      {advisorItem.categoriesCollection.items.map(
                        (category, index) => {
                          return (
                            <React.Fragment key={`${category.sys.id}-${index}`}>
                              <Grid item>
                                <Avatar
                                  sx={{ width: 24, height: 24 }}
                                  src={
                                    category.avatarUrl?.url
                                      ? category.avatarUrl.url
                                      : "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                                  }
                                  alt={
                                    category.avatarUrl?.title
                                      ? category.avatarUrl.title
                                      : "updating"
                                  }
                                />
                              </Grid>
                              <Grid item xs>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  {category.displayName}
                                </Typography>
                              </Grid>
                            </React.Fragment>
                          );
                        }
                      )}
                    </Grid>
                  </Box>

                  <Box mb={2}>
                    <Typography gutterBottom variant="subtitle1">
                      Skills Collection:
                    </Typography>
                    <Grid container spacing={2}>
                      {advisorItem.skillsCollection.items.map(
                        (skill, index) => {
                          return (
                            <Grid item xs key={`${skill.sys.id}-${index}`}>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                {skill.displayName}
                              </Typography>
                            </Grid>
                          );
                        }
                      )}
                    </Grid>
                  </Box>

                  <Box mb={2}>
                    <Typography gutterBottom variant="subtitle1">
                      Services Collection:
                    </Typography>
                    <Grid container spacing={2}>
                      {advisorItem.servicesCollection.items.map(
                        (service, index) => {
                          return (
                            <Grid item xs key={`${service.sys.id}-${index}`}>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                {service.name}
                              </Typography>
                            </Grid>
                          );
                        }
                      )}
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })
      ) : (
        <Grid item xs={12}>
          <Alert severity="info">No Data!</Alert>
        </Grid>
      )}
    </Grid>
  );
};

export default AdvisorItem;
