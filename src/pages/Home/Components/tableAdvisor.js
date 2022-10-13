import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export const TableAdvisor = (props) => {
  const { data, editStatus } = props;
  console.log("data", data);
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead className="headderAdvisorTable">
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Categorys</TableCell>
              <TableCell>Skills</TableCell>
              <TableCell>Services</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bodyAdvisorTable">
            {data.map((row, index) => (
              <TableRow key={`avisor-${index}`}>
                <TableCell>
                  <img
                    className="imageAdvisor"
                    src={
                      row.avatarUrl?.url ? row.avatarUrl.url : "/logo192.png"
                    }
                  />
                </TableCell>
                <TableCell>
                  {row.displayName ? row.displayName : "Null"}
                </TableCell>
                <TableCell>{row.email ? row.email : "Null"}</TableCell>
                <TableCell>{row.phone ? row.phone : "Null"}</TableCell>
                <TableCell>
                  {row.categoriesCollection.items
                    ? row.categoriesCollection.items.length > 0
                      ? row.categoriesCollection.items.map((cate, index) => (
                          <div key={`categories-${index}`}>
                            {cate.displayName}
                          </div>
                        ))
                      : "Null"
                    : "Null"}
                </TableCell>
                <TableCell>
                  {row.skillsCollection.items
                    ? row.skillsCollection.items.length > 0
                      ? row.skillsCollection.items.map((skil, index) => (
                          <div key={`skills-${index}`}>{skil.displayName}</div>
                        ))
                      : "Null"
                    : "Null"}
                </TableCell>
                <TableCell>
                  {row.servicesCollection.items
                    ? row.servicesCollection.items.length > 0
                      ? row.servicesCollection.items.map((skil, index) => (
                          <div key={`servicesCollection-${index}`}>
                            {skil.name}
                          </div>
                        ))
                      : "Null"
                    : "Null"}
                </TableCell>
                <TableCell
                  onClick={() => editStatus(row.sys.id)}
                  className="advisorStatus"
                >
                  {row.status ? (
                    <div className="onlineStatus">online</div>
                  ) : (
                    <div className="offlineStatus">offline</div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
