import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./index.css";
import items from "../../data/items";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import { SearchBar } from "../SearchBar";

export const AdvisorList = () => {
  // view ? horizontal : vertical
  const [view, setView] = useState<boolean>(true);
  const [list, setList] = useState(items);
  // Search function
  const search = (input: string) => {
    const filteredNameList = items.filter((item) =>
      item.displayName.toLowerCase().includes(input.toLowerCase())
    );

    const filteredCategoryList = items.filter((item) =>
      (item.categoriesCollection.items || [])
        .map((category) => category.displayName.toLowerCase())
        .join(" ")
        .includes(input.toLowerCase())
    );

    const filteredStatusList = items.filter((item) =>
      item.status.toLowerCase().includes(input.toLowerCase())
    );

    const result = Array.from(
      new Set([
        ...filteredNameList,
        ...filteredCategoryList,
        ...filteredStatusList,
      ])
    );

    setList(result);
  };

  return (
    <div>
      <SearchBar search={search} />
      <div className="view">
        <IconButton
          aria-label="vertical"
          color="primary"
          onClick={() => {
            setView(false);
          }}
        >
          <VerticalSplitIcon />
        </IconButton>
        <IconButton
          aria-label="horizontal"
          color="primary"
          onClick={() => {
            setView(true);
          }}
        >
          <HorizontalSplitIcon />
        </IconButton>
      </div>
      <div className={view ? "horizontalContainer" : "verticalContainer"}>
        {list.map((advisor) => (
          <Card
            className={view ? "horizontalCard" : "verticalCard"}
            key={advisor.sys.id}
          >
            <CardMedia
              component="img"
              height={view ? 140 : 200}
              image={advisor.avatarUrl ? advisor.avatarUrl.url : "/dummy.png"}
              alt={advisor.avatarUrl?.title}
              sx={{ maxWidth: view ? 350 : 140 }}
            />
            <CardContent sx={{ width: view ? 200 : "100%", height: "10em" }}>
              <Typography gutterBottom variant="h6" component="div">
                {advisor.displayName}
              </Typography>
              {advisor.categoriesCollection.items.map((category) => (
                <Typography>{category.displayName}</Typography>
              ))}
              <Typography className="status">{advisor.status}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
