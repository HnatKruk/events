import { Pagination, Box } from '@mui/material';
import { sxStyles } from './sxStyles';

export const EventPagination = ({ pageCount, page, setPage }) => {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={sxStyles.paginationBox}>
      <Pagination
        count={pageCount}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    </Box>
  );
};
