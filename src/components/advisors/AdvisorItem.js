// Material UI
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function AdvisorItem(props) {
  const { image, displayName, email, phone } = props;

  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {displayName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {email}<br />
          Phone: {phone}
        </Typography>
      </CardContent>
    </Card>
  );
}
