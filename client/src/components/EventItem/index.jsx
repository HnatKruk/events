import { Link } from 'react-router-dom';
import moment from 'moment';
import { Card, CardActions, CardContent, Typography, Button } from '@mui/material';
import { sxStyles } from './sxStyles';

export const EventItem = ({ _id, title, description, organizer, eventDate }) => {
  const dateFormat = moment(eventDate).format('lll');

  return (
    <Card sx={sxStyles.eventItemCard}>
      <CardContent sx={{ pb: 0 }}>
        <Typography variant='h6' sx={sxStyles.titleTypography}>{title}</Typography>
        <Typography sx={sxStyles.organizerTypography}>{organizer}</Typography>
        <Typography sx={{ fontSize: 14 }}>{dateFormat}</Typography>
        <Typography sx={sxStyles.descriptionTypography}>{description}</Typography>
      </CardContent>
      <CardActions sx={sxStyles.cardActions}>
        <Link to={`${_id}/registration`}>
          <Button size='small'>Registration</Button>
        </Link>
        <Link to={`${_id}/participants`}>
          <Button size='small'>View</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
