// Material UI
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function AdvisorItem(props) {
  const { image, displayName, email, phone, online, categories } = props;

  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={image}
      />
      <CardContent>
        <Badge color={online ? "success" : "grey"} badgeContent=" " variant="dot">
          <Typography gutterBottom variant="h5" component="div">
            {displayName}
          </Typography>
        </Badge>

        <Typography variant="body2" color="text.secondary">
          {email && <>
            Email: {email}<br />
          </>}

          {phone && <>
            Phone: {phone}<br />
          </>}
        </Typography>

        {categories && <Stack direction="row" spacing={1} sx={{ mt: 1, display: 'block', }}>
          {categories.map((category, i) => (
            <Chip key={i} label={category.displayName} color="primary" variant="outlined" sx={{ mt: '8px !important', ml: '0 !important', mr: '8px !important', }} />
          ))}
        </Stack>}
      </CardContent>
    </Card >
  );
}
