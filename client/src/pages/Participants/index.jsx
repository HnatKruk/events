import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';
import { useGetEventQuery } from '../../store/api';
import { ParticipantItem } from '../../components/ParticipantItem';
import { SearchParticipants } from '../../components/SearchParticipants';
import { Loader } from '../../components/Loader';
import { sxStyles } from './sxStyles';

export const Participants = () => {
  const [searchSettings, setSearchSettings] = useState({ searchBy: 'fullName', searchValue: '' });
  let { eventId } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading, refetch } = useGetEventQuery({ eventId, searchSettings });

  useEffect(() => {
    refetch()
  }, [searchSettings, refetch])

  useEffect(() => {
    if (error) {
      navigate('/error', { replace: true });
    }
  }, [error, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box component='section'>
      <Button variant='outlined' onClick={() => navigate('/')} sx={{ mb: 3 }}>Back</Button>
      <Typography variant='h3'>'{data.title}' participants</Typography>
      <SearchParticipants value={searchSettings} onChange={setSearchSettings}/>
      <Box sx={sxStyles.participantsBox}>
        {data.participants.map((event) => <ParticipantItem key={event._id} {...event} />)}
      </Box>
    </Box>
  );
};
