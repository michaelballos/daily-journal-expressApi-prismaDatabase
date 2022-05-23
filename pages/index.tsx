import FrontPage from '../components/FrontPage';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
}));

export default function Home() {
  const { classes } = useStyles();
  return (
    <div className={classes.pageContainer}>
      <FrontPage />
    </div>
  )
}

