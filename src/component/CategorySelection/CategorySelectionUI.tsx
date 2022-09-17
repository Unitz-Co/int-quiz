import { Theme } from "@mui/material";
import { Avatar, Box, Chip, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { memo } from "react";
import { CategorySelectionProps } from "./types";

const CategorySelectionUI = ({
  data,
  categories,
  onChange,
}: CategorySelectionProps) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.container}
      container
      alignItems="center"
      flexWrap="nowrap"
      overflow="auto"
    >
      {data.map((category) => (
        <Box
          key={category.sys.id}
          onClick={() => onChange(category)}
          paddingY={1}
          paddingRight={1}
        >
          <Chip
            avatar={
              <Avatar
                alt={category.avatarUrl?.title}
                src={category.avatarUrl?.url}
              />
            }
            color={categories.includes(category.sys.id) ? "success" : "default"}
            label={category.displayName}
          />
        </Box>
      ))}
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
}));

export default memo(CategorySelectionUI);
