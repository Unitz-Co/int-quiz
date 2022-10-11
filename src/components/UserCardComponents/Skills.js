import { Box, Typography } from "@mui/material";

export default function Skills({ skills }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          my: 1,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          maxWidth: 250,
        }}
      >
        {skills?.items?.length > 0
          ? "Skills: " +
            skills?.items?.map((skill) => skill?.displayName).join(", ")
          : "No skills available"}
      </Typography>
    </Box>
  );
}
