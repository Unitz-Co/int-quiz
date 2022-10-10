import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./ProductList.scss";
import { filterByStatus, removeAccents } from "~/ultils";
import NotFoundresult from "~/pages/NotFoundResult/NotFoundresult";
ProductList.propTypes = {
  advisor: PropTypes.array,
  status: PropTypes.string,
  nameValueSearch: PropTypes.string,
};

function ProductList({
  advisorData = [],
  nameValueSearch = "",
  status = "all",
  modeView = "",
}) {
  const productListRef = useRef();
  const advisorDataUpdate = useCallback(() => {
    let advisorDataUpdate = advisorData.items;

    if (nameValueSearch !== "") {
      advisorDataUpdate = advisorData.items.filter((advisor) => {
        return (
          removeAccents(advisor.displayName).includes(
            removeAccents(nameValueSearch)
          ) ||
          advisor.categoriesCollection.items.some((category) => {
            return removeAccents(category.displayName).includes(
              removeAccents(nameValueSearch)
            );
          })
        );
      });
    }
    if (status !== "all") {
      advisorDataUpdate = filterByStatus(advisorDataUpdate, status);
    }
    return advisorDataUpdate;
  }, [advisorData.items, nameValueSearch, status]);
  useEffect(() => {
    if (!productListRef.current) return;
    if (modeView === "vertical") {
      productListRef.current.style.flexDirection = "column";
    } else {
      productListRef.current.style.flexDirection = "row";
    }
  }, [modeView]);
  return (
    <Container maxWidth="lg">
      <div className="advisor-list" ref={productListRef}>
        {advisorDataUpdate().length > 0 &&
          advisorDataUpdate().map((advisor, index) => {
            const {
              avatarUrl,
              displayName,
              email,
              phone,
              status,
              ...advisorItem
            } = advisor;
            return (
              <div className="advisor-item" key={index}>
                <Card sx={{ width: "100%" }}>
                  <Box sx={{ display: "flex" }}>
                    <CardMedia
                      component="img"
                      image={
                        avatarUrl?.url
                          ? avatarUrl.url
                          : "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      }
                      alt={avatarUrl?.title ? avatarUrl.title : "updating"}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="subtitle1">
                        {displayName ? displayName : ""}
                      </Typography>
                      <Typography variant="body2" color="primary">
                        {phone ? phone : ""}
                      </Typography>
                      <Typography variant="body2" color="primary">
                        {email ? email : ""}
                      </Typography>
                      <Typography variant="body2" color="primary">
                        Status:{" "}
                        {status === "online" ? (
                          <Typography variant="caption" color="primary">
                            Online
                            <IconButton color="primary" size="small">
                              <FiberManualRecordIcon />
                            </IconButton>
                          </Typography>
                        ) : (
                          <Typography variant="caption" color="primary">
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
                              <React.Fragment key={index}>
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
                                  <Typography variant="caption" color="primary">
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
                              <Grid item xs key={index}>
                                <Typography variant="caption" color="primary">
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
                              <Grid item xs key={index}>
                                <Typography variant="caption" color="primary">
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
              </div>
            );
          })}
        {advisorDataUpdate().length === 0 && (
          <Grid item xs={12}>
            <NotFoundresult />
          </Grid>
        )}
      </div>
    </Container>
  );
}

export default ProductList;
