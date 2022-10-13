// Material UI
import Card from '@mui/material/Card';
import Badge from '@mui/material/Badge';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function AdvisorItem(props) {
  const { image, displayName, email, phone, online } = props;

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
          Email: {email}<br />
          Phone: {phone}
        </Typography>
      </CardContent>
    </Card >
  );
}
