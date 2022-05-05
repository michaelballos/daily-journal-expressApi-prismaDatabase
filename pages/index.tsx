import FrontPage from '../components/frontPage'
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

const Home = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.pageContainer}>
      <FrontPage />
    </div>
  )
}

export default Home
