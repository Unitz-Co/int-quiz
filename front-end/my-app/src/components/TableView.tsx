import { Label } from "@mui/icons-material";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import React, { FC, useState } from "react";
import { ItemInterface, StatusUser } from "../models/IData";
import BulkActions from "./BulkActions";

interface RecentOrdersTableProps {
  className?: string;
  users: ItemInterface[];
}

const TableView: FC<RecentOrdersTableProps> = ({ users }) => {
  const [selectedfoodInfos, setSelectedfoodInfos] = useState<string[]>([]);
  const selectedBulkActions = selectedfoodInfos.length > 0;
  const getStatusLabel = (OrderStatus: StatusUser): JSX.Element => {
    const map = {
      Online: {
        text: "Online",
        color: "success",
      },
      Offline: {
        text: "Offline",
        color: "error",
      },
    };
    const { text, color }: any = map[OrderStatus];
    return <Label color={color}>{text}</Label>;
  };
  const theme = useTheme();
  return (
    <Card>
      <Box flex={1} p={2}>
        <BulkActions />
      </Box>
      <CardHeader
        action={
          <Box width={150}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={10}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Online</MenuItem>
                <MenuItem value={20}>Offline</MenuItem>
              </Select>
            </FormControl>
          </Box>
        }
        title="Products"
      />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox color="primary" />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Skill</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Service</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              // const isfoodInfoSelected = selectedfoodInfos.includes(
              //   foodInfo.id
              // );
              return (
                <TableRow hover key={user.sys.id}>
                  <TableCell padding="checkbox">
                    {/* <Checkbox
                      color="primary"
                      checked={isfoodInfoSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOnefoodInfo(event, foodInfo.id)
                      }
                      value={isfoodInfoSelected}
                    /> */}
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {user.displayName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {user.phone}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      <Avatar
                        src={user.avatarUrl?.url || ""}
                        alt={`Avater_` + user.displayName}
                        variant="circular"
                      />
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {user.categoriesCollection.items.map((category) => {
                        return (
                          <Typography key={category.displayName}>
                            {category?.displayName}
                          </Typography>
                        );
                      })}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {user.skillsCollection.items.map((skill) => {
                        return <Typography>{skill?.displayName}</Typography>;
                      })}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {getStatusLabel(user?.status)}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Edit Order" arrow>
                      <IconButton
                        sx={{
                          "&:hover": {
                            background: "#f5f5f5",
                          },
                          color: "#000",
                        }}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete Order" onClick={(e) => {}} arrow>
                      <IconButton
                        sx={{
                          "&:hover": { background: "#f5f5f5" },
                          color: "#000",
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        {/* <TablePagination
          component="div"
          count={filteredfoodInfos.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        /> */}
      </Box>
    </Card>
  );
};

export default TableView;
