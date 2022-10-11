import { Avatar, Chip } from "@mui/material";

export default function CategoryChip({ alt, src, label }) {
  if (src) {
    return (
      <Chip
        avatar={<Avatar alt={alt} src={src} />}
        sx={{ m: 0.5 }}
        label={label}
        size="small"
        color="secondary"
      />
    );
  } else {
    return (
      <Chip sx={{ m: 0.5 }} label={label} size="small" color="secondary" />
    );
  }
}
