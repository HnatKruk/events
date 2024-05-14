import moment from 'moment';
import { Card, CardContent, Typography } from '@mui/material';
import { sxStyles } from './sxStyles';

export const ParticipantItem = ({ fullName, email, dateOfBirth, eventSource }) => {
  const years = moment().diff(dateOfBirth, 'years');

  return (
    <Card sx={sxStyles.participantItemCard}>
      <CardContent sx={sxStyles.participantItemCardContent}>
        <Typography variant='h6' sx={sxStyles.nameTypography}>Name: {fullName}</Typography>
        <Typography variant='h6' sx={sxStyles.emailTypography}>Email: {email}</Typography>
        <Typography variant='h6'>Age: {years}</Typography>
        <Typography variant='h6'>Source: {eventSource || ''}</Typography>
      </CardContent>
    </Card>
  );
};
