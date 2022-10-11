// @mui
import { useCallback, useMemo, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
// components
import UserCard from "../components/UserCard";
import ToolBar from "../components/ToolBar";
// mock
import { users } from "../_mock/_users";
// hooks
import useFilter from "../hooks/useFilter";

// ----------------------------------------------------------------------

export default function UserList() {
  const [filterString, setFilterString] = useState("");
  const [activityStatus, setActivityStatus] = useState("");

  const usersData = useMemo(() => {
    return users.data.advisorProfileCollection.items;
  }, []);

  const handleChangeFilterString = useCallback((searchString) => {
    setFilterString(searchString);
  }, []);

  const handleChangeActivityStatus = useCallback((event) => {
    setActivityStatus(event.target.value);
  }, []);

  const dataFilter = useFilter(filterString, usersData, activityStatus);
  const isNotFound =
    (!dataFilter.length && !!filterString) ||
    (!dataFilter.length && !!activityStatus);

  return (
    <Container sx={{ position: "relative" }}>
      <ToolBar
        onFilterString={handleChangeFilterString}
        activityStatus={activityStatus}
        onChangeActivityStatus={handleChangeActivityStatus}
      />

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {isNotFound ? (
          <Typography variant="h6">No results found!</Typography>
        ) : (
          dataFilter.map((user) => <UserCard key={user.sys.id} user={user} />)
        )}
      </Box>
    </Container>
  );
}
