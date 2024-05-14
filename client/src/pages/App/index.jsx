import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { useGetEventsQuery } from '../../store/api';
import { Loader } from '../../components/Loader';
import { EventItem } from '../../components/EventItem';
import { SortingSelect } from '../../components/SortingSelect';
import { EventPagination } from '../../components/Pagination';
import { sxStyles } from './sxStyles';

export const App = () => {
  const defaultSortSettings = JSON.stringify({ sortBy: 'title', sortOrder: 'asc' });
  const [page, setPage] = useState(1);
  const [sortSettings, setSortSettings] = useState(defaultSortSettings);
  const navigate = useNavigate();
  const { data, error, isLoading, refetch } = useGetEventsQuery({ 
    sortSettings: JSON.parse(sortSettings),
    page,
  });

  useEffect(() => {
    refetch();
  }, [sortSettings, refetch]);

  useEffect(() => {
    if (error) {
      navigate('/error', { replace: true });
    }
  }, [error, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  const pageCount = data ? data.totalEvents / data.pageSize : 0;

  return (
    <Box component='section'>
      <Box sx={sxStyles.titleBox} >
        <Typography variant='h3'>Events</Typography>
        <SortingSelect value={sortSettings} onChange={setSortSettings} defaultValue={defaultSortSettings} />
      </Box>
      <Box sx={sxStyles.eventsBox}>
        {data?.events.map((event) => <EventItem key={event._id} {...event} />)}
      </Box>
      <EventPagination pageCount={pageCount} page={page} setPage={setPage} />
    </Box>
  );
};
