// @mui
import { Box, Card } from "@mui/material";
// components
import Image from "./Image";
import {
  Categories,
  PersonalInformation,
  Skills,
  Services,
} from "./UserCardComponents";

// ----------------------------------------------------------------------

export default function UserCard({ user }) {
  const {
    avatarUrl,
    categoriesCollection,
    skillsCollection,
    servicesCollection,
  } = user;

  const services = servicesCollection?.items.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <Card sx={{ textAlign: "center", borderRadius: 3 }}>
      <Image src={avatarUrl?.url} alt={avatarUrl?.title} ratio="16/9" />

      <Box sx={{ my: 1 }}>
        <PersonalInformation userInfo={user} />

        <Skills skills={skillsCollection} />

        <Services services={services} />

        <Categories categories={categoriesCollection} />
      </Box>
    </Card>
  );
}
