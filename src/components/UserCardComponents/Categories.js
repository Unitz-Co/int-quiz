import { Box, Typography } from "@mui/material";
import CategoryChip from "./CategoryChip";

export default function Categories({ categories }) {
  return (
    <Box sx={{ mt: 1 }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
        CATEGORIES
      </Typography>
      {categories?.items?.length > 0 ? (
        <>
          {categories?.items?.map((category, index) => (
            <CategoryChip
              key={index}
              alt={category?.avatarUrl?.title}
              src={category?.avatarUrl?.url}
              label={category?.displayName}
            />
          ))}
        </>
      ) : (
        <Typography variant="caption">No categories available</Typography>
      )}
    </Box>
  );
}
