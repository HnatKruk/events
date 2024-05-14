import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

export const SearchParticipants = ({ value, onChange }) => {
  const handleSearchSelectChange = (event) => {
    onChange((prevValue) => ({ ...prevValue, searchBy: event.target.value }));
  };

  const handleSearchInputChange = (event) => {
    onChange((prevValue) => ({ ...prevValue, searchValue: event.target.value }));
  };

  return (
    <Box sx={{ display: 'flex', my: 5 }}>
      <FormControl sx={{ width: 200 }}>
        <InputLabel id='searchSelect'>Search By</InputLabel>
        <Select
          labelId='searchSelect'
          value={value.searchBy}
          label='Search By'
          onChange={handleSearchSelectChange}
        >
          <MenuItem value='fullName'>Full Name</MenuItem>
          <MenuItem value='email'>Email</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label='Search'
        variant='outlined'
        value={value.searchValue}
        onChange={handleSearchInputChange}
      />
    </Box>
  );
};
