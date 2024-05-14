import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

export const SortingSelect = ({ value, onChange, defaultValue }) => {

  return (
    <FormControl sx={{ width: 300 }}>
      <InputLabel id='sortingSelect'>Sort By</InputLabel>
      <Select
        labelId='sortingSelect'
        value={value}
        label='Sort by'
        onChange={(event) => onChange(event.target.value)}
        defaultValue={defaultValue}
      >
        <MenuItem value={defaultValue}>Title (ascending)</MenuItem>
        <MenuItem value={JSON.stringify({ sortBy: 'title', sortOrder: 'desc' })}>Title (descending)</MenuItem>
        <MenuItem value={JSON.stringify({ sortBy: 'organizer', sortOrder: 'asc' })}>Organizer (ascending)</MenuItem>
        <MenuItem value={JSON.stringify({ sortBy: 'organizer', sortOrder: 'desc' })}>Organizer (descending)</MenuItem>
        <MenuItem value={JSON.stringify({ sortBy: 'eventDate', sortOrder: 'asc' })}>Event Date (ascending)</MenuItem>
        <MenuItem value={JSON.stringify({ sortBy: 'eventDate', sortOrder: 'desc' })}>Event Date (descending)</MenuItem>
      </Select>
    </FormControl>
  );
};
