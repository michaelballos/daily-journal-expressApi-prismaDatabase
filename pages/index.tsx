import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Productivity Journal</title>
        <meta name='description' content='A Personal Productivity App' />
      </Head>
    </div>
  )
}

export default Home
