import { CircularProgress } from '@mui/material';
import styles from './styles.module.scss';

export const Loader = () => (
  <div className={styles.loader}>
    <CircularProgress size={60} />
  </div>
);
