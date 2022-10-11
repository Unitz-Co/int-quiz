import { Box, IconButton, Typography } from "@mui/material";
import Iconify from "../Iconify";

export default function Services({ services }) {
  return (
    <Box>
      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
        SERVICES
      </Typography>
      <Box>
        {services?.length > 0 ? (
          <>
            {services?.map((service) => (
              <IconButton key={service?.sys?.id}>
                <Iconify
                  sx={{ mx: 2 }}
                  icon={
                    service?.sys?.id === "LC3wZNJ0pMJUvzSy2HDan"
                      ? "bi:chat-right-text-fill"
                      : service?.sys?.id === "2LDhSuEGTTqz1pcLHxi4ks"
                      ? "carbon:phone-voice-filled"
                      : "bi:camera-video-fill"
                  }
                  color="#666666"
                  width={32}
                  height={32}
                />
              </IconButton>
            ))}
          </>
        ) : (
          <Typography variant="caption">No services available</Typography>
        )}
      </Box>
    </Box>
  );
}
