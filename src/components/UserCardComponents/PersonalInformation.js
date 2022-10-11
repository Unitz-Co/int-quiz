import { Box, Typography } from "@mui/material";
import Iconify from "../Iconify";

export default function PersonalInformation({ userInfo }) {
  const { displayName, phone, email, status } = userInfo;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ mr: 2 }} />
        <Typography sx={{ mx: 1 }} variant="subtitle1" fontWeight={700}>
          {displayName}
        </Typography>
        <Iconify
          icon={"akar-icons:circle-fill"}
          color={status ? "#58B44D" : "red"}
          width={16}
          height={16}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Iconify
          icon={"ant-design:phone-filled"}
          color="#666666"
          width={16}
          height={16}
        />
        <Typography variant="body2" sx={{ ml: 1, color: "text.secondary" }}>
          {phone || "Not available"}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Iconify
          icon={"clarity:email-solid"}
          color="#666666"
          width={16}
          height={16}
        />
        <Typography variant="body2" sx={{ ml: 1, color: "text.secondary" }}>
          {email || "Not available"}
        </Typography>
      </Box>
    </>
  );
}
