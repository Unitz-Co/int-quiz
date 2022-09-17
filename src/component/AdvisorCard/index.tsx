import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { memo } from "react";
import { AdvisorType, getUniqueCategoriesFromAdvisors } from "utils";

const AdvisorCard = (advisor: AdvisorType) => {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center">
          {advisor.avatarUrl ? (
            <img
              className={classes.avatar}
              alt={advisor.avatarUrl?.title}
              src={advisor.avatarUrl?.url}
            />
          ) : (
            <Box className={classes.blankAvatar} />
          )}
          <Typography fontWeight="bold">{advisor.displayName}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} mt={1}>
          <Typography variant="body2" fontWeight="bold">
            Email:
          </Typography>
          <Typography variant="body2">{advisor.email || "N/A"}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} mt={0.5}>
          <Typography variant="body2" fontWeight="bold">
            Phone:
          </Typography>
          <Typography variant="body2">{advisor.phone || "N/A"}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} mt={0.5}>
          <Typography variant="body2" fontWeight="bold">
            Skills:
          </Typography>

          <Typography variant="body2">
            {advisor.skillsCollection.items.length > 0
              ? advisor.skillsCollection.items
                  .map((item) => item.displayName)
                  .join(", ")
              : "N/A"}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} mt={0.5}>
          <Typography variant="body2" fontWeight="bold">
            Services:
          </Typography>
          <Typography variant="body2">
            {advisor.servicesCollection.items.length > 0
              ? advisor.servicesCollection.items
                  .map((item) => item.name)
                  .join(", ")
              : "N/A"}
          </Typography>{" "}
        </Stack>
        <Stack direction="row" alignItems="center" flexWrap="wrap" mt={0.5}>
          {advisor.categoriesCollection.items.length > 0
            ? getUniqueCategoriesFromAdvisors([advisor]).map((category) => (
                <Box key={category.sys.id} paddingY={1} paddingRight={1}>
                  <Chip
                    avatar={
                      <Avatar
                        alt={category.avatarUrl?.title}
                        src={category.avatarUrl?.url}
                      />
                    }
                    label={category.displayName}
                  />
                </Box>
              ))
            : null}
        </Stack>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles({
  container: {
    height: "100%",
  },
  avatar: {
    width: 50,
    height: 50,
    display: "block",
    borderRadius: "50%",
    objectFit: "cover",
  },
  blankAvatar: {
    width: 50,
    height: 50,
    backgroundColor: "#efefef",
    borderRadius: "50%",
  },
});

export default memo(AdvisorCard);
